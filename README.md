# survey

to do:

data => (data.ts, surveys.ts)
[X] set up mock db using prisma & docker {time: 1hr 15min}
[X] mock service layer (all the funcs) {time spent: 1hr 37min}
    - create survey, return survey
    - create new answer, return answer
    - list all surveys
    - get a specific survey w/ results
    [] add details to CRUD operations as specified in Features section of assignment doc

server => (server.ts)
[X] set up server with hello world (elysia)
[X] set up to perform all API services
    [] (need to write get results functionality)

API client => (client.ts)
[X] set up API client with elysia   _____ USE THE DOCS
[X] test API  [X] GET requests  [] POST
    - read about treaty (eden) and why we use it
    - "     "   swagger   "   "   "

react => (vite => reactRouter v7)
[X] set up basic react app w/ router
[] frontend talk to server via client (use eden treaty here)
[] set up main routes (4 dif pages) 
    [X]created routes in frontend/app/routes.ts and corresponding folder & .tsx files
[] load data into routes via API client  
[] perform actions (i.e. form submissions)

    [] perform styling 
    [] use uuid's in schema.prisma to change id from int to string with: @id @default(uuid())


