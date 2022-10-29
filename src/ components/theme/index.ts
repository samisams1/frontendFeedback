/* SPDX-FileCopyrightText: 2021 @koistya */
/* SPDX-License-Identifier: MIT */

import * as React from "react";
import { createTheme, PaletteMode, Theme } from "@mui/material";

/**
 * Creates a customized Material UI theme.
 *
 * @see https://mui.com/customization/theming/
 * @see https://mui.com/customization/default-theme/
 */
function createCustomTheme(mode: PaletteMode): Theme {
  return createTheme({
    palette: {
      mode,
    },
  });
}

export const light = createCustomTheme("light");
export const dark = createCustomTheme("dark");
export const ToggleThemeContext = React.createContext(() => {});

export function useToggleTheme() {
  return React.useContext(ToggleThemeContext);
}
