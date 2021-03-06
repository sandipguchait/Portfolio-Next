import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col } from 'reactstrap';
import Typed from 'react-typed';


class Index extends Component {
  state = {
    roles: ['Developer', 'NodeJs', 'Team Player', 'ReactJs', 'GraphQL', 'AWS'],
    isFlipping: false
  };

  componentDidMount(){
    this.rotateCard();
  };

  componentWillUnmount(){
    this.animationInterval && clearInterval(this.animationInterval);
  };

  rotateCard = () => {
    this.animationInterval = setInterval(() => {
      this.setState({ isFlipping: !this.state.isFlipping})
    }, 3000)
  }

  render() {
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} headerType="index">
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> FrontEnd Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio.
                      </div>
                    </div>
                    <img className="image" src="/static/images/section-1.png.png"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Technical Writer </h2>
                      <div className="hero-section-content-intro">
                        Contributing Tutorials on Medium.
                      </div>
                    </div>
                    <img className="image" src="/static/images/section-2.png.png"/>
                    <div className="shadow-custom shadow-custom-2 " >
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Sandip Guchait.
                  Get informed, collaborate and discover projects I was working on through the years!
                </h1>
              </div>
              <Typed
                  loop
                  className="self-typed"
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.state.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>
                  Let's take a look on my work.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
  </BaseLayout>
    );
  }
}

export default Index;