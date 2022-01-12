import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      id: 'user-1',
      name: 'Mateus',
      email: 'mateus@email.com',

      groups: {
        connectOrCreate: {
          where: {
            id: 'group-1',
          },
          create: {
            id: 'group-1',
            title: 'Group 1',
          },
        },
      },
    },
  })
}

main()
