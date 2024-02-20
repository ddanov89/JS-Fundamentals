function main(lines) {
    lines=lines.filter(function(entry) { return entry.trim() !== ''; }).map(Number);
    let result= lines.filter((num,i)=>i%2!==0).map(x=>x*2).reverse();
    console.log(result.join(' '));
}