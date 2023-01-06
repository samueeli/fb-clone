import React, { useEffect, useState } from 'react';
import { getDocs, collection, Firestore } from 'firebase/firestore';
import { db } from '../../firebase';
import { Post } from './Post';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async (db: Firestore) => {
    const postsCollection = collection(db, 'posts');
    const postSnapshot = await getDocs(postsCollection);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    setPosts(postList);
  };

  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.timestamp?.toDate()).valueOf() -
      new Date(a.timestamp?.toDate()).valueOf()
  );

  useEffect(() => {
    getPosts(db);
  }, [posts]);

  return (
    <div>
      {sortedPosts.map((post, index) => (
        <Post
          key={index}
          image={post.image}
          name={post.name}
          timestamp={new Date(post.timestamp?.toDate()).toLocaleString()}
          message={post.message}
        />
      ))}
    </div>
  );
};
