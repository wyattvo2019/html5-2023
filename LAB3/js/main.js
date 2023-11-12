function move(direction){
  var element = $('.thumbnails');
  let distance = element.scrollLeft() + direction;
  if(distance < 0 ) distance = 0;
  element.scrollLeft(distance);
}