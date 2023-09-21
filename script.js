function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  document.getElementById("colorCode").textContent = `Color Code: ${color}`;
}

function copyToClipboard() {
  const colorCode = document.getElementById("colorCode").textContent;
  const textArea = document.createElement("textarea");
  textArea.value = colorCode;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  const copyMessage = document.getElementById("copyMessage");
  copyMessage.style.opacity = 1;
  copyMessage.style.pointerEvents = "auto";

  setTimeout(() => {
    copyMessage.style.opacity = 0;
    copyMessage.style.pointerEvents = "none";
  }, 1000); 
}

generateRandomColor();
