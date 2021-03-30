
var imagelinks={
    'eaz':'/ko/img/eaz-map-destiny-2.jpg',
    'leviathan':'/ko/img/leviathan.png',
    'leviathangarden':'/ko/img/leviathangarden.webp',
    'pitofheresy1':'/ko/img/pitofheresy1.jpg',
    'pitofheresy2':'/ko/img/pitofheresy2.jpg',
    'scourgeofthepast':'/ko/img/scourgeofthepast.webp',
    'shatteredthrone':'/ko/img/shatteredthrone.jpg',
    'zerohour':'https://i.imgur.com/BAqFBHY.png',
    'leviathangarden_prestige':'/ko/img/leviathangarden_presitge.jpg',
	'deepstonesparrow':'/ko/img/deepstonesparrow.jpg',
	'wishwall':'/ko/img/wishwall.jpg'
}

function changeImage(type){
    var newImage=$('<img src='+imagelinks[type]+'></img>')
    $('#ImgContainer > img').replaceWith(newImage);
}
