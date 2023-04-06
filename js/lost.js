function SOS() {
    const names = ["Tom", "Elena", "Ambre", "Emma"]
    const x = -5;
    const y = 5;
    const moves = ["x:6", "y:8", "x:0", "x:2", "x:-2", "y:0", 'x:7']
    let message = "SOS:"

    for (let i = 0; i < names.length; i++) {
        const initials = names[i]
        for (let a = 0; a < initials.length; a++) {
            message += initials[0];

        }

    }


    console.log(message)
}

SOS()