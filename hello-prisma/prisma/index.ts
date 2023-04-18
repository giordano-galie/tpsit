import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

  async function main() {
    // Connect the client
    await prisma.$connect()
    // ... you will write your Prisma Client queries here
  +  const allUsers = await prisma.user.findMany()
  +  console.log(allUsers)
  }
  async function main() {
    await prisma.$connect()
  
    await prisma.user.create({
      data: {
        name: 'Rich',
        email: 'hello@prisma.com',
        posts: {
          create: {
            title: 'My first post',
            body: 'Lots of really interesting stuff',
            slug: 'my-first-post',
          },
        },
      },
    })
  
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    })
    console.dir(allUsers, { depth: null })
  }