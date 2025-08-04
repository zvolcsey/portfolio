import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Zoltán Völcsey",
  description:
    "Portfolio website for Zoltán Völcsey - Full-stack web developer",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return <p>Hello World!</p>;
}
