import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import { Container, IconButton, Card, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import './PostDetails.css';

const PostDetails = () => {
    const { postId } = useParams();
    const [details, setDetails] = useState({});
    const [comments, setComments] = useState([]);
    const { title, body } = details;

    //posts json
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    //comments json
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, []);

    return (
        <div className="post-details">
            <Container>
                <Card className="card-area">
                    <CardActionArea>
                        <CardContent>
                            <Typography className="title-text" gutterBottom variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <IconButton color="secondary" aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="share">
                            <ShareIcon />
                        </IconButton>
                    </CardActions>
                </Card>
                <div className="comment-area">
                    {
                        (comments).map((comment, img) => <Card className="comment-items"><Comment comment={comment} img={img} /></Card>)
                    }
                </div>
            </Container>
        </div >
    );
};

export default PostDetails;