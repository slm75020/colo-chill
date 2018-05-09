var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/todoc', (req, res, next) => {
console.log(req)
res.status(200);
res.redirect('/task-flow/documents');

})
router.get('/toess', (req, res, next) => {
res.redirect('/task-flow/essentials');
res.status(200)
res.send('ok')
})
router.get('/toinv', (req, res, next) => {
res.redirect('/task-flow/invitations');
res.status(200)
res.send('ok')
})
router.get('/todashboard', (req, res, next) => {
res.redirect('http://example.com');
res.status(200)
res.send('ok')
})

module.exports = router;
