export function saut(accounts) {
    let totale = 0
    for (let i = 0; i < accounts.length; i++) {
        totale += accounts[i]

    }

    return totale
}

console.log(saut([693, 776, 714, 24, 967, 411, 41, 938]))