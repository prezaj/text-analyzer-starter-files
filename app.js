
$('.js-submitStuff').on('click',function(event)
 {
  event.preventDefault();
  $(".js-wordCount").text('')
  $(".js-uniqueWordCount").text('')
  $(".js-avgLength").text('')
  var userTextElement = $('.js-TextToAnalyze').val()
  //  console.log('click')
  // console.log(userTextElement)
  var totalCount=totalWordCount(userTextElement);
  var uniqueCount=uniqueWordCount(userTextElement);
  var avgLength=avgWordLength(userTextElement)/totalCount;
     $(".js-wordCount").append(totalCount);
   $(".js-uniqueWordCount").append(uniqueCount);
   $(".js-avgLength").append(avgLength);

   $(".hidden").removeClass('hidden');
  // {
    //   var assignClass = $(
    //     '<div class="fizz-buzz-item"><span>'+item+'</span></div>');
    
    // if (typeof item==='string') {
    //     assignClass.addClass(item);
    //   }
    //   $(".js-results").append(assignClass);
//   });
   
  
});


function getTokens(rawString) {

  return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
  
function uniqueWordCount(text) {
	//Better way to do this
  var words = getTokens(text);
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  //why -1?
   var currentMaxCount = -1;
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] ===1) {
      currentMaxCount ++;
      // console.log(currentMaxCount)
      // console.log(word)
    }
  }
  return currentMaxCount;
}

function totalWordCount(text) {
  var words = getTokens(text);
  return words.length;

}

function avgWordLength(text) {
  var words = text.replace(/[ ,!.";:-]+/g,'');
  console.log(words.length);
  return words.length;

}

