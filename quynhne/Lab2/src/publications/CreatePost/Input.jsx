import React from 'react';
import Posts from '../Posts/Posts';

import './Input.css';

export default function Input() {
  return <div className="CreatePost">
    <form>
      <textarea></textarea>
      <button>Post</button>
    </form>
    <h2>Last 3 posts on your wall</h2>
    <Posts limit={3} />
  </div>;
}