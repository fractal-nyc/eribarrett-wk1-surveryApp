import type { Route } from "./+types/survey"
import apiClient from "client";
import { Link, useLoaderData } from "react-router";

export function meta() {
    return [
        { title: "Surveys" },
        { name: "description", content: "View and take surveys" },
    ];
}

export async function loader() {
    const response = await apiClient.surveys.get();
    if (!response.data) {
        throw new Error("Failed to load surveys");
    }
    return response.data;
}

export default function SurveyList() {
    const surveys = useLoaderData<typeof loader>();

    return (
        <div>


            Take Survey


            View Results



        </div>
    )
}