function tabify( element ){
  const header = element.querySelector('.tabs__controls');
  const content = element.querySelector('.tabs__content');
  const tab_headers = [...header.children];
  const tab_contents = [...content.children];
  tab_contents.forEach( x => x.style.display = 'none');
  let current_tab_index = -1;

  function setTab( index ){
    if( current_tab_index > -1 ){
      tab_headers[current_tab_index].classList.remove('tabs__item--active');
      tab_contents[ current_tab_index ].style.display = 'none';
    }
    tab_headers[index].classList.add('tabs__item--active');
    tab_contents[ index ].style.display = 'flex';
    current_tab_index = index;
  }

  default_tab_index = tab_headers.findIndex( x => {
    return [...x.classList].indexOf('tabs__item--default') > -1;
  });

  default_tab_index = default_tab_index === -1 ? 0 : default_tab_index;
  setTab( default_tab_index );
  tab_headers.forEach((x,i) => x.onclick = event => setTab(i));
}

  // this is where the magic happens!
[...document.querySelectorAll('.tabs')]
  .forEach(x => tabify(x));
