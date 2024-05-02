var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");
cors = require("cors");
models = require("./schema.js");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017");

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

const PORT = 4000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
(async () => {
    await connectDB();
})();

app.use((req, res, next) => {   ``
    console.log(`${req.method} ${req.url}`);
    next();
});

// Route to handle user signup
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const User = mongoose.model('User');
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "Signup successful" });
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const User = mongoose.model('User');
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful" });
});
app.post("/add-game", async (req, res) => {
    const data = req.body;
    console.log(data);
    try {
        const game = mongoose.model("games");
        const newGame = new game(data);
        res.status(200).send(newGame);
        await newGame.save();
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.get("/get-games", async (req, res) => {
    try {
        const game = mongoose.model("games");
        const games = await game.find({});
        res.status(200).send(games);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
