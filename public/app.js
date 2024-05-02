let day_night = document.getElementById('day_night');
let day_night2 = document.getElementById('day_night2');
day_night2.style.display = "none";
day_night.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', 'rgb(184,184,184,.5)');
    document.documentElement.style.setProperty('--color-2', '#000');
    document.documentElement.style.setProperty('--color-3', '#fff');
    document.documentElement.style.setProperty('--color-4', 'rgb(0,0,0,.5');
    document.documentElement.style.setProperty('--color-5', '#663da6');
    day_night.style.display = "none";
    day_night2.style.display = "unset";
});
day_night2.addEventListener('click', () => {
    document.documentElement.style.setProperty('--color-1', '#262b3f');
    document.documentElement.style.setProperty('--color-2', '#fff');
    document.documentElement.style.setProperty('--color-3', '#1e2337');
    document.documentElement.style.setProperty('--color-4', 'rgb(255, 255, 255, .5)');
    document.documentElement.style.setProperty('--color-5', 'greenyellow');
    day_night.style.display = "unset";
    day_night2.style.display = "none";
});

let wifi = document.getElementById('wifi');
const wifi_change = () => {
    if (navigator.onLine) {
        wifi.style.color = "var(--color-5)";
    } else {
        wifi.style.color = "";
    }
}
setInterval(wifi_change, 100);
wifi_change();

let index = 0;

let join_new_member = document.getElementsByClassName('join_new_member')[0];


function UpdateDiv() {
    setInterval(() => {
        let card = document.createElement('div');
        card.classList.add('card');
        if (index == JoinData.length) {
            index = 0;
        } else {
            index++;
        }
        const { name, game, img, price } = JoinData[index - 1];
        card.innerHTML = `
        <img src="${img}" alt="">
                            <div class="content">
                                <div class="h6_price">
                                    <h5>${game}</h5>
                                    <span>Just Jion Now</span>
                                    <h6>${price}</h6>
                                </div>
                                <p>${name}</p>
                            </div>
        `
        join_new_member.appendChild(card);
        join_new_member.scrollTop += 100;
    }, 1000);
};

document.addEventListener('DOMContentLoaded', () => {
    UpdateDiv();
});