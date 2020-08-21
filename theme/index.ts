import React from 'react';
import dark from './dark-theme';

export const theme = {
    dark
};

export const ThemeContext = React.createContext(theme);
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;