const player = (name, mark) => {
  this.points = 0
  return { name, mark, points }
}

let p = player('ed', 'a')
console.log(p)
console.log(p.points)
p.points++
console.log(p.points)
