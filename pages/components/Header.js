import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import DropdownNav from './DropdownNav';
import Link from 'next/link';
import headerStyles from "../../css/header.module.css";
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import S3 from 'react-aws-s3';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const theme = createMuiTheme({
  palette: {
    pale: {
        main: '#F4EED9',
        contrastText: '#383838'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#F4EED9',
    boxShadow: theme.shadows[5],
    borderRadius: 10,
    padding: "35px",
    outline: 'none',
    width: "30%",
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: "20px",
  },
  input: {
    marginTop: "10px",
    marginBottom: "25px",
    outline: "none",
    borderRadius: "5px",
    backgroundColor: "#DBD6C3",
    fontSize: "17px",
    lineHeight: "25px",
    width: "auto",
    fontFamily: "Consolas",
    border: "solid 1.5px #212121",
    padding: "5px",
  },
  textarea: {
    marginTop: "10px",
    marginBottom: "25px",
    outline: "none",
    borderRadius: "5px",
    backgroundColor: "#DBD6C3",
    fontSize: "17px",
    width: "auto",
    height: "80px",
    fontFamily: "Consolas",
    resize: "none",
    border: "solid 1.5px #212121",
    padding: "5px",
  },
  button: {
    borderRadius: "10px",
    backgroundColor: "#767EAF",
    color: "white",
    padding: "10px",
    width: "30%",
    marginLeft: "35%",
    border: "none",
    marginTop: "25px",
    '&:hover': {
      cursor: "pointer",
      backgroundColor: "#5b6092",
      boxShadow: "0px 0px 4px 4px #D3D3D3",
    }
  },
}));


const ProfilePages = [
	{path: "MyProfile", title: "My Profile"},
  {path: "course/courseid", title: "My Courses"},
  {path: "group/groupid", title: "My Groups"}
]

const MainPages = [
  {path: "topics", title: "Explore Topics"},
  {path: "groups", title: "Explore Groups"},
  {path: "videos", title: "Browse Videos"}
]


const Header = () => {
  const classes = useStyles();
  const [term, setTerm] = useState('');

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
      setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
  };

  const fileHandler = (event) => {
    let fileObj = [];
    let fileArray = [];

    if (event.target.files.length) {
      fileObj.push(event.target.files);

      for (let i = 0; i < fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(fileObj[0][i]));
      }
      setImages(event.target.files);
    }
  }

  const handleUpload = (image, ReactS3Client) => {
    // some code
    ReactS3Client.uploadFile(image, image.name).then((data) => {
      console.log(data);

      if (data.status == 204) {
        console.log('success');
      } else {
        console.log('failure');
      }
    })
  }

  const [images, setImages] = useState([]);
  let initialImage = images;

  return (
    <div className= {classes.root}>
      <div className = {headerStyles.headerBackground}>
          <div className = {headerStyles.lDropdownWrapper}>
            <DropdownNav className = "ExploreText" pages = {MainPages} title = "Explore"/>
          </div>
          <Link href = "http://localhost:3000/home">
            <img className = {headerStyles.headerLogo}/>
          </Link>
          <div className = {headerStyles.createGroup} onClick = {handleOpen}>
            <AddOutlinedIcon className = {headerStyles.addIcon} fontSize = "large"/>
            <h1 className = {headerStyles.createText}>Create Group</h1>
          </div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <form className = {classes.form}>
                  <label>Group Name</label>
                  <input type = "text" className = {classes.input} required/>
                  <label>Group Description</label>
                  <textarea className = {classes.textarea} required/>
                  <label>Group Banner</label>
                  <div className = {headerStyles.uploadRow}>
                    <label htmlFor="upload">
                      <div className = {headerStyles.uploadButton}>
                          Upload Image
                      </div>
                    </label>
                    <input
                      type="file"
                      multiple={false}
                      id="upload"
                      onChange={fileHandler}
                      style={{display: "none"}}
                      className="choose-files"
                    />
                    <div className = "number-of-images">
                      {`${images.length} image ready to be uploaded`}
                    </div>
                  </div>
                  <button className = {classes.button}>Create</button>
                </form>
              </div>
            </Fade>
          </Modal>
          <div className = {headerStyles.rDropdownWrapper}>
            <DropdownNav pages = {ProfilePages} title = "Account"/>
          </div>
      </div>
    </div>
  );
}

export default Header;