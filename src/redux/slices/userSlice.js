import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";
export const authenticatedUser = createAsyncThunk(
  "user/authenticatedUser",
  async ({ formValues, isLogin }, { rejectWithValue }) => {
    try {
      console.log(formValues);
      const route = `/users/${isLogin ? "login" : "register"}`;
      const { data } = await axiosInstance.post(route, formValues);
      localStorage.setItem("token", data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const fetchUsersData = createAsyncThunk(
  "user/fetchUsersData",
  async () => {
    try {
      const { data } = await axiosInstance.get(`/users/userList`);
      console.log(data);

      return data;
    } catch (error) {}
  }
);

export const deleteUserData = createAsyncThunk(
  "user/deleteUserData",
  async (userId, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/users/userList/${userId}`);
      console.log(data);
      dispatch(fetchUsersData());
      return data;
    } catch (error) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    userInfo: null,
    users: [],
  },
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticatedUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticatedUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload.user;
    });
    builder.addCase(authenticatedUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUsersData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsersData.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsersData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteUserData.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteUserData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload : action.error.message;
    });
  },
});

export const userReducer = userSlice.reducer;
export const { logoutUser } = userSlice.actions;
