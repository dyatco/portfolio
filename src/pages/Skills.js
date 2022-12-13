import { Fade } from 'react-reveal'

export default function Skills(){
  return(
    
  <div class="container-fluid p-0 min-vh-100 min-vw-100 d-flex justify-content-center text-center">
    <div class="row">
       <div class="mb-0 col-12  justify-content-center">
          <Fade delay={500}>
            <h1 class>Skills</h1>
          </Fade>
        
          <div class="min-vw-100 row">    
            <div class="skills1 d-flex w-100  col-12">
              <Fade delay={1000}>
                <p>Git</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Bootstrap</p>
                <p>Javascript</p>
              </Fade>
            </div>
          </div>

          <div class="row">
              <div class="skills1 d-flex w-100 col-12">
              <Fade delay={1000}>
                <p>MongoDB</p>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>ReactJS</p>
              </Fade>
              </div>
          </div>
      </div>
    </div>
    
  </div>


    )
}
