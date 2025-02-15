document.getElementById("inputBox").addEventListener("input", function() {
    let input = this.value;
    let convertedText = transliterate(input); // Transliteration Function Call
    document.getElementById("outputText").innerText = convertedText;
});

// बेसिक ट्रांसलिटरेशन फंक्शन (इसे कस्टम लॉजिक से सुधार सकते हैं)
function transliterate(text) {
    let mapping = {
        "a": "अ", "b": "ब", "c": "क", "d": "द", "e": "ए",
        "h": "ह", "i": "इ", "k": "क", "m": "म", "n": "न",
        "p": "प", "r": "र", "s": "स", "t": "ट", "u": "उ"
    };

    return text.split("").map(char => mapping[char] || char).join("");
}
