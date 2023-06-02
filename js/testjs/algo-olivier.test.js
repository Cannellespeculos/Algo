import { describe, expect, it } from "vitest";
import { olivier } from "./js/algo-olivier.js";

describe("calculer", () => {
    it("addition", () => {
        expect(olivier()).toEqual([3, 5, 7, 12, 21])

    })
})