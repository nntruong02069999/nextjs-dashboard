"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Mon", responseTime: 1.2, slaCompliance: 95 },
  { name: "Tue", responseTime: 1.5, slaCompliance: 88 },
  { name: "Wed", responseTime: 1.3, slaCompliance: 92 },
  { name: "Thu", responseTime: 1.1, slaCompliance: 96 },
  { name: "Fri", responseTime: 1.4, slaCompliance: 91 },
  { name: "Sat", responseTime: 1.2, slaCompliance: 93 },
  { name: "Sun", responseTime: 1.6, slaCompliance: 89 },
];

export function SlaMetricsPanel() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg Response Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1.2h</div>
          <p className="text-xs text-muted-foreground">-0.1h from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Orders Meeting SLA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground">+2% from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Breached Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground">-3 from last week</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Avg Resolution Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.5h</div>
          <p className="text-xs text-muted-foreground">+0.2h from last week</p>
        </CardContent>
      </Card>
      <Card className="md:col-span-2 lg:col-span-4">
        <CardHeader>
          <CardTitle>Weekly SLA Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="responseTime"
                stroke="#8884d8"
                name="Avg Response Time (h)"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="slaCompliance"
                stroke="#82ca9d"
                name="SLA Compliance (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
