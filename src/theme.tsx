import {purple,teal} from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

const theme: Theme = createMuiTheme({
    palette:{
        type:"dark",
        primary: teal,
        secondary: purple
    }
});

export default theme;