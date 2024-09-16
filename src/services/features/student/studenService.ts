import axiosClient from "@/services/api/axiosClient";
import { IStudent } from "@/types/referral.user.student.types";

const add_students = async (studentData: IStudent) => {
  const response = await axiosClient.post(`/student`, studentData);
  return response.data;
};

const fetch_student_details = async () => {
  const response = await axiosClient.get(`/student`);

  if (response.data.success === true) {
    localStorage.setItem(
      "BST_Admin_students",
      JSON.stringify(response.data.data)
    );
  }
  return response.data;
};

const fetch_single_student_details = async (studentId: string) => {
  const response = await axiosClient.get(`/student/${studentId}`);
  return response.data;
};

const update_student_details = async (student: IStudent) => {
  const { _id, ...studentData } = student;
  const response = await axiosClient.put(
    `/student/${student?._id}`,
    studentData
  );

  // if (response.data.success === true) {
  //   localStorage.setItem(
  //     "BST_Admin_students",
  //     JSON.stringify(response.data.data)
  //   );
  // }
  return response.data;
};

const delete_student_details = async (studentId: string) => {
  const response = await axiosClient.delete(`/student/${studentId}`);
  return response.data;
};
const authService = {
  fetch_student_details,
  fetch_single_student_details,
  delete_student_details,
  add_students,
  update_student_details,
};

export default authService;
