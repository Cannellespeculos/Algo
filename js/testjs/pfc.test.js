import { describe, expect, it } from "vitest";
import { pfc } from "./js/pfc.js";

describe("calculer", () => {
    it("addition", () => {
        expect(pfc("FCCCCPFPPCFCFFCPPPFFC")).toBe("FFCC")

    })
})