import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, TrendingUp, AlertTriangle, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActionableSidebar() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold flex items-center justify-between">
            Actionable Insights
            <Button variant="ghost" size="sm">
              View All
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-start space-x-2">
              <Bell className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <span>3 orders are approaching SLA breach. Take action now.</span>
            </li>
            <li className="flex items-start space-x-2">
              <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span>Response times have improved by 15% this week.</span>
            </li>
            <li className="flex items-start space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <span>
                Operator Alice has 5 overdue orders. Consider reassignment.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Upcoming SLA Breaches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>ORD006</span>
              <Badge variant="destructive">30m left</Badge>
            </li>
            <li className="flex justify-between items-center">
              <span>ORD008</span>
              <Badge variant="destructive">45m left</Badge>
            </li>
            <li className="flex justify-between items-center">
              <span>ORD010</span>
              <Badge variant="destructive">1h 15m left</Badge>
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Top Performing Operators
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Alice</span>
              <Badge variant="success">98% SLA</Badge>
            </li>
            <li className="flex justify-between items-center">
              <span>Bob</span>
              <Badge variant="success">95% SLA</Badge>
            </li>
            <li className="flex justify-between items-center">
              <span>Charlie</span>
              <Badge variant="success">93% SLA</Badge>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
