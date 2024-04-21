// src/theme.ts
'use client';
import { Roboto,  } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  // palette:{
  //   text:{
  //     secondary: '#FFFFFF',
  //     primary: '#FFFFFF'
  //   },
  //   primary: {
  //     main: '#F0F0F0'
  //   },
  //   secondary: {
  //     main: '#F0F0F0'
  //   },
  //   action:{ //icon buttons, etc.
  //     active: '#F0F0F0',
  //   },
  // },
  typography: {
    fontFamily: `Munro, ${roboto.style.fontFamily}, sans-serif`,
    // allVariants:{
    //   color: '#FFF'
    //   // lineHeight: 1
    // }
  },
  components:{
    MuiDialogContent:{
      styleOverrides:{
        root:{
          paddingTop: '20px !important'
        }
      }
    },
    MuiButton: {
      defaultProps:{
        variant: 'contained'
      },
      styleOverrides: {
        root: {
          textTransform:'none',
          // fontWeight: 'bold',
          fontSize: '1rem',
          // "&.Mui-disabled": {
          //   backgroundColor: "#444"
          // }
        },
      },
    },
    MuiCheckbox:{
      styleOverrides:{
        root:{
          color:'white'
        }
      }
    },
  }
});

export default theme;
