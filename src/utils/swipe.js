import Hammer from 'hammerjs';

let leftSidebar;
let rightSidebar;

function addClass(className) {
    var a = this;
    if (a.classList) {
        a.classList.add(className);
    } else {
        a.className += ' ' + className;
    }
}

function removeClass(className) {
    var a = this;
    if (a.classList) {
        a.classList.remove(className);
    } else {
        a.className.replace(className, '');
    }
}

// https://jsperf.com/remove-class-vanilla-vs-jquery

export default function init() {

const swipeZone = document.querySelector('body');    
var hammer = new Hammer(swipeZone, {});
hammer.on('pan', toggleSidebar);

leftSidebar = document.getElementById('leftSidebar');
rightSidebar = document.getElementById('rightSidebar');

    if (leftSidebar) {
        leftSidebar.addClass = addClass;
        leftSidebar.removeClass = removeClass;
    }

    if (rightSidebar) {
        rightSidebar.addClass = addClass;
        rightSidebar.removeClass = removeClass;
    }
}

function toggleSidebar(ev) {
    
    console.log(ev);

    if (ev.additionalEvent) {

        if (ev.additionalEvent === 'panright') {
            
            if (ev.center.x < 300) {
                if (leftSidebar)
                leftSidebar.removeClass('collapsed');           
            }

            if (ev.center.x > window.innerWidth - 300) {
                if (rightSidebar)
                rightSidebar.addClass('collapsed');           
            }
        }
        
        if (ev.additionalEvent === 'panleft') {
            
            if (ev.center.x < 300) {
                if (leftSidebar)
                leftSidebar.addClass('collapsed');
            }

            if (ev.center.x > window.innerWidth - 300) {
                if (rightSidebar)
                rightSidebar.removeClass('collapsed');           
            }
        }

    }
    
    console.log(ev.additionalEvent);
    
}