let nav = false;

const handleClick = () => {

    const line1 = document.querySelector('#line1')
    const line2 = document.querySelector('#line2')
    const line3 = document.querySelector('#line3')
    const background = document.querySelector('.background')

    if(nav){
        const menuLinks = document.querySelector('.menulinks')
        menuLinks.style.cssText = "right:70%; transition:all 0.5s;"
        line1.style.cssText = 'transform:rotate(0deg);'
        line2.style.cssText = 'transform:rotate(0deg);' 
        line3.style.cssText = 'display:block;'
        background.style.cssText = 'transform:scale(0)'
        nav = !nav;
    }
    else{
        const menuLinks = document.querySelector('.menulinks')
        menuLinks.style.cssText = "right:0% ;transition:all 0.5s;"
        line1.style.cssText = "transform:rotate(45deg);"
        line2.style.cssText = 'transform:rotate(-45deg); margin-top: -7x;';
        line3.style.cssText = 'display:none;';
        background.style.cssText = 'transform:scale(50)'
        nav= !nav;
    }
}