import React from 'react';
import Header from '../shared/Header';


const BaseLayout = (props) => {

  const { className, children }= props;
  const headerType = props.headerType || 'default';
  
  return (
    <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
    </div>
  );
};

export default BaseLayout;