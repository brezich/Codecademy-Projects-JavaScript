let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey. The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];

// making an array with story words as elements
let storyWords = story.split(' ');
console.log('story words:', storyWords);

// log original story word count
console.log('The original story contains ' + storyWords.length + ' words');

// removing unnecessary words
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));
console.log('The story contains ' + betterWords.length + ' words after removing unnecessary words');

// count and log overused words
overusedWords.forEach(function(overusedWord) {
  let overusedWordCount = 0;
  betterWords.filter(function(betterWord) {
    if (overusedWord === betterWord) {
      overusedWordCount++;
    }
  });  
  if (overusedWordCount != 1) {
    console.log('The word ' + overusedWord.toUpperCase() + ' was used ' + overusedWordCount + ' times'); // plural
  } else {
    console.log('The word ' + overusedWord.toUpperCase() + ' was used ' + overusedWordCount + ' time'); // singular
  }
});

// count how many sentences are in the paragraph
let sentenceCount = 0;
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCount++;
  }
});

console.log('There are ' + sentenceCount + ' sentences in the story');

// log the betterWords array as a single string
console.log(betterWords.join(' '));
