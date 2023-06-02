export function olivier() {
    let t = [[5, 6, 4], [8, 9, 26], [8, 4, 9], [4, 1, 2]]

    for (let i = 0; i < t.length; i++) {
        let x = t[i]
        let j = i

        while (j > 0 && t[j - 1] > x) {
            t[j] = t[j - 1]
            j = j - 1
            t[j] = x

        }

    }
    return t

}



// export function olivier(arr) {
//     let voidarr = []

//     for (let i = 0; i < arr.length; i++) {
//         const tabl = arr[i];
//         for (let index = 0; index < tabl.length; index++) {

//             if (tabl[i] < tabl[i + 1]) {
//                 if (!voidarr.includes(arr[i])) {
//                     voidarr.push(arr[i])
//                     arr
//                 }
//             } else if (tabl[i] > tabl[i + 1]) {
//                 if (!voidarr.includes(arr[i + 1])) {
//                     voidarr.push(arr[i + 1])
//                 }
//             }
//             // else {
//             //     if (!voidarr.includes(arr[i])) {
//             //         voidarr.push(arr[i])
//             //     }
//             // }

//         }

//     }

//     if (arr.length === 1) {
//         voidarr.push[arr[0]]
//     }

//     return voidarr
// }

// export function olivier(arr) {
//     let r = [];
//     r[0] = arr[0]


//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < r[0]) {
//             r[i] = r[i - 1]
//             r[0] = arr[i]
//             if (i >= 2) {
//                 r[i] = r[0]
//             }
//         } else if (arr[i] < r[i]) {
//             r[i] = r[i - 1]
//             r[i - 1] = t[i]
//         } else {
//             r[i] = arr[i]
//         }

//     }

//     return r
// }

// export function olivier(arr) {
//     let t = [12, 3, 5, 7, 21];
//     let r = [];
//     r[0] = t[0]

//     if (t[1] < r[0]) {
//         r[1] = t[0]
//         r[0] = t[1]
//     } else {
//         r[1] = t[1]
//     }

//     if (t[2] < r[0]) {
//         r[2] = r[1]
//         r[1] = r[0]
//         r[0] = t[2]
//     } else if (t[2] < r[1]) {
//         r[2] = r[1]
//         r[1] = r[2]
//     } else {
//         r[2] = t[2]
//     }

//     if (t[3] < r[0]) {
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = r[0]
//         r[0] = t[3]
//     } else if (t[3] < r[1]) {
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = t[3]
//     } else if (t[3] < r[2]) {
//         r[3] = r[2]
//         r[2] = t[3]
//     }
//     else {
//         r[3] = t[3]
//     }

//     if (t[4] < r[0]) {
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = r[0]
//         r[0] = t[4]
//     } else if (t[4] < r[1]) {
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = t[4]
//     } else if (t[4] < r[2]) {
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = t[4]
//     } else if (t[4] < r[3]) {
//         r[4] = r[3]
//         r[3] = t[4]
//     }
//     else {
//         r[4] = t[4]
//     }

//     if (t[5] < r[0]) {
//         r[5] = r[4]
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = r[0]
//         r[0] = t[5]
//     } else if (t[5] < r[1]) {
//         r[5] = r[4]
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = r[1]
//         r[1] = t[5]
//     } else if (t[5] < r[2]) {
//         r[5] = r[4]
//         r[4] = r[3]
//         r[3] = r[2]
//         r[2] = t[5]
//     } else if (t[5] < r[3]) {
//         r[5] = r[4]
//         r[4] = r[3]
//         r[3] = t[5]
//     } else if (t[5] < r[3]) {
//         r[5] = r[4]
//         r[4] = t[5]
//     }
//     else {
//         r[5] = t[5]
//     }


//     return r


// }


