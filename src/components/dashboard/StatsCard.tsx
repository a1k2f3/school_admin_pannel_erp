import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon?: LucideIcon;
  change?: string;
  color?: "green" | "red" | "blue";
}

export function StatsCard({ title, value, icon: Icon, change, color = "blue" }: StatsCardProps) {
  const colorVariants = {
    green: "text-green-600 bg-green-50 dark:bg-green-900/20",
    red: "text-red-600 bg-red-50 dark:bg-red-900/20",
    blue: "text-blue-600 bg-blue-50 dark:bg-blue-900/20",
  };

  const changeColor = change?.startsWith("+") ? "text-green-600" : change?.startsWith("-") ? "text-red-600" : "text-gray-600";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{value}</p>
          {change && (
            <p className={cn("text-sm font-medium mt-2", changeColor)}>
              {change} from last month
            </p>
          )}
        </div>
        {Icon && (
          <div className={cn("p-3 rounded-full", colorVariants[color])}>
            <Icon className="w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  );
}