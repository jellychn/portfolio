import React from 'react';
import ReactJS from '../assets/icons/react.svg';
import ReactRedux from '../assets/icons/redux.svg';
import VueJS from '../assets/icons/vue.svg';
import Flutter from '../assets/icons/flutter.svg';
import SCSS from '../assets/icons/sass.svg';
import NodeJS from '../assets/icons/node.svg';
import MongoDB from '../assets/icons/mongodb.svg';
import PhotoShop from '../assets/icons/photoshop.svg';
import Python from '../assets/icons/python.svg';
import JavaScript from '../assets/icons/javascript.svg';
import Java from '../assets/icons/java.svg';
import Dart from '../assets/icons/dart.svg';

class About extends React.Component {
    render () {
        return (
            <div id='about'>
                {/* <div className='shape'/> */}
                <h1>About ME.</h1>
                <div className='about-info'>
                    <p>
                        Hi as seen above my name is Jerry and some of my expertise includes anything from
                        <p className='highlight'>WEB DEVELOPMENT.</p> 
                        to 
                        <p className='highlight'>DESIGN.</p> 
                        to 
                        <p className='highlight'>APP DEVELOPEMNT.</p>
                    </p>
                    <p>
                        I graduated from Canterbury University in Christchurch New Zealand with a Bachelors's Degree in Computer Science.
                    </p>
                </div>
                <div className='skills-container'>
                    <h1>SKILLS.</h1>
                    <h3>FONTEND</h3>
                    <h4>FRAMEWORKS</h4>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>React JS</p>
                            <img className='skill-icon' src={`${ReactJS}`} />
                        </div>
                        <div className='indicator' style={{width: '50%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>React Redux</p>
                            <img className='skill-icon' src={`${ReactRedux}`} />
                        </div>
                        <div className='indicator' style={{width: '50%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>Vue JS</p>
                            <img className='skill-icon' src={`${VueJS}`} />
                        </div>
                        <div className='indicator' style={{width: '20%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>Flutter</p>
                            <img className='skill-icon' src={`${Flutter}`} />
                        </div>
                        <div className='indicator' style={{width: '20%'}}/>
                    </div>
                    <h4>PREPROCESSORS</h4>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>SCSS</p>
                            <img className='skill-icon' src={`${SCSS}`} />
                        </div>
                        <div className='indicator' style={{width: '50%'}}/>
                    </div>
                    <h3>BACKEND</h3>
                    <h4>FRAMEWORKS</h4>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>NodeJS + ExpressJS</p>
                            <img className='skill-icon' src={`${NodeJS}`} />
                        </div>
                        <div className='indicator' style={{width: '40%'}}/>
                    </div>
                    <h4>DATABASES</h4>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>MongoDB</p>
                            <img className='skill-icon' src={`${MongoDB}`} />
                        </div>
                        <div className='indicator' style={{width: '30%'}}/>
                    </div>
                    <h3>DESIGN</h3>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>PhotoShop</p>
                            <img className='skill-icon' src={`${PhotoShop}`} />
                        </div>
                        <div className='indicator' style={{width: '10%'}}/>
                    </div>
                    <h3>LANGUAGES</h3>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>Python</p>
                            <img className='skill-icon' src={`${Python}`} />
                        </div>
                        <div className='indicator' style={{width: '40%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>JavaScript</p>
                            <img className='skill-icon' src={`${JavaScript}`} />
                        </div>
                        <div className='indicator' style={{width: '50%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>Java</p>
                            <img className='skill-icon' src={`${Java}`} />
                        </div>
                        <div className='indicator' style={{width: '10%'}}/>
                    </div>
                    <div className='skill-container'>
                        <div className='skill'>
                            <p style={{margin:'0px'}}>Dart</p>
                            <img className='skill-icon' src={`${Dart}`} />
                        </div>
                        <div className='indicator' style={{width: '30%'}}/>
                    </div>
                </div>
            </div>
        )
    }
};

export default About;