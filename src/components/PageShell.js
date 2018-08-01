import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
    return props =>
        <div className = "page">
            <ReactCSSTransitionGroup
        
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={100}
        transitionName={props.match.path === "/" || "/about-me" || "/portfolio" || "/skills" || "/art" || "/contact" || "*" ? 'SlideIn' : 'SlideOut' }
      >
       
        <Page {...props} />
      </ReactCSSTransitionGroup>
        </div>


}

export default PageShell;