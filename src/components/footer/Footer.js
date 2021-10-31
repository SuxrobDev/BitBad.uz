import React from "react";
import styled from "styled-components";
import {Row} from "../grid"
import Text from '../text';
import {RiPhoneFill} from "react-icons/ri";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaTelegramPlane} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {VscGithub} from "react-icons/vsc";
import {SiTiktok} from "react-icons/si";
import Button from '../button/Button';
import {Col} from "../grid";
import SvgIcon from "../SvgIcon";
import phone from "../../assets/img/phone.svg";
import location from "../../assets/img/location.svg";
import telegram from "../../assets/img/telegram.svg";
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import {Link} from "react-router-dom";
import {MdEmail} from "react-icons/md"
import {IoLocation} from "react-icons/io5"
import {ImPhone} from "react-icons/im"

const FooterStyled = styled.div`
  background: #006400;
  padding: 42px 75px 35px 76px;
  color: #FFFFFF;
  .footer {
    &__contact {
      a {
        display: flex;
        align-items: center;
        color: #FFFFFF;
        text-decoration: none;
        margin-bottom: 7px;
        font-size: 16px;
        svg {
          font-size: 20px;
          font-weight: 500;
          margin-right: 15px;
        }
      }
    }
    &__social {
      display: flex;
      justify-content: flex-end;
      a {
        background: #FFFFFF;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
        color: #006400;
        svg {
          width: 20px;
          height: 20px;
        }
        &:nth-child(3) {
          div {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    &__copyright {
      margin-top: 35px;
      p {
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.01em;
        color: #E2DEDE;
        font-weight: normal;
        a {
          color: #FFFFFF;
          text-decoration: none;
        }
      }
    }
  }
  @media (max-width: 767px) {
    .footer {
      &__social {
        justify-content: center;
        display: flex;
      }
      &__contact {
        margin-bottom: 15px;
        font-size: 12px;
      }
      &__copyright {
        flex-direction: column;
      }
    }
  }
  @media (max-width: 474px) {
    padding: 35px;
    .footer {
      &__copyright {
        text-align: center;
      }
    }
  }
  @media (max-width: 372px) {
    .footer {
      &__contact {
        flex-direction: column;
        align-items: center;
        
      }
    }
  }
`;

const Footer = () => {
    return (
        /*<StyledFooter>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Row column align={"start"}>
                            <Button><Text color={"#fff"}><RiPhoneFill className="mr-3"/>Telefon raqam</Text></Button>
                            <Button><Text color={"#fff"}><FaMapMarkerAlt className="mr-3"/>Adress</Text></Button>
                            <span className="mt-4" style={{color: "#E2DEDE"}}>© 2021 Medical Plants: Barcha huquqlar himoylangan</span>
                        </Row>
                    </div>
                    <div className="col-4 offset-4 mt-3">
                    <Row column align={"flex-end"}>
                        <Row>
                            <Button className="ml-3" background={"#fff"} radius={"50%"} color={"#006400"}><FaTelegramPlane/></Button>
                            <Button className="ml-3" background={"#fff"} radius={"50%"} color={"#006400"}><FaFacebookF/></Button>
                            <Button className="ml-3" background={"#fff"} radius={"50%"} color={"#006400"}><AiFillInstagram/></Button>
                        </Row>
                        <span className="mt-5" style={{color: "#E2DEDE"}}>Sayt GREATSOFT kompaniyasi tomonidan ishlab chiqildi</span>
                    </Row>
                    </div>
                </div>
            </div>
        </StyledFooter>*/
        <FooterStyled className="footer">
            <Row row>
                <Col sm={12} md={6} >
                    <div className="footer__contact">
                        <Link target="_blank" rel="noreferrer">
                            <ImPhone/>
                            +998 99 120-12-18
                        </Link>
                        <Link target="_blank" rel="noreferrer">
                            <IoLocation />
                            Toshkent sh., Shayhontoxur t., Matlubot-3, 5-uy.
                        </Link>
                        <Link target="_blank" rel="noreferrer">
                            <MdEmail/>
                            suxrobdev@gmail.com
                        </Link>
                    </div>
                </Col>
                <Col sm={12} md={6} >
                    <div className="footer__social">
                        <Link target="_blank" rel="noreferrer">
                            <VscGithub/>
                        </Link>
                        <Link target="_blank" rel="noreferrer">
                            <FaTelegramPlane />
                        </Link>
                        <Link target="_blank" rel="noreferrer">
                            <SiTiktok />
                        </Link>
                        <Link target="_blank" rel="noreferrer">
                            <AiFillInstagram/>
                        </Link>

                    </div>
                </Col>
            </Row>
            <Row className="footer__copyright" justify="space-between">
                <p>&copy; 2021 Suxrobdev: Barcha huquqlar himoylangan</p>
                <p>Sayt <Link to={"https://github.com/SuxrobDev"} target="_blank">SuxrobDev</Link> tomonidan ishlab chiqildi</p>
            </Row>
        </FooterStyled>
    )
}

export default Footer;
