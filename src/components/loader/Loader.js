import React from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import styled from 'styled-components'; 

const StyledLoader = styled.div`
    position: fixed;
    z-index: 99;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(255,255,255,0.75);
    height: 100vh;
    width: 100%;
    display: ${({loading}) => loading ? "flex" : "none" };
    justify-content: center;
    align-items: center;
`;

const Loader = ({loading = false}) => {
    return (
        <StyledLoader loading={loading}>
            <BeatLoader color={"#006400"} loading={loading} size={50} />
        </StyledLoader>
    )
}

export default Loader;
