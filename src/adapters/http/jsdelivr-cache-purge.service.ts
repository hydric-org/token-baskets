import { ICdnCachePurgeService } from "../../domain/interfaces/cdn-cache-purge-service.interface";

export class JsDelivrCachePurgeService implements ICdnCachePurgeService {
  private readonly baseUrl = "https://purge.jsdelivr.net/";
  private readonly repoPath = "gh/hydric-org/token-baskets";

  async purge(basketIds: string[], files: string[] = []): Promise<void> {
    const pathsToPurge = new Set<string>();

    // Add basket paths
    for (const basketId of basketIds) {
      pathsToPurge.add(`${this.repoPath}/baskets/${basketId}.json`);
    }

    // Add explicit files
    for (const file of files) {
      // Create purge path, ensuring no leading slash issues
      const cleanPath = file.startsWith("/") ? file.substring(1) : file;
      pathsToPurge.add(`${this.repoPath}/${cleanPath}`);
    }

    if (pathsToPurge.size === 0) {
      return;
    }

    const allPaths = Array.from(pathsToPurge);
    const chunkSize = 10;
    const chunks: string[][] = [];

    for (let i = 0; i < allPaths.length; i += chunkSize) {
      chunks.push(allPaths.slice(i, i + chunkSize));
    }

    console.log(`Purging jsDelivr cache in ${chunks.length} chunks...`);

    for (const chunk of chunks) {
      const body = {
        path: chunk,
      };

      console.log("Purging chunk:", body.path);

      try {
        const response = await fetch(this.baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });

        if (!response.ok) {
          const text = await response.text();
          throw new Error(`Failed to purge cache: ${response.status} ${text}`);
        }

        const result = await response.json();
        console.log("Purge response:", result);
      } catch (error) {
        console.error("Error purging jsDelivr cache chunk:", error);
        throw error;
      }
    }
  }
}
