import React, { useState } from 'react';
import { CardHeader, Avatar } from '@material-ui/core';
import Photo from '../Photo/Photo';

const Comment = (props) => {

    const { name, email } = props.comment;
    return (
        <div>
            <CardHeader className="comment-items"
                avatar={
                    <Avatar aria-label="recipe" ><Photo /></Avatar>
                }
                title={email}
                subheader={name}
            />

        </div>
    );
};

export default Comment;