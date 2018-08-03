import React from 'react'
import styled from 'styled-components'


export const Header = styled.div`
    height: 10vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    color: #EAF4F4;
    background-color: #011627;
    font-family: 'Oleo Script', cursive;

    a{
        text-decoration: none;
        color: inherit;
    }
`

export const TitleDiv = styled.div`
    height: 100%;
    width: 30vw;
    display: flex;

    h1{
        align-self: flex-end;
        font-size: 2.8em;
        margin-bottom:0;
    }
    h2{
        align-self: flex-start;
    }
`

export const NavBar = styled.div`
    height: 100%;
    width: 45vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    a{
        color: #EAF4F4;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 1px;

        :hover{
            color: #F2545B;
        }
    }

`