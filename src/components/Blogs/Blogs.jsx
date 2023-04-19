
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Blogs.css'

const Blogs = () => {
    const [cards, setCards] = useState([]);
    const [marked, setMarked] = useState([]);
    const [readTime, setReadTime] = useState(0)
    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setCards(data))

    }, []);

    const handleBookMark = (bookMark) => {
        const previous = [...marked];
        if (!previous.includes(bookMark)) {
            const newMarked = [...marked, bookMark];
            setMarked(newMarked);

        } else {
            toast("Already added!")
        }
    }

    const handleAddMin = (time) => {
        console.log(time, "hello");
        const newTime = readTime + time;
        setReadTime(newTime);
    }
    return (
        <div className='max-w-[1240px] mx-auto md:grid md:grid-cols-3 '>
            <div className="cards-container col-span-2 ">
                {
                    cards.map(card => <Card
                        handleBookMark={handleBookMark}
                        handleAddMin={handleAddMin}
                        key={card._id}
                        card={card}
                    ></Card>)
                }
            </div>

            <div className='bookmark-container pt-2  rounded-lg h-full mt-4 sm:mt-8 sm:ml-2 sm:mr-2'>


                <h3 className='font-semi-bold border-2 border-indigo-500 ms-4 bg-green-500 rounded-lg p-2 m-2 sm:max-w-xs sm:mx-auto sm:text-center'>Spent time on read: {readTime}</h3>


                <div>
                    <h1 className='ms-4 bg-slate-200 rounded-lg m-4 p-2 sm:text-center'>Bookmark Items: {marked.length}</h1>

                    {
                      marked.map(title => { 
                        return <p className='p-4 m-6 sm:text-sm rounded-lg border-2 border-gray-300 shadow-md bg-green-200 text-gray-800'>{title.title}</p> 
                      })
                    }
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Blogs;