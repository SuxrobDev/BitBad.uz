import React,{useState} from 'react';
import styled from 'styled-components';
import {RiArrowDropDownLine} from "react-icons/ri"
import {RiArrowDropUpLine} from "react-icons/ri"
import Title from '../components/title';
import Text from '../components/text';

const StyledFAQPage = styled.div`
min-height: 100vh;
    .drop{
        background-color: #fff;
        border-radius: 15px;
        padding: 35px 30px 10px 40px;
        cursor: pointer;
        font-size: 30px;
        &__content{
            display: ${({changeDrop}) => changeDrop ? "inline-block" : "none"};
        }
    }
`;

const FAQPage = () => {
    const [changeDrop,setChandeDrop] = useState(false);
    const handleChange = (changeDrop) => {
        setChandeDrop((changeDrop) => !changeDrop)
    }
    return (
        <StyledFAQPage changeDrop={changeDrop} >
            <div className="row justify-content-between p-4">
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>
                <div className="col-5 drop mb-3 " onClick={handleChange}><div className="d-flex justify-content-between mb-4"><Title size={"18px"}>Lorem Ipsum</Title>{ changeDrop ? <RiArrowDropUpLine/> : <RiArrowDropDownLine/>}</div>
                    <Text color={"#334D6E"} className="drop__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna ex, auctor a ligula sit amet, semper rutrum arcu. Curabitur a ipsum non dui hendrerit varius. </Text>
                </div>

            </div>
        </StyledFAQPage>
    )
}

export default FAQPage
