import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers";

export default function CommonDatePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["MobileDatePicker"]}>
        <MobileDatePicker
          format="DD-MM-YYYY"
          sx={{ width: "100%", borderRadius: "12px" }}
          slotProps={{
            textField: {
              // size: "small",
              InputProps: {
                sx: { borderRadius: "12px" }, // Apply the styles here
              },
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
