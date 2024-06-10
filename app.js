// Assignment 1 | COMP1073 Client-Side JavaScript

// Create a new speechSynthesis object
var synth = window.speechSynthesis;

// Arrays of words for constructing sentences
const subjects = ["The Turkey", "Mom", "Dad", "The Dog", "My Teacher", "The Elephant", "The Cat"];
const verbs = ["sat on", "ate", "danced with", "saw", "doesn't like","kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
const nouns = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
const places = ["on the moon", "on the chair", "on the speghetti", "in my soup", "on the grass", "in my shoes"];

// Variable to hold the text to be spoken
var textToSpeak = "";

// Function to speak the current sentence
function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

// Function to update the displayed sentence
function updateStoryOutput() {
	document.getElementById('storyOutput').innerText = textToSpeak;
}

// Event listeners for each button to add a random word to the sentence
document.getElementById('subjectBtn').addEventListener('click', () => {
	textToSpeak += subjects[Math.floor(Math.random() * subjects.length)] + " ";
	updateStoryOutput();
});

document.getElementById('verbBtn').addEventListener('click', () => {
	textToSpeak += verbs[Math.floor(Math.random() * verbs.length)] + " ";
	updateStoryOutput();
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
	textToSpeak += adjectives[Math.floor(Math.random() * adjectives.length)] + " ";
	updateStoryOutput();
});

document.getElementById('nounBtn').addEventListener('click', () => {
	textToSpeak += nouns[Math.floor(Math.random() * nouns.length)] + " ";
	updateStoryOutput();
});

document.getElementById('placeBtn').addEventListener('click', () => {
	textToSpeak += places[Math.floor(Math.random() * places.length)] + " ";
	updateStoryOutput();
});

// Onclick handler for the speak button that speaks the text contained in the var textToSpeak
document.getElementById('speakBtn').addEventListener('click', () => {
	speakNow(textToSpeak);
});

// Event listener for the random story button to generate and speak a random sentence
document.getElementById('randomStoryBtn').addEventListener('click', () => {
	textToSpeak = `${subjects[Math.floor(Math.random() * subjects.length)]} ${verbs[Math.floor(Math.random() * verbs.length)]} ${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]} ${places[Math.floor(Math.random() * places.length)]}`;
	updateStoryOutput();
	speakNow(textToSpeak);
});

// Event listener for the reset button to clear the current sentence
document.getElementById('resetBtn').addEventListener('click', () => {
	textToSpeak = "";
	updateStoryOutput();
});
