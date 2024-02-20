function arrayModifier(arr) {
    let nums = arr.shift()
    nums = nums.split(` `).map(Number)
    for (let el of arr) {
        let command = el.split(` `)
        let num1 = Number(command[1])
        let num2 = Number(command[2])
        if (command == `end`) { break; }

        if (command[0] == `swap`) {

            let temp = nums[num1];
            nums[num1] = nums[num2];
            nums[num2] = temp;

        } else if (command[0] == `multiply`) {
            let multiplied = nums[num1] * nums[num2]
            nums.splice(num1, 1, multiplied);

        } else if (command[0] == `decrease`) {
            nums = nums.map((x) => x - 1);
        }
    }
    console.log(nums.join(`, `))
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);