import * as React from 'react';
import Layout from '../components/layout';

const About = () => {
  return (
    <Layout pageTitle="About Great Allen Gatsby">
      <p>This is Sparta!</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
    <meta name="description" content="About The Great Allen Gatsby" />
  </>
);

export default About;
