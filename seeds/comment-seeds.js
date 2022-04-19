const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 5,
        comment_text: "I love this!"
    },
    {
        user_id: 4,
        post_id: 4,
        comment_text: "Goodness, this is awesome!"
    },
    {
        user_id: 3,
        post_id: 2,
        comment_text: "This is great news!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: "Keep it up!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;