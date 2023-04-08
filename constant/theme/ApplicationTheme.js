import { createTheme } from "@mui/material/styles";
import { lightGreen, purple } from "@mui/material/colors";

export const ApplicationTheme = createTheme({
	palette: {
		primary: {
			main: lightGreen.A100,
		},
		secondary: {
			main: purple[300],
		},
	},
});
