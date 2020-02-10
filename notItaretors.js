let arRay = [2, 5, 6, 9, 20]
let emptArr = [];


class NotIterators {
    constructor(array, inVal) {
        this.array = array
        this.inVal = inVal

    }
    reducer(callb) {
        if (!this.inVal) {
            this.inVal = 0;
            for (let i of this.array) {
                if (Array.isArray(i)) {
                    for (let j of i) {
                        this.inVal = callb(this.inVal, j)
                    }
                } else {
                    this.inVal = callb(this.inVal, i)
                }
            }
            console.log(this.inVal)
            return this.inVal
        } else {
            this.inVal = this.inVal
            for (let i of this.array) {
                if (Array.isArray(i)) {
                    for (let j of i) {
                        this.inVal = callb(this.inVal, j)
                    }
                } else {
                    this.inVal = callb(this.inVal, i)
                }
            }
            console.log(this.inVal)
            return this.inVal
        }
    }

    mapper(callb) {
        let emptyMapArr = []
        for (let i of this.array) {
            if (Array.isArray(i)) {
                for (let j of i) {
                    emptyMapArr.push(callb(j))
                }
            } else {
                emptyMapArr.push(callb(i))
            }
        }
        console.log(emptyMapArr)
        return emptyMapArr
    }

    /* filterer(callb) {
        let emptyFilArr = []
        for (let i of this.array) {
            if (Array.isArray(i)) {
                for (let j of i) {
                    if (callb(j)) {
                        emptyFilArr.push(j)
                    }
                }
            } else {
                if (callb(i)) {
                    emptyFilArr.push(i)
                }
            }
        }
        console.log(emptyFilArr)
        return emptyFilArr
    } */
    filterer(callb) {
        let emptyFilArr = []
        for (let i of this.array) {
            if (callb(i)) {
                emptyFilArr.push(i)
            }
        }
        console.log(emptyFilArr)
        return emptyFilArr
    }


}




let mapM = new NotIterators(arRay, 6)

mapM.reducer((a, b) => sum = a + b)
mapM.mapper(a => a + 23)
mapM.filterer(a => a % 2 === 0)































let arRay1 = ['f', 'w', 'd']
let arRay2 = [2, 4, 6, 3]
function reducer(array, callb, inVal) {
    if (inVal !== null || inVal !== undefined) {
        for (i = 0; i < array.length; i++) {
            inVal = callb(inVal, array[i])
        }
        return inVal
    } else {
        let inVal = 0;
        for (i = 0; i < array.length; i++) {
            inVal = callb(inVal, array[i])
        }
        return inVal
    }

}


//callBack = (a, b) => ({ ...a, [b]: b })
console.log(reducer(arRay2, (acc, el) => {
    console.log(acc, el)
    acc + el
}))


/*
Array.prototype.reducer1 = function (callb, acc) {
    if (acc === undefined) {
        let val = this[0];
        for (i = 0; i < this.length; i++) {
            val = callb(val, this[i])
        }
        return val
    } else {
        let val = acc
        for (i = 0; i < this.length; i++) {
            val = callb(val, this[i])
        }
        return val
    }

}

console.log(arRay1.reducer1(callBack, 9))


//............................//
function mapArg(array, arg) {
    array.push(arg) //Whatever you want to do with the 'arg'//
}

function map(array) {
    for (let i = 0; i < array.length; i++) {
        mapArg(emptArr, array[i])
    }
    //console.log(emptArr)
}

//map(arRay)

//............OR................//

let mapEn = (array) => {
    for (let i = 0; i < array.length; i++) {
        emptArr.push(array[i]) // plus whatever you want to do with the array[i]//
    }
    return emptArr
}

//console.log(mapEn(arRay))

class Map {
    constructor(ar)
} */





Array.prototype.myReduce = function (callbackFunc, initialVal) {
    if (initialVal !== undefined) {
        let accumulator = initialVal;
        for (let i = 0; i < this.length; i++) {
            accumulator = callbackFunc(accumulator, this[i]);
        }
        return accumulator;
    } else {
        let accumulator = this[0];
        for (let i = 1; i < this.length; i++) {
            accumulator = callbackFunc(accumulator, this[i]);
        }
        return accumulator;
    }
}
console.log('sjhgfos', arRay1.myReduce((a, b) => ({ ...a, [b]: b })))