import { x as push, V as copy_payload, W as assign_payload, z as pop, U as ensure_array_like, X as stringify, E as sanitize_props, F as rest_props, G as fallback, I as spread_props, S as attr_class, Y as attr, M as clsx, N as slot, J as bind_props, Q as escape_html, R as getContext, K as spread_attributes } from './index-j4_QQaNE.js';
import { C as CloseButton } from './CloseButton-HqruGkaA.js';
import { B as Badge } from './Badge-OJhq9-SK.js';
import { B as Button } from './Button-BPcScjDD.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';
import { F as Frame } from './Frame-OtTcfSd8.js';
import { S as SpeedDial, a as SpeedDialButton, D as Drawer, T as Textarea } from './SpeedDialButton-DHYXaY6u.js';
import { L as Label, I as Input } from './Input-BqhjcanO.js';
import { s as sineIn } from './index5-_pYpgmRp.js';
import { T as Toast, B as BadgeCheckSolid } from './BadgeCheckSolid-B5jTAKIF.js';
import { S as Section } from './Section-C68pekQe.js';
import { C as CirclePlusSolid } from './CirclePlusSolid-CvpYpFRS.js';

function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "href",
    "horizontal",
    "reverse",
    "img",
    "padding",
    "size",
    "imgClass"
  ]);
  push();
  let href = fallback($$props["href"], () => void 0, true);
  let horizontal = fallback($$props["horizontal"], false);
  let reverse = fallback($$props["reverse"], false);
  let img = fallback($$props["img"], () => void 0, true);
  let padding = fallback($$props["padding"], "lg");
  let size = fallback($$props["size"], "sm");
  let imgClass = fallback($$props["imgClass"], "");
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-(--breakpoint-xl)"
  };
  let innerPadding;
  let cardClass;
  let imgCls;
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$sanitized_props.class);
  imgCls = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"), imgClass);
  Frame($$payload, spread_props([
    {
      tag: href ? "a" : "div",
      rounded: true,
      shadow: true,
      border: true,
      href
    },
    $$restProps,
    {
      class: cardClass,
      children: ($$payload2) => {
        if (img) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `<img${attr_class(clsx(imgCls))}${attr("src", img)} alt=""> <div${attr_class(clsx(innerPadding))}><!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!----></div>`;
        } else {
          $$payload2.out += "<!--[!-->";
          $$payload2.out += `<!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!---->`;
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, {
    href,
    horizontal,
    reverse,
    img,
    padding,
    size,
    imgClass
  });
  pop();
}
function ArrowRightOutline($$payload, $$props) {
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
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "arrow right outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M19 12H5m14 0-4 4m4-4-4-4"></path></svg>`;
  pop();
}
function CheckCircleSolid($$payload, $$props) {
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
    ariaLabel = "check circle solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  let hidden = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const each_array = ensure_array_like(data.boulders);
    if (form?.success) {
      $$payload2.out += "<!--[-->";
      Toast($$payload2, {
        class: "absolute top-0 end-0",
        color: "green",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Boulder vytvořen!`;
        },
        $$slots: {
          default: true,
          icon: ($$payload3) => {
            BadgeCheckSolid($$payload3, {
              slot: "icon",
              class: "w-6 h-6 text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200"
            });
          }
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (data.user?.isAdmin) {
      $$payload2.out += "<!--[-->";
      SpeedDial($$payload2, {
        defaultClass: "absolute end-6 bottom-6 fixed",
        children: ($$payload3) => {
          SpeedDialButton($$payload3, {
            name: "Přidat nový",
            onclick: () => {
              hidden = false;
            },
            children: ($$payload4) => {
              CirclePlusSolid($$payload4, { class: "w-6 h-6" });
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> <div class="flex flex-col items-center"><div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row content-center justify-center"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let boulder = each_array[$$index];
      Card($$payload2, {
        img: boulder.image,
        href: `/boulders/${stringify(boulder.id)}`,
        children: ($$payload3) => {
          $$payload3.out += `<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${escape_html(boulder.name)}`;
          Badge($$payload3, {
            color: "yellow",
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(boulder.rating)}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></h5> <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">${escape_html(boulder.description.length < 100 ? boulder.description : boulder.description.slice(0, 100) + "...")}</p> <div class="flex flex-row gap-4">`;
          Button($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Vzhůru k výškám `;
              ArrowRightOutline($$payload4, { class: "w-6 h-6 ms-2 text-white" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (boulder.topped) {
            $$payload3.out += "<!--[-->";
            CheckCircleSolid($$payload3, { class: "w-10 h-10 text-green-500" });
          } else if (boulder.count > 0) {
            $$payload3.out += "<!--[1-->";
            Badge($$payload3, {
              color: "purple",
              class: "text-purple-500 h-fit",
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(boulder.count)}`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div>`;
        },
        $$slots: { default: true }
      });
    }
    $$payload2.out += `<!--]--></div></div> `;
    Section($$payload2, {
      sectionClass: "",
      children: ($$payload3) => {
        Drawer($$payload3, {
          transitionType: "fly",
          transitionParams,
          id: "sidebar4",
          get hidden() {
            return hidden;
          },
          set hidden($$value) {
            hidden = $$value;
            $$settled = false;
          },
          children: ($$payload4) => {
            $$payload4.out += `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Přidat boulder</h5> `;
            CloseButton($$payload4, { class: "mb-4 dark:text-white" });
            $$payload4.out += `<!----></div> <form action="/boulders" class="mb-6" method="POST" enctype="multipart/form-data"><div class="mb-6">`;
            Label($$payload4, {
              for: "name",
              class: "block mb-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Název boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, { type: "text", name: "name", required: true });
            $$payload4.out += `<!----></div> <div class="mb-6">`;
            Label($$payload4, {
              for: "name",
              class: "block mb-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Popis boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Textarea($$payload4, {
              name: "description",
              rows: 10,
              required: true
            });
            $$payload4.out += `<!----></div> <div class="mb-6">`;
            Label($$payload4, {
              class: "block mb-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Rating boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, { type: "text", name: "rating", required: true });
            $$payload4.out += `<!----></div> <div class="mb-6">`;
            Label($$payload4, {
              for: "name",
              class: "block mb-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Fotka boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              type: "file",
              id: "image",
              name: "image",
              accept: ".jpg, .jpeg, .png",
              required: true
            });
            $$payload4.out += `<!----></div> <div class="bottom-0 left-0 flex justify-center w-full pb-4 space-x-4 md:px-4 md:absolute">`;
            Button($$payload4, {
              type: "submit",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Uložit`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Button($$payload4, {
              class: "w-full",
              outline: true,
              color: "red",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Zrušit`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></form>`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-1sejzi5n.js.map
