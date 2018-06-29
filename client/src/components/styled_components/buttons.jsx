import styled from 'styled-components'



export const ReadBtn = styled.a`
    height: 40px;
    width: 100px;
    background-color: #011627;
    color: #EAF4F4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;

    :hover{
        background: #2F404E;
    }

`

export const NewsInBtn = styled.input`
height: 60px;
width: 100px;
background-color: #011627;
color: #EAF4F4;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
text-transform: uppercase;
border: none;
border-radius: 2px;

:hover{
    background: #A93F55
}

`
export const SignSubmitBtn = styled.button`
height: 60px;
width: 100px;
color: #EAF4F4;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
text-transform: uppercase;
border: none;
border-radius: 2px;
background-color: #F2545B;

    :hover{
        background-color: #F7A1A5;
    }
`