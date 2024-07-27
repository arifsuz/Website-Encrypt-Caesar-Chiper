const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caesarCipher() {
  const method = document.getElementById("method").value;
  const text = document.getElementById("inputText").value;
  const shiftKey = parseInt(document.getElementById("shiftKey").value);
  let outputText = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char.match(/[a-z]/i)) {
      const position = alphabet.indexOf(char);
      let newPosition;
      if (method === "encrypt") {
        newPosition = (position + shiftKey) % 52;
      } else {
        newPosition = (position - shiftKey + 52) % 52;
      }
      outputText += alphabet[newPosition];
    } else {
      outputText += char;
    }
  }

  document.getElementById("output").innerText = outputText;
}
