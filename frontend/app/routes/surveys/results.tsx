import apiClient from "client";
import type { Route } from "./+types/survey";
import { Link, redirect, useLoaderData } from "react-router";
import { use } from "react";


export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `Survey Results: ${data?.question}` },
        { name: "description", content: `View results for survey: ${data?.question}` },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const response = await apiClient.surveys({ id: params.id }).results.get();
    if (!response.data) {
        throw new Error("Failed to load survey results");
    }
    return response.data;
}

export default function Results() {
    const results = useLoaderData<typeof loader>();

    return (

        <div>


            <p>Responses: {results.answers}</p>

             <Link to={`/surveys/${results.surveyId}`} className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200">Back to Survey</Link>


        </div>
    )
}