import React, { useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftStartOnRectangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

type HeaderProps = {
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Header: React.FC<HeaderProps> = ({ setIsMobileOpen }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 px-4 sm:px-6 backdrop-blur-md transition-all">
      {/* Left side: Mobile menu & Search */}
      <div className="flex items-center gap-3 sm:gap-4 flex-1 max-w-xl">
        <button
          onClick={() => setIsMobileOpen(true)}
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden cursor-pointer"
        >
          <Bars3Icon className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-xs sm:max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <MagnifyingGlassIcon className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm giao dịch, khách hàng..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-4 text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      {/* Right side: Actions & User Avatar */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* System Status Indicator */}
        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
          <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
          <span>Hệ thống Hoạt động</span>
        </div>

        {/* Notifications Dropdown Toggle */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-xl p-2 text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Thông báo"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 flex h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
          </button>

          {/* Notifications Dropdown Panel */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white p-4 shadow-xl border border-slate-100 z-50 animate-scale-up">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h4 className="text-sm font-bold text-slate-900">
                  Thông báo mới
                </h4>
                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-600">
                  3 chưa đọc
                </span>
              </div>
              <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto py-1">
                <div className="py-2.5 text-xs">
                  <p className="font-semibold text-slate-800">
                    Đơn hàng mới #TRX-1006
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    Đặng Tuấn Kiệt vừa thanh toán 2.100.000đ
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    5 phút trước
                  </span>
                </div>
                <div className="py-2.5 text-xs">
                  <p className="font-semibold text-slate-800">
                    Cập nhật hệ thống thành công
                  </p>
                  <p className="text-slate-500 text-[11px]">
                    Phiên bản 2.4.0 đã sẵn sàng sử dụng
                  </p>
                  <span className="text-[10px] text-slate-400 mt-1 block">
                    1 giờ trước
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Profile Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <img
              src="https://api.dicebear.com/10.x/glyphs/svg?seed=4lo0ssg7"
              alt="Avatar"
              className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-600/30"
            />
            <span className="hidden sm:inline-block text-xs font-semibold text-slate-700">
              Quản trị viên
            </span>
            <ChevronDownIcon className="w-3.5 h-3.5 text-slate-500 hidden sm:block" />
          </button>

          {/* User Menu Dropdown */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-white py-2 shadow-xl border border-slate-100 z-50 animate-scale-up">
              <a
                href="#"
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <UserIcon className="w-4 h-4 text-slate-400" />
                <span>Trang cá nhân</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50"
              >
                <Cog6ToothIcon className="w-4 h-4 text-slate-400" />
                <span>Cài đặt tài khoản</span>
              </a>
              <hr className="my-1 border-slate-100" />
              <a
                href="#"
                className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50"
              >
                <ArrowLeftStartOnRectangleIcon className="w-4 h-4 text-rose-500" />
                <span>Đăng xuất</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
