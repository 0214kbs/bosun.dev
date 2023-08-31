import Project from "@/pageComponents/project";
import { Metadata } from "next";


export default function ({ params }: { params: { id: string } }) {
    return <Project id={params.id}></Project>;
}
