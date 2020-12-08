import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Cards from '../elements/Cards'

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
  ...SectionSplitProps.types
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults.bottomDivider,
  ...SectionSplitProps.defaults
}




const GenericSection = ({
  className,
  children,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
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
      
      <div className="container" >
        
        <div className={innerClasses}>
        <SectionHeader data={sectionHeader} className="center-content" />
          <Cards />
        </div>
      </div>
    </section>
  );
}

GenericSection.propTypes = propTypes;
GenericSection.defaultProps = defaultProps;

export default GenericSection;