import { Z as sanitize_slots, E as sanitize_props, F as rest_props, x as push, G as fallback, R as getContext, V as copy_payload, W as assign_payload, J as bind_props, z as pop, K as spread_attributes, M as clsx, Y as attr, Q as escape_html, I as spread_props, N as slot, S as attr_class } from './index-_YnrmJpM.js';
import { t as twMerge } from './bundle-mjs-B-saSl0i.js';
import { C as Checkbox } from './Checkbox-DQiznWhw.js';

function Toggle($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "size",
    "group",
    "value",
    "checked",
    "customSize",
    "classDiv",
    "disabled"
  ]);
  push();
  let size = fallback($$props["size"], "default");
  let group = fallback($$props["group"], () => [], true);
  let value = fallback($$props["value"], "");
  let checked = fallback($$props["checked"], () => void 0, true);
  let customSize = fallback($$props["customSize"], "");
  let classDiv = fallback($$props["classDiv"], "");
  let disabled = fallback($$props["disabled"], false);
  let background = getContext("background");
  const common = "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all";
  const colors = {
    primary: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
    secondary: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
    red: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600",
    green: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600",
    purple: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600",
    yellow: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400",
    teal: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600",
    orange: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500",
    blue: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
  };
  const sizes = {
    small: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
    default: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
    large: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
    custom: customSize
  };
  let divClass;
  let checkboxCls;
  divClass = twMerge(common, $$slots.offLabel ? "ms-3" : "", background ? "dark:bg-gray-600 dark:border-gray-500" : "dark:bg-gray-700 dark:border-gray-600", colors[$$restProps.color ?? "primary"], sizes[size], "relative", classDiv);
  checkboxCls = disabled ? "cursor-not-allowed grayscale contrast-50 text-gray-400" : "cursor-pointer text-gray-900";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Checkbox($$payload2, spread_props([
      { custom: true },
      $$restProps,
      {
        disabled,
        class: twMerge(checkboxCls, $$sanitized_props.class),
        value,
        get checked() {
          return checked;
        },
        set checked($$value) {
          checked = $$value;
          $$settled = false;
        },
        get group() {
          return group;
        },
        set group($$value) {
          group = $$value;
          $$settled = false;
        },
        children: ($$payload3) => {
          $$payload3.out += `<!---->`;
          slot($$payload3, $$props, "offLabel", {}, null);
          $$payload3.out += `<!----> <span${attr_class(clsx(divClass))}></span> <!---->`;
          slot($$payload3, $$props, "default", {}, null);
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      }
    ]));
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, {
    size,
    group,
    value,
    checked,
    customSize,
    classDiv,
    disabled
  });
  pop();
}
function EditSolid($$payload, $$props) {
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
    ariaLabel = "edit solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"></path></svg>`;
  pop();
}

export { EditSolid as E, Toggle as T };
//# sourceMappingURL=EditSolid-OeQl3c6D.js.map
