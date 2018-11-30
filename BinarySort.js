function binarySearch (list, value) {
  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)
  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + stop) / 2)
  }
  return (list[middle] !== value) ? -1 : middle
}

const list =[1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94]
console.log(binarySearch(list, 15)) 

// Logs 5