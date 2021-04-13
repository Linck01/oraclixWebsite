const textModel = require('../models/textModel.js');
const questionModel = require('../models/questionModel.js');
const answerModel = require('../models/answerModel.js');
const config = require('../const/config.js');

exports.index = (req, res, next) => {
  res.render('index',{texts: textModel,config:config});
}
exports.discordCommands = (req, res, next) => {
  res.render('discordCommands',{texts: textModel,config:config});
}
exports.about = (req, res, next) => {
  res.render('about',{texts: textModel,config:config});
}
exports.support = (req, res, next) => {
  res.render('support',{texts: textModel,config:config});
}
exports.privacyPolicy = (req, res, next) => {
  res.render('privacyPolicy',{texts: textModel,config:config});
}
exports.termsAndConditions = (req, res, next) => {
  res.render('termsAndConditions',{texts: textModel,config:config});
}
exports.premium = (req, res, next) => {
  res.render('premium',{texts: textModel,config:config});
}
exports.faq = (req, res, next) => {
  res.render('faq',{texts: textModel,config:config});
}
exports.patchnotes = (req, res, next) => {
  res.render('patchnotes',{texts: textModel,config:config});
}

exports.question = async (req, res, next) => {
  let question = null;
  if (!isNaN(req.params.id))
    question = await questionModel.get(req.params.id);

  if (question && !req.params.url)
    return res.redirect('/q/' + req.params.id + '/' + question.url);

  if (question)
    question.answers = await answerModel.getByQuestionId(question.id);

  return res.render('question',{texts: textModel,config:config,question:question});
}
