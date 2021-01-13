import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) =>({
  root: {
    justifyContent: "center",
    textAlign: "center",
    '& .Mui-selected': {
      backgroundColor: 'transparent',
      color:'#90caf9',
     },
     '& > *': {
      marginTop: theme.spacing(2),
    },
  },
  selected: {
    backgroundColor: 'transparent',
    color:'#90caf9',
  },
  btn: {
    position: "fixed",
    top: "10%",
    right: "10%"
  },
  iconSize: {
    fontSize: "80px",
    color: "#9e9e9e"
  },
  bottomArea: {
    paddingBottom: "30px",
    marginTop: "-35%",
    // height: 100
  },
  tabMenu: {
    backgroundColor: "#202124",
    width: 350
  },
  iconColor: {
    color: "#9e9e9e",
  },
  card: {
    backgroundColor: "#292A2D",
    width: 350,
    height: 70,
  },
  fileTitle: {
    color: "#9e9e9e",
  },
  dairyContent: {
    color: "#9e9e9e",
    fontSize: "12px"
  },
  deleteBtn: {
    right: "-47%",
    marginTop: "-20%"
  },
  deleteIcon: {
    fontSize: "28px",
    color: "#9e9e9e"
  },
  page: {
    justifyContent: "center",
    bottom: "15%",
    textAlign: "center",
    position: "fixed"
  },
}));


export default useStyle;