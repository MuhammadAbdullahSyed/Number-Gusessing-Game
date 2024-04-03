#!/usr/bin/env node
import inquier from "inquirer"
const randomNumber= Math.floor(Math.random()*6+1)

const answer= await inquier.prompt([{
name: "UserGuessNumber",
type: "number",
messange: "Enter your guess number between 1 to 6",
}])

if (answer.UserGuessNumber===randomNumber){
    console.log("Congratulation you enter correct number")
}
else{
    console.log("Please try again!")
}