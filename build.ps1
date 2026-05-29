# Assembly script for app.js
$workspaceDir = "C:\Users\fives\.gemini\antigravity\scratch\firefly_recall_quizzes"
$srcDir = Join-Path $workspaceDir "src"
$appFile = Join-Path $workspaceDir "app.js"

$files = @(
    "state.js",
    "audio.js",
    "confetti.js",
    "storage.js",
    "navigation.js",
    "views.js",
    "exam.js",
    "layout.js",
    "past_papers.js",
    "games.js",
    "lessons.js",
    "main.js"
)

Write-Output "Assembling app.js from src/..."
$assembledContent = ""

foreach ($file in $files) {
    $filePath = Join-Path $srcDir $file
    if (Test-Path $filePath) {
        Write-Output "Adding $file..."
        $content = [System.IO.File]::ReadAllText($filePath, [System.Text.Encoding]::UTF8)
        $assembledContent += "// --- START OF MODULE $file ---`r`n"
        $assembledContent += $content
        $assembledContent += "`r`n// --- END OF MODULE $file ---`r`n`r`n"
    } else {
        Write-Error "Module file $file not found!"
        exit 1
    }
}

[System.IO.File]::WriteAllText($appFile, $assembledContent, [System.Text.Encoding]::UTF8)
Write-Output "Reassembled app.js successfully."
