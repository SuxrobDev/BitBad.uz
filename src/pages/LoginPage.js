import React,{useState} from 'react';
import {useParams,useHistory} from "react-router-dom";
import {has} from "lodash";
import { useForm } from "react-hook-form"
import className from "classnames"
import ApiServices from '../services/ApiServices';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Text from '../components/text';
import Loader from '../components/loader';
import { setKey } from '../services/storage';

const StyledLogin = styled.form`
    .title{
        font-size: 13px;
        font-weight: 5000;
    }
    .text{
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        margin: 5px 0 14px;
        padding-bottom: 18px;
        border-bottom: 2px dashed rgba(71,103,109,0.8);
    }
    .form{
        background-color: #BFCCDD;
        border-radius: 15px;
        padding: 34px 20px 23px 19px;
        margin-bottom: 14px;
        text-align: center;
    }
    .input{
        border: none;
        outline: none;
        margin-left: 5px;
        background-color: #F0F0F0;
        color: #929FAF;
        border-radius: 15px;
        width: 219px;
        height: 45px;
        padding: 14px 11px 13px;
        margin-bottom: 21px;
    }
`;


const LoginPage = () => {
    const {phone:phone_number} = useParams();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false);
    const login = ({code}) => {
        setLoading(true)
        ApiServices.login({phone_number:atob(phone_number),code}).then((res) => {
            if(res && res.data){
                setKey('token',res.data.token);
                setLoading(false)
                window.location.href='/dashboard'
            }
        }).catch((e) => {console.log(e); setLoading(false)})
    }
    return (
        <StyledLogin onSubmit={handleSubmit(login)}>
            <Loader loading={loading}/>
            <h6 className="title">Tizimga kirish</h6>
            <p className="text">Raqamizga yuborilgan kodni kiriting</p>
            <div className="form">
                <input {...register("code", { required: true })} className={className("input", {error:has(errors, "code")})} placeholder="****" type="password"/>
                <Button green small><Text color={"#fff"} weight={"600"} size={"10px"}>Yuborish</Text></Button>
            </div>
            <p>Ro’yxatdan o’tmaganmisiz? </p>
        </StyledLogin>
    )
}

export default LoginPage;
