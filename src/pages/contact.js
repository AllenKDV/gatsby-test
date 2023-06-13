import * as React from 'react';
import Layout from '../components/layout';

const Contact = () => {
  return (
    <Layout pageTitle="Contact Allen Gatsby">
      <p>Sorry, not taking any requests today.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>Contact Me</title>
    <meta name="description" content="Contact The Great Allen Gatsby" />
  </>
);

export default Contact;
