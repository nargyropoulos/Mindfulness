var name1 = document.getElementById('word1', 'word2', 'word3', 'word4', 'word5', 'word6')
    originalStory = document.getElementById('story'),
    button = document.getElementById("submitButton");

button.onclick = function(){
    replaceStory(word1.value, word2.value, word3.value, word4.value, word5.value, word6.value);
}

var replaceStory = function(word1, word2, word3, word4, word5, word6) {
    var story = ( "In the morning, " + word1 + " goes to " + word2 + ". When they get home they play " + word3 + " while eating " + word4 + " " + word5 + " before going to sleep at " + word6 + ".");

    return originalStory.innerHTML = story;
}