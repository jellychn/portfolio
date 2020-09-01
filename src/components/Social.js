import React from 'react';
import linkedIn from '../assets/linkedin.svg';
import gitHub from '../assets/github.svg';
import cv from '../assets/cv.svg';

class Social extends React.Component {
    state = {
        git: false,
        linkedIn: false,
        cv: false
    };

    onHover = (e) => {
        console.log(e.target.getAttribute('name'))
        if (e.target.getAttribute('name') === 'git') {
            this.setState({git:true, linkedIn:false, cv:false});
        } else if (e.target.getAttribute('name') === 'linkedIn') {
            this.setState({git:false, linkedIn:true, cv:false});
        } else if (e.target.getAttribute('name') === 'cv') {
            this.setState({git:false, linkedIn:false, cv:true});
        }
    };

    onLeave = () => {
        this.setState({git:false, linkedIn:false, cv:false});
    };

    render () {
        return (
            <div className='social-media-container'>
                <div className='social-icon-container'>
                    <a className='social-icon-wrapper' href='https://github.com/jellychn' target='_blank'>
                        <div className='social-icon' style={{backgroundImage: `url(${gitHub})`}} onMouseEnter={(e) => {this.onHover(e)}} onMouseLeave={this.onLeave} name='git'/>
                        <p style={{display: this.state.git ? 'block':'none'}}>GitHub</p>
                    </a>
                    <a className='social-icon-wrapper' href='https://www.linkedin.com/in/jerry-chen-3235171b4' target='_blank'>
                        <div className='social-icon' style={{backgroundImage: `url(${linkedIn})`}} onMouseEnter={(e) => {this.onHover(e)}} onMouseLeave={this.onLeave} name='linkedIn'/>
                        <p style={{display: this.state.linkedIn ? 'block':'none'}}>LinkedIn</p>
                    </a>
                    <div className='social-icon-wrapper'>
                        <div className='social-icon' onClick={this.props.openModal} style={{backgroundImage: `url(${cv})`}} onMouseEnter={(e) => {this.onHover(e)}} onMouseLeave={this.onLeave} name='cv'/>
                        <p style={{display: this.state.cv ? 'block':'none'}}>CV</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Social;