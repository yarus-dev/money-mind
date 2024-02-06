import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const base = {
    
}

const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      persianGreen: "#06B49A",
      lightBlue: "#AFDBD2",
      onyx: "#36313D"
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  }

  export function ThemeProvider ({ children }) {
    return (
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    )
  }