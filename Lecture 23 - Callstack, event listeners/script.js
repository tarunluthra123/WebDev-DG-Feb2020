const box = document.getElementById('box')
const inputBox = document.getElementById('input-box')
const para = document.getElementById('para')
const imageContainer = document.getElementById('image-container')

box.addEventListener('click', function (event) {
    console.log(event)
    imageContainer.style.backgroundImage = "url('mojo.jpg')"
    imageContainer.style.backgroundSize = 'contain'
})

box.addEventListener('mouseenter', function (event) {
    box.style.color = 'violet'
})

inputBox.addEventListener('keydown', function (event) {
    // console.log(event)
    if(event.key >= 'a' && event.key <= 'z')
        para.innerText += event.key
})

inputBox.addEventListener('focus', function (event) {
    inputBox.style.fontSize = '50px'
    inputBox.value = 'Hello World'
})


para.addEventListener('mouseenter', function (event) {
    para.style.fontSize = '40px'
})

document.addEventListener('scroll',function(event){
    box.style.backgroundColor = 'lightblue'
})

window.addEventListener('resize', function (event) {
    console.log("Resizing")
})