import type { Route } from "./+types/survey"
import apiClient from "client";
import { Link, redirect } from "react-router";

export function meta() {
    return [
        { title: "Create New Survey" },
        { name: "description", content: "Create a new survey" },
    ];
}

export async function action({ request }: Route.ActionArgs) {
    const formeData = await request.formData();
    const question = formeData.get("question");

    if (typeof question !== "string") {
        throw new Error("Question must be provided")
    }
    return redirect('/surveys');
    
}

export default function NewSurvey() {
    return (
        
        
        <div>

            Enter Survey 

            Create Survey Button

        </div>
    )
}