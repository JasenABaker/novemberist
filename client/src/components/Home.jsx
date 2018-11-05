import React, { Component } from 'react'
import axios from 'axios'
import TextTruncate from 'react-text-truncate'
import { MainPage, CarouselContainer, 
        SecHomeCon, 
        BlogCon, 
        Children, 
        Dot, 
        Dots, 
        Arrow, 
        CarouselContent,
        TitleCard } from './styled_components/container'
import Carousel from 'nuka-carousel'
import ImageOne from './styled_components/images/image1.jpg'
import ImageTwo from './styled_components/images/image2.jpg'
import ImageThree from './styled_components/images/image3.jpg'
import ImageFour from './styled_components/images/image4.jpg'
import ImageFive from './styled_components/images/image5.jpg'
import {ReadBtn} from './styled_components/buttons'


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
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
        const shorts = this.state.shorts
        const images = [ImageOne,ImageTwo,ImageThree,ImageFour,ImageFive]
        return (
            this.state.isloaded ?
                <MainPage>
                    <Carousel slideWidth={1.0}
                    autoplay={true}
                    wrapAround={true}  >
                        {this.state.shorts.map((short, index) => {
                            const collect = this.state.collections.find((collection)=>{
                                return collection.id === short.collection_id
                            })
                            return (
                            
                                    <CarouselContent>
                                        <img src={images[index]} alt="image" />
                                        <TitleCard>
                                        <h1>{short.title}</h1>
                                        <h4>{collect.title}</h4>
                                        </TitleCard>
                                        <TextTruncate className="text"
                                        line={4}
                                        truncateText="…"
                                        text={short.content}/>
                                        <ReadBtn>Read More</ReadBtn>
                                    </CarouselContent>
                             
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
                                    <TextTruncate
                                        line={4}
                                        truncateText="…"
                                        text={blog.content}/>
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