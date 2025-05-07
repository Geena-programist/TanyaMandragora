const preload = () => {
    const preload = document.getElementById('preload')
    setTimeout(() => {
        preload.outerHTML = ''
    }, 3100)
};
document.addEventListener('DOMContentLoaded',()=>{
    preload()
})