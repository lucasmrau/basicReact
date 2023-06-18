import { FastifyInstance } from 'fastify'
import { prisma } from "./prisma"

export async function appRoutes(app: FastifyInstance){
    app.get('/', () => {
        const habits = prisma.habit.findMany
    
        return habits
    })
}

