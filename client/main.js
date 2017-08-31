import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPosition } from '../imports/api/players';
import App from '../imports/ui/App'


Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, { sort: {score: -1} }).fetch()
        let positionPlayer = calculatePlayerPosition(players)
        let title = 'Score Keeper'
        ReactDOM.render(<App title={title} players={positionPlayer}/>, document.getElementById('app'))
    })
});

