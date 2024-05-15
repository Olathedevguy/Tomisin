let scrollAmount = 0;
const container = document.getElementById('container');

function startAutoScroll() {
    container.scrollLeft += 2;  

    if (Math.floor(container.scrollWidth) <= Math.floor(container.scrollLeft) + Math.floor(container.clientWidth) + 1) {
        container.scrollLeft = 0;
    }
}

let scrollInterval = setInterval(startAutoScroll, 10); 

