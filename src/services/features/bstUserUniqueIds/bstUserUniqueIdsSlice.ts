import studentService from "./bstUserUniqueIdsService";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunkWithHandler } from "../../api/apiHandler";
import {
  initialUserUniqueStateProps,
  IBstUserUniqueIds,
} from "../../../types/referral.user.student.types";

const users = localStorage.getItem("BST_Admin_Unique_Ids");

const initialState: initialUserUniqueStateProps = {
  users: users ? JSON.parse(users) : null,
  singleUser: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const AddUserUniqueId = createAsyncThunkWithHandler(
  "student/AddUserUniqueId",
  async (userData: IBstUserUniqueIds) => {
    return await studentService.add_bst_user_unique_ids(userData);
  }
);

export const FetchUsersUniqueIds = createAsyncThunkWithHandler(
  "student/fetchUsersUniqueIds",
  async () => {
    return await studentService.fetch_bst_user_unique_ids();
  }
);

export const UpdateUserUniqueId = createAsyncThunkWithHandler(
  "student/updateUserUniqueId",
  async (userData: IBstUserUniqueIds) => {
    return await studentService.update_user_unique_id(userData);
  }
);

export const FetchSingleUserUniqueId = createAsyncThunkWithHandler(
  "student/fetchSingleUserUniqueId",
  async (userId: string) => {
    return await studentService.fetch_single_user_unique_id(userId);
  }
);

export const DeleteUserUniqueId = createAsyncThunkWithHandler(
  "student/deleteUserUniqueId",
  async (userId: string) => {
    return await studentService.delete_user_unique_id(userId);
  }
);

const bstUniqueIds = createSlice({
  name: "bstUniqueId",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchUsersUniqueIds.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchUsersUniqueIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.users = action.payload.data;
      })
      .addCase(FetchUsersUniqueIds.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(FetchSingleUserUniqueId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleUserUniqueId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleUser = action.payload.data;
      })
      .addCase(FetchSingleUserUniqueId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(DeleteUserUniqueId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(DeleteUserUniqueId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(DeleteUserUniqueId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(AddUserUniqueId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(AddUserUniqueId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(AddUserUniqueId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(UpdateUserUniqueId.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(UpdateUserUniqueId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleUser = action.payload.data;
      })
      .addCase(UpdateUserUniqueId.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = bstUniqueIds.actions;
export default bstUniqueIds.reducer;
