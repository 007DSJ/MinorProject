const mongoose = require('mongoose');
const Mover = require('../models/mover');

mongoose.connect('mongodb://127.0.0.1:27017/minorproject', {
    useNewUrlParser: true,
    /*useCreateIndex: true,*/
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database Connected');
});


// Define the states of India
const statesOfIndia = ["AN", "AP", "AR", "AS", "BR", "CG", "CH", "DH", "DD", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ", "SK", "TN", "TS", "TR", "UK", "UP", "WB"];

// Define the number of movers to create
const NUM_MOVERS = 100;
let num = 1;

// Create a function to generate a random mover document
function generateRandomMover() {
    const name = `Mover ${num++}`;
    const description = `A moving company for ${name}`;
    const img = 'https://source.unsplash.com/collection/3850816/360x240';
    const states = [];

    // Shuffle the array of states
    statesOfIndia.sort(() => Math.random() - 0.5);

    // Add random states to the mover document
    while (states.length < 10) {
        const state = statesOfIndia[Math.floor(Math.random() * statesOfIndia.length)];
        if (!states.includes(state)) {
            states.push(state);
        }
    }

    return new Mover({
        name,
        img,
        description,
        states,
    });
}

// Create the movers and save them to the database
async function createMovers() {
    await Mover.deleteMany({});
    for (let i = 0; i < NUM_MOVERS; i++) {
        const mover = generateRandomMover();
        await mover.save();
    }

    console.log(`Created ${NUM_MOVERS} movers`);
    mongoose.disconnect();
}

createMovers();