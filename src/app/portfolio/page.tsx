import PortfolioPage from "@/pageComponents/portfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfolio Page",
    description: "Bosun Kwak의 포트폴리오입니다. ",
    authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/portfolio" }],
};

export default function Projects() {
    return <PortfolioPage />;
}
