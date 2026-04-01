import{j as o}from"./jsx-runtime-CiAlIWFd.js";import"./iframe-B8JFBOZm.js";import"./preload-helper-PPVm8Dsz.js";const s=({checked:t,id:r,disabled:e=!1,onClick:a})=>{const i=e?"border-gray-10":"border-gray-40",c=e&&t?"border-0 bg-gray-20":t&&"border-0 bg-primary active:bg-primary-dark";return o.jsxs("div",{id:r,className:"flex cursor-pointer",children:[o.jsx("button",{disabled:e,onClick:a,className:`flex h-5 w-5 items-center justify-center rounded-full border ${c} ${i}`,children:o.jsx("div",{className:`h-2.5 w-2.5 rounded-full ${t||e?"bg-white":"hover:bg-gray-10"}`})}),o.jsx("input",{type:"radio",className:"h-0 w-0 appearance-none opacity-0",checked:!0,readOnly:!0})]})};s.__docgenInfo={description:`RadioButton component

A custom radio button component that allows the user to select one option from a group of choices.

@property {boolean} checked
- Determines whether the radio button is selected (checked) or not. If true, the radio button appears active.

@property {string} [id]
- The unique identifier for the radio button element. Useful for associating labels or customizing the radio button.

@property {boolean} [disabled]
- If true, disables the radio button, making it unclickable and visually indicating its inactive state.

@property {(e?: unknown) => void} onClick
- A callback function triggered when the radio button is clicked.
Can be used to handle custom behavior when the button is selected.`,methods:[],displayName:"RadioButton",props:{checked:{required:!0,tsType:{name:"boolean"},description:""},id:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(e?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"e"}],return:{name:"void"}}},description:""}}};const{useArgs:d}=__STORYBOOK_MODULE_PREVIEW_API__,u=(t,r)=>{const[{checked:e},a]=d();return t({...r,args:{...r.allArgs,onClick:()=>a({...r.args,checked:!e})}})},h={title:"Input/Radio Button",component:s,parameters:{layout:"centered"},decorators:[u],tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{checked:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...n.parameters?.docs?.source}}};const g=["RadioButtonChecked"];export{n as RadioButtonChecked,g as __namedExportsOrder,h as default};
