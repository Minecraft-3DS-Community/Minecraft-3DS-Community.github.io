window.addEventListener('load', setSidebarMinHeight);
window.addEventListener('resize', setSidebarMinHeight);

function setSidebarMinHeight() {
  const sidebar = document.querySelector('.sidebar');
  const didYouKnow = document.querySelector('.didYouKnow');

  if (window.innerWidth > 768) {
    if (sidebar && didYouKnow) {
      const didYouKnowBottom = didYouKnow.getBoundingClientRect().bottom;

      sidebar.style.minHeight = `${didYouKnowBottom}px`;
    }
  } else {
    sidebar.style.minHeight = '';
  }
}

window.addEventListener('load', function() {
  var didYouKnow = document.querySelector('.didYouKnow');
  var featuredVideo = document.querySelector('.featuredVideo');
  // wyndchyme was here. This should have been flexbox. I'm really sorry.
  if (window.innerWidth > 550) {
      var didYouKnowHeight = didYouKnow.offsetHeight;

      featuredVideo.style.height = didYouKnowHeight + 'px';
  }
});
