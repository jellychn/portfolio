import React from 'react';
import ui_project0 from '../assets/ui-project/home-page.JPG'; 
import ui_project1 from '../assets/ui-project/display-page.JPG';
import ui_project2 from '../assets/ui-project/cart-page.JPG';
import ui_project3 from '../assets/ui-project/search.JPG';
import ui_project4 from '../assets/ui-project/item-page.JPG'; 

class UIProject extends React.Component {
    state = {
        projectImages: [ui_project0, ui_project1, ui_project2, ui_project3, ui_project4],
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
                        <p className='project-status'>IN DEVELOPMENT</p>
                        <h2>UI PROJECT</h2>
                        <p className='explaination'>
                            E-commerse web app for selling products online including backend api featching,
                            user login + authentication, backend product search querying and payment system.
                        </p>
                        <div className='technologies'>
                            <p className='tech'>ReactJS + React Redux</p>
                            <p className='tech'>NodeJS + ExpressJS</p>
                            <p className='tech'>Firebase</p>
                            <p className='tech'>SCSS</p>
                        </div>
                    </div>
                </div>
                <div className='project-links'>
                    <a href='https://github.com/jellychn/ui' target='_blank'>
                        <p>GIT FRONTEND</p>
                    </a>
                    <a href='https://github.com/jellychn/ui-backend' target='_blank'>
                        <p>GIT BACKEND</p>
                    </a>
                    <p>.</p>
                    <a href='https://uiline.web.app/' target='_blank'>
                        <p>DEMO</p>
                    </a>
                </div>
            </div>
        )
    }
};

export default UIProject;