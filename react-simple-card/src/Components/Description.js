import React from "react";

class Description extends React.Component {
    render() {
      return(
        <div className="desc">
            <p>{this.props.param}</p>
        </div>
        
      );
    }
  }
  export default Description;