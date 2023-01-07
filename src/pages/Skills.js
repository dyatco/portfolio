import { Fade } from 'react-reveal'
import Git from '../Images/git.png'
import Html from '../Images/html.png'
import CSS from '../Images/css.png'
import Bootstrap from '../Images/bootstrap.png'
import Js from '../Images/js.png'
import Mongo from '../Images/mongo.png'
import Node from '../Images/node.png'
import Express from '../Images/express.png'
import React from '../Images/react.png'

export default function Skills(){
  return(
    
  <div id="skills" class="container-fluid p-0 min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5 mb-sm-5">
    <div class="widthAdjust row ">
       <div class="widthAdjust mb-0 col-12 px-0">
          <Fade delay={500}>
            <h1 class="pb-3">Skills</h1>
          </Fade>
        
          <div class="widthAdjust min-vw-100 row mx-0">    
            <div class="widthAdjust d-flex justify-content-center p-0 px-3 skills1">
              <Fade delay={1000}>
              <div>
                <img src={Git} alt="git" class="w-50 pb-3"/>
                <p class="skillsText">Git</p>
              </div>
              <div>
                <img src={Html} alt="Html" class="w-50 pb-3"/>
                <p class="skillsText">HTML</p>
              </div>
              <div>
                <img src={CSS} alt="CSS" class="w-50 pb-3"/>
                <p class="skillsText">CSS</p>
              </div>
              <div>
                <img src={Bootstrap} alt="Bootstrap" class="w-50 pb-3"/>
                <p class="skillsText">Bootstrap</p>
              </div>
              <div>
                <img src={Js} alt="Js" class="w-50 pb-3"/>
                <p class="skillsText">Javascript</p>
              </div>
              </Fade>
            </div>
          </div>

          <div class="widthAdjust min-vw-100 row mx-0">
              <div class="widthAdjust skills1 d-flex justify-content-center p-0 px-3">
              <Fade delay={1000}>
              <div>
                <img src={Mongo} alt="Mongo" class="w-50 pb-3"/>
                <p class="skillsText">MongoDB</p>
              </div>
              <div>
                <img src={Node} alt="Node" class="w-50 pb-3"/>
                <p class="skillsText">NodeJS</p>
              </div>
              <div>
                <img src={Express} alt="Express" class="w-50 pb-3"/>
                <p class="skillsText">ExpressJS</p>
              </div>
              <div>
                <img src={React} alt="React" class="w-50 pb-3"/>
                <p class="skillsText">ReactJS</p>
              </div>
              </Fade>
              </div>
          </div>
      </div>
    </div>
    
  </div>


    )
}
