import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
export default function MembershipSubPortal() {
    const user = useSelector(state => state.user)
    let [state, setState] = useState('')

    const switcher = () => {
        switch(state) {
        case 'PersonalInformation':
            return <PersonalInformation />;
        case 'EditPersonalInformation':
            return <EditPersonalInformation />;
        default:
            return <PersonalInformation />;
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
