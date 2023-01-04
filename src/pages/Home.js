import { Fade } from 'react-reveal'

export default function Home(){
  return(
    
  <div id="home" class="backgroundImg container-fluid p-0 min-vh-100 min-vw-100 d-flex justify-content-center align-items-center text-center pb-5 mb-5">
    <div class="widthAdjust row ">
       <div class="widthAdjust mb-0 col-12 justify-content-center">
          <Fade delay={500}>
            <h1 class>Hi, I'm <span class="orange"> Daphne Yatco</span>,
            </h1>
            </Fade>
            <Fade delay={1500}>
            <div>
            <h3>Front-End Developer</h3>
            </div>
          </Fade>
        </div>
    </div>
  </div>

    )
}
