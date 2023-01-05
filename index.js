// this is the first program that will start to work

import app from './server.js'
import mongodb from "mongodb"
import dotenv from "dotenv"

//this is the main function that it will start the whole program from
async function main(){

dotenv.config()

const client = new mongodb.MongoClient(
		process.env.MOVIEREVIEWS_DB_URI
		)
const port = process.env.PORT || 8000

//this is try intriduced if you want to capture the error only
try{
//connect mongo db cluster
await client.connect()

//after the connection is established then only move on the next code line
app.listen(port, ()=>{
console.log('server is running on port me decided '+ port);})

}

catch (e){
console.error(e);
process.exit(1)
}

}
main().catch(console.error);
