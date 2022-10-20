import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import MembershipNav from './MembershipNav'
import PersonalInformation from './PersonalInformation'
import EditPersonalInformation from './EditPersonalInformation'
import MembershipAndBilling from './MembershipAndBilling'
import EmailPreferences from './EmailPreferences'
import Invoices from './Invoices'

export default function MembershipSubPortal() {
    const user = useSelector(state => state.user)
    let [state, setState] = useState('')

    const switcher = () => {
        switch(state) {
        case 'PersonalInformation':
            return <PersonalInformation user={user} setState={setState} />;
        case 'EditPersonalInformation':
            return <EditPersonalInformation user={user} setState={setState} />;
        case 'MembershipAndBilling':
            return <MembershipAndBilling user={user} />;
        case 'Invoices':
            return <Invoices user={user} />;
        case 'EmailPreferences':
            return <EmailPreferences user={user} />;
        default:
            return <PersonalInformation user={user} setState={setState} />;
    }
}

const WhiteBackground = styled.div`
width: 100%;
min-height: 500px;
padding: 4rem 6rem 6rem 4rem;
position: relative;
background-color: #fff;
border-radius: 4px;
`
    return (
        <>
        <MembershipNav state={state} setState={setState} />
        <WhiteBackground>
        {switcher()}
        </WhiteBackground>
        </>
    )
}
