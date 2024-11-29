"use client";
import { usePathname } from "next/navigation";
import LoaderSpinner from "./components/LoaderSpinner";
import HomePageSkeleton from "./components/HomePageSkeleton";
import LineTableSkeleton from "./components/LineTableSkeleton";
import ThemePageSkeleton from "./components/ThemePageSkeleton";
import TwoLineTableSkeleton from "./components/TwoLineTableSkeleton";
import DigSiteSectionSkeleton from "./components/DigSiteSectionSkeleton";
import PipelineintegritySkeleton from "./components/PipelineintegritySkeleton";
import CustomjobSkeleton from "./components/CustomjobSkeleton";

export default function Loading() {
  const pathname = usePathname();
  let skeletonToRender;
  switch (true) {
    case pathname === "/home":
      skeletonToRender = <HomePageSkeleton />;
      break;
    case pathname === "/user":
      skeletonToRender = <LineTableSkeleton />;
      break;

    case pathname === "/roles":
      skeletonToRender = <LineTableSkeleton />;
      break;
    case pathname === "/projects":
      skeletonToRender = <LineTableSkeleton />;
      break;
    case pathname === "/impersona":
      skeletonToRender = <LineTableSkeleton />;
      break;
    case pathname === "/themeconfiguration":
      skeletonToRender = <ThemePageSkeleton />;
      break;
    case pathname === "/digsite":
      skeletonToRender = <TwoLineTableSkeleton />;
      break;
    case pathname === "/digsitesection":
      skeletonToRender = <DigSiteSectionSkeleton />;
      break;
    case pathname === "/pipelineintegrity":
      skeletonToRender = <PipelineintegritySkeleton />;
      break;
    case pathname === "/customjob":
      skeletonToRender = <CustomjobSkeleton />;
      break;

    default:
      skeletonToRender = <LoaderSpinner />; // Default skeleton for other pages
      break;
  }
  return <>{skeletonToRender}</>;
}
