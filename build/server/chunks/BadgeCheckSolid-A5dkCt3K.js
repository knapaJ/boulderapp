import { Z as sanitize_slots, E as sanitize_props, F as rest_props, x as push, G as fallback, K as spread_attributes, M as clsx, S as attr_class, N as slot, J as bind_props, z as pop, R as getContext, Y as attr, Q as escape_html } from './index-_YnrmJpM.js';
import { f as fade } from './Badge-GRh0TNQ3.js';
import { t as twMerge } from './bundle-mjs-B-saSl0i.js';
import { C as CloseButton } from './CloseButton-Z-VWYKP3.js';

function Toast($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "dismissable",
    "color",
    "position",
    "divClass",
    "defaultIconClass",
    "contentClass",
    "align",
    "transition",
    "params",
    "toastStatus"
  ]);
  push();
  let dismissable = fallback($$props["dismissable"], true);
  let color = fallback($$props["color"], "primary");
  let position = fallback($$props["position"], "none");
  let divClass = fallback($$props["divClass"], "w-full max-w-xs p-4 text-gray-500 bg-white shadow-sm dark:text-gray-400 dark:bg-gray-800 gap-3");
  let defaultIconClass = fallback($$props["defaultIconClass"], "w-8 h-8");
  let contentClass = fallback($$props["contentClass"], "w-full text-sm font-normal");
  let align = fallback($$props["align"], true);
  let transition = fallback($$props["transition"], fade);
  let params = fallback($$props["params"], () => ({}), true);
  let toastStatus = fallback($$props["toastStatus"], true);
  const positions = {
    "top-left": "absolute top-5 start-5",
    "top-right": "absolute top-5 end-5",
    "bottom-left": "absolute bottom-5 start-5",
    "bottom-right": "absolute bottom-5 end-5",
    none: ""
  };
  let finalDivClass = twMerge("flex", align ? "items-center" : "items-start", divClass, positions[position], $$sanitized_props.class);
  const colors = {
    primary: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
    dark: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
    red: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
    yellow: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
    green: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
    blue: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
    indigo: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
    purple: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
    pink: "text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200",
    none: ""
  };
  let iconClass;
  const clsBtnExtraClass = "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700";
  iconClass = twMerge("inline-flex items-center justify-center shrink-0 rounded-lg", colors[color], defaultIconClass);
  if (toastStatus) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        role: "alert",
        ...$$restProps,
        class: clsx(finalDivClass)
      },
      null
    )}>`;
    if ($$slots.icon) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr_class(clsx(iconClass))}><!---->`;
      slot($$payload, $$props, "icon", {}, null);
      $$payload.out += `<!----></div>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <div${attr_class(clsx(contentClass))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></div> `;
    if (dismissable) {
      $$payload.out += "<!--[-->";
      CloseButton($$payload, {
        divclass: clsBtnExtraClass,
        ariaLabel: "Remove toast",
        color
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    dismissable,
    color,
    position,
    divClass,
    defaultIconClass,
    contentClass,
    align,
    transition,
    params,
    toastStatus
  });
  pop();
}
function BadgeCheckSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "badge check solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: clsx(twMerge("shrink-0", sizes[size], className)),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    null,
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"></path></svg>`;
  pop();
}

export { BadgeCheckSolid as B, Toast as T };
//# sourceMappingURL=BadgeCheckSolid-A5dkCt3K.js.map
