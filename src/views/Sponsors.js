import React from 'react'
import classNames from 'classnames';
import CoahcesHeader from '../components/sections/CoachesHeader.js'
import SponsorsSplit from '../components/sections/SponsorsSplit';
import SponsorHeader from '../components/sections/SponsorHeader.js';
class Sponsors extends React.Component {
    render() {
        return (
            <div>
                <SponsorHeader/>
                <SponsorsSplit invertMobile topDivider imageFill className="illustration-section-02" />
            </div>
        )
    }
}

export default Sponsors;