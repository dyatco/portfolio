import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'
import Tile from '../Images/tile.png'
import Spec from '../Images/spec.png'

export default function Projects(){
  return(
    
  <div id="projects" class="container-fluid p-0 min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5">
      <div class="widthAdjust row">
       <div class="widthAdjust mb-0 col-12 d-flex justify-content-center">
        
        {/*Project 1*/}
        <div class="row min-vw-100 m-0 p-0 pt-5">
          <Fade delay={500}>
            <h1><span class="sectionText">Projects</span></h1>
          </Fade>

          <Fade delay={500}>
            <p class="pText pb-3 px-5">I used my passion for design as an inspiration for these projects</p>
            <h1><span class="projectHead">Tile Calculator</span></h1>
            <div class="mb-3">
              <div class="col-12 px-0">
                <a href="https://dyatco.github.io/tileCalc/">
                  <img src={Tile} alt="tilecalc" className="projectPhoto w-75 img-fluid"/>
                </a>
              </div>
            </div>

             <div class="widthAdjust col-12 text-center p-0">
               <p class="pText widthAdjust px-5">
               Computes how many tiles are needed to fill a floor area
               <p class="projectTools pt-1 pb-5">powered by: HTML, CSS, Bootstrap, Javascript, and Spline</p>
               </p>
              </div>

            {/*Project 2*/}
            <h1><span class="projectHead">Specifications Sheets</span></h1>

            <div class="col-12 px-0">
             <a href="https://dyatco.github.io/specSheets/index.html">
              <img src={Spec} alt="SpecSheet" className="projectPhoto w-75 img-fluid"/>
              </a>
            </div>

            <div class="col-12 text-center p-0">
               <p class="pText pt-3 px-5">
                 Digital tool for recording for interior design projects
                <p class="projectTools pt-1 pb-5">powered by: HTML, CSS, and Bootstrap</p>
               </p>
            </div>
            </Fade>
          </div> 
        </div>
       </div>
      </div>
  )
}
