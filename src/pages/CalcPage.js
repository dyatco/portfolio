import { useEffect } from 'react';
import TileCalc from '../Images/TileCalc.png';

export default function CalcPage(){

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return(
		<div class="projectPage headFont">
			<img src={TileCalc} class="projectDescPhoto img-fluid"/>
			<h2 class="mb-3">Description</h2>
			<p>A tool that calculates how many tiles are needed to fill a specified floor area</p>
			<h2 class="mb-3">Stack</h2>
			<ul class="ml-0 px-0 d-flex justify-content-evenly flex-wrap">
				<li class="px-1">Git</li>
				<li class="px-1">HTML</li>
				<li class="px-1">CSS</li>
				<li class="px-1">Bootstrap</li>
				<li class="px-1">Javascript</li>
				<li class="px-1">Spline</li>
			</ul>
			<h2 class="mb-3">Purpose/Goal</h2>
			<p>The purpose of this project is to help people determine how many floor tiles they need to fill a floor space. It is meant to make the process more efficient as users no longer need to do multiple step calculations. They only need to input the tile and floor measurements.</p>
			<h2 class="mb-3">Web Stack Explanation</h2>
			<p>I used JavaScript to make the calculations. I have been interested in incorporating 3d elements into a project. I used Spline to model the tile and room images. Adding these models help users visualize as the use the tool.</p>
			<h2 class="mb-3">Problems, Solutions, Improvements</h2>
			<p>One of the things I struggled with in making the app is the complexity of calculations I will need to incorporate into the code. To solve this issue, I indicated what unit of measurement users need to input. This eliminates calculations needed if they input data with different units of measurements. This is a band aid solution to show that the tool is functional. The calculator can be improved if users can input data in various units.</p>
		</div>

	)
}