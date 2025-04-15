import { Z as sanitize_slots, E as sanitize_props, x as push, G as fallback, N as slot, S as attr_class, M as clsx, J as bind_props, z as pop } from './index-j4_QQaNE.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';

function Cta($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let ctatype = fallback($$props["ctatype"], "default");
  const ctaClasses = {
    default: {
      divClass: "max-w-screen-md",
      h2Class: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    },
    image: {
      divClass: "mt-4 md:mt-0",
      h2Class: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    },
    heading: {
      divClass: "mx-auto max-w-screen-sm text-center",
      h2Class: "mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"
    },
    none: { divClass: "", h2Class: "" }
  };
  if ($$slots.img) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "img", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class(clsx(twMerge(ctaClasses[ctatype]["divClass"], $$sanitized_props.class)))}>`;
  if ($$slots.h2) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<h2${attr_class(clsx(twMerge(ctaClasses[ctatype]["h2Class"], $$sanitized_props.classH2)))}><!---->`;
    slot($$payload, $$props, "h2", {}, null);
    $$payload.out += `<!----></h2>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { ctatype });
  pop();
}

export { Cta as C };
//# sourceMappingURL=Cta-BMrwoifb.js.map
