import React from 'react';
import { Grid, CircularProgress, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import SingleMessage from './SingleMessage/SingleMessage';

/**
 * This component keeps all the messages rendered from the DB.
 * We recieve the messages throughout redux.
 * @returns 
 */
const Message = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    
    return (
       
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container spacing={1}>
                {posts.map( (post) => (
                    <Grid key={post._id} item xs={12} sm={12} >
                        <SingleMessage post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    
    );
}

export default Message;