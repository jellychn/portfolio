import React from 'react';
import linkedIn from '../assets/linkedin.svg';
import gitHub from '../assets/github.svg';
import instagram from '../assets/instagram.svg';

class Social extends React.Component {
    render () {
        return (
            <div className='social-media-container'>
                <div className='social-icon-container'>
                    <a href='https://github.com/jellychn' target='_blank'>
                        <div className='social-icon' style={{backgroundImage: `url(${gitHub})`}}/>
                    </a>
                    <a href='https://www.linkedin.com/in/jerry-chen-3235171b4' target='_blank'>
                        <div className='social-icon' style={{backgroundImage: `url(${linkedIn})`}}/>
                    </a>
                    <a href='https://www.instagram.com/jelly.chn/' target='_blank'>
                        <div className='social-icon' style={{backgroundImage: `url(${instagram})`}}/>
                    </a>
                </div>
            </div>
        )
    }
};

export default Social;