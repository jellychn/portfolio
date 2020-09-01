import React from 'react';
import quote_project0 from '../assets/quote-project/quote.JPG'; 

class QuotesProject extends React.Component {
    state = {
        projectImages: [quote_project0],
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
                        <h2>QUOTES PROJECT</h2>
                        <p className='explaination'>
                            website that displays quotes from the book 366 days with Wisdom by Master Hsing Yun, the website cycles between 366 quotes
                            changing everyday automaticly based on the date and the quote according to the book.
                        </p>
                        <div className='technologies'>
                            <p className='tech'>ReactJS</p>
                            <p className='tech'>SCSS</p>
                        </div>
                    </div>
                </div>
                <div className='project-links'>
                    <a href='https://github.com/jellychn/quotes/tree/master' target='_blank'>
                        <p>GIT</p>
                    </a>
                    <p>.</p>
                    <a href='https://jellychn.github.io/quotes/' target='_blank'>
                        <p>DEMO</p>
                    </a>
                </div>
            </div>
        )
    }
}

export default QuotesProject;