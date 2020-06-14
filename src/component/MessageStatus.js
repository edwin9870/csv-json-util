import React from 'react';
import { Alert } from '@material-ui/lab';

export default function MessageStatus({ message = '', severity = 'info' }) {
    return (
        message.length > 0 ?
            <Alert severity={severity}>{message}</Alert> : <div />
    )
}