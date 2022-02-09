import React, { useEffect } from "react";
import { useState } from "react";
import { Text } from "react-native";
import DefaultView from "../../Layouts/DefaultView";
import DefaultModal from "../../Layouts/DefaultModal"
import HistoryTablet from "../../Components/DashboardMenu/HistoryTablet"
import ReportsTablet from "../../Components/DashboardMenu/ReportsTablet";


import DashboardMenu from "../../Components/DashboardMenu";
import { API_ROOT } from "../../apiroot";
import NotDetectedReport from "../ModalScreens/NotDetectedReport";
import NotCuredReport from "../ModalScreens/NotCuredReport";

const findDetailsByDiseaseId = async (diseaseId) => {
const result = await fetch( API_ROOT + '/detection-details-by-disease-id/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({disease_id: diseaseId})
})
return await result.json()

}

const getDetectionHistory = async (id) => {
  const body = {
    id
  }
  const response = await fetch( API_ROOT + '/user-history/' ,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  return await response.json();
}

const UserDashboard = ({navigation, route}) => {
  const userDetails = route.params
  const [menu, setMenu] = useState('history')
  const [history, setHistory] = useState([])
  const [emptyHistory, setEmptyHistory] = useState(false)
  const [reportModalVisible, setReportModalVisible] = useState(false);

  const [selectedtHistoryData, setSelectedHistoryData] = useState({})
  const [fetchedHistoryData, setFetchedHistoryData] = useState({})

  const hideReportModal = () => setReportModalVisible(false);
  const showReportModal = () => setReportModalVisible(true);
  

  useEffect( () => {
    const userId = userDetails.user.id
    // const userId = 2
    getDetectionHistory(userId).then( result => {
      if(result.length === 0){
        setEmptyHistory(true)
      }
      else {
        setHistory(result)
      }
    })
  }, [] )
  
  // To get other details about the detection history from db
  useEffect( () => {
    if(Object.keys(selectedtHistoryData).length !== 0){
      const diseaseId = selectedtHistoryData.disease;
      findDetailsByDiseaseId(diseaseId).then((result)=> {
        setFetchedHistoryData(result)
      })
    }
  }, [selectedtHistoryData] )

  let toShow;
  if(menu === 'history') {
    toShow =  emptyHistory ? <Text> No History To Show </Text>  : ( <>
      {
        history.map((element, index) => {
          return (
          <HistoryTablet
            history={element}
            key={index}
            showReportModal={ showReportModal }
            setSelectedHistoryData={setSelectedHistoryData}
          />
          )
        })
      }
    </>
  );
  }
  else {
    toShow = (
      <>
      <ReportsTablet/>
      <ReportsTablet/>
      <ReportsTablet/>
      </>
    )
  }

  return (
    <DefaultView navigation={navigation} userDetails={userDetails}>
          <DashboardMenu
            toShow={toShow}
            setMenu={setMenu}
            menu={menu}
          />
          <DefaultModal
            modalVisible={reportModalVisible}
            hideModal={hideReportModal}
          >
            <NotCuredReport selectedtHistoryData={selectedtHistoryData} fetchedHistoryData={fetchedHistoryData} />
          </DefaultModal>
    </DefaultView>
  )
}

export default UserDashboard;