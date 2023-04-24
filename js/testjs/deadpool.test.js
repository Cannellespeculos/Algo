import { describe, expect, it } from "vitest";
import { deadpool } from "./js/deadpool.js";

describe("calculer", () => {
    it("addition", () => {
        expect(deadpool("H_E__TEST____")).toBe("15min_50sec_60hp")

    })
})