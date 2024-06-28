
const box = document.getElementById("box");

const observerCallback = (items) => {

    
    items.forEach( item => {
        if( item.isIntersecting ) {
            item.target.classList.add( 'intersected' );
        } else {
            item.target.classList.remove( 'intersected' );
        }
    });

};

const observer  = new IntersectionObserver( observerCallback, {
    threshold: 0.5
});


observer.observe(box);