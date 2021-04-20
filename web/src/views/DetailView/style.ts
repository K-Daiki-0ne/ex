import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme =>({
  root: {
    width: 390,
    maxWidth: 1200,
  },
  media: {
    height: "auto"
  },
  text: {
    // height: "auto",
    width: "80%",
    pointerEvents: "none"
  },
  filename: {
    fontSize: "28px",
    fontWeight: "bold"
  },
}));

export default useStyle;