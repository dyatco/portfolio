import { useEffect } from 'react';
import SpecSheet from '../Images/SpecSheet.png';

export default function CalcPage(){

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return(
		<div class="projectPage headFont">
			<img src={SpecSheet} class="projectDescPhoto img-fluid"/>
			<h2 class="mb-3">Description</h2>
			<p>A tool for recording interior design projects to help designers keep track of their work.</p>
			<h2 class="mb-3">Stack</h2>
			<ul class="ml-0 px-0 d-flex justify-content-evenly flex-wrap">
				<li class="px-1">Git</li>
				<li class="px-1">HTML</li>
				<li class="px-1">CSS</li>
				<li class="px-1">Bootstrap</li>
			</ul>
			<h2 class="mb-3">Purpose/Goal</h2>
			<p>The purpose of this project is to help designers keep track of the materials they use in their projects. Users can input a project and in each project is a sheet listing details of furniture and accessories.</p>
			<h2 class="mb-3">Web Stack Explanation</h2>
			<p>The first iteration of this project is a template to give users an idea of how the tool looks like. I used HTML, CSS, and Bootstrap.</p>
			<h2 class="mb-3">Problems, Solutions, Improvements</h2>
			<p>One of the challenges I faced was coding a dynamic sidebar. It took time to create a navigation bar that switches from a left side layout in large screens to a pill type at the top center of the body. This tool can be improved by adding CRUD operations.</p>
		</div>
	)
}