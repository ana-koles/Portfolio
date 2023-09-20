import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import styled from 'styled-components';
import { Main } from './layout/sections/main/Main';
import { Skills } from './layout/sections/skills/Skills';
import { Projects } from './layout/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
