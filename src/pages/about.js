import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const About = () => {
  return (
    <Layout pageTitle="About">
      <p>This is Sparta!</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="About" />
    <meta name="description" content="About The Great Allen Gatsby" />
  </>
);

export default About;
