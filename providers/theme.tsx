import {
  createMuiTheme,
  darken,
  lighten,
  MuiThemeProvider,
  Theme,
} from "@material-ui/core/styles";

export type WidthType = { width: "xl" | "lg" | "md" | "sm" | "xs" };

const lightModePrimaryColor = "#00AFE1";
const lightModeSecondaryColor = "#4f4a8a";
const paperColor = "#242427";
export const staticLightPalette = {
  type: "light" as "light",
  primary: {
    main: lightModePrimaryColor,
    light: lightModePrimaryColor,
    dark: lightModePrimaryColor,
    contrastText: lightModePrimaryColor,
  },
  secondary: {
    main: lightModeSecondaryColor,
    light: "#76f881",
    dark: "#4f8f49",
    contrastText: "#221b15",
  },
  common: {
    white: "#c5f3ff",
    black: "#252525",
  },
  background: {
    default: "rgb(255,255,255)",
    paper: "rgb(254,254,254)",
  },
  warning: {
    main: "#d30051",
    light: "#ffafb3",
    dark: "#fff176",
    contrastText: "#fff176",
  },
};

const overrides = (staticPalette: Partial<Theme["palette"]>) => {
  return {
    MuiAppBar: {
      root: {
        height: 60,
        padding: 10,
      },
      colorPrimary: {
        backgroundColor: paperColor,
      },
      colorSecondary: {
        backgroundColor: lightModeSecondaryColor,
      },
    },
  };
};

export const lightTheme = () =>
  createMuiTheme({
    palette: {
      ...staticLightPalette,
    },
    overrides: overrides(staticLightPalette),
  });

export const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={lightTheme()}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
