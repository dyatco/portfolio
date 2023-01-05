import profile from '../Images/profile.png'

export default function AboutMe(){
  return(
    <div class="postContainer">
        <img src={profile} alt="profile" class="profile  pe-2"/>

      
        <h1 class=" bio head mb-0 mt-5">Developer/</h1>
        <h1 class="head mb-2">Explorer</h1>
        <p class="pb-3 pe-3 me-sm-5 pl-3">   
          Hi, I'm Daphne. In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I work using with HTML, CSS, and JavaScript.<br/><br/>

          Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
        </p>
     

     <h1 id="contact" class="pt-3 d-flex justify-content-center">Get in Touch</h1>
      <p class="d-flex text-center justify-content-center px-3">
         I am currently looking for new opportunities. <br/>
         My inbox is always open for any comments or questions!
      </p>

      <div class="d-flex justify-content-center mb-5">
      <button type="button" class="btn btn-warning d-flex justify-content-center mt-2" data-toggle="modal" data-target="#exampleModal">Send email</button>
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
