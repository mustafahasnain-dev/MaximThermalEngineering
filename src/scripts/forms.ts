// Lead forms: hidden fields, validation, quote prefill and success state.
// Phase 3 replaces the placeholder submit with a POST to the Netlify function and a redirect to /thank-you/.

const PLACEHOLDER = /lead-placeholder/;
const phoneRe = /^\+?[\d\s()-]{10,16}$/;
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const digits = (v: string) => v.replace(/\D/g, '');
const isPhone = (v: string) => phoneRe.test(v.trim()) && digits(v).length >= 10 && digits(v).length <= 13;

function fillHidden(form: HTMLFormElement) {
  const params = new URLSearchParams(location.search);
  const set = (name: string, value: string) => {
    const el = form.elements.namedItem(name);
    if (el instanceof HTMLInputElement) el.value = value;
  };
  set('page_url', location.href);
  set('utm_source', params.get('utm_source') || '');
  set('utm_medium', params.get('utm_medium') || '');
  set('utm_campaign', params.get('utm_campaign') || '');
  set('referrer', document.referrer);
  set('timestamp', new Date().toISOString());
}

function setError(field: HTMLInputElement | HTMLTextAreaElement, msg: string) {
  const errId = field.getAttribute('aria-describedby');
  const err = errId ? document.getElementById(errId) : null;
  if (msg) field.setAttribute('aria-invalid', 'true');
  else field.removeAttribute('aria-invalid');
  if (err) err.textContent = msg;
}

function validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
  const v = field.value.trim();
  let msg = '';
  if (field.required && !v) {
    msg = field.matches('[data-phone]') ? 'Please enter your phone or WhatsApp number.' : 'Please fill in this field.';
  } else if (v && field.matches('[data-phone]') && !isPhone(v)) {
    msg = 'Please enter a valid number, for example 0331 2448064.';
  } else if (v && field.matches('[data-phone-or-email]') && !isPhone(v) && !emailRe.test(v)) {
    msg = 'Please enter a WhatsApp number or an email address.';
  }
  setError(field, msg);
  return !msg;
}

function showSuccess(form: HTMLFormElement) {
  const wrap = form.parentElement;
  const done = wrap?.querySelector<HTMLElement>('[data-lead-success]');
  form.hidden = true;
  if (done) {
    done.hidden = false;
    done.focus();
  }
}

document.querySelectorAll<HTMLFormElement>('form[data-lead-form]').forEach((form) => {
  const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input[required], textarea[required], [data-phone], [data-phone-or-email]')];
  fields.forEach((f) => {
    f.addEventListener('blur', () => { if (f.value) validateField(f); });
    f.addEventListener('input', () => { if (f.getAttribute('aria-invalid')) validateField(f); });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const results = fields.map(validateField);
    if (results.includes(false)) {
      fields[results.indexOf(false)]?.focus();
      return;
    }
    const hp = form.elements.namedItem('company_website');
    if (hp instanceof HTMLInputElement && hp.value) return; // bot
    fillHidden(form);

    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (btn) btn.disabled = true;
    if (!PLACEHOLDER.test(form.action)) {
      try {
        await fetch(form.action, { method: 'POST', body: new FormData(form) });
      } catch {
        /* Phase 3 adds real error handling */
      }
    }
    showSuccess(form);
  });

  fillHidden(form);
});

// Planned / Breakdown toggle on the hero form.
const alertBox = document.querySelector<HTMLElement>('[data-breakdown-alert]');
document.querySelectorAll<HTMLInputElement>('input[data-urgency]').forEach((r) =>
  r.addEventListener('change', () => {
    if (alertBox) alertBox.hidden = !(r.checked && r.value === 'Breakdown');
  }),
);

// Service-specific quote buttons pre-fill the form they point at (#quote on the homepage, #contact elsewhere).
document.addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href$="#quote"], a[href$="#contact"]');
  if (!link || link.pathname !== location.pathname) return;
  const target = document.getElementById(link.hash.slice(1));
  const form = target?.querySelector<HTMLFormElement>('form[data-lead-form]');
  if (!form) return;
  const need = form.querySelector<HTMLSelectElement>('select[name="need"]');
  const city = form.querySelector<HTMLSelectElement>('select[name="city"]');
  const msg = form.querySelector<HTMLTextAreaElement>('textarea[name="details"]');
  if (need && link.dataset.need) need.value = link.dataset.need;
  if (city && link.dataset.city) city.value = link.dataset.city;
  if (msg && link.dataset.prefill && !msg.value) msg.value = link.dataset.prefill;
  // Move focus into the form after the scroll so keyboard users land in it.
  const name = form.querySelector<HTMLInputElement>('input[name="name"]');
  if (name) setTimeout(() => name.focus({ preventScroll: true }), 400);
});
