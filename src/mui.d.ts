import '@mui/material/styles';
import { colors } from './module/mui/palette/colors';

declare module '@mui/material/styles' {
    interface Palette {
        brandColors: typeof colors;
    }

    interface PaletteOptions {
        brandColors: typeof colors;
    }
}
