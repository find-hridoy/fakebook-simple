import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './ViewPost.css'

const ViewPost = (props) => {
    const { id, title, body } = props.post;
    return (
        <div className="post-card">
            <Typography className="post-title" variant="h5" component="p">
                {title}
            </Typography>
            <Typography className="post-paragraph" component="p">
                {body}
            </Typography>
            <Link to={`/posts/${id}`} className="link-btn"><Button className="see-more-btn" variant="contained" color="primary" size="small">See More</Button></Link>
        </div>
    );
};

export default ViewPost;