import { createTheme } from '@mui/material/styles';
import { components } from './components';
import { palette } from './palette';


export const theme = createTheme({
    // Use spacing with caution, the default multiplying factor of Mui is 0.5 (factor * 0.5)rem  
    spacing: (factor: number) => `${0.25 * factor}rem`,
    palette,
    components,
    typography: {
        fontFamily: "Poppins, sans-serif",
    }
});