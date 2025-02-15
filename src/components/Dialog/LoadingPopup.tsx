import { Typography } from "@mui/material";
import AutLoading from "../AutLoading";
import DialogWrapper from "./DialogWrapper";

const LoadingDialog = ({ open, message = null, fullScreen = false }: any) => {
  return (
    <DialogWrapper open={open} fullScreen={fullScreen}>
      <div
        className="sw-join-dialog-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          flex: 1
        }}
      >
        {message && (
          <Typography
            sx={{
              textAlign: "center",
              mt: 2
            }}
            component="div"
            color="offWhite.main"
            variant="subtitle2"
          >
            {message}
          </Typography>
        )}
        <div
          style={{
            flex: 1,
            position: "relative"
          }}
        >
          <AutLoading width="120px" height="120px" />
        </div>
      </div>
    </DialogWrapper>
  );
};

export default LoadingDialog;
