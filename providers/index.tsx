import ThemeProvider from "./theme";

export const Providers: React.FC = ({ children, ...rest }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
