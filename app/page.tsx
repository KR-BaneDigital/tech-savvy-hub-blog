import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Home | Tech Savvy Hub",
  description: "Master technology and automation with expert-led tutorials. Enhance your productivity and technical skills through comprehensive guides.",
}

export default function HomePage() {
  return <ClientPage />
}