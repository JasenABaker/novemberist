import React, { Component } from 'react'
import axios from 'axios'
import { MainPage, CarouselContainer, 
        SecHomeCon, 
        BlogCon, 
        Children, 
        Dot, 
        Dots, 
        Arrow, 
        CarouselContent,
        TitleCard } from './styled_components/container'
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'
import ImageOne from './styled_components/images/image1.jpg'
import ImageTwo from './styled_components/images/image2.jpg'
import ImageThree from './styled_components/images/image3.jpg'
import ImageFour from './styled_components/images/image4.jpg'
import ImageFive from './styled_components/images/image5.jpg'
import {ReadBtn} from './styled_components/buttons'


const CarouselUI = ({ position, total, handleClick, children }) => (
    <CarouselContainer>
        <Children>
            {children}
            <Arrow onClick={handleClick} data-position={position - 1}>{'<'}</Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>{'>'}</Arrow>
        </Children>
        <Dots>
            {Array(...Array(total)).map((val, index) =>
                <Dot key={index} onClick={handleClick} data-position={index}>
                    {index === position ? '● ' : '○ '}
                </Dot>
            )}
        </Dots>
    </CarouselContainer>
)
const Carousel = makeCarousel(CarouselUI)


class Home extends Component {
    state = {
        blogs: [],
        shorts: [],
        collections: [],
        isloaded: false,
    }
    async componentWillMount() {
        try {
            const resBlog = await axios.get('/api/blogs')
            const blogSort = resBlog.data.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            const blogSplice = blogSort.splice(0, 4)
            const resShorts = await axios.get('/api/shorts')
            const shortSort = resShorts.data.sort((a, b) => {
                return new Date(b.created_at) - new Date(a.created_at)
            })
            const resCollect = await axios.get('/api/collections')
            
            const shortSplice = shortSort.splice(0, 4)
            this.setState({ blogs: blogSplice, shorts: shortSplice, collections: resCollect.data, isloaded: true })
        }
        catch (err) {
            console.log(err)
        }

    }

    render() {
        const shorts = this.state.shorts
        const images = [ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive]
        return (
            this.state.isloaded ?
                <MainPage>
                    <Carousel defaultWait={7000}>
                        {this.state.shorts.map((short, index) => {
                            const collect = this.state.collections.find((collection)=>{
                                return collection.id === short.collection_id
                            })
                            console.log(collect)
                            return (
                                <Slide right>
                                    <CarouselContent>
                                        <img src={images[index]} alt="image" />
                                        <TitleCard>
                                        <h1>{short.title}</h1>
                                        <h4>{collect.title}</h4>
                                        </TitleCard>
                                        <p>{short.content}</p>
                                        <ReadBtn>Read More</ReadBtn>
                                    </CarouselContent>
                                </Slide>
                            )
                        })}
                    </Carousel>

                    <SecHomeCon>
                        {this.state.blogs.map((blog) => {
                            let date = new Date(blog.created_at)
                            return (
                                <BlogCon>
                                    <h1>{blog.title}</h1>
                                    <h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4>
                                    <p>{blog.content}</p>
                                    <ReadBtn>Read More</ReadBtn>

                                </BlogCon>
                            )
                        })}
                    </SecHomeCon>
                </MainPage>
                : null
        )
    }
}

export default Home