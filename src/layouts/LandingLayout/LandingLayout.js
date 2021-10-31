import React from 'react';
import Footer from "../../components/footer";

const LandingLayout = ({children}) => {
    return (
        <div>
            {children}
            <Footer/>
        </div>
    )
}

export default LandingLayout;
