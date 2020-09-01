import React from 'react';
import UIProject from '../components/UIProject';
import QuoteProject from '../components/QuotesProject';

class Expreience extends React.Component {
    render () {
        return (
            <div id='experience'>
                <div className='projects'>
                    <h1>PROJECTS.</h1>
                    <UIProject/>
                    <QuoteProject/>
                </div>
            </div>
        )
    }
};

export default Expreience;