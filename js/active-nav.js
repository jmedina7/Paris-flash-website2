var setActive = () => {
  this.console.log('this printed');

  var nav = document.getElementById('nav').getElementsByTagName('li');
  this.console.log(nav);

  for(var index=0; index< nav.length; index++) {
    if(document.location.href.indexOf(nav[index].href)>=0) {
      nav[index].className='active item';
    }
  }
};

window.onload = setActive();
