"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

const ordersData = {
  "Khu kinh doanh": [
    {
      id: "KKD001",
      customer: "John Doe",
      status: "Processing",
      operator: "Alice",
      slaStatus: "On Time",
      timeToSla: "2h 30m",
    },
    {
      id: "KKD002",
      customer: "Jane Smith",
      status: "Shipped",
      operator: "Bob",
      slaStatus: "Delayed",
      timeToSla: "-1h 15m",
    },
    {
      id: "KKD003",
      customer: "Mike Johnson",
      status: "Delivered",
      operator: "Charlie",
      slaStatus: "On Time",
      timeToSla: "4h 45m",
    },
  ],
  Buồng: [
    {
      id: "B001",
      customer: "Emily Brown",
      status: "Processing",
      operator: "David",
      slaStatus: "At Risk",
      timeToSla: "0h 30m",
    },
    {
      id: "B002",
      customer: "Alex Wilson",
      status: "Cancelled",
      operator: "Eve",
      slaStatus: "Breached",
      timeToSla: "-3h 0m",
    },
    {
      id: "B003",
      customer: "Sarah Lee",
      status: "Completed",
      operator: "Frank",
      slaStatus: "On Time",
      timeToSla: "1h 45m",
    },
  ],
  "Dịch vụ đặc biệt": [
    {
      id: "DVD001",
      customer: "Tom Harris",
      status: "In Progress",
      operator: "Grace",
      slaStatus: "On Time",
      timeToSla: "5h 0m",
    },
    {
      id: "DVD002",
      customer: "Lucy Chen",
      status: "Scheduled",
      operator: "Henry",
      slaStatus: "At Risk",
      timeToSla: "0h 45m",
    },
    {
      id: "DVD003",
      customer: "Mark Taylor",
      status: "Completed",
      operator: "Ivy",
      slaStatus: "On Time",
      timeToSla: "3h 30m",
    },
  ],
};

export function OrderList({ orderType }: { orderType: keyof typeof ordersData }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);
  const [sortColumn, setSortColumn] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");

  const orders: any = ordersData[orderType] || [];

  const filteredOrders = orders
    .filter(
      (order: any) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customer.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{orderType} Orders</h2>
        <Input
          type="search"
          placeholder="Search orders..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("id")}
            >
              Order ID{" "}
              {sortColumn === "id" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("customer")}
            >
              Customer{" "}
              {sortColumn === "customer" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("status")}
            >
              Status{" "}
              {sortColumn === "status" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("operator")}
            >
              Operator{" "}
              {sortColumn === "operator" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("slaStatus")}
            >
              SLA Status{" "}
              {sortColumn === "slaStatus" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("timeToSla")}
            >
              Time to SLA{" "}
              {sortColumn === "timeToSla" && (
                <ArrowUpDown className="ml-2 h-4 w-4 inline" />
              )}
            </TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order: any) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.operator}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    order.slaStatus === "On Time"
                      ? "success"
                      : order.slaStatus === "Delayed"
                      ? "destructive"
                      : order.slaStatus === "At Risk"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {order.slaStatus}
                </Badge>
              </TableCell>
              <TableCell>{order.timeToSla}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setSelectedOrder(order)}>
                      View details
                    </DropdownMenuItem>
                    <DropdownMenuItem>Update status</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Escalate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={!!selectedOrder}
        onOpenChange={() => setSelectedOrder(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Order Details: {selectedOrder?.id}</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">Customer:</span>
              <span className="col-span-3">{selectedOrder?.customer}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">Status:</span>
              <span className="col-span-3">{selectedOrder?.status}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">Operator:</span>
              <span className="col-span-3">{selectedOrder?.operator}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">SLA Status:</span>
              <span className="col-span-3">{selectedOrder?.slaStatus}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <span className="font-medium">Time to SLA:</span>
              <span className="col-span-3">{selectedOrder?.timeToSla}</span>
            </div>
          </div>
          <Button variant="destructive" className="w-full">
            Escalate Order
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
