import { describe, expect, it } from "vitest";
import { saut } from "./js/grand-saut.js";

describe("calculer", () => {
    it("addition", () => {
        expect(saut([725, 567, 715, 859, 74])).toBe(2940)

    })
})