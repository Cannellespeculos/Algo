import { describe, expect, it } from "vitest";
import { deadpool } from "./js/deadpool.js";

describe("calculer", () => {
    it("addition", () => {
        expect(deadpool("_SHHS__SSST_TS_T__H___")).toBe("6min_30sec_95hp")

    })
})