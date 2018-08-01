import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageShell = Page => {
    return props =>
        <div className = "page">
            <ReactCSSTransitionGroup
        
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        transitionName={props.match.path === "/" || "/about-me" || "/portfolio" || "/skills" || "/art" || "/contact" || "*" ? 'SlideIn' : 'SlideOut' }
      >
       
        <Page {...props} />
      </ReactCSSTransitionGroup>
        </div>


}

export default PageShell;