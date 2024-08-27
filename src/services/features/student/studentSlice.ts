import { createAsyncThunkWithHandler } from "@/services/api/apiHandler";
import studentService from "./studenService";
import { createSlice } from "@reduxjs/toolkit";
import {
  initialStudentStateProps,
  IStudent,
} from "@/types/referral.user.student.types";

const student = localStorage.getItem("BST_Admin_students");

const initialState: initialStudentStateProps = {
  students: student ? JSON.parse(student) : null,
  singleStudent: null,
  isLoading: false,
  message: "",
  isSuccess: false,
  isError: false,
};

export const AddStudent = createAsyncThunkWithHandler(
  "student/AddStudent",
  async (studentData: IStudent) => {
    return await studentService.add_students(studentData);
  }
);

export const FetchStudentDetails = createAsyncThunkWithHandler(
  "student/fetchStudentDetails",
  async () => {
    return await studentService.fetch_student_details();
  }
);

export const UpdateStudent = createAsyncThunkWithHandler(
  "student/UpdateStudent",
  async (studentData: IStudent) => {
    return await studentService.update_student_details(studentData);
  }
);

export const FetchSingleStudentDetails = createAsyncThunkWithHandler(
  "student/FetchSingleStudentDetails",
  async (studentId: string) => {
    return await studentService.fetch_single_student_details(studentId);
  }
);

export const DeleteStudent = createAsyncThunkWithHandler(
  "student/DeleteStudent",
  async (studentId: string) => {
    return await studentService.delete_student_details(studentId);
  }
);

const studentSlice = createSlice({
  name: "student",
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
      .addCase(FetchStudentDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchStudentDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.students = action.payload.data;
      })
      .addCase(FetchStudentDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(FetchSingleStudentDetails.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(FetchSingleStudentDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleStudent = action.payload.data;
      })
      .addCase(FetchSingleStudentDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(DeleteStudent.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(DeleteStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(DeleteStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(AddStudent.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(AddStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
      })
      .addCase(AddStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      })

      .addCase(UpdateStudent.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(UpdateStudent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.message = action.payload.message;
        state.singleStudent = action.payload.data;
      })
      .addCase(UpdateStudent.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload as string;
        state.isSuccess = false;
      });
  },
});

export const { reset } = studentSlice.actions;
export default studentSlice.reducer;
