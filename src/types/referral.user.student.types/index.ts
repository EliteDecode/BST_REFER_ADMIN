import { IWallet } from "../wallet.types";

//=============Referral==========================================
export interface initialReferralStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleReferral: IReferral | null;
  referrals: IReferral[] | null;
}

export interface IReferral {
  fullname: string;
  address?: string;
  phone: string;
  email: string;
  course: string;
  referredBy: string;
  isMatched?: boolean;
  _id?: string;
  isSuspended?: boolean;
  createdAt: Date;
  updatedAt?: Date;
}

export interface IReferralTable {
  fullname: string;
  phone: string;
  email: string;
  course: string;
  isMatched: boolean;
  createdAt: Date;
  _id: string;
}

//===================================User =========================================
export interface initialUserStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleUser: IUser | null;
  users: IUser[] | null;
}

export interface IUser {
  fullname: string;
  address: string;
  phone: string;
  referrals: IReferral[];
  wallet: IWallet;
  email?: string;
  referralCode?: string;
  _id?: string;
  isSuspended?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IUserTable {
  fullname: string;
  phone: string;
  email: string;
  referralCode: string;
  _id: string;
  isSuspended: boolean;
  isProfileUpdated: boolean;
  createdAt: Date;
}

//==========================Student=======================================
export interface initialStudentStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleStudent: IStudent | null;
  students: IStudent[] | null;
}

export interface IStudent {
  fullname: string;
  address?: string;
  phone: string;
  email: string;
  course: string;
  referredBy?: string;
  isMatched?: boolean;
  _id?: string;
  isSuspended?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IStudentTable {
  fullname: string;
  phone: string;
  email: string;
  course: string;
  isMatched: boolean;
  createdAt: Date;
  _id: string;
}

//===================================================Users Unique Ids=========================
export interface IBstUserUniqueIds {
  fullname: string;
  phone: string;
  email: string;
  isIdUsed?: boolean;
  bstId: string;
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface initialUserUniqueStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleUser: IStudent | null;
  users: IBstUserUniqueIds[] | null;
}

export interface IBstUserUniqueIdsTables {
  fullname: string;
  phone: string;
  email: string;
  bstId: string;
  isIdUsed: boolean;
  createdAt: Date;
  _id: string;
}
