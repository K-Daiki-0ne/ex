import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
    textAlign: "center"
  },
  btn: {
    textAlign: "right"
  },
  iconSize: {
    fontSize: "60px",
    color: "#9e9e9e"
  },
  card: {
    backgroundColor: "#292A2D",
    width: 350,
  },
  cardFileTitleContent: {
    borderBottom: "5px solid #202124",
    borderBottomWidth: 2
  },
  fileTitle: {
    color: "#E8EAED",
  },
  messageContent: {
    color: "#E8EAED",
  },
  fileContent: {
    borderBottom: "5px solid #202124"
  },
  page: {
    justifyContent: "center",
    textAlign: "center"
  },
});


export default useStyle;