import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'

export default function Projects(){
  return(
    
  <div class="container-fluid p-0 min-vh-100 w-75 d-flex justify-content-center align-items-center text-center">
    <div class="row min-vh-100">
       <div class="mb-0 col-12  justify-content-center">

        <Fade delay={500}>
          <h1 class>Projects</h1>
        </Fade>
        {/*Project 1*/}

        <div class="row min-vw-100 d-flex justify-content-center h-100 pt-3">

          <div class="col-8 d-flex ">
         
            <img src={TileCalc} alt="tilecalc" class="projectPhoto container-fluid w-75 pb-3"/>
          
          </div>

          <div class="h-75 col-4 d-flex text-left pl-0">
           <p class="w-75">Project description</p>
          </div>


          {/*Project 2*/}
          <div class="col-4 text-right pr-0">
           <p>Project description</p>
          </div>
      
          <div class="col-8 h-100">
            <img src={TileCalc} alt="tilecalc" class="projectPhoto2 container-fluid w-75"/>
          </div>
        </div>

        
      </div>
    </div>
  </div>

  )
}
