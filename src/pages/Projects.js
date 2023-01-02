import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'

export default function Projects(){
  return(
    
  <div class="container-fluid p-0 min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5">
      <div class="row">
       <div class="mb-0 col-12  justify-content-center">
        <h1>Projects</h1>
        
        {/*Project 1*/}
        <div class="row min-vw-100 justify-content-center m-0 p-0 pt-3 container-fluid h-100">
          <div class="mb-3 h-100 d-sm-flex">
            <div class="col-12 col-sm-8 px-0 pb-sm-5 mb-sm-5 d-sm-flex justify-content-end">
              <img src={TileCalc} alt="tilecalc" className="projectPhoto w-75 img-fluid"/>
            </div>
          
            <div class="col-sm-4 text-center text-sm-start p-0 ps-sm-3 d-flex justify-content-center justify-content-sm-start">
               <p class="projectText w-50 mb-0 mt-3 mt-sm-0">TILE CALCULATOR<br/>
               Computes how many tiles are needed to fill a floor area<br/>
               html css bootstrap
               </p>
            </div>
          </div>
        </div>
        {/*Project 2*/}

      </div>
      </div>
  </div>
  )
}

 
          {/*
           {/*<p class ="w-50 ">SPECIFICATIONS SHEETS<br/>
           Digital tool for recording for interior design projects<br/>
           html css bootstrap
           </p>*/}
          {/*</div>
      
          <div class="col-8 h-100">
            <img src={SpecSheet} alt="SpecSheet" class="projectPhoto2 w-75"/>
          </div>
          </div>*/}