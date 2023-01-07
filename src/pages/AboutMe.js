import profile from '../Images/profile.png'

export default function AboutMe(){
  return(
    <div class="postContainer widthAdjust">
      <img src={profile} alt="profile" class=" profile pe-2"/>
      <div class="d-md-flex">
        <h1 class="head mb-0 pt-5">Developer/</h1>
        <h1 class="head mb-2 pt-md-5">Explorer</h1>
      </div>
      <p class="pText pb-3 pb-lg-5 mb-lg-5 px-3 mx-0 ">
        Hi, I'm Daphne. In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I work using with HTML, CSS, and JavaScript.<br/><br/>

        Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
      </p>
      <h1 id="contact" class="pt-3 pt-lg-5 d-flex justify-content-center">Get in Touch</h1>
      <p class="pText d-flex text-center justify-content-center px-3">
         I am currently looking for new opportunities. <br/>
         My inbox is always open for any comments or questions!
      </p>

      <div class="d-flex justify-content-center mb-5">
        <button type="button" class="button" data-toggle="modal" data-target="#exampleModal">Send email</button>
      </div>

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
    </div>
    )
}
