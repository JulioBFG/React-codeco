import React from 'react'
import styled from 'styled-components';

const StyledMenu = styled.nav``

const StyledMenuList = styled.ul``

const StyledMenuItem = styled.li`
    list-style:none;
    color: #333;
    font-size: .95rem;
`

const StyledMenuButton = styled.button`
    background: transparent;
    border:none;
    color: #0099ff;
    margin-left: .1rem;
    font-size: .9rem;
    text-transform:lowercase;
    &:hover {
        text-decoration:underline;
        cursor:pointer;
    }
`

const Menu = () => (
    <StyledMenu>
        <StyledMenuList>
            <StyledMenuItem>
                Olá Exemplo@exemplo.com.br
                <StyledMenuButton>Sair</StyledMenuButton>
                </StyledMenuItem>
        </StyledMenuList>
    </StyledMenu>
)

export default Menu