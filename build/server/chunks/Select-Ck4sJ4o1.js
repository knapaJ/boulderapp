import { E as sanitize_props, F as rest_props, x as push, G as fallback, K as spread_attributes, M as clsx, Y as attr, Q as escape_html, U as ensure_array_like, N as slot, J as bind_props, z as pop } from './index-j4_QQaNE.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';

function Select($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "items",
    "value",
    "placeholder",
    "underline",
    "size",
    "defaultClass",
    "underlineClass"
  ]);
  push();
  let items = fallback($$props["items"], () => [], true);
  let value = fallback($$props["value"], "");
  let placeholder = fallback($$props["placeholder"], "Choose option ...");
  let underline = fallback($$props["underline"], false);
  let size = fallback($$props["size"], "md");
  let defaultClass = fallback($$props["defaultClass"], "text-gray-900 disabled:text-gray-400 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:disabled:text-gray-500 dark:focus:ring-primary-500 dark:focus:border-primary-500");
  let underlineClass = fallback($$props["underlineClass"], "text-gray-500 disabled:text-gray-400 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:disabled:text-gray-500 dark:border-gray-700 focus:outline-hidden focus:ring-0 focus:border-gray-200 peer");
  const common = "block w-full";
  const sizes = {
    sm: "text-sm p-2",
    md: "text-sm p-2.5",
    lg: "text-base py-3 px-4"
  };
  let selectClass;
  selectClass = twMerge(common, underline ? underlineClass : defaultClass, sizes[size], underline && "px-0!", $$sanitized_props.class);
  $$payload.out += `<select${spread_attributes(
    {
      ...$$restProps,
      class: clsx(selectClass)
    },
    null
  )}>`;
  if (placeholder) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<option disabled${attr("selected", value === void 0 ? true : void 0, true)} value="">${escape_html(placeholder)}</option>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (items && items.length > 0) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(items);
    $$payload.out += `<!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let { value: itemValue, name, disabled } = each_array[$$index];
      $$payload.out += `<option${attr("disabled", disabled, true)}${attr("value", itemValue)}${attr("selected", itemValue === value ? true : void 0, true)}>${escape_html(name)}</option>`;
    }
    $$payload.out += `<!--]-->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></select>`;
  bind_props($$props, {
    items,
    value,
    placeholder,
    underline,
    size,
    defaultClass,
    underlineClass
  });
  pop();
}

export { Select as S };
//# sourceMappingURL=Select-Ck4sJ4o1.js.map
