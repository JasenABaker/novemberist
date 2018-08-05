import React from 'react'
import { MainPage, Heading,ImgCon, BlogCon, SecHomeCon } from './styled_components/container'
import Fallbook from './styled_components/images/fallbook.jpg'



const About = () => {
    return (
        <MainPage>
            <Heading>
                <h1>About</h1>
                <h2>The Novemberist</h2>
            </Heading>
            <ImgCon>
                <img src={Fallbook} atl="Book with leaf" />
            </ImgCon>
            <SecHomeCon>
            <BlogCon>
                <h1>The Novemberist is...</h1>
                <p>A man. A myth. A legend. The Novemberist is the title given to a long lineage of story tellers. These men and women through out history have used their words to bring something beautiful to the world.
                The current Novmeberist is Jasen Baker. He lives in Sugar Hill, GA.
                </p>
            </BlogCon>
            </SecHomeCon>
        </MainPage>
    )
}

export default About