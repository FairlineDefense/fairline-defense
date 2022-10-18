import React from 'react'

export default function MembershipNav(props) {
    let {state, setState} = props
    return (
        <div>
            <ul>
                <li onClick={(e)=>{setState(e.target.value)}} value="PersonalInformation">Personal Info</li>
                <li onClick={(e)=>{setState(e.target.value)}} value="MembershipAndBilling">Membership and Billing</li>
                <li onClick={(e)=>{setState(e.target.value)}} value="Invoices">Invoices</li>
                <li onClick={(e)=>{setState(e.target.value)}} value="EmailPreferences">Email Preferences</li>
                </ul>
        </div>
    )
}
