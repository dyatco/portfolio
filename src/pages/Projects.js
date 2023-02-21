import { Fade } from 'react-reveal'
import { Link } from "react-router-dom";
import { Card, CardGroup, Row } from 'react-bootstrap';
import CalcPage from './CalcPage';
import Portfolio from '../Images/Portfolio.png'
import PortfolioPage from './PortfolioPage';
import TileCalc from '../Images/TileCalc.png'
import SpecSheet from '../Images/SpecSheet.png'
import Tile from '../Images/tile.png'
import Spec from '../Images/spec.png'

export default function Projects(){
  return(
    <div id="projects" class="projectsContainer d-flex justify-content-center">
      <div class="d-flex flex-column text-center pb-5 mb-0 mb-md-5 px-0">
          <h1 class="d-flex justify-content-center pb-3 mb-0 pt-5 mt-0 mt-md-5"><span class="sectionText">Projects</span></h1>

       <div class="d-flex flex-column flex-md-row justify-content-center">
        {/*Project 1*/}
         <Card className="me-md-3 mb-3 border-0">
          <Link to={"/portfoliopage"}>
           <Card.Img variant="top" src={Portfolio} />
          </Link>
           <Card.Body>
             <Card.Title className="projectHead">Personal Website</Card.Title>
             <Card.Subtitle className="my-3 text-muted">This is the second iteration of the personal portfolio I made during coding bootcamp. From a static site, I turned my portfolio into a React app </Card.Subtitle>
             <div class="d-flex justify-content-center mt-auto">
              <Link to={"/portfoliopage"} >
               <Card.Body className="p-0 pe-3">Details</Card.Body>
              </Link>
              <Card.Link target="_blank" href="https://dyatco.github.io/portfolio">Link</Card.Link>
              </div>
           </Card.Body>
         </Card>
            
         {/*Project 2*/}
          <Card className="projectCard mb-3 border-0">
            <Link to={"/portfoliopage"}>
            <Card.Img variant="top" src={TileCalc} />
            </Link>
            <Card.Body className="d-flex flex-column">
              <Card.Title className="projectHead">Tile Calculator</Card.Title>
              <Card.Subtitle className="my-3 text-muted">I built this app to help those who need to find out how many tiles they need to fill a floor area. </Card.Subtitle>
              <div class="d-flex justify-content-center mt-auto">
                <Link to={"/calcpage"}>
                 <Card.Body className="p-0 pe-3">Details</Card.Body>
                </Link>
                <Card.Link target="_blank" href="https://dyatco.github.io/tileCalc">Link</Card.Link>
              </div>
            </Card.Body>
          </Card>

          {/*Project 3*/}
             <Card className="ms-md-3 mb-3 border-0">
              <Link to={"/sheetpage"}>
               <Card.Img variant="top" src={SpecSheet} />
              </Link>
               <Card.Body className="d-flex flex-column">
                 <Card.Title className="projectHead">Specifications Sheets</Card.Title>
                 <Card.Subtitle className="my-3 text-muted">This project is a responsive interface for a tool that helps interior designers  keep track of their projects</Card.Subtitle>
                 <div class="d-flex justify-content-center mt-auto">
                   <Link to={"/sheetpage"}>
                    <Card.Body className="p-0 pe-3">Details</Card.Body>
                   </Link>
                   <Card.Link target="_blank" href="https://dyatco.github.io/specSheets">Link</Card.Link>
                 </div>
               </Card.Body>
             </Card>
          </div>
        </div>
</div>
  )
}
