import { x as push, V as copy_payload, W as assign_payload, z as pop, Q as escape_html, Y as attr, R as getContext, K as spread_attributes, M as clsx } from './index-_YnrmJpM.js';
import { S as Section } from './Section-DZ_RlwQm.js';
import { C as Cta } from './Cta-BeObA2KK.js';
import { C as CloseButton } from './CloseButton-Z-VWYKP3.js';
import { B as Badge } from './Badge-GRh0TNQ3.js';
import { B as Button } from './Button-DQEXdS4i.js';
import { S as SpeedDial, D as Drawer, T as Textarea, a as SpeedDialButton } from './SpeedDialButton-DU6D3vbo.js';
import { C as Checkbox } from './Checkbox-DQiznWhw.js';
import { L as Label, I as Input } from './Input-BgJVzjPE.js';
import { T as Toggle, E as EditSolid } from './EditSolid-OeQl3c6D.js';
import { s as sineIn } from './index5-_pYpgmRp.js';
import { T as Toast, B as BadgeCheckSolid } from './BadgeCheckSolid-A5dkCt3K.js';
import './client-vGHxpKXG.js';
import { t as twMerge } from './bundle-mjs-B-saSl0i.js';
import { C as CirclePlusSolid } from './CirclePlusSolid-Dfs4ZYah.js';
import './Frame-C9atG8Jn.js';
import './exports-Cv9LZeD1.js';
import './index3-DFQqYvd_.js';

function CircleMinusSolid($$payload, $$props) {
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
    ariaLabel = "circle minus solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm5.757-1a1 1 0 1 0 0 2h8.486a1 1 0 1 0 0-2H7.757Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function CloseCircleSolid($$payload, $$props) {
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
    ariaLabel = "close circle solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function QrCodeOutline($$payload, $$props) {
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
    ariaLabel = "qr code outline",
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
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M4 4h6v6H4V4Zm10 10h6v6h-6v-6Zm0-10h6v6h-6V4Zm-4 10h.01v.01H10V14Zm0 4h.01v.01H10V18Zm-3 2h.01v.01H7V20Zm0-4h.01v.01H7V16Zm-3 2h.01v.01H4V18Zm0-4h.01v.01H4V14Z"></path><path stroke="currentColor" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M7 7h.01v.01H7V7Zm10 10h.01v.01H17V17Z"></path></svg>`;
  pop();
}
function TrashBinSolid($$payload, $$props) {
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
    ariaLabel = "trash bin solid",
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
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  let topped = data.myAttempt?.topped;
  let attemptCount = data.myAttempt?.count;
  let hidden = true;
  let transitionParams = { x: -320, duration: 200, easing: sineIn };
  let location = null;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    if (form?.success === "attempt") {
      $$payload2.out += "<!--[-->";
      Toast($$payload2, {
        class: "fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-green-300",
        color: "green",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Pokusy zapsány!`;
        },
        $$slots: {
          default: true,
          icon: ($$payload3) => {
            BadgeCheckSolid($$payload3, {
              slot: "icon",
              class: "w-6 h-6 text-green-600 bg-green-100"
            });
          }
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    if (form?.error === "competition-not-enabled") {
      $$payload2.out += "<!--[-->";
      Toast($$payload2, {
        class: "fixed bottom-2 end-2 bg-white z-10 border-1 rounded-2xl border-red-300",
        color: "red",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Nyní nelze zapisovat pokusy!`;
        },
        $$slots: {
          default: true,
          icon: ($$payload3) => {
            CloseCircleSolid($$payload3, {
              slot: "icon",
              class: "w-6 h-6 text-red-600 bg-red-100"
            });
          }
        }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--> `;
    Section($$payload2, {
      name: "ctawithimg",
      children: ($$payload3) => {
        Cta($$payload3, {
          ctatype: "image",
          children: ($$payload4) => {
            $$payload4.out += `<p class="pl-4 font-light text-gray-500 md:text-lg">${escape_html(data.boulder.description)}</p> `;
            if (data.myAttempt) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="flex flex-col items-center pt-5 space-y-6"><h4 class="text-2xl">Tvoje pokusy:</h4> <form class="flex flex-col space-y-4" method="POST" action="?/attempt">`;
              Label($$payload4, {
                class: "space-y-2",
                children: ($$payload5) => {
                  $$payload5.out += `<span>Počet pokusů</span> <div class="flex flex-row space-x-2 items-center"><button type="button">`;
                  CircleMinusSolid($$payload5, { size: "xl" });
                  $$payload5.out += `<!----></button> `;
                  Input($$payload5, {
                    type: "number",
                    min: "0",
                    class: "w-20 text-right",
                    name: "count",
                    get value() {
                      return attemptCount;
                    },
                    set value($$value) {
                      attemptCount = $$value;
                      $$settled = false;
                    }
                  });
                  $$payload5.out += `<!----> <button type="button">`;
                  CirclePlusSolid($$payload5, { size: "xl" });
                  $$payload5.out += `<!----></button></div>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Label($$payload4, {
                class: "space-y-2",
                children: ($$payload5) => {
                  Toggle($$payload5, {
                    get checked() {
                      return topped;
                    },
                    set checked($$value) {
                      topped = $$value;
                      $$settled = false;
                    },
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Topnul jsi to?`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  Checkbox($$payload5, {
                    class: "hidden",
                    name: "topped",
                    get checked() {
                      return topped;
                    },
                    set checked($$value) {
                      topped = $$value;
                      $$settled = false;
                    }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              Input($$payload4, {
                type: "text",
                value: data.myAttempt.id,
                name: "id",
                disabled: true,
                class: "hidden"
              });
              $$payload4.out += `<!----> `;
              Button($$payload4, {
                type: "submit",
                class: "w-full",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Zapsat pokusy`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----></form></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: {
            default: true,
            img: ($$payload4) => {
              {
                $$payload4.out += `<img${attr("src", data.boulder.image)} alt="obrázek boulderu">`;
              }
            },
            h2: ($$payload4) => {
              {
                $$payload4.out += `${escape_html(data.boulder.name)} `;
                Badge($$payload4, {
                  color: "yellow",
                  children: ($$payload5) => {
                    $$payload5.out += `<!---->${escape_html(data.boulder.rating)}`;
                  },
                  $$slots: { default: true }
                });
                $$payload4.out += `<!---->`;
              }
            }
          }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
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
            $$payload4.out += `<div class="flex items-center"><h5 id="drawer-label" class="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">Upravit</h5> `;
            CloseButton($$payload4, { class: "mb-4 dark:text-white" });
            $$payload4.out += `<!----></div> <form action="?/delete" class="mb-6" method="POST">`;
            Button($$payload4, {
              type: "submit",
              color: "red",
              class: "w-full",
              children: ($$payload5) => {
                TrashBinSolid($$payload5, { class: "w-6 h-6" });
                $$payload5.out += `<!---->Smazat boulder`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></form> <form action="?/edit" class="mb-6" method="POST" enctype="multipart/form-data"><div class="mb-6">`;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Název boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              type: "text",
              name: "name",
              required: true,
              value: data.boulder.name
            });
            $$payload4.out += `<!----></div> <div class="mb-6">`;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Popis boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Textarea($$payload4, {
              name: "description",
              rows: 10,
              required: true,
              value: data.boulder.description
            });
            $$payload4.out += `<!----></div> <div class="mb-6">`;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Rating boulderu`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              type: "text",
              name: "rating",
              required: true,
              value: data.boulder.rating
            });
            $$payload4.out += `<!----></div> <div class="flex justify-center pb-4 space-x-4">`;
            Button($$payload4, {
              type: "submit",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Uložit`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></form> <form action="?/image" class="mb-6" method="POST" enctype="multipart/form-data"><div class="mb-6">`;
            Label($$payload4, {
              class: "space-y-2",
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
            $$payload4.out += `<!----></div> <div class="flex justify-center pb-4 space-x-4">`;
            Button($$payload4, {
              type: "submit",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Uložit`;
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
    $$payload2.out += `<!----> `;
    if (data.user?.isAdmin) {
      $$payload2.out += "<!--[-->";
      SpeedDial($$payload2, {
        defaultClass: "absolute end-6 bottom-6 fixed",
        children: ($$payload3) => {
          SpeedDialButton($$payload3, {
            name: "upravit",
            onclick: () => {
              hidden = false;
            },
            children: ($$payload4) => {
              EditSolid($$payload4, { class: "w-6 h-6" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          SpeedDialButton($$payload3, {
            name: "qr kód",
            onclick: () => {
              window.location.href = `https://api.qrserver.com/v1/create-qr-code/?size=640x640&data=${location}`;
            },
            children: ($$payload4) => {
              QrCodeOutline($$payload4, { class: "w-6 h-6" });
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]-->`;
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
//# sourceMappingURL=_page.svelte-CkgeXywh.js.map
