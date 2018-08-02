import styled, { css } from 'styled-components';




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
    display: flex;
    flex-direction: column;


    h4{
        font-size: 14px;
        text-transform: uppercase;
        align-self: center;
    }
    p{
        font-size: 15px;
    }
`
export const AsideImg = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 100px;
    background-color: gray;
    overflow: hidden;
    align-self: center;
    
    img{
        height: 100%;
        width: auto;
        transform: translateX(-40px);
    }
`

export const CarouselContainer = styled.div`
    height: 30vh;
    width: 60vw;
    margin-top: 30px;
    position: relative;
    overflow: hidden;
    font-family: 'Lora', serif
    z-index: 1;

    h1{
        color: #F2545B;
        margin: 5px 0 0 10px;
        text-transform: uppercase;
    }
    h4{
        color: #F2545B;
        margin: 0 10px;
    }
    p{
        height: 10vh;
        width: 55vw;
        padding-bottom: 4px;
        overflow: hidden;
        line-height: 16px;
        font-size: 14px;
        margin-bottom: 5px;
        margin-left: 10px;
        color: #EAF4F4;
        background-color: rgba(0,0,0,.5);
    }
    a {
        margin: 10px;
    }
`
export const CarouselContent = styled.div`
    height: 26vh;
    width: 57vw;
    padding-left: 20px;
    position: relative;
    overflow: hidden;

    img {
        height: auto;
        width: 100%;
        position: absolute;
        z-index: -4;
    }
`

const width = '60vw', height='25vh';
export const Children  = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`
export const Arrow = styled.div`
  text-shadow: 1px 1px 1px #fff;
  z-index: 100;
  line-height: ${height};
  text-align: center;
  position: absolute;
  top: 0;
  width: 10%;
  font-size: 2em;
  cursor: pointer;
  user-select: none;
  ${props => props.right ? css`left: 94%;` : css`left: -4%;`}
`
export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`
export const Dots = styled.span`
  text-align: center;
  padding-left: 20px;
  width: ${width};
  z-index: 100;
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
        font-family: 'Lora', serif;
        margin: 0;
        color: #F2545B;
        text-transform: uppercase;
        font-size: 2em;
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
    }
`
export const TitleCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
export const NewsInputCon = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`