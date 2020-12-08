import React from 'react'
import classNames from 'classnames';
import CoahcesHeader from '../components/sections/CoachesHeader.js'
import CoachesSplit from '../components/sections/CoachesSplit';
import CoachesHeader from '../components/sections/CoachesHeader.js';
class Coaches extends React.Component {
    render() {
        return (
            <div>
                <CoachesHeader/>
                <CoachesSplit invertMobile topDivider imageFill className="illustration-section-02" />
            </div>
        )
    }
}

export default Coaches;