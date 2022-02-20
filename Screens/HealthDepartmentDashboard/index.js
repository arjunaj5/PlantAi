import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getReports } from "./helper";

// Layouts
import DefaultView from "../../Layouts/DefaultView";
import DefaultModal from "../../Layouts/DefaultModal";
import DashboardMenu from "../../Components/DashboardMenu";

// Components
import ActiveTablet from '../../Components/DashboardMenu/AdminDashboard/ActiveTablet'

const HealthDepartmentDashboard = () => {
  const [menu, setMenu] = useState('Active')
  const [reports, setReports] = useState([])
  const [selectedReport, setSelectedReport] = useState({})
  
  const [adminModalVisible, setAdminModalVisible] = useState(false);
  const hideAdminModal = () => setAdminModalVisible(false);
  const showAdminModal = () => setAdminModalVisible(true);

  // get all reports in submitted(active) and replied (completed) state 
  useEffect(()=> {
    getReports().then((response) => {
      console.log(response)
      setReports(response)
    })
  }, [])
  const activeReports = reports.filter(report => {
    return report.status == 'Submitted'
  })
  const completedReports = reports.filter(report => {
    return report.status != 'Submitted'
  })

  const toShow = menu == 'Active' ? (
    activeReports.length == 0 ? <Text>No Active Reports</Text> :
    activeReports.map((report, index) => {
      return (
        <ActiveTablet
          report={report}
          setSelectedReport={setSelectedReport}
          key={index}
          showAdminModal={showAdminModal}
        />
      )
    })
  ) : 
    (
    completedReports.length == 0 ? <Text>No Reports Completed</Text> :
    completedReports.map((report, index) => {
      return (
        <ActiveTablet
          report={report}
          key={index}
        />
      )
    })
  )
  const tabs = {
    tab1: 'Active',
    tab2: 'Completed'
  }

  return (
    <DefaultView>
      <DashboardMenu menu={menu} setMenu={setMenu} toShow={toShow} tabs={tabs} />
      <DefaultModal
        modalVisible={adminModalVisible}
        hideModal={hideAdminModal}
      >

      </DefaultModal>

    </DefaultView>
  )
}

export default HealthDepartmentDashboard;