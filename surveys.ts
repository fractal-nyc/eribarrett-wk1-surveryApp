import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();


// - create survey, return survey
async function createSurvey(question: string) {
    return await prisma.survey.create({
        data: {
            question,
        },
    });
};

// - create new answer, return answer

async function answerSurvey(surveyId: string, answer: string) {
    return await prisma.answer.create({
        data: {
            surveyId,
            answer,
        }
    })
};

// - list all surveys
async function listSurveys(){
    const allSurveys = await prisma.survey.findMany()
    return allSurveys
};


// - get a specific survey w/ results

async function getSurveyById(id: string) { // Promise<{ id: number; question: string; } | undefined> {
    const specificSurvey = await prisma.survey.findUnique({
        where: {id},
        include: {
            Answer: true,
        }
    })
    return specificSurvey
    
};

export { listSurveys, createSurvey, answerSurvey, getSurveyById }

