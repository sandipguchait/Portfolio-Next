import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle , CardLink, Button, CardImg} from 'reactstrap';


class Portfolio extends Component {

  state = {
    projects: [
     {id:1 , Github:'https://github.com/sandipguchait/travel-guide', name: 'TravelGuide', image:'/static/images/TravelGuide.JPG', Demo:'https://zero-to-mastery.github.io/travel-guide/', Date: "2019" } ,
     {id:2 , Github:'https://github.com/sandipguchait/cryptostats', name: 'CrypToStats', image:'/static/images/cryptostats.JPG', Demo:'https://cryptostat.netlify.com/', Date:"2018"} ,
     {id:3 , Github:'https://github.com/sandipguchait/StoriesApp', name: 'StoriesApp', image:'/static/images/your-stories.JPG', Demo: 'https://your-story.herokuapp.com/', Date:"2018" },
     {id:4 , Github:'https://github.com/sandipguchait/GamerConnect', name: 'GamerConnect' , image:'/static/images/gamerConnect.JPG', Demo:'https://gamerconnect-e7cbb.firebaseapp.com/', Date:"2019"},
     {id:5 , Github:'https://github.com/sandipguchait/react-blog', name: 'React Blog' , image:'/static/images/sandip-blog.JPG', Demo:'https://sandipblog.netlify.com/', Date:"2018"} ,
     {id:6 , Github:'https://github.com/sandipguchait/Online-Fish-Store', name: 'Fish Store' , image:'/static/images/fishstore.JPG', Demo:'https://fishmarket.netlify.com/',Date:"2017"} ,
     {id:7 , Github:'https://github.com/sandipguchait/Youtube_player', name: 'Youtube Web Player' , image:'/static/images/youtubeplayer.JPG', Demo:'https://codesandbox.io/s/github/sandipguchait/Youtube_player', Date: "2019"},
     {id:8 , Github:'https://github.com/sandipguchait/AWS-Shopping', name: 'AWS-Shopping' , image:'/static/images/aws-2.JPG', Demo:'https://youtu.be/XapEVG8gteU', Date: "2019"},
     {id:9 , Github:'https://github.com/sandipguchait', name: 'See More Projects' , image:'/static/images/github.png', Demo:'https://github.com/sandipguchait'},
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
                  <p className="portfolio-card-city"> {project.Date} </p>
                  <CardTitle className="portfolio-card-title">{project.name}</CardTitle>
                  <Button color="primary"><CardLink className="cardlink" href={`${project.Github}`}>GitHub</CardLink></Button>
                  {' '}
                  <Button color="info"><CardLink className="cardlink" href={`${project.Demo}`}>Demo</CardLink></Button>
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