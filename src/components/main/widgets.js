import React from 'react';
import "./widgets.css"
import { TwitterTweetEmbed } from 'react-twitter-embed';


const Widgets = () => {

    return (
        <div className='widgets'>
            
            <form className="form">
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input className="input" placeholder="Type your text" required="" type="text" />
            <button className="reset" type="reset">
          
            </button>
        </form>
            <TwitterTweetEmbed tweetId={'463440424141459456'} />
            <TwitterTweetEmbed tweetId={'1704910025679044654'} />
            
        </div>
    )
}

export default Widgets;