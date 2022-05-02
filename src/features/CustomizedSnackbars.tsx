import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ISnackData } from "../interfaces";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

type PropType = {
  snackData: ISnackData;
  close: () => void;
};

export default function CustomizedSnackbars({ snackData, close }: PropType) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={snackData.open}
      autoHideDuration={6000}
      onClose={close}
    >
      <Alert onClose={close} severity={snackData.status} sx={{ width: "100%" }}>
        {snackData.message}
      </Alert>
    </Snackbar>
  );
}
