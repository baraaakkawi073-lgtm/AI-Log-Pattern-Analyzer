/**
 * Project: AI-Log-Pattern-Analyzer
 * Purpose: Automatically categorizes system logs and identifies recurring issues.
 * Logic: Simple pattern matching to simulate an AI auditing logs for faster debugging.
 */

interface LogEntry {
    timestamp: string;
    level: "ERROR" | "WARNING" | "INFO";
    message: string;
}

class LogAuditor {
    private logs: string[] = [
        "[2026-03-14 10:00:01] INFO: System started successfully.",
        "[2026-03-14 10:05:22] ERROR: Database connection failed at port 5432.",
        "[2026-03-14 10:10:45] WARNING: High memory usage detected (85%).",
        "[2026-03-14 10:12:00] ERROR: API timeout on endpoint /v1/generate."
    ];

    analyzeLogs(): LogEntry[] {
        return this.logs.map(log => {
            let level: "ERROR" | "WARNING" | "INFO" = "INFO";
            
            if (log.includes("ERROR")) level = "ERROR";
            else if (log.includes("WARNING")) level = "WARNING";

            return {
                timestamp: log.substring(1, 20),
                level: level,
                message: log.split(": ")[1]
            };
        });
    }
}

// --- Execution ---
const analyzer = new LogAuditor();
const findings = analyzer.analyzeLogs();

console.log("--- Categorized Log Audit ---");
console.table(findings);
