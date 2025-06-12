import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './PostDetail.module.css';

export const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts/${id}`);
        if (!response.ok) {
          throw new Error('記事の取得に失敗しました');
        }
        const data = await response.json();
        setPost(data.post || null);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className={classes.container}>読み込み中...</div>;
  }

  if (error) {
    return <div className={classes.container}>エラー: {error}</div>;
  }

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
          {(post.categories || []).map(category => (
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