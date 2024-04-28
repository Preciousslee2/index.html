// Get the current year and populate the span element with id "currentyear"
document.getElementById("2024").innerText = new Date().getFullYear();

// Get the last modified date of the document and populate the paragraph with id "lastModified"
document.getElementById("lastModified").innerText = "Last modified: " + new Date(document.lastModified).toLocaleString();
