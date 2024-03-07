const { roleSeed } = require("./role.seeder")
const { userSeed } = require("./user.seeder")

const runSeeder = async () => {
    await roleSeed()
    await userSeed()
}

runSeeder()