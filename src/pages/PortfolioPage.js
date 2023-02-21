import { useEffect } from 'react';
import Portfolio from '../Images/Portfolio.png';

export default function PortfolioPage(){

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return(
		<div class="projectPage headFont">
			<img src={Portfolio} class="projectDescPhoto img-fluid"/>
			<h2 class="mb-3">Description</h2>
			<p>A digital portfolio that showcases my skills and projects, while reflecting my personality. This project has gone through several iterations and is continuosly being updated.</p>
			<h2 class="mb-3">Stack</h2>
			<ul class="ml-0 px-0 d-flex justify-content-evenly flex-wrap">
				<li class="px-1">Git</li>
				<li class="px-1">HTML</li>
				<li class="px-1">CSS</li>
				<li class="px-1">Bootstrap</li>
				<li class="px-1">Javascript</li>
				<li class="px-1">React</li>
			</ul>
			<h2 class="mb-3">Purpose/Goal</h2>
			<p>The purpose of this project is to build a portfolio that is simple and functional for users. My goal was also to create a calming mood through the use of colors inspired by nighttime.</p>
			<h2 class="mb-3">Web Stack Explanation</h2>
			<p>Initially, my portfolio was made using HTML, CSS, and Bootstrap. As I picked up more skills, I incorporated more of what I learned. From a static webpage, I edited the code and used JavaScript and React to make my site responsive and more efficient.</p>
			<h2 class="mb-3">Problems, Solutions, Improvements</h2>
			<p>One of the things I struggled with was making sure the site looks polished on different viewports. With time and research, I learned how to make my site responsive and presentable. An improvement I would like to make is with the user experience. For example, elements with links can be more interactive with hover effects to bring more life to the site. </p>
		</div>

	)
}