import React from 'react'
import {createGlobalStyle,ThemeProvider} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    ul,h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0;
    }
    li{
        list-style: none;
    }
    body{
        color: #006400;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
    .pagination{
        li{
            a{
                min-width: 40px;
                text-align: center;
                padding: 10px;
                display: inline-block;
                background-color: #fff;
                border-radius: 13px;
                border: 1.5px solid #006400;
                margin-left: 10px;
                font-size: 15px;
                transition: 0.5s ease;
                :hover{
                    background-color: #999;
                }
            }
        }
    }
`;

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={{dark:false}}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}

export default Theme
