export function formatCompactUsd(value: number | undefined): string {
  if (value === undefined) return "$0";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}

export function formatCompactNumber(value: number | undefined): string {
  if (value === undefined) return "0";
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value);
}
