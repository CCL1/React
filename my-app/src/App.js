import React, { Component } from 'react';
import {Link} from "react-router";
import $ from "jquery";
import './App.css';
import per from "./img/style.png"


class App extends Component {
	render() {
	    return (
	    <div className="App">
		    <div className='section'>
			    <div className='masthead-image' id='master-container'>
			        <div className='content center'>
			            <h1 id='master'>
			              <div>Hello</div>
			              <div id='master-container-scroller'>
			                <div className='master-container-scroller_item'>
			                  <a className='cta-link' href='#'>Friend</a>.
			                </div>
			                <div className='master-container-scroller_item'>
			                  <a className='cta-link' href='#'>Enemy</a>.
			                </div>
			                <div className='master-container-scroller_item'>
			                  <a className='cta-link' href='#'>Frenemy</a>.
			                </div>
			                <div className='master-container-scroller_item'>
			                  <a className='cta-link' href='#'>Brother</a>.
			                </div>
			                <div className='master-container-scroller_item'>
			                  <a className='cta-link' href='#'>Sister</a>.
			                </div>
			                <div className='master-container-scroller_item'>Friend.</div>
			            </div>
			            <div>Nice to see you.</div>
			            </h1>
			        </div>
			    </div>
			    <button>
				  <span className="shadow">
				    <span className="vert">
				      <span className="floating">
				        <span className="front"><Link to="/detail">Click me !</Link></span>
				        <span className="back">Anywhere else...</span>
				      </span>
				    </span>
				  </span>
				</button>
				<div className="jianjie">
					<h3>个人简介</h3>
					<p><span>姓名:</span>李聪 </p>
					<p><span>爱好:</span>敲代码</p>
					<p><span>工作经历:</span>从事前端开发两年多曾参与多个类型项目的开发，如电商类、管理系统类、社区类等，在项目中主要负责项目概要设计、UI原型设计、考虑如何提高软件体验度、前端架构的搭建、自定义组件的编写，并且让WEB端的内容与后端实现，功能集成与交互。</p>
					<p><span>个人语录:</span>勇敢去闯，万一你成功了，自己会很开心，即使你失败了，也能让别人开心！ </p>
				</div>
				<div className="per"><img src={per} /></div>
			</div>
		</div>
	    );
	}
}
export default App;

