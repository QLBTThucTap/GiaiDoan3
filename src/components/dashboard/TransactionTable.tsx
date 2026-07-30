import React, { useState, useMemo, useCallback } from "react";
import type { Transaction, TransactionStatus } from "../../types/dashboard";
import { INITIAL_TRANSACTIONS } from "../../data/mockData";
import { Card, CardHeader, CardTitle } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Badge } from "../ui/Badge";
import { Modal } from "../ui/Modal";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "../ui/Table";
import {
  PlusIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  FunnelIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export const TransactionTable: React.FC = () => {
  // State React Hooks
  const [transactions, setTransactions] =
    useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<TransactionStatus | "All">(
    "All",
  );

  // Modal States
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingTransaction, setEditingTransaction] =
    useState<Transaction | null>(null);
  const [deletingTransactionId, setDeletingTransactionId] = useState<
    string | null
  >(null);

  // Form State
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    amount: "",
    status: "Completed" as TransactionStatus,
    paymentMethod: "Chuyển khoản VNPAY",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Filtered & Searched Data via useMemo
  const filteredTransactions = useMemo(() => {
    return transactions.filter((trx) => {
      const matchesSearch =
        trx.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trx.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trx.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || trx.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, searchTerm, statusFilter]);

  // Total summary calculation
  const totalAmount = useMemo(() => {
    return filteredTransactions.reduce((acc, item) => acc + item.amount, 0);
  }, [filteredTransactions]);

  // Handlers
  const handleOpenAddModal = useCallback(() => {
    setEditingTransaction(null);
    setFormData({
      customer: "",
      email: "",
      amount: "",
      status: "Completed",
      paymentMethod: "Chuyển khoản VNPAY",
    });
    setFormErrors({});
    setIsAddEditModalOpen(true);
  }, []);

  const handleOpenEditModal = useCallback((trx: Transaction) => {
    setEditingTransaction(trx);
    setFormData({
      customer: trx.customer,
      email: trx.email,
      amount: trx.amount.toString(),
      status: trx.status,
      paymentMethod: trx.paymentMethod,
    });
    setFormErrors({});
    setIsAddEditModalOpen(true);
  }, []);

  const handleOpenDeleteModal = useCallback((id: string) => {
    setDeletingTransactionId(id);
    setIsDeleteModalOpen(true);
  }, []);

  // Form Validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.customer.trim())
      errors.customer = "Tên khách hàng không được để trống";
    if (!formData.email.trim()) errors.email = "Email không được để trống";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email không hợp lệ";

    if (
      !formData.amount ||
      isNaN(Number(formData.amount)) ||
      Number(formData.amount) <= 0
    ) {
      errors.amount = "Số tiền phải là số hợp lệ lớn hơn 0";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Submit Add/Edit
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editingTransaction) {
      // Edit
      setTransactions((prev) =>
        prev.map((trx) =>
          trx.id === editingTransaction.id
            ? {
                ...trx,
                customer: formData.customer,
                email: formData.email,
                amount: Number(formData.amount),
                status: formData.status,
                paymentMethod: formData.paymentMethod,
              }
            : trx,
        ),
      );
    } else {
      // Add New
      const newTrx: Transaction = {
        id: `TRX-${Math.floor(1000 + Math.random() * 9000)}`,
        customer: formData.customer,
        email: formData.email,
        avatar: `https://images.unsplash.com/photo-${1535713875002 + Math.floor(Math.random() * 1000)}?auto=format&fit=crop&w=120&q=80`,
        amount: Number(formData.amount),
        status: formData.status,
        date: new Date().toISOString().slice(0, 16).replace("T", " "),
        paymentMethod: formData.paymentMethod,
      };
      setTransactions((prev) => [newTrx, ...prev]);
    }

    setIsAddEditModalOpen(false);
  };

  // Confirm Delete
  const handleConfirmDelete = () => {
    if (deletingTransactionId) {
      setTransactions((prev) =>
        prev.filter((trx) => trx.id !== deletingTransactionId),
      );
      setIsDeleteModalOpen(false);
      setDeletingTransactionId(null);
    }
  };

  // Helper for Badge status
  const getBadgeVariant = (status: TransactionStatus) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Pending":
        return "warning";
      case "Processing":
        return "info";
      case "Cancelled":
        return "danger";
      default:
        return "neutral";
    }
  };

  const statusOptions = [
    { label: "Tất cả trạng thái", value: "All" },
    { label: "Hoàn thành (Completed)", value: "Completed" },
    { label: "Đang xử lý (Processing)", value: "Processing" },
    { label: "Chờ thanh toán (Pending)", value: "Pending" },
    { label: "Đã hủy (Cancelled)", value: "Cancelled" },
  ];

  return (
    <Card className="mt-8">
      {/* Table Header Controls */}
      <CardHeader className="flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <CardTitle>Danh sách Giao dịch Gần đây</CardTitle>
          <p className="text-xs text-slate-500 mt-1">
            Quản lý, tìm kiếm và cập nhật trạng thái các đơn hàng giao dịch trực
            tuyến.
          </p>
        </div>

        <Button
          onClick={handleOpenAddModal}
          leftIcon={<PlusIcon className="w-4 h-4" />}
        >
          Thêm Giao dịch
        </Button>
      </CardHeader>

      {/* Filter & Search Bar */}
      <div className="p-4 sm:p-6 bg-slate-50/50 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full sm:w-72">
          <Input
            placeholder="Tìm theo Mã, Tên hoặc Email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            leftIcon={<MagnifyingGlassIcon className="w-4 h-4" />}
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <FunnelIcon className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
          <Select
            options={statusOptions}
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value as TransactionStatus | "All")
            }
            className="w-full sm:w-56"
          />
        </div>
      </div>

      {/* Table Content */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mã Giao dịch</TableHead>
            <TableHead>Khách hàng</TableHead>
            <TableHead>Số tiền</TableHead>
            <TableHead>Phương thức</TableHead>
            <TableHead>Trạng thái</TableHead>
            <TableHead>Thời gian</TableHead>
            <TableHead className="text-right">Thao tác</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTransactions.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-12 text-slate-400"
              >
                Không tìm thấy giao dịch nào phù hợp với điều kiện tìm kiếm.
              </TableCell>
            </TableRow>
          ) : (
            filteredTransactions.map((trx) => (
              <TableRow key={trx.id}>
                <TableCell className="font-semibold text-slate-900">
                  {trx.id}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={trx.avatar}
                      alt={trx.customer}
                      className="w-8 h-8 rounded-full object-cover shrink-0 ring-1 ring-slate-200"
                    />
                    <div>
                      <p className="font-semibold text-slate-800 leading-tight">
                        {trx.customer}
                      </p>
                      <p className="text-xs text-slate-400">{trx.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-slate-900">
                  {trx.amount.toLocaleString("vi-VN")} đ
                </TableCell>
                <TableCell className="text-xs text-slate-600 font-medium">
                  {trx.paymentMethod}
                </TableCell>
                <TableCell>
                  <Badge variant={getBadgeVariant(trx.status)}>
                    {trx.status === "Completed"
                      ? "Hoàn thành"
                      : trx.status === "Pending"
                        ? "Chờ duyệt"
                        : trx.status === "Processing"
                          ? "Đang xử lý"
                          : "Đã hủy"}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs text-slate-500">
                  {trx.date}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => handleOpenEditModal(trx)}
                      className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-indigo-600 transition-colors cursor-pointer"
                      title="Sửa"
                    >
                      <PencilSquareIcon className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(trx.id)}
                      className="p-1.5 rounded-lg text-slate-500 hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                      title="Xóa"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* Footer Stats Summary */}
      <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
        <span>
          Hiển thị <strong>{filteredTransactions.length}</strong> trên{" "}
          <strong>{transactions.length}</strong> giao dịch
        </span>
        <span className="font-semibold text-slate-800">
          Tổng giá trị đang lọc:{" "}
          <strong className="text-indigo-600 font-bold">
            {totalAmount.toLocaleString("vi-VN")} đ
          </strong>
        </span>
      </div>

      {/* MODAL: Thêm / Sửa Giao dịch */}
      <Modal
        isOpen={isAddEditModalOpen}
        onClose={() => setIsAddEditModalOpen(false)}
        title={editingTransaction ? "Chỉnh sửa Giao dịch" : "Tạo Giao dịch Mới"}
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => setIsAddEditModalOpen(false)}
            >
              Hủy
            </Button>
            <Button variant="primary" onClick={handleSubmitForm}>
              {editingTransaction ? "Lưu cập nhật" : "Tạo mới"}
            </Button>
          </>
        }
      >
        <form onSubmit={handleSubmitForm} className="space-y-4">
          <Input
            label="Tên khách hàng"
            placeholder="Ví dụ: Nguyễn Văn A"
            value={formData.customer}
            onChange={(e) =>
              setFormData({ ...formData, customer: e.target.value })
            }
            error={formErrors.customer}
          />
          <Input
            label="Địa chỉ Email"
            type="email"
            placeholder="nguyenvana@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            error={formErrors.email}
          />
          <Input
            label="Số tiền (VNĐ)"
            type="number"
            placeholder="1500000"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            error={formErrors.amount}
          />
          <Select
            label="Phương thức thanh toán"
            value={formData.paymentMethod}
            onChange={(e) =>
              setFormData({ ...formData, paymentMethod: e.target.value })
            }
            options={[
              { label: "Chuyển khoản VNPAY", value: "Chuyển khoản VNPAY" },
              { label: "Thẻ Visa/Mastercard", value: "Thẻ Visa/Mastercard" },
              { label: "Ví MoMo", value: "Ví MoMo" },
              {
                label: "Chuyển khoản Ngân hàng",
                value: "Chuyển khoản Ngân hàng",
              },
              { label: "Ví ZaloPay", value: "Ví ZaloPay" },
              { label: "COD (Tiền mặt)", value: "COD (Tiền mặt)" },
            ]}
          />
          <Select
            label="Trạng thái giao dịch"
            value={formData.status}
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value as TransactionStatus,
              })
            }
            options={[
              { label: "Hoàn thành (Completed)", value: "Completed" },
              { label: "Đang xử lý (Processing)", value: "Processing" },
              { label: "Chờ duyệt (Pending)", value: "Pending" },
              { label: "Đã hủy (Cancelled)", value: "Cancelled" },
            ]}
          />
        </form>
      </Modal>

      {/* MODAL: Xác nhận Xóa */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Xác nhận Xóa Giao dịch"
        maxWidth="sm"
        footer={
          <>
            <Button
              variant="outline"
              onClick={() => setIsDeleteModalOpen(false)}
            >
              Hủy bỏ
            </Button>
            <Button variant="danger" onClick={handleConfirmDelete}>
              Xóa vĩnh viễn
            </Button>
          </>
        }
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-rose-100 rounded-full text-rose-600 shrink-0">
            <ExclamationTriangleIcon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">
              Bạn có chắc chắn muốn xóa giao dịch này?
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Thao tác này không thể hoàn tác. Giao dịch sẽ bị xóa vĩnh viễn
              khỏi danh sách hệ thống.
            </p>
          </div>
        </div>
      </Modal>
    </Card>
  );
};
