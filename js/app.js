


function sortilège(sorts) {
  const voyelles = ["a", "e", "i", "o", "u", "y"];
  let sortVoyelle = 0;
  const sortGuérison = 0;
  const sortDéfense = 0;
  const sortAttaque = 0;

  for (let i = 0; i < sorts.length; i++) {
    let a = sorts[i];
    for (let b = 0; b < a.length; b++) {
      if (a[b].includes(voyelles[b])) {
        sortVoyelle += 1;
      }
    }
  }

  console.log(a[b]);

  console.log(sortVoyelle);
}

sortilège(["razamafou", "abracadabra"]);
