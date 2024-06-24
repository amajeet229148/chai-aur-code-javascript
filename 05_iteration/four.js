const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const i in myObject) {
    // console.log(`${i} shortcut of ${myObject[i]}`);
        
    }
     

    const arr = ["js", "ruby", "cpp", "python"]
    for (const key in arr) {
        console.log(arr[key]);
        }
        



        ////not iterateable
        const map = new Map()

     map.set('IN', "india")
     map.set('USA', "united states of india")
     map.set('FR', "france")
     map.set('IN', "india")

     for (const key in map) {
       console.log(key[map]);
            
        }
     