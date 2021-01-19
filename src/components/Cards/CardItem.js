import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
function CardItem({imgSrc, tag, content}) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link'>
                    <figure className="cards__item__pic-wrap" data-tag={tag}>
                        <img 
                            alt='london'
                            src={imgSrc} 
                            className='cards__item__img'
                        />
                        <span className={`tag tag-${tag}`}>{tag.toUpperCase()}</span>
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">
                            {content}
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
