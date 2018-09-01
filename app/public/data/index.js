const express = require('express');
const router = express.Router();

router.get('/category', (req, res) => {
    let result = [
        {
            'id': 1,
            'categoryName': 'Images'
        },
        {
            'id': 2,
            'categoryName': 'Media'
        },
        {
            'id': 3,
            'categoryName': 'Documents'
        }
    ]
    res.json(result);
})

module.exports = router;