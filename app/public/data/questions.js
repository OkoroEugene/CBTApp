const express = require('express');
const router = express.Router();

router.get('/questions', (req, res) => {
    let result = [
        {
            'id': 1,
            'question': "What is your name?",
            'options': ['Harrison', 'Davidson', 'Obinna', 'Emeka']
        },
        {
            'id': 2,
            'question': "How old are you?",
            'options': [12, 20, 45, 23]
        },
        {
            'id': 3,
            'question': "Where do you work?",
            'options': ['TENECE', 'GENESYS', 'PEIWA', 'NONE']
        }
    ]
    res.json(result);
})

module.exports = router;