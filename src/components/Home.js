import React from 'react';
import HomeBanner from './sub_components/HomeBanner';
import ProjectList from './sub_components/ProjectList';
import OurClients from './sub_components/OurClients';
function Home() {
  return (
    <div className="">
     
     <HomeBanner/>
     <ProjectList />
      <OurClients />
     <h1>This is Home page</h1>
    </div>
  );
}

export default Home;
