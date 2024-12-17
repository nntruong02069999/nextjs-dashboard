"use client";

import { useState, useEffect } from "react";
import {
  BookOutlined,
  EyeOutlined,
  UserOutlined,
  WarningOutlined,
  ThunderboltOutlined,
  DownOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Layout, Card, Tabs, Progress, Statistic, Row, Col, Spin } from "antd";
import type { TabsProps } from "antd";

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#f0f2f5" },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1f2937",
    padding: "0 32px",
  },
  headerTitle: {
    fontSize: "1.875rem",
    fontWeight: "bold",
    color: "white",
  },
  content: { padding: "32px" },
  statsRow: { marginBottom: "32px" },
  trendUp: { color: "#10b981" },
  trendDown: { color: "#ef4444" },
  comicRow: {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    "&:hover": {
      backgroundColor: "#f3f4f6",
    },
  },
  comicIndex: { fontWeight: "bold", marginRight: "8px" },
  tableHeader: { fontWeight: 600, color: "#9ca3af" },
  textRight: { textAlign: "right" as const },
  metaText: { color: "#9ca3af", fontSize: "0.875rem" },
  marginBottom: { marginBottom: "24px" },
};

function StatsCard({ stats }: { stats: any }) {
  // Helper function to convert Tailwind color classes to hex values
  const getColorFromClass = (colorClass: string) => {
    const colorMap: Record<string, string> = {
      "bg-blue-500": "#3B82F6",
      "bg-green-500": "#22C55E",
      "bg-yellow-500": "#EAB308",
      "bg-red-500": "#EF4444",
      "bg-purple-500": "#A855F7",
      "bg-indigo-500": "#6366F1",
    };
    return colorMap[colorClass] || "#ffffff";
  };

  return (
    <Row gutter={[16, 16]} style={styles.statsRow}>
      {stats.map((stat: any, index: number) => (
        <Col key={index} xs={24} md={8} lg={4}>
          <Card style={{ backgroundColor: getColorFromClass(stat.color) }}>
            <Statistic
              title={<span style={{ color: "white" }}>{stat.title}</span>}
              value={stat.value}
              prefix={
                stat.icon === BookOutlined ? (
                  <BookOutlined style={{ color: "white" }} />
                ) : stat.icon === EyeOutlined ? (
                  <EyeOutlined style={{ color: "white" }} />
                ) : stat.icon === WarningOutlined ? (
                  <WarningOutlined style={{ color: "white" }} />
                ) : (
                  <UserOutlined style={{ color: "white" }} />
                )
              }
              valueStyle={{ color: "white" }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

function TopComicsTabs({
  topComics,
  tabTitles,
  setActiveTab,
}: {
  topComics: Record<
    string,
    Array<{
      name: string;
      views: string[];
      trend: "up" | "down";
    }>
  >;
  tabTitles: any;
  setActiveTab: any;
}) {
  const tabItems: TabsProps["items"] = Object.entries(topComics).map(
    ([key, comics]) => ({
      key,
      label: key.charAt(0).toUpperCase() + key.slice(1),
      children: (
        <Card>
          <div>
            <Row gutter={16}>
              <Col span={8} style={styles.tableHeader}>
                Comic
              </Col>
              {tabTitles[key as keyof typeof topComics].map(
                (title: string, index: number) => (
                  <Col key={index} span={5} style={styles.textRight}>
                    {title}
                  </Col>
                )
              )}
            </Row>
            {comics.map((comic: any, index: number) => (
              <Row key={index} style={styles.comicRow} gutter={16}>
                <Col span={8}>
                  <span style={styles.comicIndex}>{index + 1}</span>
                  {comic.name}
                </Col>
                {comic.views.map((view: string, viewIndex: number) => (
                  <Col key={viewIndex} span={5} style={styles.textRight}>
                    <span style={{ marginRight: "8px" }}>{view}</span>
                    {viewIndex === 0 &&
                      (comic.trend === "up" ? (
                        <ThunderboltOutlined style={styles.trendUp} />
                      ) : (
                        <DownOutlined style={styles.trendDown} />
                      ))}
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Card>
      ),
    })
  );

  return (
    <Tabs
      defaultActiveKey="daily"
      items={tabItems}
      onChange={(key) => setActiveTab(key)}
    />
  );
}

function TopGenres({ topGenres }: { topGenres: any }) {
  return (
    <Card title="Top thể loại" className="mb-6">
      {topGenres.map((genre: any, index: number) => (
        <div key={index} className="mb-4">
          <Row justify="space-between">
            <span>{genre.name}</span>
            <span>{genre.percentage}%</span>
          </Row>
          <Progress percent={genre.percentage} size="small" />
        </div>
      ))}
    </Card>
  );
}

function TopFollowed({ topFollowed }: { topFollowed: any }) {
  return (
    <Card title="Top truyện được theo dõi">
      {topFollowed.map((comic: any, index: number) => (
        <Row key={index} justify="space-between" className="mb-4">
          <Col>
            <div>{comic.title}</div>
            <small className="text-gray-400">
              <UserOutlined /> {comic.follows} followers
            </small>
          </Col>
          <Col>
            <span className="text-green-500">{comic.change}</span>
          </Col>
        </Row>
      ))}
    </Card>
  );
}

function TopLiked({ topLiked }: { topLiked: any }) {
  return (
    <Card title="Top truyện được yêu thích">
      {topLiked.map((comic: any, index: number) => (
        <Row key={index} justify="space-between" className="mb-4">
          <Col>
            <div>{comic.title}</div>
            <small className="text-gray-400">
              <StarOutlined /> {comic.likes} likes
            </small>
          </Col>
          <Col>
            <span className="text-blue-500">{comic.ratio}</span>
          </Col>
        </Row>
      ))}
    </Card>
  );
}

function ReaderEngagement({ readerEngagement }: { readerEngagement: any }) {
  return (
    <Card title="Thông số độc giả">
      <Row gutter={[16, 16]}>
        {readerEngagement.map((item: any, index: number) => (
          <Col key={index} span={12}>
            <Statistic title={item.metric} value={item.value} />
          </Col>
        ))}
      </Row>
    </Card>
  );
}

function LatestReleases({ latestReleases }: { latestReleases: any }) {
  return (
    <Card title="Cập nhật gần đây">
      {latestReleases.map((release: any, index: number) => (
        <Row key={index} justify="space-between" className="mb-4">
          <Col>
            <div>{release.title}</div>
            <small className="text-gray-400">
              <EyeOutlined /> {release.views} views
            </small>
          </Col>
          <Col>
            <StarOutlined className="text-yellow-500" /> {release.rating}
          </Col>
        </Row>
      ))}
    </Card>
  );
}

export default function ComicDashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("daily");
  const { Header, Content } = Layout;

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Your static data
        const mockData = {
          stats: [
            {
              title: "Tổng số truyện",
              value: "1,234",
              icon: BookOutlined,
              color: "bg-blue-500",
            },
            {
              title: "Tổng số chương",
              value: "45,678",
              icon: BookOutlined,
              color: "bg-green-500",
            },
            {
              title: "Tổng số lượt xem",
              value: "9.8M",
              icon: EyeOutlined,
              color: "bg-yellow-500",
            },
            {
              title: "Số lượng tải lên thất bại",
              value: "23",
              icon: WarningOutlined,
              color: "bg-red-500",
            },
            {
              title: "Số lượng người dùng hoạt động",
              value: "5,678",
              icon: UserOutlined,
              color: "bg-purple-500",
            },
            {
              title: "Số lượng người theo dõi",
              value: "2.1M",
              icon: UserOutlined,
              color: "bg-indigo-500",
            },
          ],
          topComics: {
            daily: [
              {
                name: "Superhero Saga",
                views: ["1.2M", "1.1M", "1.0M"],
                trend: "up" as const,
              },
              {
                name: "Mystery Manor",
                views: ["980K", "985K", "990K"],
                trend: "down" as const,
              },
              {
                name: "Sci-Fi Adventures",
                views: ["875K", "870K", "865K"],
                trend: "up" as const,
              },
              {
                name: "Fantasy Realms",
                views: ["750K", "740K", "730K"],
                trend: "up" as const,
              },
              {
                name: "Romantic Tales",
                views: ["620K", "625K", "630K"],
                trend: "down" as const,
              },
            ],
            weekly: [
              {
                name: "Superhero Saga",
                views: ["8.4M", "8.2M", "8.0M"],
                trend: "up" as const,
              },
              {
                name: "Mystery Manor",
                views: ["6.9M", "7.0M", "7.1M"],
                trend: "down" as const,
              },
              {
                name: "Sci-Fi Adventures",
                views: ["6.1M", "6.0M", "5.9M"],
                trend: "up" as const,
              },
              {
                name: "Fantasy Realms",
                views: ["5.3M", "5.2M", "5.1M"],
                trend: "up" as const,
              },
              {
                name: "Romantic Tales",
                views: ["4.3M", "4.4M", "4.5M"],
                trend: "down" as const,
              },
            ],
            monthly: [
              {
                name: "Superhero Saga",
                views: ["36M", "35M", "34M"],
                trend: "up" as const,
              },
              {
                name: "Mystery Manor",
                views: ["30M", "31M", "32M"],
                trend: "down" as const,
              },
              {
                name: "Sci-Fi Adventures",
                views: ["26M", "25M", "24M"],
                trend: "up" as const,
              },
              {
                name: "Fantasy Realms",
                views: ["22M", "21M", "20M"],
                trend: "up" as const,
              },
              {
                name: "Romantic Tales",
                views: ["18M", "19M", "20M"],
                trend: "down" as const,
              },
            ],
            yearly: [
              {
                name: "Superhero Saga",
                views: ["432M", "420M", "408M"],
                trend: "up" as const,
              },
              {
                name: "Mystery Manor",
                views: ["360M", "372M", "384M"],
                trend: "down" as const,
              },
              {
                name: "Sci-Fi Adventures",
                views: ["312M", "300M", "288M"],
                trend: "up" as const,
              },
              {
                name: "Fantasy Realms",
                views: ["264M", "252M", "240M"],
                trend: "up" as const,
              },
              {
                name: "Romantic Tales",
                views: ["216M", "228M", "240M"],
                trend: "down" as const,
              },
            ],
            "all-time": [
              {
                name: "Superhero Saga",
                views: ["1.3B", "1.2B", "1.1B"],
                trend: "up" as const,
              },
              {
                name: "Mystery Manor",
                views: ["1.1B", "1.15B", "1.2B"],
                trend: "down" as const,
              },
              {
                name: "Sci-Fi Adventures",
                views: ["950M", "900M", "850M"],
                trend: "up" as const,
              },
              {
                name: "Fantasy Realms",
                views: ["800M", "750M", "700M"],
                trend: "up" as const,
              },
              {
                name: "Romantic Tales",
                views: ["650M", "700M", "750M"],
                trend: "down" as const,
              },
            ],
          },
          tabTitles: {
            daily: ["Hôm nay", "Hôm qua", "2 ngày trước"],
            weekly: ["Tuần này", "Tuần trước", "2 tuần trước"],
            monthly: ["Tháng này", "Tháng trước", "2 tháng trước"],
            yearly: ["Năm nay", "Năm trước", "2 năm trước"],
            "all-time": ["Hiện tại", "- 1 năm", "- 2 năm"],
          },
          topGenres: [
            { name: "Action", percentage: 30 },
            { name: "Romance", percentage: 25 },
            { name: "Fantasy", percentage: 20 },
            { name: "Sci-Fi", percentage: 15 },
            { name: "Mystery", percentage: 10 },
          ],
          readerEngagement: [
            { metric: "Thời gian đọc trung bình", value: "18 min" },
            { metric: "Tỷ lệ hoàn thành", value: "78%" },
            { metric: "Tỷ lệ trở lại", value: "65%" },
            { metric: "Số lượng chia sẻ trên người dùng", value: "2.3" },
          ],
          latestReleases: [
            { title: "Superhero Saga: Chapter 156", views: "50K", rating: 4.8 },
            { title: "Mystery Manor: Episode 89", views: "45K", rating: 4.7 },
            { title: "Sci-Fi Adventures: Part 112", views: "40K", rating: 4.9 },
            {
              title: "Fantasy Realms: Book 7, Ch. 23",
              views: "38K",
              rating: 4.6,
            },
            {
              title: "Romantic Tales: Season 5, Ep. 12",
              views: "35K",
              rating: 4.5,
            },
          ],
          topFollowed: [
            { title: "Superhero Saga", follows: "500K", change: "+12%" },
            { title: "Mystery Manor", follows: "450K", change: "+8%" },
            { title: "Sci-Fi Adventures", follows: "400K", change: "+15%" },
            { title: "Fantasy Realms", follows: "350K", change: "+5%" },
            { title: "Romantic Tales", follows: "300K", change: "+10%" },
          ],
          topLiked: [
            { title: "Superhero Saga", likes: "800K", ratio: "98%" },
            { title: "Mystery Manor", likes: "720K", ratio: "96%" },
            { title: "Sci-Fi Adventures", likes: "650K", ratio: "95%" },
            { title: "Fantasy Realms", likes: "580K", ratio: "94%" },
            { title: "Romantic Tales", likes: "520K", ratio: "93%" },
          ],
        };

        setData(mockData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout style={styles.container}>
        <Header style={styles.header}>
          <h1 style={styles.headerTitle}>Comic Dashboard</h1>
        </Header>
        <Content
          style={{
            ...styles.content,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin size="large" tip="Đang tải dữ liệu..." />
        </Content>
      </Layout>
    );
  }

  return (
    <Layout style={styles.container}>
      <Header style={styles.header}>
        <h1 style={styles.headerTitle}>Comic Dashboard</h1>
      </Header>
      <Content style={styles.content}>
        <StatsCard stats={data.stats} />
        <Row gutter={[24, 24]}>
          <Col span={16}>
            <TopComicsTabs
              topComics={data.topComics}
              tabTitles={data.tabTitles}
              setActiveTab={setActiveTab}
            />
          </Col>
          <Col span={8}>
            <TopGenres topGenres={data.topGenres} />
          </Col>
          <Col span={12}>
            <TopFollowed topFollowed={data.topFollowed} />
          </Col>
          <Col span={12}>
            <TopLiked topLiked={data.topLiked} />
          </Col>
          <Col span={12}>
            <ReaderEngagement readerEngagement={data.readerEngagement} />
          </Col>
          <Col span={12}>
            <LatestReleases latestReleases={data.latestReleases} />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
