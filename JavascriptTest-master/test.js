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

    return result  = RNA[rnaPos];
}

patternRNATrans('A');