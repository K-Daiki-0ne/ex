import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    justifyContent: "center",
    textAlign: "center"
  },
  fileTitle: {
    height: "65px"
  },
  fileTitleColor: {
    color: "#E8EAED",
    "& label": {
      color: "#E8EAED"
    },
    "& p": {
      color: "#E8EAED"
    }
  },
  fileUploadZone: {
    width: 350,
    height: "130px",
    backgroundColor: "#292A2D",
    color: "white"
  },
  uploadIcon: {
    fontSize: "80px",
    color: "#64b5f6"
  },
  fileCommentContent: {
    width: "100%",
    border: "none",
    marginTop: "10%",
    backgroundColor: "#292A2D",
    color: "#E8EAED"
  },
  postBtn: {
    marginTop: "7%",
    backgroundColor: "#292A2D"
  },
  postIcon: {
    fontSize: "50px",
    color: "#E8EAED"
  }
});


export default useStyle;