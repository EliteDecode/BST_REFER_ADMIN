export interface initialWalletStateProps {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
  singleWithdrawal: string | null;
  wallets: IWallet[] | null;
  withdrawals: IWithdrawal[] | null;
}

export interface IWallet {
  userId: string;
  withdrawn: number;
  total: number;
  transactions: [
    { referral: string; amount: number; date: Date; type: string },
  ];
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IWithdrawal {
  userId: string;
  amount: number;
  status: string;
  date: Date;
  _id: string;
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
