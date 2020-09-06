import React from 'react';
import { Typography } from '@material-ui/core';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className="no-match">
            <Typography className="title-text" gutterBottom variant="h3" component="h2">
                Page not found
            </Typography>
            <Typography variant="h5" color="secondary" component="h2">
                404, error
            </Typography>
        </div>
    );
};

export default NoMatch;