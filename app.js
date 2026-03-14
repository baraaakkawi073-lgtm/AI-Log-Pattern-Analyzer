document.getElementById("analyzeBtn").addEventListener("click", async () => {
  const fileInput = document.getElementById("logFile");
  const resultsDiv = document.getElementById("results");
  
  resultsDiv.innerHTML = ""; // Clear previous results
  
  if (!fileInput.files[0]) {
    resultsDiv.innerText = "Please choose a log file first!";
    return;
  }

  const file = fileInput.files[0];
  const text = await file.text();

  // Simple analysis: extract error/failure patterns
  const lines = text.split("\n");
  const errorLines = lines.filter(line => /error|fail|exception/i.test(line));
  const uniquePatterns = [...new Set(errorLines)];

  if (uniquePatterns.length === 0) {
    resultsDiv.innerText = "No identifiable patterns found.";
  } else {
    uniquePatterns.forEach(p => {
      const div = document.createElement("div");
      div.className = "pattern";
      div.innerText = p;
      resultsDiv.appendChild(div);
    });
  }
});
