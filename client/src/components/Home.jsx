import React, { Component } from 'react'
import axios from 'axios'
import { MainPage, CarouselContainer, SecHomeCon, BlogCon } from './styled_components/container'
import {Carousel} from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from './styled_components/images/nasa.jpg'

class Home extends Component {
    state = {
        blogs: [],
        shorts: [],
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
            const shortSplice = shortSort.splice(0, 4)
            this.setState({ blogs: blogSplice, shorts: shortSplice, isloaded: true })
        }
        catch (err) {
            console.log(err)
        }

    }

    render() {
        const shorts = this.state.shorts
        return (
            this.state.isloaded ?
            <MainPage>
                <CarouselContainer>
                <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} transitionTime={1000} interval={5000} autoPlay={true}
                showStatus={false} showIndicators={false} dynamicHeight={true}>
                {this.state.shorts.map((short)=>{
                    return(
                    <div>
                        <img src={Image} />
                        <h1>{short.title}</h1>
                        <p className="legend">{short.content}</p>
                        <button> Read More</button>
                    </div>
                    )
                    })}
                    </Carousel>
                    </CarouselContainer>
                    <SecHomeCon>
                    {this.state.blogs.map((blog)=>{
                        let date = new Date(blog.created_at)
                        return(
                        <BlogCon>
                            <h1>{blog.title}</h1>
                            <h4>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</h4>
                            <p>{blog.content}</p>
                            <button>Read More</button>
                            
                        </BlogCon>
                        )
                    })}
                    </SecHomeCon>
            </MainPage>
            : <img src="https://media.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.gif" alt="Loading"/>
        )
    }
}

export default Home