import React from 'react';
import Common from './Common';
import web from "../src/images/img2.svg";
function Home() {
  return (
     <>
       <Common
          name='Grow your business with'
          btname='Get Started'
          visit='/service'
          imgsrc={web}
       />
     </>
  );
}

export default Home;