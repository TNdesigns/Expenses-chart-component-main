document.addEventListener("DOMContentLoaded", function(){
    const br1 = document.querySelector('.bar1');
    const br2 = document.querySelector('.bar2');
    const br3 = document.querySelector('.bar3');
    const br4 = document.querySelector('.bar4');
    const br5 = document.querySelector('.bar5');
    const br6 = document.querySelector('.bar6');
    const br7 = document.querySelector('.bar7');
    const vl1 = document.querySelector('.value1');
    const vl2 = document.querySelector('.value2');
    const vl3 = document.querySelector('.value3');
    const vl4 = document.querySelector('.value4');
    const vl5 = document.querySelector('.value5');
    const vl6 = document.querySelector('.value6');
    const vl7 = document.querySelector('.value7');

    br1.addEventListener('mouseover', function() {
        vl1.style.opacity = "1";
        br1.style.opacity = "75%";
        br1.style.cursor = "pointer";
    })
    br1.addEventListener('mouseout', function() {
        vl1.style.opacity = "0";
        br1.style.opacity = "1";
    })
    br2.addEventListener('mouseover', function() {
        vl2.style.opacity = "1";
        br2.style.opacity = "75%";
        br2.style.cursor = "pointer";
    })
    br2.addEventListener('mouseout', function() {
        vl2.style.opacity = "0";
        br2.style.opacity = "1";
    })
    br3.addEventListener('mouseover', function() {
        vl3.style.opacity = "1";
        br3.style.opacity = "75%";
        br3.style.cursor = "pointer";
    })
    br3.addEventListener('mouseout', function() {
        vl3.style.opacity = "0";
        br3.style.opacity = "1";
    })
    br4.addEventListener('mouseover', function() {
        vl4.style.opacity = "1";
        br4.style.opacity = "75%";
        br4.style.cursor = "pointer";
    })
    br4.addEventListener('mouseout', function() {
        vl4.style.opacity = "0";
        br4.style.opacity = "1";
    })
    br5.addEventListener('mouseover', function() {
        vl5.style.opacity = "1";
        br5.style.opacity = "75%";
        br5.style.cursor = "pointer";
    })
    br5.addEventListener('mouseout', function() {
        vl5.style.opacity = "0";
        br5.style.opacity = "1";
    })
    br6.addEventListener('mouseover', function() {
        vl6.style.opacity = "1";
        br6.style.opacity = "75%";
        br6.style.cursor = "pointer";
    })
    br6.addEventListener('mouseout', function() {
        vl6.style.opacity = "0";
        br6.style.opacity = "1";
    })
    br7.addEventListener('mouseover', function() {
        vl7.style.opacity = "1";
        br7.style.opacity = "75%";
        br7.style.cursor = "pointer";
    })
    br7.addEventListener('mouseout', function() {
        vl7.style.opacity = "0";
        br7.style.opacity = "1";
    })
})
