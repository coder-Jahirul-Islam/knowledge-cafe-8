import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Card = ({ card, handleBookMark, handleAddMin }) => {
    // console.log(props.card);
    const { picture, authorImage, name, date, title, read, time } = card;
    return (
        <div className='my-10 md:mx-14 mx-3'>
            <div className="card w-full bg-base-100 shadow-2xl">
                <figure>
                    <img src={picture} alt="" className="w-full h-auto rounded-lg" />

                </figure>
                <div className='flex justify-between items-center p-3 md:p-5 m-2'>
                    <div className='flex gap-2 items-center'>
                        <img className='w-12 h-12 bg-gray-500 border-2 border-amber-600 rounded-full my-2' src={authorImage} alt="" />
                        <div className='items-center flex-direction:column'>
                            <p className='font-bold text-base md:text-lg'>{name}</p>
                            <p className='text-xs md:text-sm'>{date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <h3 className='text-xs md:text-sm'>{time} min read </h3>
                        <span onClick={() => { handleBookMark(card) }}><FontAwesomeIcon icon={faBookmark} className='text-lg' /></span>
                    </div>
                </div>
                <h2 className='font-bold text-lg md:text-2xl p-3 md:p-5'>{title}</h2>
                <p className='text-xs md:text-sm p-3 md:p-5'>#Programming #Coding</p>
                <p onClick={() => { handleAddMin(time) }} className='font-bold underline cursor-pointer text-blue-500 text-sm md:text-base p-3 md:p-5'>{read}</p>

            </div>
        </div>
    );
};

export default Card;