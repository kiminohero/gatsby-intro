import React from 'react';
import { Link } from 'gatsby';
import usePosts from '../hooks/use-posts';
import Layout from '../components/layout';
import Hero from '../components/hero';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2>Read Devil's Blog</h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </Layout>
    </>
  );
};
