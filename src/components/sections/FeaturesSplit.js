import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Experiment. Fail. Learn. Repeat.',
    paragraph: 'These four ideas are what we live by in our club. We fully embrace every single step of the process and never give up. Good Robots. Better People.'
  };
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      <div className="container">
        <div className={innerClasses}>
          
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
                
            <div className="split-item">
              
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Who are we?
                  </h3>
                <p className="m-0">
                BWHS Robotics consists of a diverse group of highly dedicated and motivated students who demonstrate strong leadership, teamwork, and professionalism, to create and support a world-class VEX Robotics Competition Program. We are a strong team of 60 students with 4 competition teams including one all-girls team.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/teampic.JPG')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                What is VEX Robotics?
                  </h3>
                <p className="m-0">
                The VEX Robotics Competition is a vehicle for teaching (and testing) teamwork, perseverance in the face of hardship, and provides a methodology to approach and solve new challenges with confidence. With your valuable contribution, you would also be a part of shaping our futures by helping us get hands-on experience in the fields of Science, Technology, Engineering, Research, Arts and Math (STREAM) and prepare us for the challenges we will face in this technologically complex world.
                
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vexlogo.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Membership
                  </h3>
                <p className="m-0">
                We are always extremely excited to get fresh minds. There are many ways to get involved. First, you can complete the application below. Many think that a high level of prerequisites is required; however, we always love training people. We hold many seminars, workshops, and step-by-step guides to equip all members for success.

                  <br></br><br></br><a href="https://forms.gle/SLEC8hfqk7na3NEh8" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Join Us</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bwhslogo.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;