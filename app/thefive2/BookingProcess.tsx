"use client";

import { Card, Timeline, Tag, Typography } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const { Title, Text } = Typography;

interface BookingEvent {
  time: number;
  status: string;
}

interface BookingProgressProps {
  events: BookingEvent[];
  bookingCode: string;
}

export default function BookingProgress({
  events,
  bookingCode,
}: BookingProgressProps) {
  const [sortedEvents, setSortedEvents] = useState<BookingEvent[]>([]);

  useEffect(() => {
    // Sort events by time in ascending order
    const sorted = [...events].sort((a, b) => a.time - b.time);
    setSortedEvents(sorted);
  }, [events]);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDuration = (milliseconds: number) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} ngày`;
    if (hours > 0) return `${hours} giờ`;
    if (minutes > 0) return `${minutes} phút`;
    return `${seconds} giây`;
  };

  const totalDuration =
    sortedEvents.length > 1
      ? formatDuration(
          sortedEvents[sortedEvents.length - 1].time - sortedEvents[0].time
        )
      : "N/A";

  return (
    <Card
      title={
        <>
          <Title level={4}>Tiến trình đặt phòng</Title>
          <Text type="secondary">Mã đặt phòng: {bookingCode}</Text>
        </>
      }
      extra={<Text type="secondary">Tổng thời gian: {totalDuration}</Text>}
      style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}
    >
      <Timeline
        mode="left"
        items={sortedEvents.map((event, index) => ({
          dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
          color: event.status.toLowerCase() === "hoàn thành" ? "green" : "blue",
          children: (
            <>
              <Text strong>{event.status}</Text>
              <br />
              <Text type="secondary">{formatDate(event.time)}</Text>
              <br />
              {index < sortedEvents.length - 1 && (
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Thời gian đến bước tiếp theo:{" "}
                  {formatDuration(sortedEvents[index + 1].time - event.time)}
                </Text>
              )}
              <Tag
                color={index === sortedEvents.length - 1 ? "green" : "blue"}
                style={{ marginLeft: "8px" }}
              >
                {index === sortedEvents.length - 1
                  ? "Hiện tại"
                  : `${index + 1}/${sortedEvents.length}`}
              </Tag>
            </>
          ),
        }))}
      />
    </Card>
  );
}
