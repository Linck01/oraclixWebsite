const questionModel = require('../models/questionModel.js');
const answerModel = require('../models/answerModel.js');
const utilModel = require('../models/utilModel.js');
const config = require('../const/config.js');

exports.index = (req, res, next) => {
  res.render('index',{texts: utilModel.texts,config:config});
}
exports.discordCommands = (req, res, next) => {
  res.render('discordCommands',{texts: utilModel.texts,config:config});
}
exports.about = (req, res, next) => {
  res.render('about',{texts: utilModel.texts,config:config});
}
exports.support = (req, res, next) => {
  res.render('support',{texts: utilModel.texts,config:config});
}
exports.privacyPolicy = (req, res, next) => {
  res.render('privacyPolicy',{texts: utilModel.texts,config:config});
}
exports.termsAndConditions = (req, res, next) => {
  res.render('termsAndConditions',{texts: utilModel.texts,config:config});
}
exports.premium = (req, res, next) => {
  res.render('premium',{texts: utilModel.texts,config:config});
}
exports.faq = (req, res, next) => {
  res.render('faq',{texts: utilModel.texts,config:config});
}

exports.question = async (req, res, next) => {
  let question = null;
  if (!isNaN(req.params.id))
    question = await questionModel.get(req.params.id);

  if (question && !req.params.url)
    return res.redirect('/q/' + req.params.id + '/' + question.url);

  if (question)
    question.answers = await answerModel.getByQuestionId(question.id);

  return res.render('question',{texts: utilModel.texts,config:config,question:question});
}
