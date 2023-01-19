import { Fade } from 'react-reveal'
import profile from '../Images/profile.png'
import github from '../Images/github.png'
import gitlab from '../Images/gitlab.png'
import ig from '../Images/ig.png'

export default function AboutMe(){
  return(
    <Fade delay={500}>
    <div class="postContainer widthAdjust">
      <img src={profile} alt="profile" id="about" class="profile pl-0 pr-2"/>
      <div class="d-md-flex widthAdjust">
        <h1 class="sectionText head mb-0 pt-5 mt-md-5">Developer/</h1>
        <h1 class="sectionText head mb-2 pt-md-5 mt-md-5">Explorer</h1>
      </div>
      <p class="aboutText pb-3 pb-lg-5 mb-lg-5 px-5">
        Hi, I'm Daphne. In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I like bringing ideas to life in the browser using lines of code. I am continuously learning and improving my craft.<br/><br/>

        Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
      </p>

      <h1 id="contact" class="sectionText pt-5 pb-3 d-flex justify-content-center">Get in Touch</h1>

      <div class="contactContainer">
        <div class="contactCol1">
          <p class="pText contactText px-5">
             I'm currently looking for new opportunities! <br/><br/>
             My inbox is always open for any comments or questions.
          </p>

          <form action="https://google.com">
            <div class="emailForm px-5 pb-5 container-fluid">
              <label for="full_name">Full Name:</label>
              <input type="text" name="full_name" id="full_name" class="emailInput rounded mb-3"/>

              <label for="emailadd">Email Address:</label>
              <input type="email" name="emailadd" id="emailadd" class="emailInput rounded mb-3"/>

              <label for="message">Message:</label>
              <textarea name="message" rows="3" id="message" class="emailInput rounded"></textarea>
           
              <button type="button" class="button mt-4" data-toggle="modal" data-target="#exampleModal">Send</button>
            </div>
          </form>

        </div>
    </div>

    {/*Modal*/}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content text-dark">
            <div class="modal-header">
              <h5 class="modal-title text-dark" id="exampleModalLabel">Thank you for your email!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-footer ">
              <button type="button" class="btn btn-warning " data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="footer d-flex justify-content-center pt-1">
        <a href="https://gitlab.com/dyatco">
        <img src={gitlab} alt="gitlab" class="icon"/>
        </a>
        <a href="https://github.com/dyatco">
        <img src={github} alt="github" class="icon" />
        </a>
        <a href="https://www.instagram.com/daphyat/">
        <img src={ig} alt="ig" class="icon"/>
        </a>
      </div>

    </div>
   
    </Fade>
    


    )
}
