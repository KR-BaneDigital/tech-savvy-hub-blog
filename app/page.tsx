import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Home | Blog",
  description: "Discover trusted insights and expert guidance on various topics.",
}

export default function HomePage() {
  return <ClientPage />
}
