import React, { useState } from 'react';
import FakeImages from '../../FakeImages/FakeImages';
import { Avatar } from '@material-ui/core';

const Photo = () => {
    const [images, setImages] = useState([FakeImages])

    return (
        <>
            {
                images.map(img => <Avatar aria-label="recipe" ><img src={img[0].imgUrl} alt="" /></Avatar>)
            }
        </>
    );
};

export default Photo;