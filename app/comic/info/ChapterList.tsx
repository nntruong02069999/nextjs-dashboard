import React, { useState } from "react";
import { Card, Table, Button, Typography, Modal, Form, Input } from "antd";
import type { ColumnsType } from "antd/es/table";
import ChapterPreview from "./ChapterPreview";
import "./styles.css";

export interface Chapter {
  number: number;
  title: string;
  releaseDate: string;
  id: string;
  previewImages?: string[];
  crawlerStatus: "PENDING" | "SUCCESS" | "FAILED";
  siteCode: string;
  originUrl: string;
  numImages: number;
}

interface ChapterListProps {
  chapters: Chapter[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPreview: (chapterId: string) => void;
  isPreviewOpen: boolean;
  selectedChapter: Chapter | null;
  onClosePreview: () => void;
  onReplace?: (
    chapterId: string,
    data: { name: string; originUrl: string; siteCode: string }
  ) => void;
}

const { Title } = Typography;

export default function ChapterList({
  chapters,
  currentPage,
  totalPages,
  onPageChange,
  onPreview,
  isPreviewOpen,
  selectedChapter,
  onClosePreview,
  onReplace,
}: ChapterListProps) {
  const [isReplaceModalOpen, setIsReplaceModalOpen] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(
    null
  );
  const [form] = Form.useForm();

  const handleReplace = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    const chapter = chapters.find((c) => c.id === chapterId);
    if (chapter) {
      form.setFieldsValue({
        name: chapter.title,
        siteCode: chapter.siteCode,
        originUrl: chapter.originUrl,
      });
    }
    setIsReplaceModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const values = await form.validateFields();
      if (selectedChapterId && onReplace) {
        onReplace(selectedChapterId, values);
      }
      setIsReplaceModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  const columns: ColumnsType<Chapter> = [
    {
      title: "Chapter",
      dataIndex: "number",
      key: "number",
      render: (number) => `Chapter ${number}`,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Site",
      dataIndex: "siteCode",
      key: "siteCode",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      key: "releaseDate",
    },

    {
      title: "Status",
      dataIndex: "crawlerStatus",
      key: "crawlerStatus",
    },
    {
      title: "Actions",
      key: "actions",
      align: "right",
      render: (_, record) => (
        <>
          {record.crawlerStatus === "SUCCESS" && (
            <Button type="link" onClick={() => onPreview(record.id)}>
              Preview
            </Button>
          )}
          <Button type="link" onClick={() => handleReplace(record.id)}>
            Replace
          </Button>
        </>
      ),
    },
  ];

  return (
    <Card>
      <Title level={4} style={{ marginBottom: 16 }}>
        Chapters
      </Title>

      <Table
        columns={columns}
        dataSource={chapters}
        rowKey="id"
        pagination={{
          current: currentPage,
          total: totalPages * 10, // Assuming 10 items per page
          onChange: onPageChange,
        }}
      />

      {isPreviewOpen && selectedChapter && (
        <ChapterPreview chapter={selectedChapter} onClose={onClosePreview} />
      )}

      <Modal
        title="Replace Chapter"
        open={isReplaceModalOpen}
        onCancel={() => setIsReplaceModalOpen(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsReplaceModalOpen(false)}>
            Cancel
          </Button>,
          <Button key="save" type="primary" onClick={handleSave}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="originUrl"
            label="Origin URL"
            rules={[
              { required: true, message: "Please input the origin URL!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="siteCode"
            label="Site Code"
            rules={[{ required: true, message: "Please input the site code!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}
