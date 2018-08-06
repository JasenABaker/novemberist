import styled, { css } from 'styled-components';
import Notebook from './images/notebook.jpg'


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
    min-height: 30vh;
    width: 60vw;
`
export const BlogCon = styled.div`
    height: 100%;
    border-top: 1px solid grey;
    margin-bottom: 10px;
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

export const Heading = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #F2545B;
    margin-bottom: 10px;
    font-family: 'Oswald', sans-serif;

    h1 {
        font-size: 4em;
        margin: 0 0 0 30px;
    }
    h2 {
        font-size: 3em;
        margin-top: 0px;
        margin-left: 50px;
    }
`

export const ImgCon = styled.div`
        height: 45vh;
        width: 60vw;
        overflow: hidden;

        img {
            height: auto;
            width: 100%;
            transform: translateY(-50px);
            
        }
`

export const ContactCon = styled.div`
        height: 65vh;
        width: 100vw;
        margin: 20px 0;
        background: linear-gradient(0deg, rgba(1,22,39,0.6), rgba(1,22,39,0.6)), url(${Notebook}) center no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        h1 {
            color: white;
            font-size: 3em;
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;

        }
`
export const SideBySideCon = styled.div`
        height: 80%;
        width: 100%;
        display: flex;
        justify-content: center;
`
export const SideBySide = styled.div`
        height: 45vh;
        width: 30%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        
`

export const InfoCon = styled.div`
        margin-left: 40px;
        display: flex;
        width: 100%;
        height: 70%;
        color: #F2545B;

        h3 {
            font-size: 1.5em;
        }
`

export const IconCon = styled.div`
        height: 100%;
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
`
export const TextCon = IconCon.extend`
        width: 80%;
`