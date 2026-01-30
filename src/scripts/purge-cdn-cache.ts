import { execSync } from "child_process";
import { JsDelivrCachePurgeService } from "../adapters/http/jsdelivr-cache-purge.service";

async function main() {
  try {
    console.log("Starting CDN cache purge detection...");

    // Get list of changed files in the latest commit (HEAD)
    // --name-only: show only filenames
    // --format=: suppress commit metadata (author, date, etc)
    const lastGitEditedFiles = execSync(
      'git show --name-only --format="" HEAD',
      {
        encoding: "utf-8",
      },
    );

    const changedFiles = lastGitEditedFiles
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    console.log("Detected changed files:", changedFiles);

    const basketsPrefix = "baskets/";
    const filesToPurge: string[] = [];

    for (const file of changedFiles) {
      if (file.startsWith(basketsPrefix) && file.endsWith(".json")) {
        filesToPurge.push(file);
      }
    }

    if (filesToPurge.length === 0) {
      console.log(
        "No basket files modified in the latest commit. Skipping purge.",
      );
      return;
    }

    console.log("Files to purge:", filesToPurge);

    const purgeService = new JsDelivrCachePurgeService();
    await purgeService.purge([], filesToPurge);

    console.log("CDN cache purge complete.");
  } catch (error) {
    console.error("Failed to run purge script:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
