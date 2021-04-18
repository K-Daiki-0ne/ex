import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme =>({
  root: {
    width: 390,
    maxWidth: 1200,
  },
  media: {
    height: "auto"
  },
  filename: {
    fontSize: "28px",
    fontWeight: "bold"
  },
}));

export default useStyle;