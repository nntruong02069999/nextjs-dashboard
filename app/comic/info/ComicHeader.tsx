import React from "react";
import { Card, Typography } from "antd";
import "./styles.css";

interface ComicHeaderProps {
  name: string;
  id: string;
}

const { Title, Text } = Typography;

export default function ComicHeader({ name, id }: ComicHeaderProps) {
  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Title level={2} style={{ margin: 0 }}>
          {name}
        </Title>
        <Text type="secondary">ID: {id}</Text>
      </div>
    </Card>
  );
}
