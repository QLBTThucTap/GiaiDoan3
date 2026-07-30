export type TransactionStatus =
  | "Completed"
  | "Pending"
  | "Cancelled"
  | "Processing";

export type Transaction = {
  id: string;
  customer: string;
  email: string;
  avatar: string;
  amount: number;
  status: TransactionStatus;
  date: string;
  paymentMethod: string;
};

export type StatCardData = {
  id: string;
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  period: string;
  type: "revenue" | "users" | "orders" | "conversion";
};

export type FilterOptions = {
  search: string;
  status: TransactionStatus | "All";
};
