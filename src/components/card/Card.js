import React from 'react';
import styled from 'styled-components';
import Button from '../button/Button';

const StyledCard = styled.div`
    min-height: 25vh;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    background-color: #BFCCDD;
    border-radius: 15px;
    cursor: pointer;
    .card{
        &__img{
            height: 175px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url(${({image}) => image});
            border-radius: 15px 15px 0 0;
        }
        &__info{
            background-color: #fff;
            padding: 6px 15px 15px 14px;
            border-radius: 0 0 15px 15px;
        }
        &__info h6{
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 11px;
        }
        &__info p{
            color: #334D6E;
            margin-bottom: 16px;
        }
    }
`;

const Card = ({id,image,name,price,sharer_ratio}) => {
    return (
        <StyledCard image={image} className="card">
            <div className="card__img"></div>
            <div className="card__info">
                <h6>{name}</h6>
                <p>{price}/{sharer_ratio} so'm</p>
                <div className="d-flex justify-content-around">
                    <Button green small>Batafsil</Button>
                    <Button green small>Oqim yaratish</Button>
                </div>
            </div>
        </StyledCard>
    )
}

export default Card;
