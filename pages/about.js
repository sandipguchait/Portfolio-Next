
import React, { Component } from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends Component {

  render() {
    return (
      <BaseLayout>
        <BasePage className="about-page" title="I am About Page">
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;