const router = require('express').Router();

router.get('/login', (req, res) => {
    console.log('/login');
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;