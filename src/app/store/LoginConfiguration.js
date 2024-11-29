import axios from "axios";
import { LOGIN_CONFIGURATION } from "../components/maincomponents/utils";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getLoginConfigurationdata = createAsyncThunk(
  "loginConfiguration",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(LOGIN_CONFIGURATION, {
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      });
      console.log(response);
      console.log(response.data.data[0]);
      if (response.data && response.data.data && response.data.data[0]) {
        return response.data.data[0];
      } else {
        throw new Error("Invalid data structure received from the server");
      }
    } catch (error) {
      console.error("Failed to fetch data. Error details:", error);
      return rejectWithValue(error.message);
    }
  }
);

const LoginConfugurationSliceredux = createSlice({
  name: "loginConfiguration",
  initialState: {
    file: null,
    currentColor: null,
    sitetitle: null,
    sitesubtitle: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLoginConfigurationdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getLoginConfigurationdata.fulfilled, (state, action) => {
        const { theme_colour, image, title, sub_title } = action.payload;
        state.currentColor = theme_colour;
        state.file = image;
        state.sitetitle = title;
        state.sitesubtitle = sub_title;
        state.loading = false;
      })
      .addCase(getLoginConfigurationdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default LoginConfugurationSliceredux;
