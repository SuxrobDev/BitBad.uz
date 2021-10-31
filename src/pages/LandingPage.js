import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import BannerImg from "../assets/img/banner.png"
import Row from '../components/grid/Row';
import Text from '../components/text';
import Logo from "../assets/img/logo.png"
import Button from '../components/button/Button';
import Footer from '../components/footer/Footer';
import Title from '../components/title/Title';
import TimeImg from "../assets/img/stopwatch.png";
import Delivery from "../assets/img/carbon_delivery.png";
import cart from "../assets/img/Vector.png";
import {Col} from "../components/grid"

const StyledLandingPage = styled.div`
  .main {
    min-height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url(${BannerImg});
    width: 100%;

    &__content {
      width: 45%;
      margin: 0 auto;
      text-align: center;

      p {
        margin: 12px 0 43px 0;
      }

      @media (max-width: 991px) {
        display: block;
        margin-bottom: 20px;
        text-align: center;
        align-items: center;
        justify-content: center;
        width: 60%;
        p {
          margin: 12px 0 12px 0;
        }

        button {
          margin-bottom: 20px;
        }

        img {
          width: 100%;
        }
      }
      @media (max-width: 1200px) {
        width: 55%;
        img {
          width: 100%;
        }
      }
      @media (max-width: 791px) {
        width: 65%;
        img {
          width: 100%;
        }
      }
      @media (max-width: 450px) {
        width: 80%;
        img {
          width: 100%;
        }
      }
    }
  }
  
  .about {
    margin-top: 60px;
    margin-bottom: 60px;
    .our_benefits{
      h1 {
        margin-bottom: 30px;
      }
    }
    .row {
      .cards_benefits {
        h1 {
          font-size: 20px;
          font-weight: 700;
          @media (max-width: 991px) {
            font-size: 10px;
            font-weight: 700;
            margin: 13px 0 !important;
          }
        }
        img {
          margin-top: 10px;
        }
      }
    }
    @media (max-width: 991px) {
      margin-top: 50px;
      margin-bottom: 50px;
      width: 90%;
    }
    @media (max-width: 450px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }

  .numbers {
    padding: 0 0 130px 0;
    .col-12 {
      h1 {
        margin-bottom: 50px;
        @media (max-width: 500px) {
          margin-bottom: 35px;
        }
      }
    }
    @media (max-width: 991px) {
      padding: 0 0 90px;
      width: 90%;
      .number_card {
        width: 95%;
        margin: 0 auto;
      }
    }
    @media (max-width: 691px) {
      padding: 0 0 70px;
      width: 85%;
    }
    
  }

  .center {
    text-align: center;
  }

  .width {
    h1 {
      @media (max-width: 991px) {
        font-size: 50px;
      @media (max-width: 691px) {
        font-size: 45px;
      }
    }
  }
    p {
      @media (max-width: 991px) {
        margin-bottom: 15px;
      };
    }
  }
`;

const LandingPage = (props) => {
    return (
        <StyledLandingPage {...props}>
            <Row className="main" column justify={"center"}>
                <Row className="main__content" column>
                    <img src={Logo} alt="Logo"/>
                    <Text size={'20px'} weight={'600'} margin={"12px 0 43px"} color={"#334D6E"}>
                        O'zbekistonda o'z o'rniga ega bo'lgan va uzoq yillardan beri xaridorlar ishonchiga erisha olgan
                        online do'kon
                    </Text>
                    <Link to="/auth/login-or-signup"><Button green big>Tizimga kirish</Button></Link>
                </Row>
            </Row>
            <div className="container about">
                <div className="row">
                    <div className="col-12 our_benefits"><Title size={"50px"} weight={"700"}>Bizning
                        afzalliklarimiz</Title></div>
                    <div className="row text-center justify-space-between align-items-center">
                        <Col sm={12} md={4} classname={'cards_benefits'}>
                            <img src={Delivery} alt="img"/>
                            <Title card weight={"700"}>Bepul yetkazib berish</Title>
                            <Text color={"#334D6E"}>Istalgan buyurtmalar 24 soat ichida yetkazib beriladi</Text>
                        </Col>
                        <Col sm={12} md={4} classname={'cards_benefits'}>
                            <img src={TimeImg} alt="img"/>
                            <Title card weight={"700"} >Buyurtmalar 24 soatda
                                yetkaziladi</Title>
                            <Text color={"#334D6E"}>O’zbekiston bo’ylab yetkazib berish imkoniyati mavjud</Text>
                        </Col>
                        <Col sm={12} md={4} classname={'cards_benefits'}>
                            <img src={cart} alt="img"/>
                            <Title card weight={"700"}>Aksiya narxida xarid qilish
                                imkoniyati</Title>
                            <Text color={"#334D6E"}>Agar hozir xarid qilsangiz uni CHEGIRMA narxida olishga
                                erishasiz!</Text>
                        </Col>
                    </div>
                </div>

            </div>
            <div className="numbers container">
                <div className="row">
                    <div className="col-12 text-center"><Title size={"50px"} weight={"700"} margin={"0 0 120px"}>Raqamlar
                        biz haqimizda</Title></div>
                    <div className="row width text-center">
                        <Col sm={12} md={4}>
                            <Title className="mb-2" weight={"700"} size={"60px"}>13</Title>
                            <Text size={"20px"} weight={"700"} color={"#006400"}>Viloyatlar</Text>
                        </Col>
                        <Col sm={12} md={4}>
                            <Title className="mb-2" weight={"700"} size={"60px"}>565489</Title>
                            <Text size={"20px"} weight={"700"} color={"#006400"}>Umumiy buyurtmalar soni</Text>
                        </Col>
                        <Col sm={12} md={4}>
                            <Title className="mb-2" weight={"700"} size={"60px"}>156</Title>
                            <Text size={"20px"} weight={"700"} color={"#006400"}>Ayni vaqtda yetkazib berilayotgan
                                buyurtmalar soni</Text>
                        </Col>
                    </div>
                </div>
            </div>
        </StyledLandingPage>
    )
}

export default LandingPage;
/*import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom"
import BannerImg from "../assets/img/banner.png"
import {Row} from '../components/grid';
import Text from "../components/text";
import Logo from "../assets/img/logo.png"
import Button from '../components/button/Button';
import Title from '../components/title/Title';
import stopwatch from "../assets/img/stopwatch.png";
import delivery from "../assets/img/carbon_delivery.png";
import ticket from "../assets/img/Vector.png";
import Col from "../components/grid/col"
import {LandingCard} from "../components/card";

const StyledLandingPage = styled.div`
    .main{
        min-height: 100vh;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-image: url(${BannerImg});
        &__content{
            width: 45%;
            margin: 0 auto;
            text-align:center;
          .buttons {
            display: flex;
            .margin_right {
              margin-right: 38px;
            }
          @media (max-width: 991px) {
            display: block;
            margin-bottom: 20px;
            text-align: center;
            align-items: center;
            justify-content: center;
            button {
              margin-bottom: 20px;
            }
            .margin_right {
              margin-right: 0;
            }
          }
          }
          @media (max-width: 1200px) {
            width: 65%;
            img {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            width: 85%;
            img {
              width: 100%;
            }
          }
          @media (max-width: 791px) {
            width: 96%;
            img {
              width: 100%;
            }
          }
        }
    }
    .about{
        padding: 109px 0 208px;
      @media (max-width: 991px) {
        padding: 75px 0 104px;
      }
      @media (max-width: 691px) {
        padding: 60px 0 50px;
      }
    }
    .numbers{
        padding: 0 0 130px;
      .number_card {
        width: 100%;
        text-align: center;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 991px) {
        padding: 0 0 90px;
        .number_card {
          width: 95%;
          margin: 0 auto;
        }
      }
      @media (max-width: 691px) {
        padding: 0 0 70px;
      }
    }
    .center{
        text-align: center;
    }
    .width{
        width: 100%;
    }
`;

const LandingPage = (props) => {
    return (
        <StyledLandingPage {...props}>
            <Row className="main" column justify={"center"}>
                <Row className="main__content" column>
                    <img src={Logo} alt="Logo" />
                    <Text margin={"12px 0 43px"} blue semi_bold>
                        O'zbekistonda o'z o'rniga ega bo'lgan va uzoq yillardan beri xaridorlar ishonchiga erisha olgan online do'kon
                    </Text>
                    <div className="buttons">
                        <Link to="/auth/login-or-signup"><Button weight={'600'} className="margin_right" green big>Tizimga kirish</Button></Link>
                        <Link to="/auth/signup"><Button weight={'600'} green big >Ro’yhatdan o’tish</Button></Link>
                    </div>
                </Row>
            </Row>
            <div className="container about">
                <div className="row">
                    <div className="col-12 text-center"><Title main_title>Bizning afzalliklarimiz</Title></div>
                    <Col sm={12} md={4}><LandingCard img={delivery} title={"Bepul yetkazib berish"} text="O’zbekiston bo’ylab yetkazib berish imkoniyati mavjud" /></Col>
                    <Col sm={12} md={4}><LandingCard img={stopwatch} title={"Buyurtmalar 24 soatda yetkaziladi"} text="Istalgan buyurtmalar 24 soat ichida yetkazib beriladi" /></Col>
                    <Col sm={12} md={4}><LandingCard margin img={ticket} title={"Aksiya narxida xarid qilish imkoniyati"} text="Agar hozir xarid qilsangiz uni <span>CHEGIRMA</span> narxida olishga erishasiz!" /></Col>
                </div>

            </div>
            <div className="numbers container">
                <div className="row text-center">
                    <div className="col-12 text-center"><Title main_title>Raqamlar biz haqimizda</Title></div>
                    <div className="row width justify-space-between">
                        <Col className={'number_card'} sm={12} md={4} >
                            <Title className="mb-lg-5 mb-md-4 mb-sm-2" number_title>13</Title>
                            <Text number_title>Viloyatlar</Text>
                        </Col>
                        <Col className={'number_card'} sm={12} md={4} >
                            <Title className="mb-lg-5 mb-md-4 mb-sm-2" number_title>565489</Title>
                            <Text number_title>Umumiy buyurtmalar soni</Text>
                        </Col>
                        <Col className={'number_card'} sm={12} md={4} >
                            <Title className="mb-lg-5 mb-md-4 mb-sm-2" number_title>156</Title>
                            <Text number_title>Ayni vaqtda yetkazib berilayotgan buyurtmalar soni</Text>
                        </Col>
                    </div>
                </div>
            </div>
        </StyledLandingPage>
    )
}

export default LandingPage;*/

