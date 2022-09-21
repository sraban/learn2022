import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Hello() {
  const [posts, setPosts] = useState([]); // {id:'',title:''}

  const fetchData = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts( data );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <a data-testid="useeffect" onClick={fetchData}>aaa</a>
      <ul data-testid="list">
        { posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}