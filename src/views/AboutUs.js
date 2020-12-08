import React from 'react'
import classNames from 'classnames';
import AboutText from '../components/sections/AboutText.js'
import FeaturesSplit from '../components/sections/FeaturesSplit';
class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <AboutText/>
                <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
            </div>
        )
    }
}

export default AboutUs;