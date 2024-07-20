export function reload(array, place, component) {
    place.innerHTML = ""

    for (let item of array) {
        const product = component(item, array)
        place.append(product)
    }
}

export function toaster(text, variant) {

    const div = document.createElement('div')
    const span = document.createElement('span')
    const btn_remove = document.createElement('button')

    div.style.backgroundColor = variant


    div.classList.add('toaster')
    btn_remove.classList.add('btn_remove')


    setTimeout(() => {
        div.classList.add('show1')
        
    }, 200)

    setTimeout(() => {
        div.classList.remove('show1')
        
    }, 4000)

    div.onmouseenter = () => {
        div.style.display = 'block'
    }

    div.onmouseleave = () => {
        setTimeout(() => {
            div.style.display = 'none';
        }, 1000);
    };


    
    span.innerHTML = text
    btn_remove.innerHTML = 'X'

    btn_remove.onclick = () => {
        div.remove()
    }

    div.append(span, btn_remove)

    document.body.append(div)
}