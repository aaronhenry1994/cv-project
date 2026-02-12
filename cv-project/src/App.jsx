import { useState } from 'react'
import Name from './components/Name'
import School from './components/School'
import Work from './components/Work'
import './App.css'

function App() {
  

  return (
    <>
    <div class='parent'>
    <div>
      <div class='generators'>
        <h1>Resume Generator:</h1>
        <div><Name /></div>
        <div><School /></div>
        <div><Work /></div>
      </div>
    </div>
    <div class='allOutput'>
      <h2 class='header' id='resumeHeader'>Resume:</h2>
      <div class='personalOutput'>
        <h3 class='header' id='personalHeader'>Personal Information:</h3>
        <div class='details' id='nameOut'></div>
        <div class='details' id='phoneOut'></div>
        <div class='details' id='emailOut'></div>
      </div>
      <div class='schoolOut'>
        <h3 class='header' id='schoolHeader'>School Information:</h3>
        <div class='details' id='highSchoolOut'></div>
        <div class='details' id='collegeOut'></div>
      </div>
      <div id='workExp' class='workExp'>
        <h3 class='header' id='workHeader'>Work History:</h3>
        <div class='job1'>
          <div class='details' id='employer1Out'></div>
          <div class='details' id='job1Title'></div>
          <div class='details' id='job1Desc'></div>
        </div>
        <div class='job2'>
          <div class='details' id='employer2Out'></div>
          <div class='details' id='job2Title'></div>
          <div class='details' id='job2Desc'></div>
        </div>
        <div class='job3'>
          <div class='details' id='employer3Out'></div>
          <div class='details' id='job3Title'></div>
          <div class='details' id='job3Desc'></div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default App