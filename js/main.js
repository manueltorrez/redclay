let peppers = document.querySelectorAll('.our-peppers-list__item');
let image = document.querySelector('.our-peppers__image');

// To change the background imagen on pepper hover

peppers.forEach(function (element, index) {
    element.addEventListener('mouseover', () => {
        switch(index) {
            case 0:
                image.style.backgroundImage = "url('/img/our-peppers-fresno.jpg')";
                break;
            
            case 1:
                image.style.backgroundImage = "url('/img/our-peppers-serrano.jpg')";
                break;
            
            case 2:
                image.style.backgroundImage = "url('/img/our-peppers-carolina.jpg')";
                break;
    
            case 3:
                image.style.backgroundImage = "url('/img/our-peppers-habanero.jpg')";
                break;
    
            default:
                console.log("There's something wrong in the switch-case of main.js");
        }
    });
});
