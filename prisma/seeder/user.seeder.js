const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const users = [
    {
        email: "guru@email.com",
        roleId: 1,
        mataPelajaran: "Indonesia"
    },
    {
        email: "siswa@gmail.com",
        roleId: 2,
    }
]

const userSeed = async () => {
    for(let user of users) await prisma.users.upsert({ where: { email: user.email }, create: user, update: user })
}

module.exports = { userSeed }