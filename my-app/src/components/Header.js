import React from 'react';
import Brand from './Brand';
import Menu from './Menu';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background: #fdfdfd;
    box-shadow: 0 0 10px rgba(0, 0, 0, .2);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`

const Header = () => (
    <StyledHeader>
        <Brand/>
        <Menu/>
    </StyledHeader>
)

export default Header