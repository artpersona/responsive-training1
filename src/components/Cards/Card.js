import React from 'react'
import CardItem from './CardItem'
import './Card.css'
function Card() {
    return (
        <div className='cards'>
            <h1>Check out these SPACE Destinations!</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <div className="row">
                        <CardItem 
                            imgSrc='https://i.pinimg.com/originals/14/bf/85/14bf85f638265c603d6cb5370d5b5047.jpg' 
                            tag='Adventure' 
                            content='Explore the waterfall deep insdide the Amazon Jungle'
                        />
                        <CardItem 
                            imgSrc='https://nmswp.azureedge.net/app/uploads/2019/08/Unleazhed1.jpg' 
                            tag='Adventure' 
                            content='Explore the waterfall deep insdide the Amazon Jungle'
                        />                    </div>

                    <div className="row">
                        <CardItem 
                            imgSrc='https://media.gq.com/photos/57a8c34de24316960be637bc/master/pass/NewEridu.png' 
                            tag='Deadly' 
                            content='Explore the waterfall deep insdide the Amazon Jungle'
                        />
                        <CardItem 
                            imgSrc='https://media-mercury.cursecdn.com/attachments/5/466/fryest.jpg' 
                            tag='Adventure' 
                            content='Explore the waterfall deep insdide the Amazon Jungle'
                        />
                        <CardItem 
                            imgSrc='https://o.aolcdn.com/images/dims?image_uri=https%3A%2F%2Fmedia-mbst-pub-ue1.s3.amazonaws.com%2Fcreatr-uploaded-images%2F2020-09%2F985802b0-fda4-11ea-9b7f-2e2aba926cd9&thumbnail=640%2C&client=49kdj93ncb8s938hkdo&signature=78d9ba649edf652b965d7683aed9d98693bbe744' 
                            tag='Deadly' 
                            content='Explore the waterfall deep insdide the Amazon Jungle'
                        />
                    </div>
                </div>  
            </div>
        </div>

    )
}

export default Card
