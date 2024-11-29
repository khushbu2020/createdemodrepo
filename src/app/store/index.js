import LoginSliceredux from "./LoadingSlice";
import LoginConfigurationSliceredux from "./LoginConfiguration";
import OtpSliceredux from "./OtpSlice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    logindata: LoginSliceredux.reducer,
    loginConfiguration: LoginConfigurationSliceredux.reducer,
    otpdata: OtpSliceredux.reducer,
  },
});

export default store;
