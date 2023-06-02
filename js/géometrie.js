export function figures(shapes) {
    let total = 0

    for (let i = 0; i < shapes.length; i++) {
        const idk = shapes[i];
        const length = idk.length - 1

        switch (idk[0]) {
            case "t":
                total += idk[length] * 3
                break;

            case "s":
                total += idk[length] * 4
                break;

            case "p":
                total += idk[length] * 5
                break;

            case "h":
                total += idk[length] * 6
                break;

            default:
                break;
        }

    }

    return total
}