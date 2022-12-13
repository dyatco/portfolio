import { Fade } from 'react-reveal'
import TileCalc from '../Images/TileCalc.png'

export default function Projects(){
  return(
    
  <div class="container-fluid p-0 min-vh-100 min-vw-100 d-flex justify-content-center align-items-center text-center">
    <div class="row">
       <div class="mb-0 col-12  justify-content-center">
        <Fade delay={500}>
          <h1 class>Projects</h1>
        </Fade>

        <div class="row min-vw-100 d-flex justify-content-center">
       {/* <div class="d-flex justify-content-center">*/}
        <div class="col-6">
         <img src={TileCalc} alt="tilecalc" class="projectPhoto container-fluid w-100"/>
         </div>

         <div class="col-6 d-flex">
         <p>Project description</p>
          </div>
        </div>
       

      </div>
    </div>
  </div>

    )
}
