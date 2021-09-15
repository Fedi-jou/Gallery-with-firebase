import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  dialog: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    textAlign: "center",
  },
  dialogContent: {
    textAlign: "center",
  },
  dialogAction: {
    justifyContent: "center",
  },
  titleIcon: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      cursor: "default",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "8rem",
    },
  },
}));
function Deletebox({ open, setOpen, deleteFromFirebase, id }) {
  const classes = useStyles();
  const Handledialog = (id) => {
    deleteFromFirebase(id);
    setOpen(false);
  };
  return (
    <Dialog open={open} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>hello</DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">
          Are you sure you want to delete the image ?
        </Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={() => Handledialog(id)}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setOpen(false)}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Deletebox;
