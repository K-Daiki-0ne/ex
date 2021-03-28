import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles(theme =>({
  root: {
    width: 380,
    maxWidth: 1200,
  },
  media: {
    height: 370,
  },
  filename: {
    fontSize: "28px",
    fontWeight: "bold"
  },
}));

export default useStyle;