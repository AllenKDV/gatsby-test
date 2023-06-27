import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(blog => (
          <li key={blog.name}>{blog.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => (
  <>
    <Seo title="Blog" />
    <meta name="description" content="Blog posts for the Great Allen Gatsby" />
  </>
);

export default BlogPage;
