import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/projects/Projects';
import { Footer } from './layout/sections/footer/Footer';
import { About } from './layout/sections/about/About';
import { Contacts } from './layout/sections/contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
}

export default App;
