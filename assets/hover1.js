const hover1 = () => {
    const text1 = document.getElementById('text1')
    const text2 = document.getElementById('text2')
    text1.addEventListener('mouseover', () => {
        text1.style.opacity = 0
    })
    text1.addEventListener('mouseout', () => {
        text1.style.opacity = 1
    })

};
document.addEventListener('DOMContentLoaded',()=>{
    hover1()
})