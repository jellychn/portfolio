import React from 'react';

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
                    <p>ReactJS</p>
                    <div className='indicator' style={{width: '50%'}}/>
                    <p>React REDUX</p>
                    <div className='indicator' style={{width: '50%'}}/>
                    <p>VueJS</p>
                    <div className='indicator' style={{width: '20%'}}/>
                    <h4>PREPROCESSORS</h4>
                    <p>SCSS</p>
                    <div className='indicator' style={{width: '50%'}}/>
                    <h3>BACKEND</h3>
                    <h4>FRAMEWORKS</h4>
                    <p>NodeJS + ExpressJS</p>
                    <div className='indicator' style={{width: '40%'}}/>
                    <h4>DATABASES</h4>
                    <p>MongoDB</p>
                    <div className='indicator' style={{width: '30%'}}/>
                    <h3>DESIGN</h3>
                    <p>PhotoShop</p>
                    <div className='indicator' style={{width: '10%'}}/>
                    <h3>LANGUAGES</h3>
                    <p>Python</p>
                    <div className='indicator' style={{width: '20%'}}/>
                    <p>JavaScript</p>
                    <div className='indicator' style={{width: '50%'}}/>
                    <p>Java</p>
                    <div className='indicator' style={{width: '10%'}}/>
                </div>
            </div>
        )
    }
};

export default About;