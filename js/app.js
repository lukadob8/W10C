function choice(userSelection) {
    Cookies.set('player', userSelection, {expires: 1});
    Cookies.set('maxtrainerHp', '50');
    Cookies.set('maxcompHP', '50');
    Cookies.set('userCurrentHp', '50');
    Cookies.set('cmpCurrentHP', '50');
    window.open('battle.html', '_self');
}

// function treecko(userSelection) {
//     Cookies.set('player', userSelection, {expires: 1});
//     window.open('battle.html', '_self');
// }

// function mudkip(userSelection) {
//     Cookies.set('player', userSelection, {expires: 1});
//     window.open('battle.html', '_self');
// }