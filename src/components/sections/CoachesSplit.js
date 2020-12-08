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



const CoachesSplit = ({
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
    title: 'Mentorship',
    paragraph: 'These fine people are what make our club possible. They work tirelessly to ensure that we have the infrastructure to compete and learn invaluable skills to set the path to the STEM field.'
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
                    Head Coach
                  </div>
                <h3 className="mt-0 mb-12">
                  Clint Holderby
                  </h3>
                  <h4 className="mt-0 mb-12"><a href="mailto:cholderby@bentonvillek12.org">cholderby@bentonvillek12.org</a></h4>
                <p className="m-0">
                Mr. Clint Holderby is the lead coach here at BWHS Robotics. He is a graduate of Arkansas Tech University with a B.S in Biology & Earth Science. He has been with BWHS Robotics since the outset in 2016. His relentless drive to bring out the best in each of his students has been the key to our success in recent years. Aside from mentoring robotics, Mr. Holderby is a Science and Engineering teacher at West. In his free time, he enjoys fishing, nature photography, and other outdoor activities. We are truly honored to have Mr. Holderby as part of BWHS Robotics.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                  <a style={{resizeMode: 'contain'}} onClick={openModal}>
                 <Image
                  src={require('./../../assets/images/holderby.jpg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
                  </a>

                  <Modal
                    show={videoModalActive}
                    handleClose={closeModal}
                    
                   />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Outreach Coordinator
                  </div>
                <h3 className="mt-0 mb-12">
                  Gina Holderby
                  </h3>
                  <h4 className="mt-0 mb-12"><a href="mailto:gholderby@bentonvillek12.org">gholderby@bentonvillek12.org</a></h4>
                <p className="m-0">
                Mrs. Gina Holderby is our outreach coordinator and creative director at BWHS Robotics. Mrs. Holderby is a Special Education Instructor here at West and has been with the club from the get-go. She arranges fundraising events for the club, connects us to the community, administers special projects, and gives our club all the support we need. Mrs. Holderby enjoys spending her time with her 3 dogs and also performing a type of folk dance called Clogging.
                
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/gina.png')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Programming Coach
                  </div>
                <h3 className="mt-0 mb-12">
                  Nate Vogel
                  </h3>
                  <h4 className="mt-0 mb-12"><a href="mailto:nvogel@bentonvillek12.org">nvogel@bentonvillek12.org</a></h4>
                <p className="m-0">
                Mr. Nate Vogel is the Programming advisor at BWHS robotics. He graduated from The University of Arkansas in 2018 as part of the first UATeach Class. Mr. Vogel joined BWHS Robotics last year and was a valuable asset for our students particularly in the field of programming and logical thinking. Aside from mentoring robotics, Mr. Vogel is a Computer Science teacher at West. In his free time, Mr. Vogel enjoys Mountain Biking, Programming, and Video Games. We are truly grateful to have Mr. Vogel as part of BWHS Robotics.
                  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/vogel.jpg')}
                  alt="Features split 03"
                  width={100}
                  height={196}
                 />
              </div>
            </div>


            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Build/Strategy Coach
                  </div>
                <h3 className="mt-0 mb-12">
                  Steven Ward
                  </h3>
                  <h4 className="mt-0 mb-12"><a href="mailto:sward@bentonvillek12.org">sward@bentonvillek12.org</a></h4>
                <p className="m-0">
                Mr. Steven Ward is the newest coach at BWHS Robotics. He has a B.A. Professional Studies from Arkansas Tech University, A Masters of Art in Teaching from the University of Arkansas at Monticello as well as a Masters of Science in Cybersecurity from John Brown University. Mr. Ward comes to us from Lincoln High School in Lincoln, AR where he formed the VRC Program there. Aside from mentoring robotics, Mr. Ward is a Biology and Physical Science teacher at West. Mr. Ward will serve as a Strategy advisor here at BWHS Robotics. We welcome him on board this year looking forward to working with him this season.
                  
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/ward.jpg')}
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

CoachesSplit.propTypes = propTypes;
CoachesSplit.defaultProps = defaultProps;

export default CoachesSplit;