import React, { useState } from "react";
import { Modal, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./styles.css";

export interface Chapter {
  id: string;
  number: number;
  title: string;
  previewImages?: string[];
  releaseDate: string;
}

interface ChapterPreviewProps {
  chapter: Chapter;
  onClose: () => void;
}

const { Title } = Typography;
const IMAGES_PER_LOAD = 5;

export default function ChapterPreview({
  chapter,
  onClose,
}: ChapterPreviewProps) {
  const [visibleImages, setVisibleImages] = useState(IMAGES_PER_LOAD);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;

    if (
      scrollHeight - scrollTop - clientHeight < 100 &&
      chapter.previewImages &&
      visibleImages < chapter.previewImages.length
    ) {
      setVisibleImages((prev) => prev + IMAGES_PER_LOAD);
    }
  };

  return (
    <Modal
      open={true}
      onCancel={onClose}
      footer={null}
      width="80%"
      style={{ maxWidth: "1000px" }}
      title={
        <Title level={4}>
          Chapter {chapter.number}: {chapter.title}
        </Title>
      }
      closeIcon={<CloseOutlined />}
    >
      <div
        style={{
          maxHeight: "calc(90vh - 100px)",
          overflowY: "auto",
          backgroundColor: "#fff"
        }}
        onScroll={handleScroll}
      >
        <div className="image-preview-container">
          {chapter.previewImages
            ?.slice(0, visibleImages)
            .map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] w-full"
                style={{ 
                  marginBottom: '-6px',
                  fontSize: 0,
                  lineHeight: 0
                }}
              >
                <LazyLoadImage
                  src={image}
                  alt={`Page ${index + 1}`}
                  effect="opacity"
                  width="100%"
                  height="100%"
                  className="object-cover block"
                  threshold={0}
                  placeholderSrc={image}
                  onLoad={() => setImagesLoaded((prev) => prev + 1)}
                  visibleByDefault={true}
                />
              </div>
            ))}
        </div>
        <div className="mt-4 text-center">
          {imagesLoaded} / {chapter.previewImages?.length} images loaded
        </div>
      </div>
    </Modal>
  );
}
