import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { getReports } from "./helper";

// Layouts
import DefaultView from "../../Layouts/DefaultView";
import DefaultModal from "../../Layouts/DefaultModal";
import DashboardMenu from "../../Components/DashboardMenu";

// Components
import ActiveTablet from '../../Components/DashboardMenu/AdminDashboard/ActiveTablet'
import HealthDepartmentModal from "../ModalScreens/HealthDepartmentModal";

const HealthDepartmentDashboard = ({navigation, route}) => {
  const [menu, setMenu] = useState('Active')
  const [reports, setReports] = useState([])
  const [selectedReport, setSelectedReport] = useState({})
  const [submitted, setSubmitted] = useState(true)
  
  const [adminModalVisible, setAdminModalVisible] = useState(false);
  const hideAdminModal = () => setAdminModalVisible(false);
  const showAdminModal = () => setAdminModalVisible(true);

  // get all reports in submitted(active) and replied (completed) state 
  useEffect(()=> {
    submitted &&
    getReports().then((response) => {
      setReports(response)
    })
  }, [submitted])
  const activeReports = reports.filter(report => {
    return report.status == 'submitted'
  })
  const completedReports = reports.filter(report => {
    return report.status != 'submitted'
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
  const userDetails = route.params.userDetails
  // const userDetails = {
  //   user: {
  //     username: "AdminHealth"
  //   }
  // }
  return (
    <DefaultView navigation={navigation} userDetails={userDetails}>
      <DashboardMenu menu={menu} setMenu={setMenu} toShow={toShow} tabs={tabs} />
      <DefaultModal
        modalVisible={adminModalVisible}
        hideModal={hideAdminModal}
      >
        <HealthDepartmentModal selectedReport={selectedReport} hideModal={hideAdminModal} setSubmitted={setSubmitted} />
      </DefaultModal>

    </DefaultView>
  )
}

export default HealthDepartmentDashboard;