import { Elysia, error, t } from 'elysia'
import { treaty } from '@elysiajs/eden'
import { swagger } from '@elysiajs/swagger'
import { cors } from '@elysiajs/cors'
import { listSurveys, createSurvey, answerSurvey, getSurveyById } from './surveys';

const app = new Elysia()

    .use(cors({
        origin: 'localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }))

    .get('/', 'Hello World')

    //get surveys
    .get('/surveys', () => listSurveys())

    //create surveys
    .post('/surveys', ({ body }) => 
        createSurvey(body), {
            body: t.Object({
                    id: t.String(),
                    question: t.String()
            })
        }
    )
    
    //get survey based off id
    .get('/surveys/:id', ({ params: { id } }) => {
        const survey = getSurveyById(id);
        if (!survey) {
            throw new Error("Survey not found")
        }, 
        return survey; 
    }, {
        params: t.Object({
                id: t.String()
        })
    })
    
    // this needs some links to surveyId
    .post('/surveys/:id/answer', ({ params: { id }, body }) =>  {
        answerSurvey(id, body.answer);
        return { success: true };
    }, {
        params: t.Object({
            id: t.String()
    }),
        body: t.Object({
            answer: t.String()
        })
    })

// NEED TO ADD WAY TO GET RESULTS


    .listen(3000)

console.log("you are now runnning on http://localhost:3000")

export type ApiApp = typeof app

    
