import { html } from './text.js'

// console.log(html)

console.log(html.match(/<.+>.+<\/.+>/gi)) // greedy
console.log(html.match(/<.+?>.+?<\/.+?>/gi)) // non-greedy