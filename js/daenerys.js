export function armée(troupes) {
    let dragons = 0
    let immaculé = 0
    let dothrakis = 0


    if (troupes / 3 > 1000 && troupes / 3 < 2000) {
        dragons++
        troupes -= 1000
    } else if (troupes / 3 > 2000 && troupes / 3 < 3000) {
        dragons += 2
        troupes -= 2000
    } else if (troupes / 3 > 3000) {
        dragons += 3
        troupes -= 3000
    }

    if (troupes / 2 > 0) {
        let troupes2 = troupes / 2
        immaculé = Math.floor(troupes2 / 15)
        let immaculés = Math.round(immaculé * 15)
        troupes -= immaculés
    }

    dothrakis += troupes

    return dragons + "_" + immaculé + "_" + dothrakis

}
console.log(armée(5080))