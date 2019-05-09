import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle , CardLink, Button, CardImg} from 'reactstrap';


class Portfolio extends Component {

  state = {
    projects: [
     {id:1 , Github:'https://github.com/sandipguchait/travel-guide', name: 'TravelGuide', image:'/static/images/TravelGuide.JPG' } ,
     {id:2 , Github:'https://github.com/sandipguchait/cryptostats', name: 'CrypToStats', image:'/static/images/cryptostats.JPG'} ,
     {id:3 , Github:'https://github.com/sandipguchait/StoriesApp', name: 'StoriesApp', image:'/static/images/your-stories.JPG' },
     {id:4 , Github:'https://github.com/sandipguchait/GamerConnect', name: 'GamerConnect' , image:'/static/images/gamerConnect.JPG'},
     {id:5 , Github:'https://github.com/sandipguchait/react-blog', name: 'React Blog' , image:'/static/images/sandip-blog.JPG'} ,
     {id:6 , Github:'https://github.com/sandipguchait/Online-Fish-Store', name: 'Fish Store' , image:'/static/images/fishstore.JPG'} ,
     {id:7 , Github:'https://github.com/sandipguchait/Youtube_player', name: 'Youtube Web Player' , image:'/static/images/youtubeplayer.JPG'} 
    ]
  };

  renderPosts = (projects) => {
    return projects.map((project) => {
      return (
        <Col md="4" >
          <React.Fragment key={project.id}>
            <span>
              <Card className="portfolio-card">
                <CardHeader className="portfolio-card-header">{project.name}</CardHeader>
                <CardImg top width="100%" src={`${project.image}`} alt={`${project.name}`} />
                <CardBody>
                  <p className="portfolio-card-city">  {project.name} </p>
                  <CardTitle className="portfolio-card-title">{project.name}</CardTitle>
                  <Button color="primary"><CardLink className="cardlink" href={`${project.Github}`}>GitHub</CardLink></Button>
                </CardBody>
              </Card>
            </span>
          </React.Fragment>
        </Col>
      )
    })
  }

  render() {
    const { projects } = this.state; 
    return (
      <BaseLayout>
        <BasePage className="portfolio-page "title="Portfolio">
          <Row>
            {this.renderPosts(projects)}
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Portfolio;