var DNA = ['A', 'C', 'G', 'T'];
var RNA = ['A', 'C', 'G', 'U'];


/** Test one 'transcribes cytosine to guanine' **/
var patternRNATrans = function (inDNA) {
  var result;
  var rnaPos;

    var dnaPos = DNA.indexOf(inDNA);
    if (dnaPos == 0) {
      rnaPos = RNA.length - 1;
    } else if (dnaPos == 1){
      rnaPos = RNA.length - 2;
    } else if (dnaPos == 2){
      rnaPos = RNA.length - 3;
    } else {
      rnaPos = RNA.length - 4;
    }
    console.log('Result for single RNA= ', RNA[rnaPos]);
    return result  = RNA[rnaPos];
}

var allRNATrans = function (str) {

  var result = "";
  var REVERSE_DNA = RNA.reverse().join("");

  for (var i = 0; i < str.length; i++) {
    var dna = str[i];
    var indexOfDNA = DNA.indexOf(dna);
    var reverseRNA = REVERSE_DNA.charAt(indexOfDNA);
    result += reverseRNA;
  }

  console.log('Result= ',result);
  return result;

}

patternRNATrans('A');
allRNATrans('ACGTGGTCTTAA')