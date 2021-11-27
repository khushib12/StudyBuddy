import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    width: "3rem",
    marginRight: "1em",
    marginLeft: "1em",
  },
  menuButton: {
    marginRight: theme.spacing(1),
    backgroundColor: "black",
  },
  title: {
    fontSize: "1.38rem",
    color: "#white",
    marginLeft: "5px",
    cursor: "pointer",
    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "white",
    color: "white",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerWrapper: {
    display: "flex",
    alignItems: "center",
  },
  header__wrapper__right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    marginRight: "15px",
    color: "white",
    cursor: "pointer",
  },

  // MuiAppBar-colorPrimary {
  //   color: "#fff",
  //   backgroundColor: "#3f51b5",
  // },
}));
