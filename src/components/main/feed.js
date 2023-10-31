import React, { useState, useEffect } from 'react';
import "./feed.css";
import postImg from "../images/postImg.png";

const Feed = () => {
    const [inputField, setInputField] = useState("");
    const [list, setList] = useState([]);
    const [name, setName] = useState('User');
    

    useEffect(() => {
        const storedList = JSON.parse(localStorage.getItem('posts'));
        if (storedList) {
            setList(storedList);
        }
    }, []);

    const handleText = (e) => {
        if (inputField.length > 280) {
            return 280;
        }
        setInputField(e.target.value);
    };

    const addItemToList = () => {
        if (!inputField || inputField === "") return;
        let newArray = [...list, { text: inputField }];
        setList(newArray);
        setInputField("");
        localStorage.setItem('posts', JSON.stringify(newArray));
    };

    return (
        <div className='feed'>
            <div className='feed-header'>
                <h3 className='active_feed'>For you</h3>
                <h3>Following</h3>
            </div>
            <div className='post'>
                <div className='inner_post'>
                    <img src={postImg} />
                    <input
                        type='text'
                        placeholder="What's Happening?!"
                        onChange={handleText}
                        value={inputField}
                    />
                    
                </div>
                <div className='post_filters'>
                    <i title='Image' class="fa-solid fa-image"></i>
                    <i title='Poll' class="fa-solid fa-bars-progress"></i>
                    <i title='Emoji' class="fa-regular fa-face-smile"></i>
                    <i title='Calender' class="fa-regular fa-calendar-days"></i>
                    <i title='Location' class="fa-solid fa-location-dot"></i>
                    <button onClick={addItemToList}>Post</button>
                </div>
            </div>
            <div className='tweets'>
            {
                list.map((item, index) =>
                    <div key={index} className='tweet'>
                        <img src={postImg} />
                        <h3>{name}</h3>
                        <p>{item.text}</p>
                    </div>)
            }
            </div>
            
        </div>
    )
}

export default Feed