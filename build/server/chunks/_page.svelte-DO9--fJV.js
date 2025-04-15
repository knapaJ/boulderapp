import { x as push, Q as escape_html, z as pop } from './index-j4_QQaNE.js';
import { A as Avatar } from './Avatar-nYviqBqd.js';
import { B as Button } from './Button-BPcScjDD.js';
import { C as Checkbox } from './Checkbox-DBswoSsF.js';
import { L as Label, I as Input } from './Input-BqhjcanO.js';
import { H as Helper } from './Helper-C-I5MnVe.js';
import { S as Select } from './Select-Ck4sJ4o1.js';
import { S as Section } from './Section-C68pekQe.js';
import { P as Page404 } from './Page404-C0FfxlBe.js';
import './bundle-mjs-CaBOJI9t.js';
import './CloseButton-HqruGkaA.js';

function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
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
  if (data.user) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col md:flex-row justify-center items-center"><div class="flex flex-col items-center justify-center gap-5">`;
    Avatar($$payload, { size: "xl" });
    $$payload.out += `<!----> <form method="POST" action="/user?/logout">`;
    Button($$payload, {
      type: "submit",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Odhlásit se`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></form></div> <form class="flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8" method="POST" action="/user?/edit"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">`;
    if (!data.user.isAdmin) {
      $$payload.out += "<!--[-->";
      $$payload.out += `Vítej, uživateli ${escape_html(data.user.username)}`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `K službám šéfe! Víš o tom, že jsi admin, že jo?`;
    }
    $$payload.out += `<!--]--></h3> `;
    if (form?.error === "failed-update") {
      $$payload.out += "<!--[-->";
      Label($$payload, {
        color: "red",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Něco se nepovedlo při aktualizování údajů!`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (form?.success) {
      $$payload.out += "<!--[-->";
      Label($$payload, {
        color: "green",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Aktualizováno!`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Přezdívka</span> `;
        Input($$payload2, {
          type: "text",
          name: "username",
          placeholder: "VelkejLezec420",
          required: true,
          value: data.user.username,
          disabled: "true"
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Jméno</span> `;
        Input($$payload2, {
          type: "text",
          name: "firstName",
          placeholder: "Janko",
          required: true,
          value: data.user.firstName
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Příjmení</span> `;
        Input($$payload2, {
          type: "text",
          name: "lastName",
          placeholder: "Dvořák",
          required: true,
          value: data.user.lastName
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Fakulta</span> `;
        Select($$payload2, {
          name: "faculty",
          class: "mt-2",
          items: faculties,
          placeholder: "Vyber fakultu...",
          required: true,
          value: data.user.faculty
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Pohlaví</span> `;
        Select($$payload2, {
          name: "sex",
          class: "mt-2",
          items: sexes,
          required: true,
          placeholder: "Vyber svoje pohlaví",
          value: data.user.sex
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Úroveň</span> `;
        Select($$payload2, {
          name: "level",
          class: "mt-2",
          items: levels,
          required: true,
          placeholder: "Vyber svoji úroveň",
          value: data.user.level
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    if (data.user.isAdmin) {
      $$payload.out += "<!--[-->";
      Checkbox($$payload, {
        name: "hiddenFromLeaderboard",
        checked: data.user.hiddenFromLeaderboard,
        color: "red",
        children: ($$payload2) => {
          $$payload2.out += `<span class="text-primary-600">Skrýt mě z žebříčků a hodnocení!</span>`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    Button($$payload, {
      type: "submit",
      class: "w-full",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Změnit údaje`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></form> <form class="flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8 md:w-fit w-full" method="POST" action="/user?/passwd"><h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Změnit heslo</h3> `;
    if (form?.error === "failed-update") {
      $$payload.out += "<!--[-->";
      Label($$payload, {
        color: "red",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Něco se nepovedlo při aktualizování hesla!`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    if (form?.passwd) {
      $$payload.out += "<!--[-->";
      Label($$payload, {
        color: "green",
        children: ($$payload2) => {
          $$payload2.out += `<!---->Heslo změněno!`;
        },
        $$slots: { default: true }
      });
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Stávající heslo</span> `;
        Input($$payload2, {
          type: "password",
          name: "password",
          placeholder: "•••••",
          required: true
        });
        $$payload2.out += `<!----> `;
        if (form?.error === "wrong-password") {
          $$payload2.out += "<!--[-->";
          Helper($$payload2, {
            class: "mt-2",
            color: "red",
            children: ($$payload3) => {
              $$payload3.out += `<!---->Špatné heslo!`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Nové heslo</span> `;
        Input($$payload2, {
          type: "password",
          name: "new-password",
          placeholder: "•••••",
          required: true
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Label($$payload, {
      class: "space-y-2",
      children: ($$payload2) => {
        $$payload2.out += `<span>Nové heslo znovu</span> `;
        Input($$payload2, {
          type: "password",
          name: "confirm-new-password",
          placeholder: "•••••",
          required: true
        });
        $$payload2.out += `<!----> `;
        if (form?.error === "passwd-nomatch") {
          $$payload2.out += "<!--[-->";
          Helper($$payload2, {
            class: "mt-2",
            color: "red",
            children: ($$payload3) => {
              $$payload3.out += `<!---->Hesla se neshodují!`;
            },
            $$slots: { default: true }
          });
        } else {
          $$payload2.out += "<!--[!-->";
        }
        $$payload2.out += `<!--]-->`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----> `;
    Button($$payload, {
      type: "submit",
      class: "w-full",
      children: ($$payload2) => {
        $$payload2.out += `<!---->Změnit heslo`;
      },
      $$slots: { default: true }
    });
    $$payload.out += `<!----></form></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    Section($$payload, {
      name: "page404",
      children: ($$payload2) => {
        Page404($$payload2, {
          $$slots: {
            h1: ($$payload3) => {
              {
                $$payload3.out += `:(`;
              }
            },
            paragraph: ($$payload3) => {
              {
                $$payload3.out += `<p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Uh oh. Tebe neznám.</p> <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Vypadá to, že ještě nemáš účet, nebo alespoň nejsi přihlášený/á. Nevím, jak ses sem dostal/a. Zkus zapracovat na tom účtu a pak se vrať.</p> `;
                Button($$payload3, {
                  href: "/register",
                  size: "lg",
                  color: "red",
                  children: ($$payload4) => {
                    $$payload4.out += `<!---->Zaregistruj se!`;
                  },
                  $$slots: { default: true }
                });
                $$payload3.out += `<!----> `;
                Button($$payload3, {
                  href: "/login",
                  size: "lg",
                  color: "green",
                  children: ($$payload4) => {
                    $$payload4.out += `<!---->Přihlaš se!`;
                  },
                  $$slots: { default: true }
                });
                $$payload3.out += `<!---->`;
              }
            }
          }
        });
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]-->`;
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DO9--fJV.js.map
