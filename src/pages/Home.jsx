import React from 'react';
import Slider from '../component/Slider';
import POpularSEction from '../component/POpularSEction';
import MeetOurVets from '../component/MeetOurVets';

const Home = () => {
    return (
        <div>
            <title>Home</title>
            <Slider></Slider>
            <POpularSEction></POpularSEction>
            <MeetOurVets></MeetOurVets>
        </div>
    );
};

export default Home;