"use client";
import React, { useState } from "react";
import ComicHeader from "./ComicHeader";
import ComicInfo from "./ComicInfo";
import ChapterList, { Chapter } from "./ChapterList";

// Mock data for demonstration
const mockComic = {
  id: "comic-123",
  name: "Tôi Là Tân Thủ Có Cấp Cao Nhất",
  imageUrl:
    "https://imgcdn.tcomic.top/images/comic/toi-la-tan-thu-co-cap-cao-nhat-1633745865[1].gif_1731125382576.gif",
  author: "John Doe",
  genre: ["Action", "Adventure", "Fantasy"],
  status: "ongoing" as const,
  description:
    "<p>Trận mưa sao băng Alpha trăm năm có một khiến cho Kiều Oản cùng cô bạn thân Đường Tô xuyên không. Một người mới đến đã chọc phải vị Thái tử gia nóng nảy của Hắc bang Lý Tu Dương, thành một cặp oan gia hài hước, ngươi truy ta chạy. Một người không hiểu sao lại cầm phải kịch bản Vương phi, bị mật ngọt của Vương gia phúc hắc Bạch Mộ Chi tấn công oanh tạc, khi đang dần chìm đắm vào trong thì giật mình nhận ra trong mật có thạch tín.</p>",
  totalChapters: 45,
};

const mockChapters = Array.from({ length: 10 }, (_, i) => ({
  id: `chapter-${i + 1}`,
  number: i + 1,
  title: `The Beginning of Adventure ${i + 1}`,
  releaseDate: new Date(2024, 0, i + 1).toLocaleDateString(),
  numImages: 28,
  previewImages: [
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-1.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-2.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-3.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-4.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-5.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-6.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-7.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-8.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-9.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-10.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-11.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-12.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-13.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-14.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-15.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-16.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-17.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-18.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-19.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-20.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-21.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-22.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-23.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-24.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-25.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-26.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-27.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-28.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-29.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-30.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-31.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-32.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-33.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-34.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-35.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-36.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-37.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-38.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-39.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-40.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-41.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-42.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-43.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-44.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-45.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-46.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-47.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-48.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-49.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-50.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-51.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-52.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-53.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-54.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-55.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-56.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-57.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-58.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-59.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-60.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-61.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-62.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-63.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-64.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-65.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-66.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-67.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-68.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-69.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-70.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-71.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-72.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-73.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-74.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-75.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-76.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-77.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-78.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-79.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-80.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-81.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-82.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-83.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-84.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-85.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-86.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-87.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-88.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-89.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-90.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-91.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-92.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-93.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-94.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-95.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-96.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-97.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-98.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-99.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-100.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-101.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-102.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-103.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-104.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-105.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-106.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-107.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-108.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-109.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-110.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-111.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-112.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-113.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-114.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-115.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-116.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-117.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-118.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-119.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-120.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-121.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-122.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-123.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-124.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-125.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-126.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-127.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-128.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-129.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-130.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-131.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-132.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-133.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-134.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-135.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-136.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-137.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-138.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-139.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-140.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-141.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-142.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-143.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-144.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-145.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-146.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-147.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-148.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-149.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-150.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-151.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-152.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-153.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-154.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-155.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-156.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-157.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-158.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-159.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-160.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-161.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-162.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-163.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-164.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-165.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-166.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-167.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-168.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-169.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-170.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-171.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-172.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-173.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-174.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-175.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-176.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-177.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-178.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-179.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-180.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-181.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-182.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-183.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-184.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-185.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-186.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-187.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-188.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-189.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-190.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-191.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-192.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-193.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-194.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-195.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-196.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-197.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-198.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-199.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-200.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-201.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-202.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-203.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-204.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-205.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-206.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-207.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-208.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-209.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-210.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-211.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-212.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-213.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-214.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-215.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-216.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-217.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-218.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-219.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-220.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-221.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-222.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-223.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-224.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-225.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-226.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-227.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-228.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-229.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-230.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-231.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-232.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-233.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-234.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-235.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-236.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-237.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-238.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-239.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-240.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-241.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-242.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-243.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-244.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-245.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-246.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-247.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-248.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-249.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-250.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-251.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-252.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-253.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-254.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-255.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-256.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-257.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-258.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-259.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-260.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-261.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-262.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-263.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-264.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-265.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-266.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-267.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-268.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-269.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-270.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-271.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-272.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-273.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-274.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-275.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-276.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-277.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-278.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-279.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-280.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-281.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-282.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-283.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-284.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-285.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-286.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-287.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-288.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-289.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-290.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-291.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-292.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-293.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-294.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-295.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-296.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-297.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-298.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-299.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-300.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-301.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-302.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-303.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-304.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-305.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-306.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-307.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-308.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-309.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-310.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-311.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-312.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-313.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-314.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-315.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-316.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-317.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-318.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-319.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-320.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-321.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-322.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-323.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-324.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-325.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-326.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-327.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-328.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-329.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-330.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-331.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-332.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-333.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-334.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-335.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-336.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-337.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-338.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-339.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-340.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-341.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-342.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-343.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-344.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-345.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-346.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-347.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-348.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-349.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-350.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-351.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-352.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-353.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-354.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-355.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-356.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-357.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-358.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-359.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-360.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-361.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-362.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-363.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-364.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-365.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-366.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-367.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-368.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-369.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-370.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-371.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-372.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-373.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-374.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-375.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-376.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-377.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-378.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-379.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-380.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-381.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-382.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-383.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-384.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-385.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-386.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-387.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-388.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-389.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-390.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-391.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-392.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-393.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-394.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-395.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-396.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-397.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-398.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-399.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-400.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-401.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-402.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-403.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-404.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-405.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-406.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-407.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-408.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-409.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-410.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-411.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-412.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-413.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-414.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-415.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-416.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-417.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-418.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-419.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-420.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-421.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-422.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-423.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-424.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-425.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-426.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-427.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-428.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-429.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-430.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-431.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-432.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-433.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-434.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-435.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-436.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-437.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-438.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-439.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-440.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-441.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-442.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-443.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-444.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-445.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-446.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-447.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-448.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-449.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-450.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-451.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-452.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-453.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-454.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-455.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-456.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-457.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-458.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-459.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-460.webp",
    "https://imgcdn.tcomic.top/au-yem-than/chapter-1/1-461.png",
  ],
  crawlerStatus: "SUCCESS" as const,
  siteCode: "NETTRUYEN",
  originUrl:
    "https://nettruyen.com/truyen-tranh/toi-la-tan-thu-co-cap-cao-nhat-123456",
}));

export default function ComicDetailPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);

  const handleEdit = () => {
    console.log("Edit comic");
  };

  const handlePreview = (chapterId: string) => {
    const chapter = mockChapters.find((c) => c.id === chapterId);
    if (chapter) {
      setSelectedChapter(chapter);
      setIsPreviewOpen(true);
    }
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
    setSelectedChapter(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <ComicHeader name={mockComic.name} id={mockComic.id} />

      <ComicInfo {...mockComic} onEdit={handleEdit} />

      <ChapterList
        chapters={mockChapters}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        onPreview={handlePreview}
        isPreviewOpen={isPreviewOpen}
        selectedChapter={selectedChapter}
        onClosePreview={handleClosePreview}
      />
    </div>
  );
}