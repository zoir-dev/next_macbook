import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Slide } from "@mui/material";

export default function DirectionSnackbar({
  open,
  setOpen,
  message,
  severity,
}) {
  // console.log(severity);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
  });

  function transition(props) {
    return <Slide {...props} direction="left" />;
  }

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [open]);

  return (
    <div>
      <Snackbar
        open={open}
        TransitionComponent={transition}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        style={{ zIndex: !open && "-1" }}
      >
        <Alert
          style={{ backgroundColor: !severity ? "#28BF04" : "#dc5b5b" }}
          severity={severity ? "error" : "success"}
          onClose={handleClose}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
