import React from 'react';
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      
      <div className="sidebar_options">
        <i class="fa-brands fa-x-twitter fa-2xl"></i>
      </div>
      <div className="sidebar_options active">
        <i class="fa-sharp fa-solid fa-house active"></i>
        <h2>Home</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
        <h2>Explore</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-regular fa-bell"></i>
        <h2>Notifications</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-regular fa-envelope"></i>
        <h2>Messages</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-solid fa-list"></i>
        <h2>Lists</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-regular fa-bookmark"></i>
        <h2>Bookmarks</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-light fa-user-group"></i>
        <h2>Communities</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-brands fa-x-twitter fa-2xl"></i>
        <h2>Premium</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-regular fa-user"></i>
        <h2>Profile</h2>
      </div>
      <div className="sidebar_options">
        <i class="fa-solid fa-ellipsis"></i>
        <h2>More</h2>
      </div>
      <button className='tweet_button'>Post</button>
    </div>
  )
}

export default Sidebar;
