const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const roles = [
    {
        name: "Guru",
        description: "Ini Guru",
        searchHistory: {
            nama: "Gini"
        }
    },
    {
        name: "Siswa",
        description: "Ini Siswa",
        searchHistory: {
            nama: "Gitu"
        }
    }
]

const roleSeed = async () => {
    for(let role of roles) await prisma.role.create({ data: role })
}

module.exports = { roleSeed }