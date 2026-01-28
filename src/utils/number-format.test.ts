import { formatCompactNumber, formatCompactUsd } from "./number-format";

describe("format utilities", () => {
  describe("formatCompactUsd", () => {
    it("should format large USD values compactly", () => {
      expect(formatCompactUsd(1000)).toBe("$1K");
      expect(formatCompactUsd(1000000)).toBe("$1M");
      expect(formatCompactUsd(1234567)).toBe("$1.23M");
      expect(formatCompactUsd(1000000000)).toBe("$1B");
    });

    it("should handle undefined", () => {
      expect(formatCompactUsd(undefined)).toBe("$0");
    });

    it("should format small values with decimals", () => {
      expect(formatCompactUsd(1.234)).toBe("$1.23");
    });
  });

  describe("formatCompactNumber", () => {
    it("should format large numbers compactly", () => {
      expect(formatCompactNumber(1000)).toBe("1K");
      expect(formatCompactNumber(1000000)).toBe("1M");
      expect(formatCompactNumber(1234567)).toBe("1.23M");
    });

    it("should handle undefined", () => {
      expect(formatCompactNumber(undefined)).toBe("0");
    });
  });
});
