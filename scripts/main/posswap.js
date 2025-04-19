function swapElementsIfNarrow() {
    // wyndchyme was here. I'm sorry. This should be flex. I'm really sorry.
    const didYouKnow = document.querySelector('.didYouKnow');
    const featuredVideo = document.querySelector('.featuredVideo');

    if (window.innerWidth < 650 && didYouKnow && featuredVideo) {
      const parent = didYouKnow.parentElement;
      if (didYouKnow.nextElementSibling === featuredVideo) {
        parent.insertBefore(featuredVideo, didYouKnow);
      }
    } else {
      const parent = featuredVideo.parentElement;
      if (featuredVideo.nextElementSibling === didYouKnow) {
        parent.insertBefore(didYouKnow, featuredVideo); 
      }
    }
  }

  window.addEventListener('load', swapElementsIfNarrow);
  window.addEventListener('resize', swapElementsIfNarrow);