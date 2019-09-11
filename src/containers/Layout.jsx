import React from 'react';
import NetflixOriginalContainer from './NetflixOriginalContainer';
import TrendContainer from './TrendContainer';
import TopRatedContainer from './TopRatedContainer';
import ActionContainer from './ActionContainer';
import ComedyContainer from './ComedyContainer';
import HorrorContainer from './HorrorContainer';
import RomanceContainer from './RomanceContainer';
import DocumentaryContainer from './DocumentaryContainer';

const Layout = () => {

    return (
        <div className="layout">
            <NetflixOriginalContainer/>
            <TrendContainer/>
            <TopRatedContainer/>
            <ActionContainer/>
            <ComedyContainer/>
            <HorrorContainer/>
            <RomanceContainer/>
            <DocumentaryContainer/>
        </div>
    )
}

export default Layout;