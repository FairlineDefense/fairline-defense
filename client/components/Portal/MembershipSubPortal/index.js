import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useSelector } from 'react-redux'
export default function MembershipSubPortal() {
    const user = useSelector(state => state.user)
    let [state, setState] = useState('')

    const switcher = () => {
        switch(state) {
        case 'PersonalInformation':
            return <PersonalInformation user={user} />;
        case 'EditPersonalInformation':
            return <EditPersonalInformation user={user} />;
        case 'MembershipAndBilling':
            return <MembershipAndBilling user={user} />;
        case 'EmailPreferences':
            return <EmailPreferences user={user} />;
        default:
            return <PersonalInformation user={user} />;
    }
}

const WhiteBackground = styled.container`
width: 100%;
min-height: 500px;
padding: 2rem;
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
