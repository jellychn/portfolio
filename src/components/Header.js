import React from 'react';

class Header extends React.Component {
    state = {
        home: false,
        about: false,
        experience: false,
        contact: false
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }

    handleScroll = () => {
        const headerHeight = document.getElementById('header').offsetHeight;
        const home = document.getElementById('home').offsetTop;
        const about = document.getElementById('about').offsetTop;
        const experience = document.getElementById('experience').offsetTop;
        const contact = document.getElementById('contact').offsetTop;

        if (window.scrollY >= home && window.scrollY < about - headerHeight) {
            this.setState({home: true, about: false, experience: false, contact: false});
        } else if (window.scrollY >= about - headerHeight && window.scrollY < experience - headerHeight) {
            this.setState({home: false, about: true, experience: false, contact: false});
        } else if (window.scrollY >= experience - headerHeight && window.scrollY < contact - headerHeight) {
            this.setState({home: false, about: false, experience: true, contact: false});
        } else if (window.scrollY >= contact - headerHeight) {
            this.setState({home: false, about: false, experience: false, contact: true});
        }
    };

    scrollTo = (elm) => {
        const headerHeight = document.getElementById('header').offsetHeight;
        const home = document.getElementById('home').offsetTop;
        const about = document.getElementById('about').offsetTop;
        const experience = document.getElementById('experience').offsetTop;

        if (elm === 'home') {
            window.scrollTo(0, home - headerHeight);
        } else if (elm ==='about') {
            window.scrollTo(0, about - headerHeight);
        } else if (elm === 'experience') {
            window.scrollTo(0, experience - headerHeight);
        } else if (elm === 'contact') {
            window.scrollTo(0, document.body.scrollHeight);
        }  
    };

    realod = () => {
        window.scrollTo(0,0);
    };

    render () {
        return (
            <div id='header'>
                <div className='logo' onClick={this.realod}/>
                <div className='navigation'>
                    <p onClick={() => {this.scrollTo('home')}} style={{color: this.state.home ? '#1C1B20':'darkgray'}}>HOME</p>
                    <p onClick={() => {this.scrollTo('about')}} style={{color: this.state.about ? '#1C1B20':'darkgray'}}>ABOUT</p>
                    <p onClick={() => {this.scrollTo('experience')}} style={{color: this.state.experience ? '#1C1B20':'darkgray'}}>EXPERIENCE</p>
                    <p onClick={() => {this.scrollTo('contact')}} style={{color: this.state.contact ? '#1C1B20':'darkgray'}}>CONTACT</p>
                </div>
            </div>
        )
    }
}

export default Header;