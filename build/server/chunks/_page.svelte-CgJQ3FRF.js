import { x as push, z as pop } from './index-_YnrmJpM.js';
import { S as Section } from './Section-DZ_RlwQm.js';
import { C as Cta } from './Cta-BeObA2KK.js';
import { B as Button } from './Button-DQEXdS4i.js';
import { L as Label, I as Input } from './Input-BgJVzjPE.js';
import { H as Helper } from './Helper-DSixm6LI.js';
import './client-vGHxpKXG.js';
import './bundle-mjs-B-saSl0i.js';
import './CloseButton-Z-VWYKP3.js';
import './exports-Cv9LZeD1.js';
import './index3-DFQqYvd_.js';

function _page($$payload, $$props) {
  push();
  let { data, form } = $$props;
  Section($$payload, {
    name: "ctawithimg",
    children: ($$payload2) => {
      Cta($$payload2, {
        ctatype: "image",
        children: ($$payload3) => {
          $$payload3.out += `<form class="flex flex-col space-y-6" method="POST">`;
          if (form?.error) {
            $$payload3.out += "<!--[-->";
            Helper($$payload3, {
              color: "red",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Něco nezafungovalo! Asi špatné heslo nebo přezdívka!`;
              },
              $$slots: { default: true }
            });
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--> `;
          Label($$payload3, {
            class: "space-y-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Přezdívka `;
              Input($$payload4, {
                type: "text",
                name: "username",
                placeholder: "VelkejLezec420",
                required: true,
                value: form?.username
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Label($$payload3, {
            class: "space-y-2",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Heslo `;
              Input($$payload4, {
                type: "password",
                name: "password",
                placeholder: "•••••",
                required: true
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            type: "submit",
            class: "w-full",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Přihlásit se`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></form>`;
        },
        $$slots: {
          default: true,
          img: ($$payload3) => {
            {
              $$payload3.out += `<img class="w-full" src="/images/Hello_there.jpg" alt="Hello there">`;
            }
          },
          h2: ($$payload3) => {
            {
              $$payload3.out += `Zdravíčko, kdopak jsi ty?`;
            }
          }
        }
      });
    },
    $$slots: { default: true }
  });
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CgJQ3FRF.js.map
