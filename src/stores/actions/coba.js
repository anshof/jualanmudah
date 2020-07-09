let str = "05:00"
let time = str.replace(/:/g,",")
if (time[0] == 0){
    if (time[3] == 0){
        time = time.slice(1,3) + time.slice(4)
    }else {time = time.slice(1)}
}
console.log(time)