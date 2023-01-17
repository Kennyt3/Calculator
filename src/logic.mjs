import { create, all } from 'mathjs'

const config = {}
export const math = create(all, config)

console.log(math.evaluate('3 + 9 * 5'))

// const { sqrt } = require('mathjs')

// console.log(sqrt(-4).toString())
