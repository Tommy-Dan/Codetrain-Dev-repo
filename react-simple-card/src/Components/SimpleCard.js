
import React, {Component} from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description';


class SimpleCard extends Component {
    render() {
      return (
        <div className="card">
            <Image logo={'./images/reactImg.jpeg'}  alt='react logo'/>
            <Title title = {'Getting Started'} />
            <Description param = {
                'Like any unfamiliar technology, React does have a learning curve. With practice and some patience, you will get the hang of it.'
                }
            />
        </div>
      );
    }
  }
  export default SimpleCard;
  
  