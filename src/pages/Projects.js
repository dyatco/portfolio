import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'

export default function Projects(){
  return(
    
  <div class="container-fluid p-0 min-vh-100 w-75 d-flex justify-content-center align-items-center text-center">
    <div class="row min-vh-100">
       <div class="mb-0 col-12  justify-content-center">
        <h1 class>Projects</h1>
        
        {/*Project 1*/}
        <div class="row min-vh-100 min-vw-100 d-flex justify-content-center pt-3">
          <div class="mb-3 d-flex">
            <div class="col-8 d-flex px-0">
              <img src={TileCalc} alt="tilecalc" class="projectPhoto w-75 pb-3"/>
            </div>
          
            <div class="col-4 d-flex text-left pl-3 pr-0 d-flex">
               <p class="w-50 mb-0">TILE CALCULATOR<br/>
               Computes how many tiles are needed to fill a floor area<br/>
               html css bootstrap
               </p>
            </div>
          </div>

          {/*Project 2*/}
          <div class="col-4 text-right pr-0 d-flex justify-content-end">
           <p class ="w-50 ">SPECIFICATIONS SHEETS<br/>
           Digital tool for recording for interior design projects<br/>
           html css bootstrap
           </p>
          </div>
      
          <div class="col-8 h-100">
            <img src={SpecSheet} alt="SpecSheet" class="projectPhoto2 container-fluid w-75"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}
