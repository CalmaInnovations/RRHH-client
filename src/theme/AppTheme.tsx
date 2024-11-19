import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import {purpleTheme} from '../theme';


interface AppThemeProps {
  children: React.ReactNode;
}

export const AppTheme: React.FC<AppThemeProps> = ({children}) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
        <CssBaseline/>
        {children}
    </ThemeProvider>
  )
}
