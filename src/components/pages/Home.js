  
import React, { Wrapper } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = () => (
  <Wrapper>
    <Search />
    <Users />
  </Wrapper>
);

export default Home;