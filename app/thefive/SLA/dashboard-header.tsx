"use client";

import { useState } from "react";
import { Bell, Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";

export function DashboardHeader({ orderType, setOrderType }: { orderType: string, setOrderType: (orderType: string) => void }) {
  const [overallSla, setOverallSla] = useState(92);
  const { setTheme, theme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
              SLA Dashboard
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input type="search" placeholder="Search..." className="w-64" />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-6 w-6" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {theme === "dark" ? (
                    <Moon className="h-6 w-6" />
                  ) : (
                    <Sun className="h-6 w-6" />
                  )}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <img
                    src="/placeholder-user.jpg"
                    alt="User avatar"
                    className="rounded-full"
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-lg font-medium mb-4 sm:mb-0">
            Overall SLA Compliance:
            <span
              className={`ml-2 ${
                overallSla >= 90
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {overallSla}%
            </span>
          </div>
          <div className="flex space-x-2">
            <Button
              variant={orderType === "Khu kinh doanh" ? "default" : "outline"}
              onClick={() => setOrderType("Khu kinh doanh")}
            >
              Khu kinh doanh
            </Button>
            <Button
              variant={orderType === "Buồng" ? "default" : "outline"}
              onClick={() => setOrderType("Buồng")}
            >
              Buồng
            </Button>
            <Button
              variant={orderType === "Dịch vụ đặc biệt" ? "default" : "outline"}
              onClick={() => setOrderType("Dịch vụ đặc biệt")}
            >
              Dịch vụ đặc biệt
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
