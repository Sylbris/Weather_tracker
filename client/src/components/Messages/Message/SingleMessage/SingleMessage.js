import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useSelector } from 'react-redux';
import useStyles from './styles';
import { useDispatch } from 'react-redux';

/**
 * This component represents a single message/alert.
 * @param {*} param0 
 * @returns 
 */
const SingleMessage = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Alert severity="error" variant="filled">{post.title}</Alert>
    );
}

export default SingleMessage;