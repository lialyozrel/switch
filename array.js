let array = ['first', 'second', , 'fourth']

array.forEach(function(element) {
  console.log(element)
})


if (array[2] === undefined) {
  console.log('array[2] is undefined')  
}

array = ['first', 'second', undefined, 'fourth']

array.forEach(function(element) {
  console.log(element)
})
