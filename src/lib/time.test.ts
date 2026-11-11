import { describe, expect, it } from "vitest";
import { CLOCK_REFRESH_MS, formatZonedTime } from "./time";

describe("formatZonedTime", () => {
  it("formats a fixed instant in Africa/Nairobi as 24-hour HH:MM", () => {
    const date = new Date("2026-11-11T09:05:00.000Z");

    expect(formatZonedTime(date, "Africa/Nairobi")).toBe("12:05");
  });

  it("rolls midnight in Nairobi when the UTC hour is 21", () => {
    const date = new Date("2026-11-11T21:00:00.000Z");

    expect(formatZonedTime(date, "Africa/Nairobi")).toBe("00:00");
  });
});

describe("CLOCK_REFRESH_MS", () => {
  it("refreshes on an interval between 15 and 30 seconds", () => {
    expect(CLOCK_REFRESH_MS).toBeGreaterThanOrEqual(15_000);
    expect(CLOCK_REFRESH_MS).toBeLessThanOrEqual(30_000);
  });
});
