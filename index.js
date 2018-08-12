// add solution here
function theBeatlesPlay(musArr, instArr){
  var emptyArr = [];
  
  for (var i=0; i<musArr.length; i++)
  {
    emptyArr.push(musArr[i] + " plays " + instArr[i]);
  }
  return emptyArr;
}

function johnLennonFacts(factsArr){
  
  var i=0;
  while (i < factsArr.length){
    factsArr[i] += '!!!';
    i++;
  }
  return factsArr;
}