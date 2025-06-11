import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../../data/posts';
import classes from './PostDetail.module.css';

export const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div className={classes.container}>記事が見つかりませんでした。</div>;
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>{post.title}</h1>
      <img src={post.thumbnailUrl} alt={post.title} className={classes.thumbnail} />
      <div className={classes.metadata}>
        <time className={classes.date}>
          {new Date(post.createdAt).toLocaleDateString('ja-JP')}
        </time>
        <div className={classes.categories}>
          {post.categories.map(category => (
            <span key={category} className={classes.category}>{category}</span>
          ))}
        </div>
      </div>
      <div 
        className={classes.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}; 