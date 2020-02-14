let arRay = [2, 5, 6, 9, 20]

function reducer(array, callb, inVal = null) {
    for (let i = 0; i < array.length; i++) {
        inVal = callb(inVal, array[i])
    }
    return inVal
}

function mapper(array, callb) {
    let emptyMapArr = []
    for (let i of array) {
        emptyMapArr.push(callb(i))
    }
    return emptyMapArr
}

function filterer(array, callb) {
    let emptyFilArr = []
    for (let i of array) {
        if (callb(i)) {
            emptyFilArr.push(i)
        }
    }
    return emptyFilArr
}

function fillterWithReduce(array, callb) {
    return array.reduce((acc, ini) => {
        if (callb(ini)) {
            return [...acc, ini]
        }
        return [...acc]
    }, [])
}

function mapWithReduce(array, callb) {
    return array.reduce((acc, ini) => [...acc, callb(ini)], [])
}