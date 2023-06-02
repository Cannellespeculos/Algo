export function pfc(coups) {
    let answer = ""
    for (let i = 0; i < coups.length; i++) {
        switch (coups[i]) {
            case "P":
                answer += "F"
                break;

            case "F":
                answer += "C"
                break;

            case "C":
                answer += "P"
                break;

            default:
                break;
        }

    }
    return answer
}