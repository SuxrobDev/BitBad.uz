import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Text from '../components/text';
import Title from '../components/title';
import ApiServices from '../services/ApiServices';
import Button from "../components/button"

const StyledProfilePage = styled.div`
    min-height: 100vh;
    .profile_info{
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
    }
    .content{
        width: 90%;
        background-color: #F0F0F0;
        border-radius: 15px;
    }
    .card{
        border-radius: 15px;
        box-shadow: 0 4px 4px rgb(0 0 0 / 25%); 
        
    }
`;

const ProfilePage = () => {
    const [profile,setProfile] = useState({data:[] , isFetched:false})
    useEffect(() => {
        if(profile.isFetched == false){
            ApiServices.getMe({}).then((res) => {
                if(res && res.data){
                    setProfile((profile) => ({data:res.data,isFetched:true}))
                }
            }).catch((e) => {console.log(e); setProfile((profile) => ({data:{},isFetched:true}))} )
        }
    })
    const {data:{balance,full_name,phone_number,card_number}} = profile;
    return (
        <StyledProfilePage className="p-4">
            <div className="row">
                <div className="col p-5 profile_info mr-5">
                    <Title color={"#334D6E"} size={"20px"} weight={"600"} className="mb-4">Aloqa uchun malumotlar</Title>
                    <Text color={"#334D6E"} >Ismingiz</Text>
                    <div className="content p-3 mt-2 mb-4"><Title size={"18px"} color={"#595959"}>{full_name}</Title></div>
                    <Text color={"#334D6E"} >Telefon raqamingizni kiriting</Text>
                    <div className="content p-3 mt-2 mb-4"><Title size={"18px"} color={"#595959"}>+998{phone_number}</Title></div>
                    <Button medium green size={"18px"}>O'zgartirish</Button>
                </div>
                <div className="col p-4  card">
                <Title color={"#334D6E"} size={"20px"} weight={"600"} className="mb-4">Hisob raqami</Title>
                <Text color={"#334D6E"} >Karta raqamingiz</Text>
                <Title size={"18px"} color={"#595959"} className="mt-4 mb-5">{card_number ? card_number : "**** **** **** ****"}</Title>
                <Button medium green size={"18px"}>Karta qo'shish</Button>
                </div>
            </div>
        </StyledProfilePage>
    )
}

export default ProfilePage
