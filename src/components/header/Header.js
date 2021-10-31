import React, {useState ,useEffect} from 'react';
import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
import Logo from "../../assets/img/logo.png";
import {BiHome} from "react-icons/bi"
import Button from '../button/Button';
import {BsQuestionCircle} from "react-icons/bs"
import {BiSearchAlt2} from "react-icons/bi";
import {CgArrowRightR} from "react-icons/cg";
import {CgCreditCard} from "react-icons/cg";
import {AiOutlineShop} from "react-icons/ai";
import {ImStatsBars} from "react-icons/im";
import {FaTimes , FaBars} from "react-icons/fa"
import Text from '../text';
import Profile from '../profile/Profile';

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-radius: 15px;
  padding: 13px 16px 11px 10px;
  margin-bottom: 16px;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);

  .menu {
    margin: 0 10%;
    display: flex;
    @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: ${({click}) => (click ? 0 : "-100%")};
      opacity: 1;
      transition: all 0.5s ease;
      background-color: #fff;
    }
    @media screen and (max-width: 1370px) {
      margin: 0 5%;
    }
    @media screen and (max-width: 1230px) {
      margin: 0;
    }
    @media screen and (max-width: 991px) {
      dislay: none;
    }
    .btl {
      margin-right: 30px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #334d6e;
      @media screen and (max-width: 1120px) {
        margin-right: 10px;
      }
      svg {
        font-size: 22px;
      }
    }
  }
  .active, .active p {
    color: #006400;
    svg {
      color: #006400;
    }
  }

  .profile {
    justify-content: flex-end;
  }
  
`;
const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Header = () => {
    const [click , setClick ] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    }, [])
    window.addEventListener('resize' , showButton);
    return (
        <StyledHeader className="row d-flex align-items-center">
            <Link to={'/dashboard'} onClick={closeMobileMenu}><img src={Logo} alt="Logo" style={{width: "192px", height: "38px"}}/></Link>
            <MobileIcon onClick={handleClick} click={click}>
                {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <div className="menu">
                <NavLink to={'/dashboard'} className="btl" size={"20px"} weight={"700"} blue><BiHome/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>Asosiy</Text></NavLink>
                <NavLink to={'/products'} className="btl" size={"20px"} weight={"700"} blue><AiOutlineShop/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>Mahsulotlar</Text></NavLink>
                <NavLink to={'/oqimlar'} className="btl" size={"20px"} weight={"700"} blue><CgArrowRightR/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>Oqimlar</Text></NavLink>
                <NavLink to={'/statistics'} className="btl" size={"20px"} weight={"700"} blue><ImStatsBars/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>Statistika</Text></NavLink>
                <NavLink to={'/dashboard'} className="btl" size={"20px"} weight={"700"} blue><CgCreditCard/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>To’lov</Text></NavLink>
                <NavLink to={'/faq'} className="btl" size={"20px"} weight={"700"} blue><BsQuestionCircle/><Text
                    margin={"0 0 0 6px"} size={"16px"} weight={"700"} blue>FAQ</Text></NavLink>
                <div className="profile">
                    <Profile/>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;
