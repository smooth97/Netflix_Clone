import React from 'react';
import NetflixOriginalContainer from './NetflixOriginalContainer';
import TrendContainer from './TrendContainer';
import TopRatedContainer from './TopRatedContainer';
import ActionContainer from './ActionContainer';
import ComedyContainer from './ComedyContainer';
import HorrorContainer from './HorrorContainer';
import RomanceContainer from './RomanceContainer';

const Layout = () => {

    return (
        <div className="layout">
            <NetflixOriginalContainer/>
            <TrendContainer/>
            <TopRatedContainer/>
            <ActionContainer/>
            <ComedyContainer/>
            <RomanceContainer/>
            <HorrorContainer/>
        </div>
    )
}

export default Layout;