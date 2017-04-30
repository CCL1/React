import React, { Component } from 'react';
import $ from "jquery";
import './detail.css';
import per from "./img/style.png"
class Detail extends Component {
	componentDidMount(){
		var sections = document.querySelectorAll('section');
		function getNextSlideIndex() {
		  var next_slide_index;
		  Array.prototype.forEach.call(sections, function(section, index) {
		    if (section.classList.contains('active')) {
		      next_slide_index = (index + 1);
		    }
		  });
           return next_slide_index < sections.length ? next_slide_index : -1;
		}	
		function sectionsHandler(section, index) {
		  section.addEventListener('click', sectionClickHandler);
		}	
		function sectionClickHandler() {
		  var next_slide_index = getNextSlideIndex.call(this);
		  if (this.classList.contains('active')) {
		    if (next_slide_index > -1) {
		      sections[next_slide_index].classList.add('active');
		    }
		    this.classList.add('leave');
		    this.classList.remove('active');
		  }
		}
		function resetHandler() {
		  for (var i = sections.length - 1; i >= 0; i--) {
		    (function(index) {
		      sections[index].classList.remove('leave');
		      sections[index].scrollTop = 0;
		    }(i));
		  }
		  sections[0].classList.add('active');
		}	
		Array.prototype.forEach.call(sections, sectionsHandler);
		document.querySelector('i').addEventListener('click', resetHandler);  
	};
	render() {
	    return (
	    <div className="Detail">
	       	<header>
				<ul className="nav">
					<li><a>Home</a></li>
					<li><a>About</a></li>
				</ul>
				<h1>Congcong</h1>
			</header>			
			<div className="banner">
				<div className="all">
					<section className="active">
					    <article>
					      <h1>HTML+CSS</h1>
							<p>对W3C标准有深刻的认识，尤其是语义化标签，已习惯性使用HTML5标签。能熟练运用CSS完成各种类型的网页布局，包括当前流行的响应式布局。对使用CSS3提升用户体验有浓厚兴趣，喜欢使用CSS3解决过去js达到的效果，曾经常在实际项目中实践(如:transiton、keyframes等)</p>
					    	<p><br /><br /><br /><br /><br /><br /><br /><br /></p>
					    </article>
					</section>
				    <section>
				        <article>
				            <h1>JavaScript</h1>
						    <p>精通JavaScript原生编程，对面向对象编程有丰富经验，可进行高效模块化开发，并保证良好复用和维护性。可熟练使用MVC框架(如BackBone.js)进行复杂单页面应用开发。对编写jQuery组件有丰富经验。</p>
				    	    <p><br /><br /><br /><br /><br /><br /><br /><br /></p>
				        </article>
				    </section>
				    <section>
				    	<article>
				 			<h1>Node.js</h1>
							<p>能使用Node.js+MongoDB完成网站后端开发，目前正在利用空闲时间开发某网站项目。</p>
				    		<p><br /><br /><br /><br /><br /><br /><br /><br /></p>
				   		</article>
				    </section>
				  	<section>
					    <article>
					 		<h1>三大框架</h1>
							<p>熟悉三大框架 angular react vue ,能够使用其进行相关项目的开发</p>
					    	<p><br /><br /><br /><br /><br /><br /><br /><br /></p> 
					   </article>
				  	</section>
				</div>
			</div> 
			<i className="button1">Again</i>
			<div className="hover">
				<h3>联系我</h3>
				<p>Email: 15738665720@163.com</p>
				<p>QQ:1311582793</p>
			</div>	
			<div className='puppy'>
			    <div className='hide'></div>
			    <div className='wrap'>
			   	    <div className='body'></div>
			        <div className='tail'></div>
			        <div className='head'>
			            <div className='head_eyebrow'>
			            	<div className='head_eyebrow__left'></div>
			            	<div className='head_eyebrow__right'></div>
			        	</div>
			        	<div className='head_ear'>
			            	<div className='head_ear__left'></div>
			            	<div className='head_ear__right'></div>
			        	</div>
				    	<div className='head_earfold'>
				        	<div className='head_earfold__left'></div>
				        	<div className='head_earfold__right'></div>
				    	</div>
			        	<div className='head_eye'>
			            	<div className='head_eye__left'>
			                	<div className='iris'></div>
			                	<div className='pupil'></div>
			           		</div>
				        	<div className='head_eye__right'>
				            	<div className='iris'></div>
				            	<div className='pupil'></div>
				        	</div>
			        	</div>
			        	<div className='head_tongue'></div>
			        	<div className='head_nose'></div>
			        	<div className='head_top'></div>
			        	<div className='head_bottom'>
			        		<div className='head_bottom__left'></div>
			        		<div className='head_bottom__right'></div>
			        	</div>
			        	<div className='head_mouth'>
			            	<div className='head_mouth__left'></div>
			            	<div className='head_mouth__right'></div>
			            	<div className='head_mouth__top'></div>
			        	</div>
			    	</div>
				</div>
			</div>
		</div>
	    );
	}
}

export default Detail;
