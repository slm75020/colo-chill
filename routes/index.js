var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const data = {
      title: "EasyTrip",
      pageTitle: "EasyTrip"
  };

  const vue = {};

      // head: {
      //     title: "EasyTrip",
      //     metas: [{
      //         property: "og:title",
      //         content: "pageTitle",
      //     },
      //     {
      //         name: "twitter:title",
      //         content: "pageTitle",
      //     }, {
      //         name: "viewport",
      //         content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      //     },
      //     ],
      // },
    // };

res.renderVue("index.vue", data, vue);
})



module.exports = router;
