var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/description', (req, res, next) => {
  const data = {
      title: "EasyTrip",
      pageTitle: "EasyTrip"
  };
  const vue = {};
res.renderVue("task-flow-description.vue", data, vue);
})

router.get('/documents', (req, res, next) => {
  const data = {
      title: "EasyTrip",
      pageTitle: "EasyTrip"
  };
  const vue = {};
res.renderVue("task-flow-documents.vue", data, vue);
})

router.get('/essentials', (req, res, next) => {
  const data = {
      title: "EasyTrip",
      pageTitle: "EasyTrip"
  };
  const vue = {};
res.renderVue("task-flow-essentials.vue", data, vue);
})

router.get('/invitations', (req, res, next) => {
  const data = {
      title: "EasyTrip",
      pageTitle: "EasyTrip"
  };
  const vue = {};
res.renderVue("task-flow-invitations.vue", data, vue);
})
module.exports = router;
