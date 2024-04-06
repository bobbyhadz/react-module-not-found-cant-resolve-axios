import './App.css';

// ✅ Use correct import 👇️
import axios from 'axios';

import {useState, useEffect} from 'react';

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;

  console.log(post);

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}

export default App;
