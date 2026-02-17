import { describe, it, expect } from "vitest";
import flags from "../src/core.js";

describe("flags", () => {
  it("should create a flags object", () => {
    const config = [
      { key: "flag1", defaultValue: true, value: () => true },
    ];

    const flagsObject = flags(config);

    expect(flagsObject.get("flag1")?.value()).toBe(true);
  });
});