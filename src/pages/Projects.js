import { Fade } from 'react-reveal'
import { Card, CardGroup } from 'react-bootstrap';
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'
import Tile from '../Images/tile.png'
import Spec from '../Images/spec.png'

export default function Projects(){
  return(
    <div id="projects" class="container-fluid min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5">
      <div class="row">
        <div class="col-12">
        <Fade delay={500}>
          <h1><span class="sectionText">Projects</span></h1>
        </Fade>

        <div className="row">
          <div>
            <div>
              {/*Project 1*/}
              <a target="_blank" href="https://dyatco.github.io/portfolio/">
               <Card style={{ width: '18rem' }} className="mx-5 h-100">
                 <Card.Img variant="top" src={TileCalc} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title className="projectHead">Personal Website</Card.Title>
                   <Card.Subtitle className="my-2 text-muted">Card Subtitle</Card.Subtitle>
                   <div className="mt-auto">
                     <Card.Link href="#">About</Card.Link>
                     <Card.Link href="#">Site</Card.Link>
                   </div>
                 </Card.Body>
               </Card>
              </a>
            </div>
          </div>
        </div>

        <div className="row">
          <div>
            <div>
             {/*Project 2*/}
              <a target="_blank" href="https://dyatco.github.io/tileCalc/">
              <Card style={{ width: '18rem' }} className="mx-5 h-100">
                <Card.Img variant="top" src={TileCalc} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="projectHead">Tile Calculator</Card.Title>
                  <Card.Subtitle className="my-2 text-muted">Computes how many tiles are needed to fill a floor area</Card.Subtitle>
                  <div className="mt-auto">
                    <Card.Link href="#">About</Card.Link>
                    <Card.Link href="#">Site</Card.Link>
                  </div>
                </Card.Body>
              </Card>
              </a>
            </div>
          </div> 
        </div>

        <div className="row">
          <div>
            <div>
            {/*Project 3*/}
              <a target="_blank" href="https://dyatco.github.io/specSheets/">
               <Card style={{ width: '18rem' }} className="mx-5 h-100">
                 <Card.Img variant="top" src={SpecSheet} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title className="projectHead">Specifications Sheets</Card.Title>
                   <Card.Subtitle className="my-2 text-muted">Digital tool for recording for interior design projects</Card.Subtitle>
                   <div className="mt-auto">
                     <Card.Link href="#">About</Card.Link>
                     <Card.Link href="#">Site</Card.Link>
                   </div>
                 </Card.Body>
               </Card>
               </a>
             </div>
          </div>
        </div>

  </div>
</div>
  </div>
  )
}
