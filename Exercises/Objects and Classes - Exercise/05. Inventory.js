function inventory(arr) {
    let heroInformation = [];
    for (let i = 0; i < arr.length; i++) {
        let heroRegister = arr[i].split(" / ");
        let name = heroRegister.shift();
        let level = Number(heroRegister.shift());
        let item = heroRegister.shift();
        let heroRegistry = {
            heroName: name,
            heroLevel: level,
            heroItems: item,
        }
        heroInformation.push(heroRegistry);
    }
    heroInformation.sort((a, b) => a.heroLevel - b.heroLevel);
    for (let i = 0; i < heroInformation.length; i++) {
        let heroes = Object.values(heroInformation[i]);
        console.log(`Hero: ${heroes[0]}`);
        console.log(`level => ${heroes[1]}`);
        console.log(`items => ${heroes[2]}`);
    }
}
// function inventory(arr) {
//     let result = arr.reduce((a, v) => {
//         let [name, level, items] = v.split(" / ")
//         a.push({ name: name, level: +level, items: items })
//         return a
//     }, []);
//     result.sort((x, y) => x.level - y.level)
//         .forEach(x => console.log(`Hero: ${x.name}\nlevel => ${x.level}\nitems => ${x.items}`));
// }
inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara']);
// inventory(['Batman / 2 / Banana, Gun', 'Superman / 18 / Sword', 'Poppy / 28 / Sentinel, Antara']);