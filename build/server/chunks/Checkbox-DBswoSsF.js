import { Z as sanitize_slots, E as sanitize_props, F as rest_props, x as push, G as fallback, R as getContext, U as ensure_array_like, J as bind_props, z as pop, Q as escape_html, K as spread_attributes, M as clsx, N as slot } from './index-j4_QQaNE.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';
import { L as Label } from './Input-BqhjcanO.js';

const colorClasses = {
  primary: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600",
  secondary: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600",
  red: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600",
  green: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600",
  purple: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600",
  teal: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600",
  yellow: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600",
  orange: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600",
  blue: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
};
const labelClass = (inline, extraClass) => twMerge(inline ? "inline-flex" : "flex", "items-center", extraClass);
const inputClass = (custom, color, rounded, tinted, spacing, extraClass) => twMerge("w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2", spacing, tinted ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600", custom && "sr-only peer", "rounded", colorClasses[color], extraClass);
function Checkbox($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "custom",
    "inline",
    "group",
    "choices",
    "value",
    "checked",
    "spacing",
    "groupLabelClass",
    "groupInputClass"
  ]);
  push();
  let color = fallback($$props["color"], "primary");
  let custom = fallback($$props["custom"], false);
  let inline = fallback($$props["inline"], false);
  let group = fallback($$props["group"], () => [], true);
  let choices = fallback($$props["choices"], () => [], true);
  let value = fallback($$props["value"], "on");
  let checked = fallback($$props["checked"], () => void 0, true);
  let spacing = fallback($$props["spacing"], () => $$slots.default ? "me-2" : "", true);
  let groupLabelClass = fallback($$props["groupLabelClass"], "");
  let groupInputClass = fallback($$props["groupInputClass"], "");
  let background = getContext("background");
  if (choices.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(choices);
    $$payload.out += `<!--[-->`;
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let { value: value2, label } = each_array[i];
      Label($$payload, {
        class: labelClass(inline, groupLabelClass),
        show: $$slots.default,
        for: `checkbox-${i}`,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(label)} <input${spread_attributes(
            {
              id: `checkbox-${i}`,
              type: "checkbox",
              value: value2,
              checked: group.includes(value2),
              ...$$restProps,
              class: clsx(inputClass(custom, color, true, background, spacing, groupInputClass))
            },
            null
          )}> <!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    Label($$payload, {
      class: labelClass(inline, $$sanitized_props.class),
      show: $$slots.default,
      children: ($$payload2) => {
        $$payload2.out += `<input${spread_attributes(
          {
            type: "checkbox",
            checked,
            value,
            ...$$restProps,
            class: clsx(inputClass(custom, color, true, background, spacing, $$slots.default || $$sanitized_props.class))
          },
          null
        )}> <!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    color,
    custom,
    inline,
    group,
    choices,
    value,
    checked,
    spacing,
    groupLabelClass,
    groupInputClass
  });
  pop();
}

export { Checkbox as C };
//# sourceMappingURL=Checkbox-DBswoSsF.js.map
