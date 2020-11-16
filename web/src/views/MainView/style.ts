import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
    textAlign: "center"
  },
  btn: {
    position: "fixed",
    top: "10%",
    right: "10%"
  },
  iconSize: {
    fontSize: "80px",
    color: "#9e9e9e"
  },
  card: {
    backgroundColor: "#292A2D",
    width: 350,
    height: 75
  },
  fileTitle: {
    color: "#9e9e9e",
  },
  dairyContent: {
    color: "#9e9e9e",
    fontSize: "12px"
  },
  deleteBtn: {
    right: "-47%",
    marginTop: "-20%"
  },
  deleteIcon: {
    fontSize: "28px",
    color: "#9e9e9e"
  },
  page: {
    justifyContent: "center",
    bottom: "15%",
    textAlign: "center",
    position: "fixed"
  },
});


export default useStyle;