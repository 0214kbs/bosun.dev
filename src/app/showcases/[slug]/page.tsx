"use client";
import { usePathname } from "next/navigation";

export default function ShowCasePage() {
	const slug = usePathname().split("/").pop();
	return <div> test</div>;
}
