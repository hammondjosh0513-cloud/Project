// shared script for Hammond Tech — activates tooltips/popovers/toasts/etc.
document.addEventListener('DOMContentLoaded', function () {
  // Tooltips
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(el => {
    try { new bootstrap.Tooltip(el); } catch(e){}
  });

  // Popovers
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach(el => {
    try { new bootstrap.Popover(el); } catch(e){}
  });

  // ScrollSpy (safe)
  try { new bootstrap.ScrollSpy(document.body, { target: '.navbar', offset: 80 }); } catch(e){}

  // Toast triggers
  const welcomeToast = document.getElementById('liveToast') || document.getElementById('welcomeToast');
  if (welcomeToast) {
    try { new bootstrap.Toast(welcomeToast); } catch(e){}
  }

  const showToastBtn = document.getElementById('showToastBtn');
  const liveToastEl = document.getElementById('liveToast');
  if (showToastBtn && liveToastEl) {
    const t = new bootstrap.Toast(liveToastEl);
    showToastBtn.addEventListener('click', () => t.show());
  }

  // services toast
  const svcBtn = document.getElementById('svcToastBtn');
  const svcToastEl = document.getElementById('svcToast');
  if (svcBtn && svcToastEl) {
    const sToast = new bootstrap.Toast(svcToastEl);
    svcBtn.addEventListener('click', ()=> sToast.show());
  }

  // contact toast
  const cBtn = document.getElementById('contactToastBtn');
  const cToastEl = document.getElementById('contactToast');
  if (cBtn && cToastEl) {
    const cToast = new bootstrap.Toast(cToastEl);
    cBtn.addEventListener('click', ()=> cToast.show());
  }

  // contact form demo: prevent real submit and show toast
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const toastEl = document.getElementById('contactToast');
      if (toastEl) new bootstrap.Toast(toastEl).show();
      contactForm.reset();
    });
  }

  // Auto-close alerts after 6s
  document.querySelectorAll('.alert-dismissible').forEach(a => {
    setTimeout(()=> {
      try { bootstrap.Alert.getOrCreateInstance(a).close(); } catch(e){}
    }, 6000);
  });

  // log modal/offcanvas events (dev helpful)
  document.querySelectorAll('.modal').forEach(m => m.addEventListener('shown.bs.modal', ()=> console.log('Modal open:', m.id)));
  document.querySelectorAll('.offcanvas').forEach(o => o.addEventListener('shown.bs.offcanvas', ()=> console.log('Offcanvas open:', o.id)));
});






