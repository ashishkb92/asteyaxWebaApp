import React from 'react';
import RegisterForm from './Form';

const dashboardPage = ({userName, userMobile}) => {
    return (
        <div>
            <RegisterForm userName={userName} userMobile={userMobile}/>
        </div>
    )
}

export default dashboardPage;