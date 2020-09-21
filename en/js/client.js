
var imagelinks={
    'eaz':'/en/img/eaz-map-destiny-2.jpg',
    'leviathan':'/en/img/leviathan.png',
    'leviathangarden':'/en/img/leviathangarden.webp',
    'pitofheresy1':'/en/img/pitofheresy1.jpg',
    'pitofheresy2':'/en/img/pitofheresy2.jpg',
    'scourgeofthepast':'/en/img/scourgeofthepast.webp',
    'shatteredthrone':'/en/img/shatteredthrone.jpg',
    'zerohour':'https://i.imgur.com/BAqFBHY.png',
    'leviathangarden_prestige':'/en/img/leviathangarden_presitge.jpg'
}

function changeImage(type){
    var newImage=$('<img src='+imagelinks[type]+'></img>')
    $('#ImgContainer > img').replaceWith(newImage);
}
