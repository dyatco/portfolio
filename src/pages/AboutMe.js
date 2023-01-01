export default function AboutMe(){
  return(
    <div class="min-vh-100 justify-content-center text-center">
      <div class="row min-vh-100">
       <div class="mb-0 col-12  justify-content-center">
        <h1>About Me</h1>
        <div class="min-vw-100 row d-flex justify-content-center">
        <p class="w-75 pb-5">   
          In August 2022, I took an intensive bootcamp in web development and found myself enjoying the front-end side of coding. I work using with HTML, CSS, and JavaScript.

          Apart from being a web developer, I am also an explorer. I love discovering places and trying new things.
        </p>
        <h1>Get in Touch</h1>
        <p class="w-75 pb-5">
         I am currently looking for new opportunities. <br/>
         My inbox is always open for any comments or questions!
        </p>

         <button type="button" class="w-100 mt-2" data-toggle="modal" data-target="#exampleModal">Send email</button>

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
    </div>
    )
}