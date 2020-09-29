import React from 'react';
import ui_project0 from '../assets/sylo-project/light-display.JPG'; 
import ui_project1 from '../assets/sylo-project/dark-display.JPG';
import ui_project2 from '../assets/sylo-project/light-view.JPG';
import ui_project3 from '../assets/sylo-project/dark-view.JPG';

class SyloProject extends React.Component {
    state = {
        projectImages: [ui_project0, ui_project1, ui_project2, ui_project3],
        number: 0,
        next: false,
        prev: false,
        changed: false
    }

    componentDidMount () {
        this.check();
    };

    componentDidUpdate () {
        if (this.state.changed) {
            this.check();
        }
    };

    check = () => {
        if (this.state.number === 0) {
            this.setState({prev:false});
        } else {
            this.setState({prev:true});
        }

        if (this.state.number === this.state.projectImages.length - 1) {
            this.setState({next:false});
        } else {
            this.setState({next:true});
        }

        this.setState({changed:false});
    };

    next = () => {
        if (this.state.number < this.state.projectImages.length - 1) {
            this.setState({number: this.state.number + 1, changed: true});
        }
    };

    prev = () => {
        if (this.state.number > 0) {
            this.setState({number: this.state.number - 1, changed: true});
        }
    }
    
    render () {
        return (
            <div className='project'>
                <div className='project-core'>
                    <div className='left'>
                        <div className='carousel'>
                            <p className='prev' onClick={this.prev} style={{color: this.state.prev ? '#1C1B20':'#eee', cursor: this.state.prev ? 'pointer':'default'}}>PREV</p>
                            <p className='next' onClick={this.next} style={{color: this.state.next ? '#1C1B20':'#eee', cursor: this.state.next ? 'pointer':'default'}}>NEXT</p>
                        </div>
                        <div className='img-container' style={{backgroundImage: `url(${this.state.projectImages[this.state.number]})`}}/>
                    </div>
                    <div className='right'>
                        <p className='project-status'>COMPLETED</p>
                        <h2>SYLO PROJECT</h2>
                        <p className='explaination'>
                            Cryptocurrency app tracker
                        </p>
                        <div className='technologies'>
                            <p className='tech'>React Native</p>
                            <p className='tech'>TypeScript</p>
                        </div>
                    </div>
                </div>
                <div className='project-links'>
                    <a href='https://github.com/jellychn/sylo-test' target='_blank'>
                        <p>GIT</p>
                    </a>
                </div>
            </div>
        )
    }
};

export default SyloProject;