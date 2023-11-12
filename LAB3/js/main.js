function move(direction){
  var element = $('.thumbnails');
  let distance = element.scrollLeft() + direction;
  if(distance < 0 ) distance = 0;
  element.scrollLeft(distance);
}
function show(image){
  let showImage = $('img.imageShow');
  var fileName = image.src.replace(/^.*[\\\/]/, '');
  showImage[0].src = './images/big/' + fileName;
  let showBoard = $('#showBoard');
  showBoard.show();
}
function hide(){
  let showBoard = $('#showBoard');
  showBoard.hide();
}