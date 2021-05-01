import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme =>({
  root :{
    width: 300
  },
  textField: {
    width: "100%",
    color: "#9e9e9e",
    "& label": {
      color: "#9e9e9e"
    },
    "& p": {
      color: "#E8EAED"
    },
  },
  comment: {
    fontSize: "20px",
    color: "#9e9e9e",
    marginTop: "5%"
  },
  commentArea: {
    width: "100%",
    height: "30px",
  },
  button: {
    width: "100%"
  }
}));

export default useStyle;