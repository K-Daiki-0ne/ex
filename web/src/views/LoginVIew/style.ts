import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  login: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  loginTile: {
    color: "#E8EAED"
  },
  card: {
    backgroundColor: "#292A2D",
    width: 400,
  },
  root: {
    color: "#E8EAED",
    "& label": {
      color: "#E8EAED"
    },
    "& p": {
      color: "#E8EAED"
    }
  },
  btnText: {
    textDecoration: "none",
    fontSize: "10px",
    color: "aliceblue"
  }
});

export default useStyle;