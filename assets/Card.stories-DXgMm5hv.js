import{j as e}from"./jsx-runtime-CccaB59u.js";import"./iframe-CAAsQIpV.js";import"./preload-helper-PPVm8Dsz.js";const s=({className:t="",children:d})=>e.jsx("div",{className:`rounded-xl border border-gray-10 bg-surface p-5 shadow-[0_12px_20px_0_rgba(0,0,0,0.02)] dark:bg-gray-1 ${t}`,children:d});s.__docgenInfo={description:`Card component

@property {string} [className]
- Optional additional CSS classes to customize the appearance of the card.
By default, the card has rounded corners, border, padding, and shadow.

@property {ReactNode} children
- The content to be rendered inside the card. This can be any valid React node.`,methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const l={title:"Data Display/Card",component:s,tags:["autodocs"],parameters:{layout:"centered"}},a={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold",children:"Default Card"}),e.jsx("p",{className:"text-gray-700",children:"This is a simple card."})]}),className:""}},r={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-primary",children:"Custom Card"}),e.jsx("p",{className:"text-gray-500",children:"This card has custom styles."})]}),className:"bg-primary/10 border-primary/20"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-xl font-semibold">Default Card</h3>
        <p className="text-gray-700">This is a simple card.</p>
      </div>,
    className: ''
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-xl font-semibold text-primary">Custom Card</h3>
        <p className="text-gray-500">This card has custom styles.</p>
      </div>,
    className: 'bg-primary/10 border-primary/20'
  }
}`,...r.parameters?.docs?.source}}};const n=["Default","CustomStyledCard"];export{r as CustomStyledCard,a as Default,n as __namedExportsOrder,l as default};
