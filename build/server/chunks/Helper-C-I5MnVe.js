import { E as sanitize_props, F as rest_props, x as push, G as fallback, K as spread_attributes, M as clsx, N as slot, J as bind_props, z as pop } from './index-j4_QQaNE.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';

function Helper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["helperClass", "color"]);
  push();
  let helperClass = fallback($$props["helperClass"], "text-xs font-normal text-gray-500 dark:text-gray-300");
  let color = fallback($$props["color"], "gray");
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500 grayscale contrast-50"
  };
  $$payload.out += `<p${spread_attributes(
    {
      ...$$restProps,
      class: clsx(twMerge(helperClass, colorClasses[color], $$sanitized_props.class))
    },
    null
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></p>`;
  bind_props($$props, { helperClass, color });
  pop();
}

export { Helper as H };
//# sourceMappingURL=Helper-C-I5MnVe.js.map
