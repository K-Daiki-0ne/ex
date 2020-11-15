import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  register: {
    justifyContent: "center",
    textAlign: "center",
    width: "100%"
  },
  registerTile: {
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
  btn: {
    backgroundColor: "#9e9e9e"
  },
  registerText: {
    color: "#9e9e9e"
  },
  registerLinkText: {
    textDecoration: "none",
    color: "#e57373"
  }
});

export default useStyle;