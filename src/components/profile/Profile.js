import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import {CgProfile} from "react-icons/cg";
import {IoLogOut} from "react-icons"
import {BsThreeDotsVertical} from "react-icons/bs"
import Button from '../button/Button';
import Text from '../text';
import { addDetectClick, removeDetectClick } from '../../utils/detect-click';
import { removeKey } from '../../services/storage';
import ApiServices from '../../services/ApiServices';

const StyledProfile = styled.div`
    .profile{
        display: flex;
        align-items: center;
        position: relative;
        cursor: pointer;
        z-index: 9;
        &__avatar{
            width: 46px;
            height: 46px;
            border-radius: 50%;
            background-color: #334D6E;
        }
        &__icon{
            margin-left: 9px;
            color: #000;
        }
        &__dropdown{
            position: absolute;
            padding: 5px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            background-color: #fff;
            border-radius: 15px;
            min-width: 170px;
            right: -15px;
            top: 60px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        }
        .btn{
            display: flex;
            align-items: center;
        }
    }
`;

const Profile = () => {
    const history = useHistory();
    const [open,setOpen] = useState(false);
    addDetectClick({setOpen,classes:['profile','profile__avatar','profile__icon']});
    useEffect(() => {
        return () => {
            if(open){
                removeDetectClick();
            }
        }
    }, [])
    const logOut = () => {
        removeKey('token');
        ApiServices.getMe({})
        // history.push('/')
    }
    return (
        <StyledProfile>
            <div className="profile" onClick={() => setOpen(prev  => !prev)} >
                <div className="profile__avatar"></div>
                <BsThreeDotsVertical className="profile__icon" size={"20px"}/>
                {open && <div className="profile__dropdown">
                    <Link to={'/profile'} className={"btn"} size={"13px"} blue><CgProfile/><Text margin={"0 0 0 20px"} size={"13px"} blue>Profilim</Text></Link>
                    <Button className={"btn"} size={"13px"} onClick={logOut} blue><CgProfile/><Text margin={"0 0 0 20px"} size={"13px"} blue>Chiqish</Text></Button>
                </div>}
            </div>
        </StyledProfile>
    )
}

export default Profile;
