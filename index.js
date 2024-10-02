import chalk from "chalk"

const word1 = chalk.blue.bgRed.bold("Hello")
const word2 = chalk.red("World")

console.log(`${word1} ${word2}`)