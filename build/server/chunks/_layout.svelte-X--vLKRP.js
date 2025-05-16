import { x as push, z as pop, E as sanitize_props, F as rest_props, G as fallback, y as setContext, I as spread_props, J as bind_props, K as spread_attributes, M as clsx, N as slot, O as store_get, P as unsubscribe_stores, Q as escape_html, R as getContext, S as attr_class, T as element } from './index-_YnrmJpM.js';
import { p as page } from './index4-Dx335VZG.js';
import { A as Avatar } from './Avatar-CFCRNGSh.js';
import { B as Badge } from './Badge-GRh0TNQ3.js';
import { B as Button } from './Button-DQEXdS4i.js';
import { F as Frame } from './Frame-C9atG8Jn.js';
import { t as twMerge } from './bundle-mjs-B-saSl0i.js';
import { w as writable } from './index3-DFQqYvd_.js';
import { T as ToolbarButton } from './CloseButton-Z-VWYKP3.js';
import { h as html } from './html-FW6Ia4bL.js';
import { s as sineIn } from './index5-_pYpgmRp.js';
import './client-vGHxpKXG.js';
import './exports-Cv9LZeD1.js';

function NavContainer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid"]);
  push();
  let fluid = fallback($$props["fluid"], false);
  $$payload.out += `<div${spread_attributes(
    {
      ...$$restProps,
      class: clsx(twMerge("mx-auto flex flex-wrap justify-between items-center ", fluid ? "w-full" : "container", $$sanitized_props.class))
    },
    null
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { fluid });
  pop();
}
function Navbar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["fluid", "navContainerClass"]);
  push();
  var $$store_subs;
  let fluid = fallback($$props["fluid"], false);
  let navContainerClass = fallback($$props["navContainerClass"], "");
  let hidden = writable(true);
  setContext("navHidden", hidden);
  let toggle = () => hidden.update((hidden2) => !hidden2);
  {
    $$restProps.color = $$restProps.color ?? "navbar";
  }
  Frame($$payload, spread_props([
    { tag: "nav" },
    $$restProps,
    {
      class: twMerge("px-2 sm:px-4 py-2.5 w-full", $$sanitized_props.class),
      children: ($$payload2) => {
        NavContainer($$payload2, {
          fluid,
          class: navContainerClass,
          children: ($$payload3) => {
            $$payload3.out += `<!---->`;
            slot(
              $$payload3,
              $$props,
              "default",
              {
                hidden: store_get($$store_subs ??= {}, "$hidden", hidden),
                toggle,
                NavContainer
              },
              null
            );
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    }
  ]));
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { fluid, navContainerClass });
  pop();
}
function NavBrand($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href"]);
  push();
  let href = fallback($$props["href"], "");
  $$payload.out += `<a${spread_attributes(
    {
      href,
      ...$$restProps,
      class: clsx(twMerge("flex items-center", $$sanitized_props.class))
    },
    null
  )}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></a>`;
  bind_props($$props, { href });
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["size", "color", "variation", "ariaLabel"]);
  push();
  let size = fallback($$props["size"], "24");
  let color = fallback($$props["color"], "currentColor");
  let variation = fallback($$props["variation"], "outline");
  let ariaLabel = fallback($$props["ariaLabel"], "bars 3");
  let viewBox;
  let svgpath;
  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;
  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;
  switch (variation) {
    case "outline":
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
      break;
    case "solid":
      svgpath = svgsolid;
      viewBox = "0 0 24 24";
      break;
    default:
      svgpath = svgoutline;
      viewBox = "0 0 24 24";
  }
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      role: "button",
      tabindex: "0",
      width: size,
      height: size,
      class: clsx($$sanitized_props.class),
      ...$$restProps,
      "aria-label": ariaLabel,
      fill: "none",
      viewBox,
      "stroke-width": "2"
    },
    null,
    void 0,
    void 0,
    3
  )}>${html(svgpath)}</svg>`;
  bind_props($$props, { size, color, variation, ariaLabel });
  pop();
}
function NavHamburger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "menuClass",
    "onClick",
    "classMenu",
    "title"
  ]);
  push();
  let menuClass = fallback($$props["menuClass"], "h-6 w-6 shrink-0");
  let onClick = fallback($$props["onClick"], () => void 0, true);
  let classMenu = fallback($$props["classMenu"], "");
  let title = fallback($$props["title"], "Open main menu");
  let btnClass = "ms-3 md:hidden";
  getContext("navHidden") ?? writable(true);
  ToolbarButton($$payload, spread_props([
    { name: title },
    $$restProps,
    {
      class: twMerge(btnClass, $$sanitized_props.class),
      children: ($$payload2) => {
        Menu($$payload2, { class: twMerge(menuClass, classMenu) });
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { menuClass, onClick, classMenu, title });
  pop();
}
function NavLi($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["href", "activeClass", "nonActiveClass"]);
  push();
  let active, liClass;
  let href = fallback($$props["href"], "");
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let nonActiveClass = fallback($$props["nonActiveClass"], () => void 0, true);
  const context = getContext("navbarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let navUrl = "";
  activeUrlStore.subscribe((value) => {
    navUrl = value;
  });
  active = navUrl ? href === navUrl : false;
  liClass = twMerge("block py-2 pe-4 ps-3 md:p-0 rounded-sm md:border-0", active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$sanitized_props.class);
  $$payload.out += `<li>`;
  element(
    $$payload,
    href ? "a" : "div",
    () => {
      $$payload.out += `${spread_attributes(
        {
          role: href ? "link" : "presentation",
          href,
          ...$$restProps,
          class: clsx(liClass)
        },
        null
      )}`;
    },
    () => {
      $$payload.out += `<!---->`;
      slot($$payload, $$props, "default", {}, null);
      $$payload.out += `<!---->`;
    }
  );
  $$payload.out += `</li>`;
  bind_props($$props, { href, activeClass, nonActiveClass });
  pop();
}
function NavUl($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "divClass",
    "ulClass",
    "hidden",
    "slideParams",
    "activeClass",
    "nonActiveClass",
    "classUl"
  ]);
  push();
  var $$store_subs;
  let activeUrl = fallback($$props["activeUrl"], "");
  let divClass = fallback($$props["divClass"], "w-full md:block md:w-auto");
  let ulClass = fallback($$props["ulClass"], "flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium");
  let hidden = fallback($$props["hidden"], () => void 0, true);
  let slideParams = fallback($$props["slideParams"], () => ({ delay: 250, duration: 500, easing: sineIn }), true);
  let activeClass = fallback($$props["activeClass"], "text-white bg-primary-700 md:bg-transparent md:text-primary-700 md:dark:text-white dark:bg-primary-600 md:dark:bg-transparent");
  let nonActiveClass = fallback($$props["nonActiveClass"], "text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent");
  let classUl = fallback($$props["classUl"], "");
  const activeUrlStore = writable("");
  setContext("navbarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  let hiddenStore = getContext("navHidden");
  let _hidden;
  let _divClass;
  let _ulClass;
  {
    activeUrlStore.set(activeUrl);
  }
  _hidden = hidden ?? store_get($$store_subs ??= {}, "$hiddenStore", hiddenStore) ?? true;
  _divClass = twMerge(divClass, $$sanitized_props.class);
  _ulClass = twMerge(ulClass, classUl);
  if (!_hidden) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div${spread_attributes(
      {
        ...$$restProps,
        class: clsx(_divClass),
        role: "button",
        tabindex: "0"
      },
      null
    )}>`;
    Frame($$payload, {
      tag: "ul",
      border: true,
      rounded: true,
      color: "navbarUl",
      class: _ulClass,
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<div${spread_attributes({ ...$$restProps, class: clsx(_divClass) }, null, { hidden: _hidden })}><ul${attr_class(clsx(_ulClass))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></ul></div>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    activeUrl,
    divClass,
    ulClass,
    hidden,
    slideParams,
    activeClass,
    nonActiveClass,
    classUl
  });
  pop();
}
function _layout($$payload, $$props) {
  push();
  let activeUrl = page.url.pathname;
  let { children, data } = $$props;
  Navbar($$payload, {
    class: "px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0 border-b",
    children: ($$payload2) => {
      NavBrand($$payload2, {
        href: "/",
        children: ($$payload3) => {
          $$payload3.out += `<img src="/images/climbing-svgrepo-com.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo"> <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Boulder</span>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> <div class="flex md:order-2">`;
      if (!data.user) {
        $$payload2.out += "<!--[-->";
        Button($$payload2, {
          size: "sm",
          href: "/register",
          children: ($$payload3) => {
            $$payload3.out += `<!---->Jdeme na to!`;
          },
          $$slots: { default: true }
        });
      } else {
        $$payload2.out += "<!--[!-->";
        Button($$payload2, {
          size: "sm",
          color: "alternative",
          href: "/user",
          children: ($$payload3) => {
            $$payload3.out += `<div class="flex flex-row items-center justify-center gap-2">`;
            Avatar($$payload3, { src: data.user.avatar, size: "xs" });
            $$payload3.out += `<!----> ${escape_html(data.user.username)} `;
            if (data.user.isAdmin) {
              $$payload3.out += "<!--[-->";
              Badge($$payload3, {
                rounded: true,
                children: ($$payload4) => {
                  $$payload4.out += `<!---->Admin`;
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
      $$payload2.out += `<!--]--> `;
      NavHamburger($$payload2, {});
      $$payload2.out += `<!----></div> `;
      NavUl($$payload2, {
        activeUrl,
        children: ($$payload3) => {
          NavLi($$payload3, {
            href: "/",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Domů`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/rules",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Pravidla soutěže`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/boulders",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Bouldery`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/leaderboard",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Žebříčky`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          NavLi($$payload3, {
            href: "/about",
            children: ($$payload4) => {
              $$payload4.out += `<!---->O aplikaci`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          if (data.user?.isAdmin) {
            $$payload3.out += "<!--[-->";
            NavLi($$payload3, {
              href: "/admin",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Administrace`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]-->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> <div class="w-full pt-20">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-X--vLKRP.js.map
