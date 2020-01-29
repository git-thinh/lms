import React from 'react';

export type ThemeType = 'light' | 'dark';
export interface ThemeContextType {
  type?: ThemeType | null;
  /**
   *
   * @param {ThemeType | null} [type]
   * Set the theme type
   * If not specified, dark theme will become light theme, and vice versa
   * @returns {void}
   */
  setType(type?: ThemeType | null): void;
}

export const ThemeContext = React.createContext<ThemeContextType>({
  type: 'dark',
  setType: console.log
});

ThemeContext.displayName = 'CustomThemeContext';
