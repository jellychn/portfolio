import React from 'react';

class Home extends React.Component {
    render () {
        return (
            <div id='home'>
                {/* <div className='shape-left'/> */}
                {/* <div className='shape-right'/> */}
                <div className='home-info'>
                    <p>HELLO, I'M</p>
                    <h1 className='name'>JERRY CHEN</h1>
                    <h1>AND I ENJOY ANYTHING WEB.</h1>
                    <p className='bio'>
                        I'M A COMPUTER SCIENCE GRADUATE WHO 
                        ENJOYS PROGRAMMING AND DESIGN.
                    </p>
                </div>
            </div>
        )
    }
};

export default Home;