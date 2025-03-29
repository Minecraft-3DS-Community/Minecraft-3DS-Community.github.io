const filters = document.querySelectorAll('.modFilter');
                const searchInput = document.getElementById('searchInput');
                const modsShownDisplay = document.getElementById('modsShown');
                                            
                filters.forEach(filter => {
                  filter.addEventListener('change', updateMods);
                });
                                            
                searchInput.addEventListener('input', updateMods);
                
                document.addEventListener('DOMContentLoaded', updateMods);
                                          
                function updateMods() {
                  const mods = document.querySelectorAll('.modItem');
                  const query = searchInput.value.toLowerCase();
                  const activeFilters = Array.from(filters)
                    .filter(filter => filter.checked)
                    .map(filter => ({
                      filter: filter.dataset.filter, 
                      value: filter.value
                    }));
                                          
                  let shownCount = 0;
                                          
                  mods.forEach(mod => {
                    let showMod = true;
                                          
                    activeFilters.forEach(activeFilter => {
                      const modAttr = mod.dataset[activeFilter.filter];
                      const modValues = modAttr ? modAttr.split(',') : [];
                      if (!modValues.includes(activeFilter.value)) {
                        showMod = false;
                      }
                    });
                                          
                    const title = mod.querySelector('.modHeader')?.textContent.toLowerCase() || '';
                    const matchesSearch = title.includes(query);
                                          
                    if (showMod && matchesSearch) {
                      mod.style.display = '';
                      shownCount++;
                    } else {
                      mod.style.display = 'none';
                    }
                  });
                                          
                  const modText = shownCount === 1 ? 'item' : 'items';
                  modsShownDisplay.textContent = `${shownCount} ${modText} shown out of ${mods.length}`;
                }