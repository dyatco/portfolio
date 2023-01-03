import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'
import Tile from '../Images/tile.png'
import Spec from '../Images/spec.png'

export default function Projects(){
  return(
    
  <div id="projects" class="container-fluid p-0 min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5">
      <div class="row">
       <div class="mb-0 col-12  justify-content-center">
        
        {/*Project 1*/}
        <div class="row min-vw-100 justify-content-center m-0 p-0 pt-3 h-100">
          <h1>TILE CALCULATOR</h1>
          <div class="mb-3">

            <div class="col-12 px-0 d-flex justify-content-center">
              <img src={Tile} alt="tilecalc" className="projectPhoto w-75 img-fluid"/>
            </div>
          </div>

           <div class="col-12 text-center p-0 d-flex justify-content-center">
             <p class="projectDesc">
             Computes how many tiles are needed to fill a floor area
             <p class="projectTools pt-1">html css bootstrap</p>
             </p>
            </div>

          <h1 class="pt-5">SPECIFICATIONS SHEETS</h1>

          <div class="col-12 px-0 d-flex justify-content-center">
            <img src={Spec} alt="SpecSheet" className="projectPhoto w-75 img-fluid"/>
          </div>

          <div class="col-12 text-center p-0 d-flex justify-content-center">
             <p class="projectDesc pt-3">
               Digital tool for recording for interior design projects
              <p class="projectTools pt-1">html css bootstrap</p>
             </p>
          </div>
        </div>
        {/*Project 2*/}
        
          </div>
          </div>
      </div>
  )
}
