
const usersCollection = require('../models/userModel');

// get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await usersCollection.find().toArray();
        res.send(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

//  add user
const addUser = async (req, res) => {
    try {
        const user = req.body;

        if (!user?.email) {
            return res.status(400).send({ message: "Email is required" });
        }

        const existing = await usersCollection.findOne({ email: user.email });
        if (existing) {
            return res.send({ message: "User already exists", insertedId: null });
        }

        const result = await usersCollection.insertOne({ ...user, });
        res.status(201).send(result);

    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};



module.exports = { getAllUsers, addUser };
