export interface ICdnCachePurgeService {
  /**
   * Purges the cache for the given basket IDs.
   * @param basketIds List of basket IDs to purge.
   * @param files Specific file paths relative to the repo root to purge.
   */
  purge(basketIds: string[], files?: string[]): Promise<void>;
}
