import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import CountUp from 'react-countup'

const animateValue = (obj, start, end, duration) => {
  let startTimestamp = null;
  const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
          window.requestAnimationFrame(step);
      }
  };
  window.requestAnimationFrame(step);
}

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  
  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Promoting STEM with every step',
    paragraph: 'Vex Robotics is a platform to promote teamwork, perseverance, and STEM education to an audience of student participants, through rigorous competitions. '
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    4
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Teams
                    </h4>
                  <p className="m-0 text-sm">
                  This year the Bentonville West Robotics Club has four High School VEX Robotics teams, including one all-girls team. Our students are deeply passionate about the study of competitive robotics.

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    4
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Coaches
                    </h4>
                  <p className="m-0 text-sm">
                  Clint and Gina Holderby were the club's initial coaches and helped our Robotics veterans begin and run this club. Over the years, we have gained more support and coaches to lead our club to success, with each coach inspiring success.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    30+
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Members
                    </h4>
                  <p className="m-0 text-sm">
                  Over the years, we have been continuously growing. We initially started with just ten members, and we have grown drastically every year. When recruiting, we look for minds that can inspire the young and provide a new line of thinking.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    4
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    World Qualifications
                    </h4>
                  <p className="m-0 text-sm">
                  For three years, our club has had multiple teams qualify for the VEX World Championship. We have been tremendously honored to attend, and each member has gained invaluable experience that cannot be taught in the classroom.

                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    15+
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Awards
                    </h4>
                  <p className="m-0 text-sm">
                  Consistently, our club has been very successful at competitions and has been given many awards. Our club sees victories as the starting point rather than an ending point. We strive to get better every day and never fail to do so.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                <h1 className="mt-0 mb-8">
                    5
                </h1>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Years
                    </h4>
                  <p className="m-0 text-sm">
                    
                  This is our fifth year hosting a robotics club under VEX Robotics and REC Foundation. Every year we gain new minds, new robots, and new successes. We see that our club doubles our performance output every year without fail.
                    </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;