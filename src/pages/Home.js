import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Fade } from 'react-reveal'

export default function Home(){
  return(
    
    <div class="container-fluid p-0">
      <div class="row min-vh-100 mx-md-5 mt-5 pt-5 px-5 pb-0">
       <div class="my-5 col-12 col-md-0 my-md-0"></div>
         <div class="mb-0 col-12 col-md-4 mr-auto">
         <Fade>
         <h1 class="w-50 mb-0">DAPHNE YATCO
          <span class="orange">.</span>
         </h1>
         </Fade>
         {/*<div class="line"></div>
        <h5 class="w-75 pt-5">DEVELOPER | DESIGNER | ADVENTURER</h5>*/} 
        </div>
      </div>
    </div>

    )
}
