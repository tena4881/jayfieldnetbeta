import React from 'react';
import ReactDOM from 'react-dom';
import QierPlayer from 'qier-player';
import videoOrigin from './videoOrigin.mp4';

export default function VideoPlayer() {
    return(
    <QierPlayer srcOrigin={videoOrigin} />
    );
}

