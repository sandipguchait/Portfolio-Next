
import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class About extends Component {

  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page" title="">
        <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello, There</h1>
                <h4 className="subtitle fadein">To My Bio</h4>
                <p className="subsubTitle fadein">Feel free to read short description about me.</p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein" id="intro">
                <p>My name is Sandip Guchait and I am an Self-taught Web Developer. </p>
                <p>
                I have a Bachelor's degree in Computer Science and experience on working
                on a wide range of technologies and projects from AWS to GraphQL to make
                modern mobile and web applications in React and Angular.
                </p>
                <p>
                Throughout my career, I have acquired advanced technical knowledge and the ability to explain
                programming topics clearly and in detail to a broad audience. I love to Learn from Experienced
                Developers and yes I am a great Team Player.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;