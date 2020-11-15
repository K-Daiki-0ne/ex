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
  cardAction: {
    justifyContent: "center"
  },
  btnText: {
    fontSize: "18px"
  },
  registerText: {
    color: "#E8EAED"
  },
  registerLinkText: {
    textDecoration: "none",
    color: "#e57373"
  }
});

export default useStyle;