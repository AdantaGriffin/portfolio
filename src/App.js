import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
/*import './App-light.css';*/

import Root from './components/root/root';
import About from './components/about/about';
import Homepage from './components/homepage/homepage';
import Dogs from './components/about/dogs';
import Me from './components/about/me';
import Skills from './components/skills/skills';
import Resume from './components/resume/resume';
import Projects from './components/projects/projects';
import SkillHTML from './components/skills/skillHTML';
import SkillCSS from './components/skills/skillCSS';
import SkillFigma from './components/skills/skillFigma';
import SkillUXUI from './components/skills/skillUXUI';
import SkillGitHub from './components/skills/skillGitHub';
import SkillGitBash from './components/skills/skillGitBash';
import SkillJavaScript from './components/skills/skillJavaScript';
import SkillNodeJS from './components/skills/skillNodeJS';
import SkillMarkdown from './components/skills/skillMarkdown';
import SkillMocha from './components/skills/skillMocha';
import SkillChai from './components/skills/skillChai';
import SkillSinon from './components/skills/skillSinon';
import SkillReact from './components/skills/skillReact';
import SkillJest from './components/skills/skillJest';
import SkillEnzyme from './components/skills/skillEnzyme';
import SkillRedux from './components/skills/skillRedux';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={<Homepage/>}/>
      <Route path='/about' element={ <About /> }/>
      <Route path='/about/:dogs' element={<Dogs/>}/>
      <Route path='/about/:dogs/:me' element={<Me/>}/>

      <Route path='/skills' element={<Skills/>}/>
      <Route path='/skills/:HTML' element={<SkillHTML/>}/>
      <Route path='/skills/CSS' element={<SkillCSS />}/>
      <Route path='skills/Figma' element={<SkillFigma/>}/>
      <Route path='skills/UXUI' element={<SkillUXUI/>}/>
      <Route path='skills/GitHub' element={<SkillGitHub/>}/>
      <Route path='skills/GitBash' element={<SkillGitBash/>}/>
      <Route path='skills/JavaScript' element={<SkillJavaScript/>}/>
      <Route path='skills/NODEjs' element={<SkillNodeJS/>}/>
      <Route path='skills/Markdown' element={<SkillMarkdown/>}/>
      <Route path='skills/Mocha' element={<SkillMocha/>}/>
      <Route path='skills/Chai' element={<SkillChai/>}/>
      <Route path='skills/SINONjs' element={<SkillSinon/>}/>
      <Route path='skills/React' element={<SkillReact/>}/>
      <Route path='skills/Jest' element={<SkillJest/>}/>
      <Route path='skills/Enzyme' element={<SkillEnzyme/>}/>
      <Route path='skills/Redux' element={<SkillRedux/>}/>

      <Route path='/projects' element={<Projects/>}/>
      
      <Route path='/resume' element={<Resume/>}/>
    </Route>
  ));

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
