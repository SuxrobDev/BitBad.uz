import React,{useState} from 'react';
import {useParams,useHistory} from "react-router-dom" ;
import {has} from "lodash";
import { useForm } from "react-hook-form";
import className from "classnames";
import ApiServices from '../services/ApiServices';
import styled from 'styled-components';
import Button from '../components/button/Button';
import Text from '../components/text';
import Loader from '../components/loader';

const StyledSignUp = styled.form`
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
    .input__div{
        display: flex;
        align-items: center;
        color: #929FAF;
        border-radius: 15px;
        background-color: #F0F0F0;
        width: 219px;
        height: 45px;
        padding: 14px 11px 13px;
        cursor: pointer;
        margin-bottom: 21px;
    }
    .input{
        border: none;
        margin-left: 5px;
        background-color: #F0F0F0;
    }
    .input2{
        border: none;
        border-radius: 15px;
        width: 219px;
        height: 45px;
        padding: 14px 11px 13px;
        margin-bottom: 21px;
        color: #929FAF;
        background-color: #F0F0F0;
    }
`;

const SignUpPage = () => {
    const history = useHistory();
    let {phone} = useParams();
    phone = atob(phone);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading,setLoading] = useState(false);
    const signUp = (data) => {
        setLoading(true)
        data = {...data,phone_number:phone}
        ApiServices.signUp(data).then((res) => {
            if(res && res.data){
                setLoading(false)
                history.push(`/auth/login`)
            }
        }).catch((e) => {console.log(e); setLoading(false)})
    }
    return (
        <StyledSignUp  onSubmit={handleSubmit(signUp)}>
            <Loader loading={loading}/>
            <h6 className="title">Ro’yxatdan o’tish</h6>
            <p className="text">Ismingizni va telefon raqamingizni kiriting</p>
            <div className="form">
                <input {...register("full_name", { required: true })} className={className("input2", {error:has(errors, "full_name")})} placeholder="Ism" type="text"/>
                <div className="input__div"><span>+998</span><input value={phone} disabled={true} {...register("phone_number", { required: true })} className={className("input", {error:has(errors, "phone_number")})} placeholder="** *** ** **" type="number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/></div>
                <Button green small><Text color={"#fff"} weight={"600"} size={"10px"}>Yuborish</Text></Button>
            </div>
            <p>Ro’yxatdan o’tmaganmisiz? </p>
        </StyledSignUp>
    )
}

export default SignUpPage;
