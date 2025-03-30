import React from "react";
import { Button } from "../styles";

export const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme.background === "#87CEEB" ? { background: "#2F4F4F", color: "white" } : { background: "#87CEEB", color: "black" });
  };
  
  return <Button onClick={toggleTheme}>Switch Theme</Button>;
};
