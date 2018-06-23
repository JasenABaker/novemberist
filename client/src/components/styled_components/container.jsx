import styled from 'styled-components'




export const Page = styled.div`
    min-height: 90vh;
    width: 100vw;
    display: flex;
`
export const MainPage = styled.div`
    min-height: 90vh;
    width: 70vw;
    border-right: 1px solid #C0C8C8;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Aside = styled.div`
    height: 90vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lora', serif;

    a{
        text-decoration: none;
        color: #F2545B;
    }
`
export const InsideAside = styled.div`
    height: 100%;
    width: 80%;

    h4{
        font-size: 14px;
        text-transform: uppercase;
    }
    p{
        font-size: 16px;
    }
`


export const AsideImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    background-color: gray;
    overflow: hidden;
    
    img{
        height: 100%;
        width: auto;
        transform: translateX(-40px);
    }
`

export const CarouselContainer = styled.div`
    width: 60vw;
    margin-top: 30px;
`
export const SecHomeCon = styled.div`
    margin-top: 30px;
    height: 30vh;
    width: 60vw;
`

export const BlogCon = styled.div`
    height: 100%;
    border-top: 1px solid grey;
    h1{
        margin: 0;
        color: #F2545B;
    }
    h4{
        margin: 0;
        color: #5D6A75;
    }
    p{
    width: 98%;
    padding-bottom: 5px;
    height: 25%;
    overflow: hidden;
    text-overflow: ellipsis;
    }
`