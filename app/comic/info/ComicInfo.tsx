import React from "react";
import {
  Card,
  Button,
  Typography,
  Image,
  Descriptions,
  Tag,
  Space,
} from "antd";
import { EditOutlined } from "@ant-design/icons";
import "./styles.css";

interface ComicInfoProps {
  imageUrl: string;
  name: string;
  totalChapters: number;
  author: string;
  genre: string[];
  status: "ongoing" | "complete";
  description: string;
  onEdit: () => void;
}

const { Title, Text } = Typography;

export default function ComicInfo({
  imageUrl,
  name,
  totalChapters,
  author,
  genre,
  status,
  description,
  onEdit,
}: ComicInfoProps) {
  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <div style={{ width: 192, flexShrink: 0 }}>
          <Image
            src={imageUrl}
            alt={name}
            style={{ objectFit: "cover", borderRadius: 8 }}
            height={256}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div>
              <Title level={3} style={{ marginBottom: 8 }}>
                {name}
              </Title>
              <Text type="secondary">By {author}</Text>
            </div>
            <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>
              Edit Comic
            </Button>
          </div>

          <Descriptions column={2} style={{ marginBottom: "1rem" }}>
            <Descriptions.Item label="Total Chapters">
              {totalChapters}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              <Tag color={status === "ongoing" ? "processing" : "success"}>
                {status.toUpperCase()}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Genre" span={2}>
              <Space>
                {genre.map((g) => (
                  <Tag key={g} color="blue">
                    {g}
                  </Tag>
                ))}
              </Space>
            </Descriptions.Item>
          </Descriptions>

          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </Card>
  );
}
