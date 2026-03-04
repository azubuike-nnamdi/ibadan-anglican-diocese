import News from "@/components/section/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diocese News"
}
export default function Page() {
  return <News />
}