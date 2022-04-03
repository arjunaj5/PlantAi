import React, { useEffect } from "react";
import { useState } from "react";
import { Text } from "react-native";
import DefaultView from "../../Layouts/DefaultView";
import DefaultModal from "../../Layouts/DefaultModal"
import HistoryTablet from "../../Components/DashboardMenu/HistoryTablet"
import ReportsTablet from "../../Components/DashboardMenu/ReportsTablet";


import DashboardMenu from "../../Components/DashboardMenu";
import { API_ROOT } from "../../apiroot";
import NotCuredReport from "../ModalScreens/NotCuredReport";
import { getDetectionHistory, getReports, getRepliedReport } from "./helper";
import ReportReply from "../ModalScreens/ReportReply";


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



const UserDashboard = ({navigation, route}) => {
  const userDetails = route.params
  const [menu, setMenu] = useState('History')
  const [history, setHistory] = useState([])
  const [reports, setReports] = useState([])

  const [emptyHistory, setEmptyHistory] = useState(false);
  const [emptyReports, setEmptyReports] = useState(false);
  const [reportModalVisible, setReportModalVisible] = useState(false);
  const [reportResultVisible, setReportResultVisible] = useState(false)

  const [selectedtHistoryData, setSelectedHistoryData] = useState({})
  const [fetchedHistoryData, setFetchedHistoryData] = useState({})
  const [reportSend, setReportSend] = useState(true)

  const [selectedReport, setSelectedReport] = useState({})
  const [fetchedReportReply, setFetchedReportReply] = useState({})
  const [isReportReplyLoading, setIsReportReplyLoading] = useState(true)

  const hideReportModal = () => setReportModalVisible(false);
  const showReportModal = () => setReportModalVisible(true);

  const hideReportResultModal = () => setReportResultVisible(false);
  const showReportResultModal = () => setReportResultVisible(true);
  const userId = userDetails.user.id;

  //To get history about all detections and reports
  useEffect( () => {
    reportSend &&
    getDetectionHistory(userId).then( result => {
      if(result.length === 0){
        setEmptyHistory(true)
      }
      else {
        setHistory(result)
      }
    })
  }, [reportSend] )

  useEffect( () => {
    reportSend == true &&
    getReports(userId).then(result => {
      if(result.length === 0){
        setEmptyReports(true)
      }
      else {
        setReports(result)
      }
    })
  }, [reportSend])
  
  // To get other details about the detection history from db
  useEffect( () => {
    if(Object.keys(selectedtHistoryData).length !== 0){
      const diseaseId = selectedtHistoryData.disease;
      findDetailsByDiseaseId(diseaseId).then((result)=> {
        setFetchedHistoryData(result)
      })
    }
  }, [selectedtHistoryData] )

  // to get individual report replies
  useEffect( ()=> {
    if(selectedReport.status === 'replied'){
      setIsReportReplyLoading(true)
      getRepliedReport(selectedReport.id).then((result) => {
        setFetchedReportReply(result)
        setIsReportReplyLoading(false)
      })
    }
  }, [selectedReport])


  let toShow;
  if(menu === 'History') {
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
    toShow = emptyReports ? <Text> No Reports Submitted yet</Text> : 
    (
      <>{
      reports.map((report, index) => {
        return(
          <ReportsTablet 
            report={report}
            showReportResultModal={showReportResultModal}
            setSelectedReport={setSelectedReport}
            key={index}
            />
        )
        })
    }</>
    )
  }
  const tabs = {
    tab1: 'History',
    tab2: 'Reports'
  }
  return (
    <DefaultView navigation={navigation} userDetails={userDetails}>
          <DashboardMenu
            toShow={toShow}
            setMenu={setMenu}
            menu={menu}
            tabs={tabs}
          />
          <DefaultModal
            modalVisible={reportModalVisible}
            hideModal={hideReportModal}
          >
{/* // Modal for report by user */}
            <NotCuredReport 
              selectedtHistoryData={selectedtHistoryData}
              fetchedHistoryData={fetchedHistoryData}
              hideModal={hideReportModal}
              setReportSend={setReportSend}
            />
          </DefaultModal>

{/* // Modal to view report reply */}
          <DefaultModal
            modalVisible={reportResultVisible}
            hideModal={hideReportResultModal}
          >
            <ReportReply
              loading = {isReportReplyLoading}
              selectedReport={selectedReport} 
              fetchedReportReply={fetchedReportReply}
              hideModal={hideReportResultModal}
            />

          </DefaultModal>
    </DefaultView>
  )
}

export default UserDashboard;