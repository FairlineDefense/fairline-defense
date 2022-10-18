import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
export default function MembershipSubPortal() {
    const user = useSelector(state => state.user)
    let [state, setState] = useState('')

    return (
        <>
        <MembershipNav state={state} setState={setState} />
        {/* case: membership info => membershipinfo.js
            case: editmembership info => editmembershipinfo.js
            case: membership and billing => m and b.js
            etc...
         */}
        </>
    )
}
