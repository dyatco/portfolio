import profile from '../Images/profile.png'

export default function AboutMe(){
  return(
    <div class="min-vh-100 justify-content-center text-start">
      <div class="row min-vh-100">
       <div class="mb-0 col-6 p-0">
        
        <img src={profile} alt="profile" className="img-fluid w-75 d-flex justify-content-start ms-5"/>
        </div>
        <div class="col-6 p-0">
        <h1 class="mb-0 me-5">Developer/Explorer</h1>
       
          <p class="pb-5 me-5">   
            Hi, I'm Daphne. In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I work using with HTML, CSS, and JavaScript.<br/><br/>

            Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
          </p>
          <h1>Get in Touch</h1>
          <p class="w-75">
           I am currently looking for new opportunities. <br/>
           My inbox is always open for any comments or questions!
          </p>

           <button type="button" class="btn btn-warning w-50 mt-2" data-toggle="modal" data-target="#exampleModal">Send email</button>

              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content text-dark">
                    <div class="modal-header">
                      <h5 class="modal-title text-dark" id="exampleModalLabel">Thank you for your email!</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-warning" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
            
        </div>
        </div>
      </div>
    )
}