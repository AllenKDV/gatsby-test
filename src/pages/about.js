import * as React from 'react';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout pageTitle="About">
      <p>This is Sparta!</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <meta name="description" content="About The Great Allen Gatsby" />
  </>
);

export default About;
