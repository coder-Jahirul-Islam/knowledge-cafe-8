import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Questions from './components/Questions/Questions';

const App = () => {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Questions></Questions>
    </div>
  );
};

export default App;
