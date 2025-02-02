import { BrowserRouter as Router } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import App from "./App";
import AutTheme from "./theme/theme";
import "./App.scss";
import CssBaseline from "@mui/material/CssBaseline";
import { ConfirmDialogProvider } from "react-mui-confirm";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={AutTheme}>
              <CssBaseline />
                <Router>
                  {/* @ts-ignore */}
                  <ConfirmDialogProvider
                    dialogProps={{
                      PaperProps: {
                        sx: {
                          borderRadius: "16px",
                          borderColor: "divider"
                        }
                      }
                    }}
                    dialogTitleProps={{
                      variant: "subtitle1",
                      color: "white"
                    }}
                    confirmButtonProps={{
                      color: "error",
                      variant: "outlined"
                    }}
                    confirmButtonText="Delete"
                    cancelButtonProps={{
                      color: "offWhite",
                      variant: "outlined"
                    }}
                    cancelButtonText="Dismiss"
                  >
                    <App />
                  </ConfirmDialogProvider>
                </Router>
                {/* </PersistGate> */}
            </ThemeProvider>
          </StyledEngineProvider>
);
reportWebVitals(null);
