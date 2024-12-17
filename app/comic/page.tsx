"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronUp, ChevronDown } from "lucide-react";
import { lazyLoad } from "unlazy";

// Apply lazy loading for all images by the selector `img[loading="lazy"]`
lazyLoad();

const comicPages: string[] = [
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8wLmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xLmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yLmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zLmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85LmpwZw==&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xOC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xOS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yMC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yMS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yMi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yMy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yNC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yNS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yNi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yNy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yOC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8yOS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zMC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zMS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zMi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zMy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zNC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zNS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zNi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zNy5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zOC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8zOS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS80OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS81OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS82OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS83OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS84OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85MC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85MS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85Mi5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85My5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85NC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85NS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85Ni5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85Ny5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85OC5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS85OS5qcGc=&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDIuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDMuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDQuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDUuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDYuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDcuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDguanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMDkuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTIuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTMuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTQuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTUuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTYuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTcuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTguanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMTkuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjIuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjMuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjQuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjUuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjYuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjcuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjguanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMjkuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzIuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzMuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzQuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzUuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzYuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzcuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzguanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xMzkuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDIuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDMuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDQuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDUuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDYuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDcuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDguanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNDkuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNTAuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
  "https://cloud3.tcomic.top/clouds/images?hash=aHR0cXHM6Ly9jbG91ZC16enouY29tL25ldHRydXllbi9ob2Etc29uLXRhaS14dWF0LzEzNS8xNTEuanBn&key=aHR0cXHM6Ly9uZXR0cnV5ZW53dy5jb20=",
];
export default function Component() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.pageY - window.scrollY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const y = e.pageY - window.scrollY;
    const walk = (y - startY) * 2;
    window.scrollTo(0, window.scrollY - walk);
    setStartY(y);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;
      const newPage = Math.floor(scrollPosition / pageHeight);
      if (newPage !== currentPage && newPage < comicPages.length) {
        setCurrentPage(newPage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage]);

  const scrollToPage = (page: number) => {
    window.scrollTo({
      top: page * window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={(e) => handleMouseDown(e.touches[0] as any)}
      onTouchMove={(e) => handleMouseMove(e.touches[0] as any)}
      onTouchEnd={handleMouseUp}
    >
      <div className="fixed top-4 right-4 z-10 flex flex-col space-y-2">
        <Button
          onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
          variant="outline"
          size="icon"
          className="bg-white dark:bg-gray-800"
        >
          <ChevronUp className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button
          onClick={() =>
            scrollToPage(Math.min(comicPages.length - 1, currentPage + 1))
          }
          variant="outline"
          size="icon"
          className="bg-white dark:bg-gray-800"
        >
          <ChevronDown className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
      <Card className="w-full max-w-3xl mx-auto">
        <CardContent className="p-0">
          {comicPages.map((page, index) => (
            <div key={index} className="min-h-screen overflow-auto">
              <img
                src={page}
                alt={`Comic page ${index + 1}`}
                className="w-full h-auto"
                style={{ minWidth: "100%", minHeight: "100vh" }}
              />
            </div>
          ))}
        </CardContent>
      </Card>
      <div className="fixed bottom-4 right-4 z-10 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        Page {currentPage + 1} of {comicPages.length}
      </div>
    </div>
  );
}
