import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';

function About() {
  return (
    <div>
      <Navbar />
      <Banner 
        title="About Page"
        subtitle="about"
      />
      <h1>About</h1>
      <p>About page body content</p>
    </div>

  );
}

export default About;
