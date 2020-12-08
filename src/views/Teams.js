import React from 'react'
import classNames from 'classnames';
import TeamsHeader from '../components/sections/TeamsHeader.js'
import TeamSplit from '../components/sections/TeamSplit';
import GenericSection from '../components/sections/GenericSection'
class Teams extends React.Component {
    render() {
        return (
            <div>
                <TeamsHeader/>
                {/* <TeamSplit invertMobile topDivider  /> */}
                <GenericSection topDivider/>
            </div>
        )
    }
}

export default Teams;