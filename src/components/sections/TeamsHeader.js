import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import YouTube from 'react-youtube';
import SectionHeader from './partials/SectionHeader';
import Vid from '../../assets/images/vid.mp4'
import Popup from '../elements/Popup.js'
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const TeamsHeader = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  
  
  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Teams <span className="text-color-tertiary"></span>
            </h1>
            <br/>
            <br/>
            <br/>
            <div className="hero-figure reveal-from-bottom illustration-element-01">
            <Image
                  src={require('./../../assets/images/team.JPG')}
                  alt="Features split 03"
                  />
      </div>

      {/* <Popup/> */}

          </div>
        </div>
        
      </div>
    <br/>
    <br/><br/>

    </section>
  );
}

TeamsHeader.propTypes = propTypes;
TeamsHeader.defaultProps = defaultProps;

export default TeamsHeader;