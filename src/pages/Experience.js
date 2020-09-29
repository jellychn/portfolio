import React from 'react';
import SyloProject from '../components/SyloProject';
import UIProject from '../components/UIProject';
import QuoteProject from '../components/QuotesProject';

class Expreience extends React.Component {
    render () {
        return (
            <div id='experience'>
                <div className='projects'>
                    <h1>PROJECTS.</h1>
                    <SyloProject/>
                    <UIProject/>
                    <QuoteProject/>
                </div>
            </div>
        )
    }
};

export default Expreience;