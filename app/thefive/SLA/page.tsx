"use client";

import { useState } from "react";
import { DashboardHeader } from "./dashboard-header";
import { SlaMetricsPanel } from "./sla-metrics-panel";
import { OrderList } from "./order-list";
import { ActionableSidebar } from "./actionable-sidebar";

export default function DashboardPage() {
  const [orderType, setOrderType] = useState<any>("Khu kinh doanh");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardHeader orderType={orderType} setOrderType={setOrderType} />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-3">
            <SlaMetricsPanel />
            <OrderList orderType={orderType} />
          </div>
          <div className="md:col-span-1">
            <ActionableSidebar />
          </div>
        </div>
      </main>
    </div>
  );
}
