import React from 'react';
import Common from './Common';
import web from "../src/images/hero-img.png";
function About() {
  return (
     <>
        <Common
          name='Welcome to About page'
          btname='Contact Now'
          visit='/contact'
          imgsrc={web}
       />
     </>
  );
}

export default About;