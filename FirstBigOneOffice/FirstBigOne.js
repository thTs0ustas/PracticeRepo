const ul = document.getElementById('breweries')

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

async function fetchData() {
    const response = await fetch("https://api.openbrewerydb.org/breweries")
    const data = await response.json();
    return data;
}

class Data {
    constructor(id, name, city, phone) {
        this.id = id
        this.name = name
        this.city = city
        this.phone = phone
    }
}

fetchData()
.then(data => data.map(prop => new Data(prop.id, prop.name, prop.city, prop.phone)))
.then(data => {
    data.forEach(el => {
        const li = createNode('li');
        const card = createNode('div');
        card.className = 'Card';
        append(li, card);
        append(ul, li);
        Object.entries(el).forEach(prop =>{
            const className = String(prop[0])
            const node = prop[1]
            let key = createNode('div');
            key.className = className;
            key.innerHTML = `<p>${node}</p>`
            append(card, key)
    })
})})
.catch(err=>console.log(err))

/* fetchData()
.then(data => {
    class Data {
            constructor(id, name, city, phone) {
                this.id = id
                this.name = name
                this.city = city
                this.phone = phone
            }
        }
    const newArrray = data.map(prop => new Data(prop.id, prop.name, prop.city, prop.phone))
    const li = createNode('li');
    const card = createNode('div');
    card.className = 'Card';
    append(li, card);
    append(ul, li);
    console.log(newArrray)
    newArrray.every(el => {
        Object.entries(el).forEach(prop =>{
            const className = String(prop[0])
            const node = prop[1]
            let key = createNode('div');
            key.className = className;
            key.innerHTML = `<p>${node}</p>`
            append(card, key)
        })
    })
}) 
.catch(err=>console.log(err)) */   

       
       
        
        
        
        /* newArrray.map(brewery => { 
            
            const li = createNode('li');
            const card = createNode('div');
            card.className = 'Card';
            
            id = createNode('div')
            name = createNode('div')
            city = createNode('div')
            phone = createNode('div')

            id.className = 'Id';
            name.className = 'Name';
            city.className = 'City';
            phone.className = 'Phone';

            id.innerHTML = `<p>${brewery.id}</p>`
            name.innerHTML = `<p>${brewery.name}</p>`
            city.innerHTML = `<p>${brewery.city}</p>`
            phone.innerHTML = `<p>${brewery.phone}</p>`

            append(card, id)
            append(card, name)
            append(card, city)
            append(card, phone)
            append(li, card);
            append(ul, li); */




/* let card = createNode('div');
card.className = 'Card';
console.log(propKeys.forEach(() => createNode('div')))
propKeys.forEach(a => a.className = String(a))
propKeys.forEach(b => b.innerHTML = `${data.b}`)
append(card, id)
append(li, card);
append(ul, li); 
    })
key.className = String(key)
.then(prop => console.log(prop))
 const newerData = newData()
    .then(data => data.reduce((accumulator, currentValue) => {
        const {
            id,
            name,
            city,
            phone
        } = currentValue;
        const tmp = {
            id,
            name,
            city,
            phone
        }
        return [ ...accumulator, tmp];
    }, []))
    .then(breweries => {
        return breweries.map(brewery => {
            console.log(cardArray)
            let li = createNode('li');
            id = createNode('div'),
            name = createNode('div'),
            city = createNode('div'),
            phone = createNode('div');
            id.className = 'Id';
            name.className = 'Name';
            city.className = 'City'
            phone.className = 'Phone'
            id.innerHTML = `${brewery.id}`
            name.innerHTML = `${brewery.name}`
            city.innerHTML = `${brewery.city}`
            phone.innerHTML = `${brewery.phone}`*/