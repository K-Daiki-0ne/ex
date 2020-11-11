import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles({
  header: {
    backgroundColor: "#292A2D"
  },
  headerText: {
    color: "#E8EAED",
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }
});

export default useStyle;