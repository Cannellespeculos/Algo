import { describe, expect, it } from "vitest";
import { figures } from "./js/géometrie.js";

describe("calculer", () => {
    it("addition", () => {
        expect(figures(['hexagon_3', 'square_2', 'pentagon_1', 'hexagon_2', 'hexagon_1', 'triangle_6', 'pentagon_2', 'pentagon_4', 'pentagon_6', 'square_1', 'triangle_7', 'triangle_8', 'triangle_2'])).toEqual(98)

    })
})