import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const Homepage = () => {
  return (
    <Layout pageTitle="The Great Allen Gatsby">
      <p>This is Sparta!</p>
      <StaticImage
        alt="Allen and Odin"
        src="../images/allen-odin.jpg"
        style={{
          resizeMode: 'cover',
          width: 550,
        }}
      />
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>The Great Allen Gatsby</title>
    <meta name="description" content="This is spart Description" />
  </>
);

export default Homepage;
