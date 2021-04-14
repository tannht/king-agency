import React from 'react';
import HomeBanner from './sub_components/HomeBanner';
import ProjectList from './sub_components/ProjectList';
import ClientsLogo from './sub_components/ClientsLogo';
import NewsList from './sub_components/NewsList'; 
function Home() {
  return (
    <div className="">
     <HomeBanner/>
     <ProjectList />
      <ClientsLogo />
     <h3>News</h3>
     <h4>Our Latest Articles</h4>
     <NewsList/>
    </div>
  );
}

export default Home;
