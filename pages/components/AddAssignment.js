import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useFormik} from 'formik';
import { makeStyles } from '@material-ui/core/styles';


 const validate = values => {
  const errors = {}

  if(!values.text) {
    errors.text = 'Required';

  } else if (values.text.length < 8) {
    errors.text = 'Must be 8 characters or above'
  }

  if(!values.helpfulInfo) {
    errors.helpfulInfo = 'Required';

  } else if (values.helpfulInfo.length < 8) {
    errors.helpfulInfo = 'Must be 8 characters or above'
  }

  if(!values.title) {
    errors.title = 'Required';

  } else if (values.title.length > 20) {
    errors.title = 'Must be at most 20 characters'
  }
}


const AddAssignment = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const formik = useFormik({
      initialValues: {
        text: '',
        title: '',
        helpfulInfo: '',
        date: '',
  
  
      },
      validate,
      onSubmit: values => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      },
    });

    return (
        <div>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            <AddIcon />
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Add Item to Assignments</DialogTitle>
              <form onSubmit = {formik.handleSubmit}>
              <DialogContent>
                  <DialogContentText>Title: </DialogContentText>
                  <TextField
                    id="title"
                    name="title"
                    type="title"
                    onChange={formik.handleChange}
                    value = {formik.values.email}
                    style={{ margin: 8 }}
                  />
                  <br/>
                  <DialogContentText>Text: </DialogContentText>
                  <TextField
                    id="text"
                    name="text"
                    type="text"
                    onChange={formik.handleChange}
                    value = {formik.values.firstName}
                    style={{ margin: 8 }}
                  />
                  {formik.errors.firstName ? <div>{formik.errors.firstName}</div>:null}
                  <br/>
                  <DialogContentText>Helpful Info</DialogContentText>
                  <TextField
                    autoFocus
                    id="helpfulInfo"
                    name="helpfulInfo"
                    type="helpfulInfo"
                    onChange={formik.handleChange}
                    value = {formik.values.lastName}
                    style={{ margin: 8 }}
                    fullWidth
                  />
                  <DialogContentText>Date:</DialogContentText>
                  <TextField
                    autoFocus
                    id="date"
                    name="date"
                    type="date"
                    label="due"
                    onChange={formik.handleChange}
                    value = {formik.values.date}
                    style={{ margin: 8 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                  />
              </DialogContent>
              <DialogActions>
                
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button  color="primary" type = "submit" onClick = {handleClose}>
                  Post
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      );
}

export default AddAssignment;