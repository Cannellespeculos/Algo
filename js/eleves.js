function eleves() {
    const cours = ['TTETEE', 'TTEDET', 'PEETPP', 'TTTTET', 'ETEETP', 'ETEEPT', 'TPPPET', 'TETTEE', 'EETETT', 'EETPTD', 'TEPETP', 'EDTTEE']
    const voidarray = []

    for (let i = 0; i < cours.length; i++) {
        const element = cours[i];
        for (let a = 0; a < element.length; a++) {
            switch (element[a]) {
                case "E":
                    voidarray[i]++;
                    break;

                case 'T':
                    voidarray[i]++;
                    break

                case 'P':
                    voidarray[i]--;
                    break

                case 'D':
                    voidarray[i] -= 2;
                    break
                default:
                    break;
            }


        }

    }
    console.log(voidarray)
}

eleves()