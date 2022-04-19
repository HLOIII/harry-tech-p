
const { Post } = require('../models');

const postData = [
    {
        title: "Lao Tzu",
        post_content: "The journey of a thousand miles begins with one step.",
        user_id: 3
    },
    {
        title: "Friedrich Nietzsche",
        post_content: "That which does not kill us makes us stronger.",
        user_id: 1
    },
    {
        title: "John Lennon",
        post_content: "Life is what happens when you're busy making other plans.",
        user_id: 2

    },
    {
        title: "Joe Kennedy",
        post_content: "When the going gets tough, the tough get going.",
        user_id: 5
    },
    {
        title: "Mahatma Gandhi",
        post_content: "You must be the change you wish to see in the world.",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;