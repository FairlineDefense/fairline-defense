import React from 'react'
import styled from 'styled-components'

export default function EditPersonalInformation() {
    const user = useSelector(state.user)

    const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    `
    return (
        <Wrapper>
            Edit Personal Info
        </Wrapper>
    )
}
