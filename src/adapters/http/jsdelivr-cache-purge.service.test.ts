import { JsDelivrCachePurgeService } from "./jsdelivr-cache-purge.service";

describe("JsDelivrCachePurgeService", () => {
  let service: JsDelivrCachePurgeService;
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    service = new JsDelivrCachePurgeService();
    fetchSpy = jest.spyOn(global, "fetch").mockImplementation(
      jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ id: "123", status: "finished" }),
      } as any),
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should do nothing if no files or baskets are provided", async () => {
    await service.purge([], []);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it("should purge basket files correctly", async () => {
    const basketIds = ["managed-large-cap", "defi-blue-chips"];
    await service.purge(basketIds);

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy).toHaveBeenCalledWith(
      "https://purge.jsdelivr.net/",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          path: [
            "gh/hydric-org/token-baskets/baskets/managed-large-cap.json",
            "gh/hydric-org/token-baskets/baskets/defi-blue-chips.json",
          ],
        }),
      }),
    );
  });

  it("should purge explicit files correctly", async () => {
    const files = ["baskets/all.json", "/baskets/other.json"];
    await service.purge([], files);

    expect(fetchSpy).toHaveBeenCalledWith(
      "https://purge.jsdelivr.net/",
      expect.objectContaining({
        body: JSON.stringify({
          path: [
            "gh/hydric-org/token-baskets/baskets/all.json",
            "gh/hydric-org/token-baskets/baskets/other.json",
          ],
        }),
      }),
    );
  });

  it("should handle error responses", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: false,
      status: 400,
      text: jest.fn().mockResolvedValue("Bad Request"),
    } as any);

    await expect(service.purge([], ["test.json"])).rejects.toThrow(
      "Failed to purge cache: 400 Bad Request",
    );
  });
});
