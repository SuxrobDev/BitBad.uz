import React, {useState} from 'react';
import {withRouter} from "react-router-dom"
import {useForm} from "react-hook-form"
import {has} from 'lodash';
import className from "classnames"
import styled from 'styled-components';
import Loader from '../components/loader';
import Button from '../components/button/Button';
import Text from '../components/text';
import ApiServices from '../services/ApiServices';

const StyledLoginOrSignUp = styled.form`
  .title {
    font-size: 13px;
    font-weight: 5000;
  }

  .text {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    margin: 5px 0 14px;
    padding-bottom: 18px;
    border-bottom: 2px dashed rgba(71, 103, 109, 0.8);
  }

  .form {
    background-color: #BFCCDD;
    border-radius: 15px;
    padding: 34px 20px 23px 19px;
    margin-bottom: 14px;
    text-align: center;
  }

  .input__div {
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

  .input {
    border: none;
    margin-left: 5px;
    background-color: #F0F0F0;
    outline: none;

    ::placeholder {
      color: #929FAF;
      font-size: 12px;
    }
  }

  .error {
    border: 2px solid red;
  }
`;

const LoginOrSignUp = ({history}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loading, setLoading] = useState(false);
    const submitHandle = ({phone_number}) => {
        setLoading(true)
        const to_register = false;
        ApiServices.loginOrSignUp({phone_number, to_register}).then((res) => {
            if (res && res.data) {
                const {registered} = res.data;
                setLoading(false)
                if (registered) {
                    history.push(`/auth/login/${btoa(phone_number)}`)
                } else {
                    history.push(`/auth/signup/${btoa(phone_number)}`)
                }
            }
        }).catch((e) => {
            console.log(e);
            setLoading(false);
        })
    }
    return (
        <StyledLoginOrSignUp onSubmit={handleSubmit(submitHandle)}>
            <Loader loading={loading}/>
            <h6 className="title">Tizimga kirish</h6>
            <p className="text">Telefon raqamingizni kiriting</p>
            <div className="form">
                <div className={className("input__div", {error: has(errors, "phone_number")})}>
                    <span>+998</span><input {...register("phone_number", {required: true})} className="input"
                                            placeholder={"** *** ** **"} type="text"
                                            pattern="[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"/></div>
                <Button green small><Text color={"#fff"} weight={"600"} size={"10px"}>Yuborish</Text></Button>
            </div>
            <p>Ro’yxatdan o’tmaganmisiz? </p>
        </StyledLoginOrSignUp>
    )
}

export default withRouter(LoginOrSignUp);
