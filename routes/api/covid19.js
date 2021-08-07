const express = require('express');
const router = express.Router();
const covid19Ctrl = require('../../controllers/covid19');
// /*---------- Public Routes ----------*/

router.get('/', covid19Ctrl.getCovid19TestData)


/*---------- Protected Routes ----------*/




module.exports = router;