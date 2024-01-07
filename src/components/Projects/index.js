import { Link } from 'react-router-dom';
import './index.scss';
import React from 'react';
import ImgPom from '../../assets/images/pom.png';
import ImgDQN from '../../assets/images/DQN.png';
import ImgIOT from '../../assets/images/iot.png';
import ImgEpilog from '../../assets/images/epilog.png';
import ImgCPU from '../../assets/images/scpu.png';

const Projects = () => {
    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>
                    Projects
                </h1>
            </div>
            <div className='img-zone'>
                {/*<img 
                    src = {ImgPom} 
                    className='img-pom' 
                    alt = 'pom-img' 
                />*/}

                <ShowInfo img = {ImgPom} imgalt = "pom-img" imgname = "img-pom"></ShowInfo>
                <ShowInfo img = {ImgDQN} imgalt = "dqn-img" imgname = "img-dqn"></ShowInfo>
                <ShowInfo img = {ImgIOT} imgalt = "iot-img" imgname = "img-iot"></ShowInfo>
                <ShowInfo img = {ImgEpilog} imgalt = "epilog-img" imgname = "img-epilog"></ShowInfo>
                <ShowInfo img = {ImgCPU} imgalt = "cpu-img" imgname = "img-cpu"></ShowInfo>
                {/*<img 
                    src = {ImgDQN} 
                    className='img-dqn' 
                    alt = 'dqn-img' 
                />

                <img 
                    src = {ImgIOT} 
                    className='img-iot' 
                    alt = 'iot-img' 
                />

                <img 
                    src = {ImgEpilog} 
                    className='img-epilog' 
                    alt = 'epilog-img' 
                />

                <img 
                    src = {ImgCPU} 
                    className='img-cpu' 
                    alt = 'cpu-img' 
            />*/}
                
            </div>
        </div>
    )
};


export default Projects

class ShowInfo extends React.Component {
    state = { likeList: '' };
  
    renderLikeList = () => {
      return <div className="likes__list">Likes to be rendered specifically</div>;
    };
  
    handleLeave = () => {
      this.setState({ likeList: '' });
    };
  
    handleHover = () => {
      this.setState({ likeList: this.renderLikeList() });
    };
  
    render() {
      const { img, imgname, imgalt } = this.props;
  
      return (
        <>
          <img
            src={img}
            className={"likes__relavance"}
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleLeave}
            alt= {imgalt}
          />
          {this.state.likeList}
        </>
      );
    }
  }