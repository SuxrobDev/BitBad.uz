import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import {BsArrowUpDown} from "react-icons/bs"
import {FaArrowRight} from "react-icons/fa"
import {FaArrowLeft} from "react-icons/fa"
import Title from ".././components/title"
import Button from '../components/button/Button';
import BarChartComponent from '../components/chart/Barchart';
import ApiServices from '../services/ApiServices';
import {Row} from "../components/grid";

const StyledDashboardPage = styled.div`
    background-color: #99CF67;
  position: relative;
    .chart{
        background-color: #fff;
        max-height: 430px;
        border-radius: 15px;
        max-width: 65%;
    }
    .balance{
        background-color: #fff;
        border-radius: 15px;
        max-width: 35%;
        max-height: 430px;
    }
    .balance_history{
        background-color: #fff;
        border-radius: 15px;
    }
    .balance_content{
        border-bottom: 2px dashed #334D6E;
        border-top: 2px dashed #334D6E;
      .bordered {
        opacity: .8;
        border-bottom: 1px dashed rgba(51,77,110,.5);
        width: 60%;
        height: 1px;
      }
    }
    .balance_history_btn{
        padding-top: 38px;
        border-top: 1px solid rgba(51, 77, 110, 0.5);
    }
    .balance_history_content{
        border-bottom: 1px solid rgba(51, 77, 110, 0.5);
        border-top: 1px solid rgba(51, 77, 110, 0.5);
    }
`;

const DashboardPage = (props) => {
    const [statistics,setStatistics] = useState({data:[] , isFetched:false})
    const [profile,setProfile] = useState({data:[] , isFetched:false})
    useEffect(() => {
        if(statistics.isFetched == false){
            ApiServices.getStatistics().then((res) => {
                if(res && res.data){
                    setStatistics((statistics) => ({...statistics,data:res.data,isFetched:true}))
                }
            }).catch((e) => {console.log(e); setStatistics((statistics) => ({...statistics,data:{},isFetched:true}))} )
        }
        if(profile.isFetched == false){
            ApiServices.getMe({}).then((res) => {
                if(res && res.data){
                    setProfile((profile) => ({data:res.data,isFetched:true}))
                }
            }).catch((e) => {console.log(e); setProfile((profile) => ({data:{},isFetched:true}))} )
        }
    })
    const {data:{balance}} = profile;
    const {data = [],isFetched = false} = statistics;
    return (
        <StyledDashboardPage className="container-fluid">
            <div className="row d-flex justify-content-between">
                <div className="chart col-lg-8 p-5">
                    <Row><Title className="mb-2" color={"#334D6E"} size={"18px"} weight={"700"}>Statistika</Title></Row>
                    {isFetched ? <BarChartComponent data={data}/> : "Loading..."}
                </div>
                <div className="balance col-lg-4 p-4">
                    <div className="d-flex justify-content-between mb-4">
                        <Title color={"#334D6E"} size={"18px"} weight={"700"}>Hisobingiz</Title>
                        <Title  size={"22px"} weight={"500"}>{balance} so’m</Title>
                    </div>
                    <div className="balance_content py-5">
                        <div className="d-flex align-items-center justify-content-between mb-5">
                            <Title color={"#334D6E"} size={"18px"} weight={"600"}>Buyurtma</Title>
                            <div className="bordered"></div>
                            <Title color={"rgba(51, 77, 110, 0.7)"} size={"16px"} weight={"500"}>0 dona</Title>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <Title color={"#334D6E"} size={"18px"} weight={"600"}>So’rov</Title>
                            <div className="bordered"></div>
                            <Title color={"rgba(51, 77, 110, 0.7)"} size={"16px"} weight={"500"}>0 dona</Title>
                        </div>
                    </div>
                    <div className=" d-flex display-sm-block justify-content-around mt-5">
                        <Button green weight={"600"} medium>Pul ishlash</Button>
                        <Button pink weight={"600"} medium>Pul yechish</Button>
                    </div>
                </div>
            </div>
            <div className="balance_history col-12 p-5 my-4 mb-5">
                <Row justofy={'start'} column>
                    <Title color={"#334D6E"} size={"18px"} weight={"700"}>Balans tarixi</Title>
                    <Title color={"#334D6E"} size={"18px"} weight={"600"}>Qator soni:</Title>
                </Row>
                {/*<Title color={"#334D6E"} size={"18px"} weight={"700"}>Balans tarixi</Title>
                <Title margin={"28px 14px 15px 0"} color={"#334D6E"} size={"18px"} weight={"600"}>Qator soni:</Title>*/}
                <div className="balance_history_content pr-5 p-2 mb-5 d-flex  justify-content-between">
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>SANA</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}><BsArrowUpDown/>HISOB RAQAM</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}><BsArrowUpDown/>SUMMA</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>HOLAT</Title>
                </div>
                <div className="balance_history_content pr-5 p-2 d-flex mb-5 justify-content-between">
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>Sana</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>Hisob raqam</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>Summa</Title>
                    <Title  color={"#006400"} size={"18px"} weight={"600"}>Holat</Title>
                </div>
                <div className="balance_history_btn d-flex  justify-content-center">
                    <Button margin={"0 30px 0 0"} green radius={"50%"} ><FaArrowLeft/></Button>
                    <Button green radius={"50%"} ><FaArrowRight/></Button>
                </div>
            </div>
        </StyledDashboardPage>
    )
}

export default DashboardPage;
