import { describe, expect, it } from "vitest";
import { armée } from "./js/daenerys.js";

describe("calculer", () => {
    it("addition", () => {
        expect(armée(4825)).toBe("1_127_1920")

    })
})