import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About the Animals</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover" />
      <div className="my-2">
        <p>
          We welcome you to enjoy this beautiful gallery of some of the most beloved animals on the planet. From America's favorite pets to fantastic animals in the wild, we are here to celebrate them!
        </p>
      </div>
    </section>
  );
}

export default About;