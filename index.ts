import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    
    const survey = await prisma.survey.create({
        data: {
            question: "What is your favorite song?",
            answer: "It goes like this: 'doo doo doo doo....'",
        },
    });

    console.log("Survey created:", survey);


    const allSurveys = await prisma.survey.findMany()

    
    console.dir(allSurveys, { depth: null })
} 

main()

