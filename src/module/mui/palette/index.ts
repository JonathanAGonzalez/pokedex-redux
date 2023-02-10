import { PaletteOptions } from "@mui/material";
import { colors } from "./colors";

export const palette: PaletteOptions = {
    primary: {
        main: colors.primary,
    },
    secondary: {
        main: colors.secondary,
    },
    error: {
        main: colors.error,
    },
    info: {
        main: colors.info,
    },
    warning: {
        main: colors.warning,
        dark: colors.warningDark,
    },
    background: {
        default: colors.background,
    },
    brandColors: {
        ...colors,
    },
}