import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';


class Cv extends Component {

  render() {
    return (
      <BaseLayout>
        <BasePage title="Read My CV" className="cv-page">
        <Row>
          <Col md={{ size: 8, offset: 2}}>
            <div className="cv-title">
              <a download="Sandip.pdf" className="btn btn-success" href="/static/images/Sandip.pdf">
              Download
              </a>
            </div>
            <img style={{ width: '100%', height: '800px'}} src="/static/images/sandip.jpg"/>
          </Col>
        </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Cv;