import React from "react";
import { posts } from "../../data/posts";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <main className={classes.mainContent}>
        <h1>記事一覧</h1>
        <div className={classes.postsContainer}>
          {posts.map(post => (
            <article key={post.id} className={classes.postCard}>
              <img src={post.thumbnailUrl} alt={post.title} className={classes.postThumbnail} />
              <div className={classes.postContainer}>
                <div className={classes.postMeta}>
                  <h2 className={classes.postTitle}>{post.title}</h2>
                    <time>{new Date(post.createdAt).toLocaleDateString('ja-JP')}</time>
                    <div className={classes.postCategories}>
                      {post.categories.map(category => (
                        <span key={category} className={classes.categoryTag}>{category}</span>
                      ))}
                    </div>
                </div>
                  <div className={classes.postContent} dangerouslySetInnerHTML={{ __html: post.content }}>
                  </div>
              </div>
            </article>
          ))}
        </div>
      </main>
  );
};