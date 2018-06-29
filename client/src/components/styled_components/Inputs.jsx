import styled from 'styled-components'






export const NewsInputStyle = styled.input`
background-color: #f5f5f5;
border: 1px solid #ddd;
border-radius: 3px;
box-shadow: 1px 1px 3px #eee inset;
color: #999;
font-family: 'Lora', serif;
font-size: 16px;
padding: 16px;
width: 90%;

`

export const SignInUpForm = styled.form`
    min-height: 60vh;
    max-height: 99vh;
    width: 30vw;
    z-index: 200;
    background-color: #011627;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    color:#EAF4F4;

    h2{
        font-size: 2.3em;
    }
    a {
        text-decoration: none;
        color: #F2545B;
    }

    p{
        margin: 10px auto;
        width: 70%;
    }
`

export const ImagePreview = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 100px;

    img {
        height: 100%;
        width: auto;
    }
`

export const CloseBtn = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 100px;
    color: #EAF4F4;
    background-color: #F2545B;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    marign-right: 50px;

    :hover {
        background-color: #F7A1A5;
    }
`

export const InputDiv = styled.div`
    width: 80%;
`
export const TopDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2{
        margin-left: auto;
    }
`