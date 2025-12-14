(function () {
  var TIMER_DELAY = 60;
  var BOTTOM_MARGIN = 15;
  var BREAKPOINT_PX = 900;
  var timer = null;

  function apply() {
    var sidebar = document.querySelector('.sidebar');
    var layout = document.querySelector('.textLayout');
    if (!sidebar || !layout) return;
    if (window.matchMedia('(max-width: ' + BREAKPOINT_PX + 'px)').matches) {
      layout.style.height = '';
      return;
    }
    var s = sidebar.getBoundingClientRect();
    var l = layout.getBoundingClientRect();
    var h = Math.max(0, Math.round(s.bottom - l.top - BOTTOM_MARGIN));
    layout.style.height = h + 'px';
  }

  function schedule() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(apply, TIMER_DELAY);
    if (window.requestAnimationFrame) window.requestAnimationFrame(apply);
  }

  window.addEventListener('DOMContentLoaded', schedule);
  window.addEventListener('load', schedule);
  window.addEventListener('resize', schedule);
  window.addEventListener('orientationchange', schedule);
  window.addEventListener('pageshow', schedule);
  document.addEventListener('visibilitychange', function () { if (document.visibilityState === 'visible') schedule(); });
  window.addEventListener('focus', schedule);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedule);
  if (document.readyState !== 'loading') schedule();

  var sidebarEl = document.querySelector('.sidebar');
  if (sidebarEl && window.MutationObserver) {
    var mo = new MutationObserver(schedule);
    mo.observe(sidebarEl, { childList: true, subtree: true, attributes: true });
  }

  if (window.ResizeObserver) {
    try {
      var ro = new ResizeObserver(schedule);
      ro.observe(document.documentElement);
      var el = document.querySelector('.textLayout');
      if (el) ro.observe(el);
      if (sidebarEl) ro.observe(sidebarEl);
    } catch (e) {}
  }
})();