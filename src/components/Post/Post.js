import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Card, CardContent } from '@material-ui/core';
import ViewPost from '../ViewPost/ViewPost';
import './Post.css'

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div className="post-area">
            <Container>
                <Grid container spacing={2}>
                    {
                        posts.map(post =>
                            <Grid item md={4}>
                                <Paper elevation={3}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <ViewPost post={post}></ViewPost>
                                        </CardContent>
                                    </Card>
                                </Paper>
                            </Grid>)
                    }
                </Grid>
            </Container>

        </div>
    );
};

export default Post;