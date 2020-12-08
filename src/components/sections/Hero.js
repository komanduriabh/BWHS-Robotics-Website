import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import Slideshow from '../elements/Slideshow'
import Vid from '../../assets/images/vid.mp4'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import zIndex from '@material-ui/core/styles/zIndex';
const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
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

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              BWHS <span className="text-color-tertiary">Robotics</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Good Robots. Better People.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <a href="https://forms.gle/SLEC8hfqk7na3NEh8" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Join Us</a>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            {/* <a
              data-video={Vid}
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/thumbnail.png')}
                alt="Hero"
                width={896}
                height={504}
                style={{zIndex: '-1', position: 'relative'}} />
            </a>
            
            <Slideshow/> */}


            <video muted loop autoPlay
              width={1096}
              height={704}
              >
                
              <source src={Vid} type="video/mp4" />
            </video>

          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={Vid}
            videoTag="iframe" />

        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;