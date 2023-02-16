import { Fade } from 'react-reveal'
import profile from '../Images/profile.png'

export default function AboutMe(){
return(
    

    <div class="aboutContainer widthAdjust mt-0 mt-md-5 pt-5">
      <img src={profile} alt="profile" id="about" class="profile pl-0 pr-2"/>
      <div class="d-md-flex widthAdjust">
        <h1 class="sectionText head mb-0 pt-5 mt-md-5">Developer/</h1>
        <h1 class="sectionText head mb-0 pt-md-5 mt-md-5 pb-3">Explorer</h1>
      </div>
      <p class="aboutText pb-5 mb-0 mb-md-5 pb-lg-5 mb-lg-5">
        Hi, I'm Daphne. In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I like bringing ideas to life in the browser using lines of code. I am continuously learning and improving my craft.<br/><br/>

        Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
      </p>

      {/*Get in Touch*/}
      <h1 id="contact" class="sectionText mb-0 pb-3 d-flex justify-content-center pt-5">Get in Touch</h1>
      <div class="d-flex flex-column align-items-center flex-md-row align-items-md-start text-center">
        <p class="pText px-md-5 mb-0 pb-4 text-md-start">
           I'm currently looking for new opportunities! <br/><br/>
           My inbox is always open for any comments or questions.
        </p>

        <form action="https://formsubmit.co/dyatco@gmail.com" method="POST">
          <div class="emailForm px-md-5 pb-5 mb-md-5 container-fluid">
            <label for="full_name">Full Name:</label>
            <input type="text" name="full_name" id="full_name" class="emailInput rounded mb-3" required/>

            <label for="emailadd">Email Address:</label>
            <input type="email" name="emailadd" id="emailadd" class="emailInput rounded mb-3" required/>

            <label for="message">Message:</label>
            <textarea name="message" rows="3" id="message" class="emailInput rounded" required></textarea>
         
            <button type="submit" id="btn" class="button mt-4" data-toggle="modal" data-target="#exampleModal">Send</button>
          </div>
        </form>
      </div>
  </div>
  )
}
