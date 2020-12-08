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

const SponsorsSplit = ({
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
    title: 'Outreach',
    paragraph: 'We, as a club, are very connected to our local communities and businesses. It allows us to represent STEM education in the best way we can truly. We want to give a huge thanks to the sponsors who make this possible.'
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
                  Bentonville Schools
                  </h3>
                <p className="m-0">
                
BWHS Robotics Club is a club under the Bentonville Schools. This is the school district of Bentonville, Centerton, and Bella Vista, Arkansas. We want to thank all the support from the administration as well as staff.
                <br></br><br></br><a href="https://www.bentonvillek12.org/" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Learn More</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/bps.png')}
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
                Girl Powered
                  </h3>
                <p className="m-0">
                The Girl Powered program is an international initiative from the REC Foundation and VEX Robotics. This program is what sponsors our all-girls team. We are honored to be apart of this program and help diversify the field of STEM for all people.
                <br></br><br></br><a href="https://www.roboticseducation.org/girlpowered/" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Learn More</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/girlpowered.png')}
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
                  Walmart
                  </h3>
                <p className="m-0">
                  

Walmart is one of our lead support systems. We are incredibly thankful to the Walmart Corporation for giving us the necessary funds and support to build up our infrastructure. Walmart is one of the world's leading retail corporation and is continually growing. We have tremendous gratitude for the support they show to STEM education.

                  <br></br><br></br><a href="https://corporate.walmart.com/" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Learn More</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/walmart.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Movista
                  </h3>
                <p className="m-0">
                Movista has enabled us to compete and be successful for the past few seasons. They have generously given us the proper funding for our fees to help reduce the burden. Movista is a leading NorthWest Arkansas-based software company specializing in retail merchandising software.
                  <br></br><br></br><a href="https://movista.com/" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Learn More</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/movista.png')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  </div>
                <h3 className="mt-0 mb-12">
                  Amp: Sign & Banner
                  </h3>
                <p className="m-0">
                  
Amp: Sign & Banner is a local NorthWest Arkansas company specializing in merchandise for local organizations. Without them, we would have our incredible T-shirts and banners to represent our great club. We are truly grateful for Amp: Sign & Banner for providing us with items to increase outreach and the spread of STEM education and our club.

                  <br></br><br></br><a href="http://www.chooseamp.com/" target="_blank" style={{ backgroundColor: '#999900' }} className="button button-primary button-wide-mobile button-sm" >Learn More</a>
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/amp.png')}
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

SponsorsSplit.propTypes = propTypes;
SponsorsSplit.defaultProps = defaultProps;

export default SponsorsSplit;