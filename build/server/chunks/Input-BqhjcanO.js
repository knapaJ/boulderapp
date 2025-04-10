import { E as sanitize_props, F as rest_props, x as push, G as fallback, K as spread_attributes, M as clsx, N as slot, J as bind_props, z as pop, Z as sanitize_slots, R as getContext, T as element, S as attr_class, X as stringify } from './index-j4_QQaNE.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';
import { C as CloseButton } from './CloseButton-HqruGkaA.js';

function Wrapper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tag", "show", "use"]);
  let tag = fallback($$props["tag"], "div");
  let show = $$props["show"];
  let use = fallback($$props["use"], () => {
  });
  if (show) {
    $$payload.out += "<!--[-->";
    element(
      $$payload,
      tag,
      () => {
        $$payload.out += `${spread_attributes({ ...$$restProps }, null)}`;
      },
      () => {
        $$payload.out += `<!---->`;
        slot($$payload, $$props, "default", {}, null);
        $$payload.out += `<!---->`;
      }
    );
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { tag, show, use });
}
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["color", "defaultClass", "show"]);
  push();
  let labelClass;
  let color = fallback($$props["color"], "gray");
  let defaultClass = fallback($$props["defaultClass"], "text-sm rtl:text-right font-medium block");
  let show = fallback($$props["show"], true);
  const colorClasses = {
    gray: "text-gray-900 dark:text-gray-300",
    green: "text-green-700 dark:text-green-500",
    red: "text-red-700 dark:text-red-500",
    disabled: "text-gray-400 dark:text-gray-500 grayscale contrast-50"
  };
  {
    color = color;
  }
  labelClass = twMerge(defaultClass, colorClasses[color], $$sanitized_props.class);
  if (show) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<label${spread_attributes({ ...$$restProps, class: clsx(labelClass) }, null)}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></label>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, defaultClass, show });
  pop();
}
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
function Input($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "type",
    "value",
    "size",
    "clearable",
    "defaultClass",
    "color",
    "floatClass",
    "classLeft",
    "classRight",
    "wrapperClass"
  ]);
  push();
  let _size;
  let type = fallback($$props["type"], "text");
  let value = fallback($$props["value"], () => void 0, true);
  let size = fallback($$props["size"], () => void 0, true);
  let clearable = fallback($$props["clearable"], false);
  let defaultClass = fallback($$props["defaultClass"], "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right");
  let color = fallback($$props["color"], "base");
  let floatClass = fallback($$props["floatClass"], "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400");
  let classLeft = fallback($$props["classLeft"], "");
  let classRight = fallback($$props["classRight"], "");
  let wrapperClass = fallback($$props["wrapperClass"], "relative w-auto");
  const borderClasses = {
    base: "border border-gray-300 dark:border-gray-600",
    tinted: "border border-gray-300 dark:border-gray-500",
    green: "border border-green-500 dark:border-green-400",
    red: "border border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "ps-9", md: "ps-10", lg: "ps-11" };
  const rightPadding = { sm: "pe-9", md: "pe-10", lg: "pe-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-3" };
  let inputClass;
  _size = size || clampSize(group?.size) || "md";
  {
    const _color = color === "base" && background ? "tinted" : color;
    inputClass = twMerge([
      defaultClass,
      inputPadding[_size],
      $$slots.left && leftPadding[_size] || (clearable || $$slots.right) && rightPadding[_size],
      ringClasses[color],
      colorClasses[_color],
      borderClasses[_color],
      textSizes[_size],
      group || "rounded-lg",
      group && "first:rounded-s-lg last:rounded-e-lg",
      group && "not-first:-ms-px",
      $$sanitized_props.class
    ]);
  }
  Wrapper($$payload, {
    class: wrapperClass,
    show: $$slots.left || $$slots.right || !!clearable,
    children: ($$payload2) => {
      if ($$slots.left) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div${attr_class(`${stringify(twMerge(floatClass, classLeft))} start-0 ps-2.5 pointer-events-none`)}><!---->`;
        slot($$payload2, $$props, "left", {}, null);
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> <!---->`;
      slot($$payload2, $$props, "default", { props: { ...$$restProps, class: inputClass } }, () => {
        $$payload2.out += `<input${spread_attributes(
          {
            ...$$restProps,
            value,
            ...{ type },
            class: clsx(inputClass)
          },
          null
        )}>`;
      });
      $$payload2.out += `<!----> `;
      if ($$slots.right) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `<div${attr_class(`${stringify(twMerge(floatClass, classRight))} end-0 pe-2.5`)}><!---->`;
        slot($$payload2, $$props, "right", {}, null);
        $$payload2.out += `<!----></div>`;
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]--> `;
      if (clearable && value && `${value}`.length > 0) {
        $$payload2.out += "<!--[-->";
        CloseButton($$payload2, {
          size,
          color: "none",
          class: `${stringify(twMerge(floatClass, classRight))} focus:ring-0 end-1`,
          tabindex: -1
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, {
    type,
    value,
    size,
    clearable,
    defaultClass,
    color,
    floatClass,
    classLeft,
    classRight,
    wrapperClass
  });
  pop();
}

export { Input as I, Label as L, Wrapper as W };
//# sourceMappingURL=Input-BqhjcanO.js.map
