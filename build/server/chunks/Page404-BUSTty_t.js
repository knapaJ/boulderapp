import { Z as sanitize_slots, E as sanitize_props, x as push, G as fallback, S as attr_class, M as clsx, N as slot, J as bind_props, z as pop } from './index-_YnrmJpM.js';
import { t as twMerge } from './bundle-mjs-B-saSl0i.js';

function Page404($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let divClass = fallback($$props["divClass"], "mx-auto max-w-screen-sm text-center");
  let h1Class = fallback($$props["h1Class"], "mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500");
  $$payload.out += `<div${attr_class(clsx(twMerge(divClass, $$sanitized_props.class)))}>`;
  if ($$slots.h1) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h1${attr_class(clsx(twMerge(h1Class, $$sanitized_props.classH1)))}><!---->`;
    slot($$payload, $$props, "h1", {}, null);
    $$payload.out += `<!----></h1>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> `;
  if ($$slots.paragraph) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "paragraph", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { divClass, h1Class });
  pop();
}

export { Page404 as P };
//# sourceMappingURL=Page404-BUSTty_t.js.map
