document.getElementById('clipboardCopy').addEventListener('click', clipboardCopy);
async function clipboardCopy() {
  let text = document.querySelector("showResult").value;
  await navigator.clipboard.writeText(text);
}