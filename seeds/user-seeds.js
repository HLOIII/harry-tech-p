const { User } = require('../models');

const userData = [
    {
        username: "chris",
        twitter: "chrism",
        github: "chrism",
        email: "chrism@gmail.com",
        password: "password1234"
    },
    {
        username: "matt",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "password1234"
    },
    {
        username: "mike",
        twitter: "mike",
        github: "mike",
        email: "mike@gmail.com",
        password: "password1234"
    },
    {
        username: "kim",
        twitter: "kimb",
        github: "kimb",
        email: "kim@gmail.com",
        password: "password1234"
    },
    {
        username: "william",
        twitter: "williamb",
        github: "williamb",
        email: "william@gmail.com",
        password: "password1234"
    },
    {
        username: "erin",
        twitter: "erinb",
        github: "erinb",
        email: "erin@gmail.com",
        password: "password1234"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;