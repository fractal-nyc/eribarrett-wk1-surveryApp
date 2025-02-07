import { createSurvey, listSurveys, getSurveyById, answerSurvey } from "./surveys"
import { PrismaClient, type Survey } from '@prisma/client'


const newSurvey = await createSurvey("first survey with id as string")

console.log(newSurvey)

