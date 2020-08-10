document.getElementById("starBtn").addEventListener("click", myFunction);

function myFunction() {
    browser.tabs.executeScript({file: "/content_scripts/EditorText.js"});
}