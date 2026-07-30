import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";
import { StatsGrid } from "./components/dashboard/StatsGrid";
import { TransactionTable } from "./components/dashboard/TransactionTable";
import { INITIAL_STATS } from "./data/mockData";
import { ArrowPathIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Button } from "./components/ui/Button";

export function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header Topbar */}
        <Header setIsMobileOpen={setIsMobileOpen} />

        {/* Dashboard Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6">
          {/* Welcome & Period Action Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-linear-to-r from-indigo-900 via-indigo-800 to-slate-900 text-white p-6 rounded-2xl shadow-xl shadow-indigo-950/10">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-300">
                Overview Dashboard
              </span>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-1">
                Chào mừng trở lại, Quản trị viên! 👋
              </h1>
              <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                Dưới đây là báo cáo thống kê doanh thu và danh sách các giao
                dịch thực tế hôm nay.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="secondary"
                size="sm"
                className="bg-white/10 hover:bg-white/20 text-white border-none backdrop-blur-sm"
                leftIcon={<CalendarIcon className="w-4 h-4" />}
              >
                Hôm nay: {new Date().toLocaleDateString("vi-VN")}
              </Button>
              <Button
                variant="secondary"
                size="sm"
                className="bg-indigo-500 hover:bg-indigo-400 text-black border-none shadow-sm"
                leftIcon={<ArrowPathIcon className="w-4 h-4" />}
              >
                Làm mới
              </Button>
            </div>
          </div>

          {/* Stats KPI Grid */}
          <StatsGrid stats={INITIAL_STATS} />

          {/* Recent Transactions Table with CRUD */}
          <TransactionTable />
        </main>

        {/* Global Footer */}
        <footer className="border-t border-slate-200/80 bg-white py-4 px-6 text-center text-xs text-slate-400">
          <p>
            © 2026 Antigravity Admin Control System. Thiết kế hoàn chuẩn
            TailwindCSS & React Hooks.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
