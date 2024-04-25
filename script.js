const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher() {
  const method = document.getElementById("method").value;
  const text = document.getElementById("inputText").value;
  const shiftKey = parseInt(document.getElementById("shiftKey").value);
  let outputText = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      char = char.toLowerCase();
      const position = alphabet.indexOf(char);
      let newPosition;
      if (method === "encrypt") {
        newPosition = (position + shiftKey) % 26;
      } else {
        newPosition = (position - shiftKey + 26) % 26;
      }
      outputText += alphabet[newPosition];
    } else {
      outputText += char;
    }
  }

  document.getElementById("output").innerText = "Output: " + outputText;
}
