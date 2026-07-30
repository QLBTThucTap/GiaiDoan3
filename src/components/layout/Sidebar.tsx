import React from "react";
import {
  HomeIcon,
  ShoppingBagIcon,
  UsersIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
  ArrowLeftStartOnRectangleIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItem {
  name: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  active?: boolean;
  badge?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const navItems: NavItem[] = [
    { name: "Tổng quan", icon: HomeIcon, active: true },
    { name: "Giao dịch", icon: CreditCardIcon, badge: "Mới" },
    { name: "Sản phẩm", icon: ShoppingBagIcon },
    { name: "Khách hàng", icon: UsersIcon },
    { name: "Báo cáo KPI", icon: ChartBarIcon },
    { name: "Cài đặt hệ thống", icon: Cog6ToothIcon },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-slate-900 text-slate-300 transition-all duration-300 ease-in-out lg:static border-r border-slate-800 ${
          isCollapsed ? "w-20" : "w-64"
        } ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-slate-800/80">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-tr from-indigo-600 to-indigo-400 font-bold text-white shadow-md shadow-indigo-900/50">
              AG
            </div>
            {!isCollapsed && (
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-bold text-base text-white tracking-wide">
                  Antigravity
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-indigo-400">
                  Admin Control
                </span>
              </div>
            )}
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden cursor-pointer"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href="#"
                className={`flex items-center gap-3.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 group relative ${
                  item.active
                    ? "bg-indigo-600/90 text-white shadow-md shadow-indigo-600/30 font-semibold"
                    : "text-slate-400 hover:bg-slate-800/80 hover:text-slate-200"
                }`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 transition-transform group-hover:scale-110 ${item.active ? "text-white" : "text-slate-400 group-hover:text-white"}`}
                />
                {!isCollapsed && (
                  <span className="flex-1 whitespace-nowrap truncate">
                    {item.name}
                  </span>
                )}
                {!isCollapsed && item.badge && (
                  <span className="rounded-full bg-emerald-500/20 text-emerald-400 px-2 py-0.5 text-[10px] font-bold border border-emerald-500/30">
                    {item.badge}
                  </span>
                )}

                {/* Tooltip on Collapsed */}
                {isCollapsed && (
                  <div className="absolute left-full ml-3 hidden rounded-md bg-slate-800 px-2.5 py-1 text-xs font-semibold text-white shadow-lg group-hover:block z-50 whitespace-nowrap">
                    {item.name}
                  </div>
                )}
              </a>
            );
          })}
        </div>

        {/* Footer User & Collapse Action */}
        <div className="p-3 border-t border-slate-800/80 space-y-2">
          {/* Collapse Toggle Button (Desktop) */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex w-full items-center justify-center gap-2 rounded-xl p-2 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
          >
            {isCollapsed ? (
              <ChevronRightIcon className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeftIcon className="w-4 h-4" />
                <span>Thu gọn Sidebar</span>
              </>
            )}
          </button>

          {/* User Profile Summary */}
          <div className="flex items-center gap-3 p-2 rounded-xl bg-slate-800/50">
            <img
              src="https://api.dicebear.com/10.x/glyphs/svg?seed=4lo0ssg7"
              alt="Admin Avatar"
              className="w-8 h-8 rounded-full object-cover shrink-0 ring-2 ring-indigo-500/40"
            />
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-white truncate">
                  Quản trị viên
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  admin@antigravity.dev
                </p>
              </div>
            )}
            {!isCollapsed && (
              <button
                title="Đăng xuất"
                className="text-slate-400 hover:text-rose-400 transition-colors cursor-pointer"
              >
                <ArrowLeftStartOnRectangleIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
