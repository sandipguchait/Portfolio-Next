import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle , CardLink, Button, CardImg} from 'reactstrap';


class Tools extends Component {

  state = {
    tools: [
      { id: 1, name: 'GitHub/Git', image: '/static/tools/github.jpg'},
      { id: 2, name: 'VsCode', image: '/static/tools/vscode.png'},
      { id: 3, name: 'Chrome Developer Tools', image: '/static/tools/chrome.jpeg'},
      { id: 4, name: 'ReactJs', image: '/static/tools/react.png'},
      { id: 5, name: 'Node/ExpressJS', image: '/static/tools/Express-2.jpg'},
      { id: 6, name: 'GraphQL', image: '/static/tools/graphql.png'},
      { id: 7, name: 'ReactStrap/Bootstrap', image: '/static/tools/reactstrap.png'}
    ]
  };

  renderPosts = (tools) => {
    return tools.map((tool) => {
      return (
        <Col md="4" >
          <React.Fragment key={tool.id}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{tool.name}</CardHeader>
                <CardImg top width="100%" src={`${tool.image}`} alt={`${tool.name}`} />
              </Card>
            </span>
          </React.Fragment>
        </Col>
      )
    })
  }

  render() {
    const { tools } = this.state; 
    return (
      <BaseLayout>
        <BasePage className="portfolio-page "title="Portfolio">
          <Row>
            {this.renderPosts(tools)}
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Tools;