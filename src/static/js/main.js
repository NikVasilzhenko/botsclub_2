//mob menu
function openMobMenu(){
  document.getElementById('js-menu-burger').classList.toggle('open');
  document.getElementById('js-mob-menu').classList.toggle('open');
}

//drop
document.addEventListener('click', function(event){
  let allDrops = document.querySelectorAll('.js-drop');
  if(event.target.classList.contains('js-drop')){
    if(event.target.classList.contains('open')){
      event.target.nextElementSibling.classList.remove('open');
      event.target.classList.remove('open');
    } else {
      Array.prototype.forEach.call(allDrops, function(e) {
        e.nextElementSibling.classList.remove('open');
        e.classList.remove('open');
      });
      event.target.nextElementSibling.classList.add('open');
      event.target.classList.add('open');
    }
  } else{    
    Array.prototype.forEach.call(allDrops, function(e) {
      e.nextElementSibling.classList.remove('open');
      e.classList.remove('open');
    });
  }
});

//filter-drop
function dropMobFilter($this){
  $this.classList.toggle('open');
  $this.nextElementSibling.classList.toggle('open');
}

//show all text
if(document.getElementById('js-more-txt')){
  document.getElementById('js-more-txt').addEventListener('click', function(event){
    document.getElementById('js-hide-txt').classList.toggle('open');
    if(event.target.classList.contains('open')){
      event.target.classList.remove('open');
      event.target.innerHTML = 'READ MORE...';
    } else{
      event.target.classList.add('open');
      event.target.innerHTML = 'HIDE...';
    }
  });
}

//mob search open
function openMobSearch(){
  document.getElementById('js-mob-search').classList.toggle('open');
}

//filterToggle
function filterToggle($this){
  let container = $this.parentElement,  
      hidenElems = container.querySelectorAll('.hide');
  
  if( !($this.classList.contains('open')) ){
    $this.classList.add('open');
    for( let i = 0; i => hidenElems.length; i++){
      hidenElems[i].classList.add('open');
    }
  } else{
    $this.classList.remove('open');
    for( let i = 0; i => hidenElems.length; i++){
      hidenElems[i].classList.remove('open');
    }
  }
}

//openMobFilter
function openMobFilter(){
  document.getElementById('js-mob-filter').classList.toggle('open');
  document.getElementById('js-mob-filter-burger').classList.toggle('open');
}