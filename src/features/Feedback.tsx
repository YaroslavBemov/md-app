import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import CustomizedSnackbars from "./CustomizedSnackbars";

import { addFeedback } from "../services/firestore";
import { IFeedbackData, ISnackData } from "../interfaces";

const Feedback = () => {
  const [formData, setFormData] = useState({} as IFeedbackData);
  const [isDisabled, setIsDisabled] = useState(true);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState(false);
  const [snackData, setSnackData] = useState({} as ISnackData);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data: IFeedbackData = {
      name: String(formData.name),
      feedback: String(formData.feedback),
      email: String(formData.email),
    };

    const status = await addFeedback(data);
    let message: string = "";

    if (status === "success") {
      message = "Your feedback successfully sended!";
      setFormData({ name: "", feedback: "", email: "" });
      setChecked(false);
    } else {
      message = "Your feedback successfully sended!";
    }

    setSnackData({ status, message, open: true });
  };

  const handleClose = () => {
    setSnackData((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    setIsDisabled(!formData.name || !formData.feedback || error);
    setError(checked && !formData.email);
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <CustomizedSnackbars snackData={snackData} close={handleClose} />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Feedback
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                autoFocus
                autoComplete="given-name"
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                multiline
                label="Feedback"
                name="feedback"
                value={formData.feedback}
                rows={5}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    value="allowExtraEmails"
                    color="primary"
                    checked={checked}
                    onChange={handleChecked}
                  />
                }
                label="I would like to receive replies or updates via email."
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                disabled={!checked}
                label="Email Address"
                name="email"
                value={formData.email}
                autoComplete="email"
                onChange={handleChange}
                error={error}
                helperText={error && "Empty email adress"}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isDisabled}
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Feedback;
