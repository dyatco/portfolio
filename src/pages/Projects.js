import { Fade } from 'react-reveal'
import { Link } from "react-router-dom";
import { Card, CardGroup, Row } from 'react-bootstrap';
import Portfolio from '../Images/Portfolio.png'
import PortfolioPage from './PortfolioPage';
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'
import Tile from '../Images/tile.png'
import Spec from '../Images/spec.png'

export default function Projects(){
  return(
    <div class="container-fluid min-vh-75 min-vw-100 d-flex justify-content-center text-center pb-5">
      <div class="row">
        <div class="col-12">
        <Fade delay={500}>
          <h1 class="pb-5"><span class="sectionText">Projects</span></h1>
        </Fade>

       <Row class="d-flex flex-column flex-md-row" xs={1} md={3}>
              {/*Project 1*/}
              <>
               <Card className="projCard mx-md-1 mx-lg-3 mx-xl-5 h-100 mb-5 px-0">
                <Link to={"/portfoliopage"}>
                 <Card.Img variant="top" src={Portfolio} />
                </Link>
                 <Card.Body className="d-flex flex-column">
                   <Card.Title className="projectHead">Personal Website</Card.Title>
                   <Card.Subtitle className="my-2 text-muted">This is the second iteration of the personal portfolio I made during coding bootcamp. From a static site, I turned my portfolio into a React app </Card.Subtitle>
                   <div className="mt-auto">
                    <Link to={"/portfoliopage"}>
                     <Card.Body>Details</Card.Body>
                    </Link>
                    <Card.Link href="https://dyatco.github.io/portfolio">Link</Card.Link>
                   </div>
                 </Card.Body>
               </Card>
              </>
            
             {/*Project 2*/}
              <a target="_blank" href="https://dyatco.github.io/tileCalc/" class="px-0">
              <Card className="projCard mx-md-1 mx-lg-3 mx-xl-5 h-100 mb-5">
                <Card.Img variant="top" src={TileCalc} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="projectHead">Tile Calculator</Card.Title>
                  <Card.Subtitle className="my-2 text-muted">I built this app to help those who need to find out how many tiles they need to fill a floor area. </Card.Subtitle>
                  <div className="mt-auto">
                    <Card.Link href="#">Details</Card.Link>
                    <Card.Link href="#">Link</Card.Link>
                  </div>
                </Card.Body>
              </Card>
              </a>

            {/*Project 3*/}
              <a target="_blank" href="https://dyatco.github.io/specSheets/" class="px-0">
               <Card className="projCard mx-md-1 mx-lg-3 mx-xl-5 h-100 mb-5">
                 <Card.Img variant="top" src={SpecSheet} />
                 <Card.Body className="d-flex flex-column">
                   <Card.Title className="projectHead">Specifications Sheets</Card.Title>
                   <Card.Subtitle className="my-2 text-muted">This project is a responsive interface for a tool that helps interior designers  keep track of their projects</Card.Subtitle>
                   <div className="mt-auto">
                     <Card.Link href="#">Details</Card.Link>
                     <Card.Link href="#">Link</Card.Link>
                   </div>
                 </Card.Body>
               </Card>
               </a>
          </Row>

  </div>
</div>
  </div>
  )
}
