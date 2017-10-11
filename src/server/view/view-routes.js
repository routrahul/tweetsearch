import express from 'express';
const routerApi = express.Router;

const router = routerApi();
router.use(express.static('../../../../'));
router.use(express.static('dist'));

// define the home page route
router.get('/*', (req, res) => {
  res.sendFile('index.html');
});

module.exports = router;
