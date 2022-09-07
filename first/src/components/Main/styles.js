import { makeStyles } from '@material-ui/core/styles';
import { teal} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
    
  },
  cartContent: {
    paddingTop: 10,
    // color: '#fff',
    // backgroundColor: lightBlue[100],
  },
  divider: {
    margin: '20px 0',   
  },
  root:{
    color: '#fff',
    backgroundColor: teal[400],
  }
  
}));