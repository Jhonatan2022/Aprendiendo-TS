// const canvas = document.getElementById('canvas')

// if (canvas !== null && canvas instanceof HTMLCanvasElement) {
//     const ctx = canvas.getContext('2d')
// }

// Feching data from API
import { FormatResponse } from "./formatApi";
const API_URL = 'https://api.github.com/search/repositories?q=javascript';
const response = await fetch(API_URL)

if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
}

const data = await response.json() as FormatResponse
data.items.map(repo => {
    repo.name
})