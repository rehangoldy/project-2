import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

export default function Tabs() {
    return (
        <Nav pills>
            <NavItem className=''>
                <NavLink active href="#"> Mensh Clothing </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Electronic</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Jewerely</NavLink>
            </NavItem>
            
        </Nav>
    )
}
