import { createSurvey, listSurveys, getSurveyById, answerSurvey } from "./surveys"
import { PrismaClient, type Survey } from '@prisma/client'


const newSurvey = await createSurvey("my favorite new animal is:")

console.log(newSurvey)

const surveys = await listSurveys()

console.log(surveys)

const answer = await answerSurvey(1, "doo da dee dee do di doo da")

console.log(answer)

const gotSurvey = await getSurveyById(2)

console.log(gotSurvey)