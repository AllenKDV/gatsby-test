import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <p>Sorry, not taking any requests today.</p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title="Contact" />
    <meta name="description" content="Contact The Great Allen Gatsby" />
  </>
);

export default Contact;
