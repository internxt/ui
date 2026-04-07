import{j as t}from"./jsx-runtime-CccaB59u.js";import{r as b}from"./iframe-CAAsQIpV.js";import"./preload-helper-PPVm8Dsz.js";const d=({disabled:e=!1,id:i,dataTestId:u="switch",size:r="md",onClick:m,onCheckedChange:c})=>{const[o,p]=b.useState(!1),g=x=>{const l=x.target.checked;p(l),c&&c(l)},h=e?"bg-gray-5":o?"bg-green":"bg-gray-10",f={md:"w-8 h-5",lg:"w-12 h-7",xl:"w-14 h-8"},w={md:"w-4 h-4",lg:"w-6 h-6",xl:"w-7 h-7"},k={md:"translate-x-[13px]",lg:"translate-x-[21px]",xl:"translate-x-[25px]"};return t.jsxs("label",{htmlFor:i,className:`relative inline-flex items-center cursor-pointer ${f[r]}`,"data-testid":u,children:[t.jsx("input",{type:"checkbox",id:i,disabled:e,checked:o,onChange:g,onClick:m,className:"sr-only"}),t.jsx("div",{className:`absolute inset-0 rounded-full transition-colors duration-200 ${h} ${e?"data-[state=checked]:bg-green/50":""}`}),t.jsx("span",{className:`block bg-white rounded-full transition-transform duration-200 transform ${o?k[r]:"translate-x-[3px]"} ${w[r]} ${e?"pointer-events-none":""}`})]})};d.__docgenInfo={description:`SwitchComponent

A toggle switch component that allows users to toggle between two states: on/off or checked/unchecked.

@property {string} size
- Defines the size of the switch. Options are 'md', 'lg', or 'xl'.

@property {string} [id]
- The unique identifier for the switch element.

@property {string} [dataTestId]
- A custom data attribute for use in testing or identifying the switch in the DOM.

@property {boolean} [disabled]
- If true, disables the switch, making it unclickable and visually indicating its inactive state.

@property {(checked: boolean) => void} [onCheckedChange]
- A callback function triggered whenever the checked state changes. Receives the new checked state as an argument.

@property {(e?: unknown) => void} [onClick]
- A callback function triggered when the switch is clicked. Allows for custom click behavior.`,methods:[],displayName:"SwitchComponent",props:{size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'switch'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"e"}],return:{name:"void"}}},description:""}}};const T={title:"Input/Switch",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},a={args:{disabled:!1,size:"md"}},n={args:{disabled:!1,size:"lg"}},s={args:{disabled:!1,size:"xl"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: 'md'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: false,
    size: 'xl'
  }
}`,...s.parameters?.docs?.source}}};const z=["Medium","Large","ExtraLarge"];export{s as ExtraLarge,n as Large,a as Medium,z as __namedExportsOrder,T as default};
