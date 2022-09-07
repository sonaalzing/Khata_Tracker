import{makeStyles}from '@material-ui/core';
import { red, green,lightBlue} from '@material-ui/core/colors';


export default makeStyles(()=>({
    income:{
        color: '#fff',
        backgroundColor: green[100],
        borderBottom:'10px solid rgba(0,255,0,0.5)'     
    },
    expense:{
        color: '#fff',
        backgroundColor: red[100],
        
      
        borderBottom:'10px solid rgba(255,0,0,0.5)'     
    }
    

}));