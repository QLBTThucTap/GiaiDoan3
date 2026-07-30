import React from "react";
import type { StatCardData } from "../../types/dashboard";
import { Card } from "../ui/Card";
import {
  BanknotesIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  ArrowTrendingUpIcon,
  ArrowUpRightIcon,
  ArrowDownRightIcon,
} from "@heroicons/react/24/outline";

type StatsGridProps = {
  stats: StatCardData[];
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const getIcon = (type: StatCardData["type"]) => {
    switch (type) {
      case "revenue":
        return <BanknotesIcon className="w-6 h-6 text-emerald-600" />;
      case "users":
        return <UserGroupIcon className="w-6 h-6 text-indigo-600" />;
      case "orders":
        return <ShoppingBagIcon className="w-6 h-6 text-amber-600" />;
      case "conversion":
        return <ArrowTrendingUpIcon className="w-6 h-6 text-blue-600" />;
      default:
        return <BanknotesIcon className="w-6 h-6 text-slate-600" />;
    }
  };

  const getBgColor = (type: StatCardData["type"]) => {
    switch (type) {
      case "revenue":
        return "bg-emerald-50 border-emerald-100";
      case "users":
        return "bg-indigo-50 border-indigo-100";
      case "orders":
        return "bg-amber-50 border-amber-100";
      case "conversion":
        return "bg-blue-50 border-blue-100";
      default:
        return "bg-slate-50 border-slate-100";
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat) => (
        <Card key={stat.id} className="p-5 relative overflow-hidden group">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              {stat.title}
            </span>
            <div
              className={`p-2.5 rounded-xl border ${getBgColor(stat.type)} transition-transform group-hover:scale-110`}
            >
              {getIcon(stat.type)}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              {stat.value}
            </h3>
          </div>

          <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold">
            <span
              className={`inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full ${
                stat.isIncrease
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                  : "bg-rose-50 text-rose-700 border border-rose-200"
              }`}
            >
              {stat.isIncrease ? (
                <ArrowUpRightIcon className="w-3.5 h-3.5" />
              ) : (
                <ArrowDownRightIcon className="w-3.5 h-3.5" />
              )}
              {stat.change}
            </span>
            <span className="text-slate-400 font-normal">{stat.period}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};
