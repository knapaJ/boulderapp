import { x as push, V as copy_payload, W as assign_payload, z as pop, Z as sanitize_slots, E as sanitize_props, G as fallback, Y as attr, S as attr_class, M as clsx, N as slot, J as bind_props, F as rest_props, X as stringify, I as spread_props, Q as escape_html } from './index-j4_QQaNE.js';
import { S as Section } from './Section-C68pekQe.js';
import { t as twMerge } from './bundle-mjs-CaBOJI9t.js';
import { B as Button } from './Button-BPcScjDD.js';
import { C as Checkbox } from './Checkbox-DBswoSsF.js';
import { L as Label, I as Input } from './Input-BqhjcanO.js';
import { H as Helper } from './Helper-C-I5MnVe.js';
import { S as Select } from './Select-Ck4sJ4o1.js';
import { F as Frame } from './Frame-OtTcfSd8.js';
import { C as CloseButton } from './CloseButton-HqruGkaA.js';

function Modal($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "open",
    "title",
    "size",
    "color",
    "placement",
    "autoclose",
    "outsideclose",
    "dismissable",
    "backdropClass",
    "classBackdrop",
    "dialogClass",
    "classDialog",
    "defaultClass",
    "headerClass",
    "classHeader",
    "bodyClass",
    "classBody",
    "footerClass",
    "classFooter"
  ]);
  push();
  let backdropCls, dialogCls, frameCls, headerCls, bodyCls, footerCls;
  let open = fallback($$props["open"], false);
  let title = fallback($$props["title"], "");
  let size = fallback($$props["size"], "md");
  let color = fallback($$props["color"], "default");
  let placement = fallback($$props["placement"], "center");
  let autoclose = fallback($$props["autoclose"], false);
  let outsideclose = fallback($$props["outsideclose"], false);
  let dismissable = fallback($$props["dismissable"], true);
  let backdropClass = fallback($$props["backdropClass"], "fixed inset-0 z-40 bg-gray-900 bg-black/50 dark:bg-black/80");
  let classBackdrop = fallback($$props["classBackdrop"], () => void 0, true);
  let dialogClass = fallback($$props["dialogClass"], "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex");
  let classDialog = fallback($$props["classDialog"], () => void 0, true);
  let defaultClass = fallback($$props["defaultClass"], "relative flex flex-col mx-auto");
  let headerClass = fallback($$props["headerClass"], "flex justify-between items-center p-4 md:p-5 rounded-t-lg");
  let classHeader = fallback($$props["classHeader"], () => void 0, true);
  let bodyClass = fallback($$props["bodyClass"], "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain");
  let classBody = fallback($$props["classBody"], () => void 0, true);
  let footerClass = fallback($$props["footerClass"], "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg");
  let classFooter = fallback($$props["classFooter"], () => void 0, true);
  const getPlacementClasses = (placement2) => {
    switch (placement2) {
      case "top-left":
        return ["justify-start", "items-start"];
      case "top-center":
        return ["justify-center", "items-start"];
      case "top-right":
        return ["justify-end", "items-start"];
      case "center-left":
        return ["justify-start", "items-center"];
      case "center":
        return ["justify-center", "items-center"];
      case "center-right":
        return ["justify-end", "items-center"];
      case "bottom-left":
        return ["justify-start", "items-end"];
      case "bottom-center":
        return ["justify-center", "items-end"];
      case "bottom-right":
        return ["justify-end", "items-end"];
      default:
        return ["justify-center", "items-center"];
    }
  };
  const sizes = {
    xs: "max-w-md",
    sm: "max-w-lg",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-7xl"
  };
  backdropCls = twMerge(backdropClass, classBackdrop);
  dialogCls = twMerge(dialogClass, classDialog, getPlacementClasses(placement));
  frameCls = twMerge(defaultClass, "w-full divide-y", $$sanitized_props.class);
  headerCls = twMerge(headerClass, classHeader);
  bodyCls = twMerge(bodyClass, classBody);
  footerCls = twMerge(footerClass, classFooter);
  if (open) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${attr_class(clsx(backdropCls))}></div>  <div${attr_class(clsx(dialogCls))} tabindex="-1" aria-modal="true" role="dialog"><div${attr_class(`flex relative ${stringify(sizes[size])} w-full max-h-full`)}>`;
    Frame($$payload, spread_props([
      { rounded: true, shadow: true },
      $$restProps,
      {
        class: frameCls,
        color,
        children: ($$payload2) => {
          if ($$slots.header || title) {
            $$payload2.out += "<!--[-->";
            Frame($$payload2, {
              class: headerCls,
              color,
              children: ($$payload3) => {
                $$payload3.out += `<!---->`;
                slot($$payload3, $$props, "header", {}, () => {
                  $$payload3.out += `<h3${attr_class(`text-xl font-semibold ${stringify(color === "default" ? "" : "text-gray-900 dark:text-white")} p-0`)}>${escape_html(title)}</h3>`;
                });
                $$payload3.out += `<!----> `;
                if (dismissable) {
                  $$payload3.out += "<!--[-->";
                  CloseButton($$payload3, { name: "Close modal", color });
                } else {
                  $$payload3.out += "<!--[!-->";
                }
                $$payload3.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> <div${attr_class(clsx(bodyCls))} role="document">`;
          if (dismissable && !$$slots.header && !title) {
            $$payload2.out += "<!--[-->";
            CloseButton($$payload2, {
              name: "Close modal",
              class: "absolute top-3 end-2.5",
              color
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]--> <!---->`;
          slot($$payload2, $$props, "default", {}, null);
          $$payload2.out += `<!----></div> `;
          if ($$slots.footer) {
            $$payload2.out += "<!--[-->";
            Frame($$payload2, {
              class: footerCls,
              color,
              children: ($$payload3) => {
                $$payload3.out += `<!---->`;
                slot($$payload3, $$props, "footer", {}, null);
                $$payload3.out += `<!---->`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        },
        $$slots: { default: true }
      }
    ]));
    $$payload.out += `<!----></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    open,
    title,
    size,
    color,
    placement,
    autoclose,
    outsideclose,
    dismissable,
    backdropClass,
    classBackdrop,
    dialogClass,
    classDialog,
    defaultClass,
    headerClass,
    classHeader,
    bodyClass,
    classBody,
    footerClass,
    classFooter
  });
  pop();
}
function Register($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  push();
  let href = fallback($$props["href"], "");
  let aClass = fallback($$props["aClass"], "flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white");
  let divClass = fallback($$props["divClass"], "w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700");
  if ($$slots.top) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${attr("href", href)}${attr_class(clsx(twMerge(aClass, $$sanitized_props.class)))}><!---->`;
    slot($$payload, $$props, "top", {}, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div${attr_class(clsx(twMerge(divClass, $$sanitized_props.classDiv)))}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { href, aClass, divClass });
  pop();
}
function _page($$payload, $$props) {
  push();
  let showTnC = false;
  let faculties = [
    {
      name: "Fakulta strojního inženýrství",
      value: "FSI"
    },
    {
      name: "Fakulta elektrotechniky a komunikačních technologií",
      value: "FEKT"
    },
    {
      name: "Fakulta informačních technologií",
      value: "FIT"
    },
    { name: "Fakulta podnikatelská", value: "FP" },
    { name: "Fakulta chemická", value: "FCH" },
    { name: "Fakulta stavební", value: "FAST" },
    {
      name: "Fakulta výtvarných umění",
      value: "FAVU"
    },
    {
      name: "Centrum sportovních aktivit",
      value: "CESA"
    },
    { name: "Jiná", value: "other" }
  ];
  let sexes = [
    { name: "Žena", value: "F" },
    { name: "Muž", value: "M" }
  ];
  let levels = [
    { name: "Začátečník", value: "beginner" },
    { name: "Pokročilý", value: "advanced" }
  ];
  let { form } = $$props;
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Section($$payload2, {
      name: "register",
      children: ($$payload3) => {
        Register($$payload3, {
          href: "/",
          children: ($$payload4) => {
            $$payload4.out += `<div class="p-6 space-y-4 md:space-y-6 sm:p-8"><form class="flex flex-col space-y-6" method="POST"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Založit účet</h3> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Přezdívka</span> `;
                Input($$payload5, {
                  type: "text",
                  name: "username",
                  placeholder: "VelkejLezec420",
                  required: true,
                  value: form?.username ?? ""
                });
                $$payload5.out += `<!----> `;
                if (form?.error === "user-exists") {
                  $$payload5.out += "<!--[-->";
                  Helper($$payload5, {
                    class: "mt-2",
                    color: "red",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Toto uživatelské jméno je obsazené!`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload5.out += "<!--[!-->";
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Jméno</span> `;
                Input($$payload5, {
                  type: "text",
                  name: "firstName",
                  placeholder: "Janko",
                  required: true,
                  value: form?.firstName ?? ""
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Příjmení</span> `;
                Input($$payload5, {
                  type: "text",
                  name: "lastName",
                  placeholder: "Dvořák",
                  required: true,
                  value: form?.lastName ?? ""
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Fakulta</span> `;
                Select($$payload5, {
                  name: "faculty",
                  class: "mt-2",
                  items: faculties,
                  placeholder: "Vyber fakultu...",
                  required: true,
                  value: form?.faculty ?? ""
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Pohlaví</span> `;
                Select($$payload5, {
                  name: "sex",
                  class: "mt-2",
                  items: sexes,
                  required: true,
                  placeholder: "Vyber svoje pohlaví"
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Úroveň</span> `;
                Select($$payload5, {
                  name: "level",
                  class: "mt-2",
                  items: levels,
                  required: true,
                  placeholder: "Vyber svoji úroveň"
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Heslo</span> `;
                Input($$payload5, {
                  type: "password",
                  name: "password",
                  placeholder: "•••••",
                  required: true
                });
                $$payload5.out += `<!----> `;
                Helper($$payload5, {
                  class: "mt-2",
                  color: "red",
                  children: ($$payload6) => {
                    $$payload6.out += `<!---->Heslo je viditelné administrátorům!`;
                  },
                  $$slots: { default: true }
                });
                $$payload5.out += `<!---->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Label($$payload4, {
              class: "space-y-2",
              children: ($$payload5) => {
                $$payload5.out += `<span>Heslo znovu</span> `;
                Input($$payload5, {
                  type: "password",
                  name: "confirm-password",
                  placeholder: "•••••",
                  required: true
                });
                $$payload5.out += `<!----> `;
                if (form?.error === "passwd-nomatch") {
                  $$payload5.out += "<!--[-->";
                  Helper($$payload5, {
                    class: "mt-2",
                    color: "red",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Hesla se neshodují!`;
                    },
                    $$slots: { default: true }
                  });
                } else {
                  $$payload5.out += "<!--[!-->";
                }
                $$payload5.out += `<!--]-->`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            if (form?.error === "tnc-not-accepted") {
              $$payload4.out += "<!--[-->";
              Helper($$payload4, {
                class: "",
                color: "red",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Seznam se, prosím, s podmínkami použití!`;
                },
                $$slots: { default: true }
              });
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> <div class="flex items-start">`;
            Checkbox($$payload4, {
              name: "tnc",
              checked: form?.tnc ?? false,
              children: ($$payload5) => {
                $$payload5.out += `<!---->Souhlasím s <button type="button" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Podmínkami použití</button>`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Modal($$payload4, {
              title: "Podmínky použití",
              autoclose: true,
              get open() {
                return showTnC;
              },
              set open($$value) {
                showTnC = $$value;
                $$settled = false;
              },
              children: ($$payload5) => {
                $$payload5.out += `<p class="text-base leading-relaxed text-gray-500">Tato aplikace vznikla jako projekt jednoho nadšeného programátora. Nezabýval jsem se <b>žádným</b> zabezpečením! Nepoužívej tu heslo které používáš jinde.
							Pokud ti vadí nedostatek zabezpečení, tak ji nepoužívej a domluv se individuálně s organizátorem.</p> <p class="text-base leading-relaxed text-gray-500">TLDR: <b>NEZADÁVEJ SEM HESLO K TVÉMU DISCORDU!</b></p>`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div> `;
            Button($$payload4, {
              type: "submit",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Vytvořit účet`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> <div class="text-sm font-medium text-gray-500 dark:text-gray-300">Už máš tady účet? <a href="/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Přihlas se</a></div></form></div>`;
          },
          $$slots: {
            default: true,
            top: ($$payload4) => {
              {
                $$payload4.out += `<img class="w-8 h-8 mr-2" src="/images/climbing-svgrepo-com.svg" alt="logo"> Boulder`;
              }
            }
          }
        });
      },
      $$slots: { default: true }
    });
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
//# sourceMappingURL=_page.svelte-CNZHA1Ud.js.map
