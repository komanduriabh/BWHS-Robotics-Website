import React, {useState} from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';
import Modal from '../elements/Modal'
const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}



const TeamSplit = ({
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
    title: 'Teamwork',
    paragraph: 'This year the Bentonville West Robotics Club has four High School VEX Robotics teams including one all-girls team. Our students are deeply passionate about the study of competitive robotics.  '
  };
  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      
      {/* <div className="container">
        <div className={innerClasses}> */}
          
          <SectionHeader data={sectionHeader} className="center-content" />
        
    </section>
  );
}

TeamSplit.propTypes = propTypes;
TeamSplit.defaultProps = defaultProps;

export default TeamSplit;


