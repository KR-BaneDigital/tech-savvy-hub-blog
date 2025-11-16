import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Tech Savvy Hub | Expert Tech Education & Automation Tutorials",
  description: "Master technology and automation with expert-led tutorials. Enhance your productivity and technical skills through comprehensive guides.",
}

export default function HomePage() {
  return <ClientPage />
}
