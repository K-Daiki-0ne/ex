import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>({
  button: {
    margin: theme.spacing(1),
    width: "80%",
    backgroundColor: '#00b0ff',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
    
  }
}));


export default useStyle;