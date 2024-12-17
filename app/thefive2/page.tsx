"use client";

import BookingProgress from "./BookingProcess";
import { ConfigProvider } from "antd";
import viVN from "antd/locale/vi_VN";

export default function BookingProgressPage() {
  const bookingEvents = [
    {
      time: new Date("2023-06-01T10:00:00").getTime(),
      status: "Đặt phòng",
    },
    {
      time: new Date("2023-06-01T10:05:00").getTime(),
      status: "Đang xử lý",
    },
    {
      time: new Date("2023-07-01T10:15:00").getTime(),
      status: "Xác nhận thanh toán",
    },
    {
      time: new Date("2024-06-01T10:30:00").getTime(),
      status: "Hoàn thành",
    },
  ];

  return (
    <ConfigProvider locale={viVN}>
      <div style={{ padding: "40px 20px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "24px",
            textAlign: "center",
          }}
        >
          Theo dõi đơn đặt phòng
        </h1>
        <BookingProgress events={bookingEvents} bookingCode="12505683942" />
      </div>
    </ConfigProvider>
  );
}
