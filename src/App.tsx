import { lazy, Suspense, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import SWSnackbar from "./components/snackbar";
import AutSDK from "@aut-labs/sdk";
import ErrorPage from "@components/ErrorPage";
import backgroundImage from "@assets/autos/background.svg";
import background1 from "@assets/autos/background1.png";
import AutLoading from "@components/AutLoading";

const ParticipationScore = lazy(() => import("./pages/Playground/PS"));

function App() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage}), url(${background1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: {
      xs: window.innerHeight,
      sm: "100%"
    },
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0
  };

  if (error) {
    return <ErrorPage />;
  }

  // if (loading) {
  //   return <AutLoading width="130px" height="130px" />;
  // }

  return (
    <>
        <Box sx={backgroundStyle}>
          <Suspense fallback={<AutLoading />}>
            <Routes>
              <Route path="/" element={<ParticipationScore />} />
            </Routes>
          </Suspense>
        </Box>
    </>
  );
}

export default App;
