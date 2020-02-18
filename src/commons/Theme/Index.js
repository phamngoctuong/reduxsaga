import { createMuiTheme } from '@material-ui/core/styles';
//Dùng để khai báo tất cả các CSS nào dùng chung
const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#F44336',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: 'white',
    border: '#CCCCCC',
  },
});
export default theme;
