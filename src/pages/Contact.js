import React from 'react';

class Contact extends React.Component {
    render () {
        return (
            <div id='contact'>
                {/* <div className='shape-right'/> */}
                {/* <div className='shape-left'/> */}
                <div className='contact-info'>
                    <h1>CONTACT ME.</h1>
                    <p>I'm currently available to work, click below and ill respond to you as soon as I can.</p>
                    <a href = "mailto: jchen123.862@gmail.com">
                        <button>CLICK ME.</button>
                    </a>
                </div>
            </div>
        )
    }
};

export default Contact;