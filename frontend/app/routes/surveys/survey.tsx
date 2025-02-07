import apiClient from "client";
import type { Route } from "./+types/survey";
import { Link, redirect, useLoaderData } from "react-router";

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: `Survey: ${data?.question}` },
        { name: "description", content: `Survey #${data?.id}: ${data?.question}` },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const response = await apiClient.surveys({ id: params.id }).get();
    if (!response.data) {
        throw new Error("Failed to load survey");
    }
    return response.data;
}

export async function action({ params, request }: Route.ActionArgs) {
    const formData = await request.formData();
    const answer = formData.get("answer");

    await apiClient.surveys({ id: params.id }).answer.post({
        answer: answer as string
    });
    
    return redirect(`surveys/${params.id}/results`);
}


export default function Survey() {
    const survey = useLoaderData<typeof loader>();

    return (

        <div> 

            Your Answer: 

            <input    //form
            
            /> 
            

            <button>Submit</button>

            <button>Back to surveys</button>

                


        </div>

        

    )
}
