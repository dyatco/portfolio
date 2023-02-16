import github from '../Images/github.png';
import gitlab from '../Images/gitlab.png';
import ig from '../Images/ig.png';

export default function footer() {
	return(
		<>
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
	    <div class="d-flex justify-content-center">
	    	<p class="footer py-3 px-3 w-100">Page built using HTML, CSS, Bootstrap, Javascript, React</p>
	    </div>
	    </>
    )
}