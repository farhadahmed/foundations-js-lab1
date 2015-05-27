/* ----------------- Meerkats -------------------------------------------------
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
var sentence1 = "More food please",
    sentence2 = "Come over here so you can scratch my belly";
*/

/*
 TODO: 20 points
 Your goal is to replace the words in the above sentences with "chirp" The
 test cases should pass when you're done. You'll be writing your code in
 the below functions Use **two** different types of loops to implement this.
 Specifically, a different loop type for each function. Return the translated
 sentance in your implemented function.
 HINT: the "split" method on String will be useful.
*/

exports.meerkatTalkOne = function() {
  var sentence = "More food please";
  // TODO: Implement me
  // This answer will receive 0 points: return 'chirp chirp chirp';
  var sentenceArray = sentence.split(" ");
  for (i = 0; i <= sentenceArray.length - 1; i++) {
    sentenceArray[i] = "chirp";
  }
  sentence = sentenceArray.toString();
  var newSentence = sentence.replace(/,/g, ' ');
  return newSentence;
};

exports.meerkatTalkTwo = function() {
  var sentence = "Come over here so you can scratch my belly";
  // TODO: Implement me
  var sentenceArray = sentence.split(" ");
  var i = 0;
  while (i <= sentenceArray.length - 1) {
    sentenceArray[i] = 'chirp';
    i++;
  }
  sentence = sentenceArray.toString();
  var newSentence = sentence.replace(/,/g, ' ');
  return newSentence;
};
