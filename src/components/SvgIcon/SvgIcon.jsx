import React from "react";
import styled,{css} from "styled-components";
const SvgStyled = styled.div`
    width: 20px;
    height: 20px;
    display: inline-block;
    background-color: black;
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: center;
    -webkit-mask-size: contain;
    cursor: pointer;
    mask: {
        position: center center;
        size: 90%;
        repeat: no-repeat;
    }
    -webkit-mask: {
        position: center center;
        size: 90%;
        repeat: no-repeat;
    }
    ${({ src }) => src && css`
        mask-image: url(${src});
        -webkit-mask-image: url(${src});
    `}
    ${({ color }) => color && css`
        background-color: ${color};
    `}
    ${({ w }) => w && css`
        width: ${w}px;
    `}
    ${({ h }) => h && css`
        height: ${h}px;
    `}
`;

const SvgIcon = (props) => {
    return (
        <SvgStyled {...props} />
    )
}

export default SvgIcon;
