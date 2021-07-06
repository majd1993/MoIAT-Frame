import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '97%',
        width: '98%',
        margin: '1% 1% 0% 1% ',
        //borderRadius: '10px',
    },
    title: {
        color: '#4a4a4a',
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: 1.4,
    },
    addInnerIconButton: {
        fontSize: '19px',
        color: '#ffffff',
    },
    cancelButton: {
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#ffffff',
        letterSpacing: 0.8,
        background: "#ce3a32",
        "&:hover": {
            background: "#b52119",
        },
    },
}));

export default function FormDialog(props) {
    const classes = useStyles();

    return (
        <Dialog
            fullScreen
            minHeight='600px'
            maxHeight='600px'
            open={props.isFormDialogOpen}
            onClose={props.handleFormDialogClose}
            aria-labelledby="form-dialog-title"
            className={classes.root}
        >
            <DialogTitle id="form-dialog-title">
                <Typography className={classes.title} >{'Support Team'}</Typography>
            </DialogTitle>
            <DialogContent>
                <iframe
                    allow="camera *;microphone *"
                    src=/* {props.iFrameURL} */{"https://vcenter.yesdigitallab.com/queue?name=xxxxxx&mobile=0500000&email=xxxx@xxx.com"}
                    title={'Support Team'}
                    height='100%'
                    width="100%"
                ></iframe>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={props.handleFormDialogClose}
                    className={classes.cancelButton}
                >
                    {'CANCEL'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}
