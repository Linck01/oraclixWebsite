const express = require('express');
const router = express.Router();
const paypalController = require('./controllers/paypalController.js');
const viewController = require('./controllers/viewController.js');
const path = require('path');

// Views
router.route('/').get(viewController.index);
router.route('/index').get(viewController.index);
router.route('/discordCommands').get(viewController.discordCommands);
router.route('/about').get(viewController.about);
router.route('/faq').get(viewController.faq);
router.route('/support').get(viewController.support);
router.route('/privacyPolicy').get(viewController.privacyPolicy);
router.route('/termsAndConditions').get(viewController.termsAndConditions);
router.route('/q/:id').get(viewController.question);
router.route('/q/:id/:url').get(viewController.question);

// Paypal
router.route('/api/paypal/order/create/').post(paypalController.createOrder);
router.route('/api/paypal/order/capture/').post(paypalController.captureOrder);

/*
// View - React index
router.route('*').get(function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '/client/build/')});
});
*/
module.exports = router;
