import React from 'react';
import Posts from '../publications/Posts/Posts';
import './Profile.css';

export default function Profile() {
  return <div className="Profile">
    <img src="/logo192.png" alt="profle" />
    <div className="personal-info">
      <p>
        <span>Email:</span>
        someone@someday.gg
      </p>
      <p>
        <span>Posts:</span>
        5
      </p>
    </div>
    <h2>3 of your recent posts</h2>
    <Posts limit={3} />
  </div>;
}