import{j as t}from"./jsx-runtime-o9qq2xiW.js";import{r as f}from"./iframe-C1-GEPpH.js";const w=({disabled:e=!1,id:s,dataTestId:o="switch",size:n="md",onClick:l,onCheckedChange:i})=>{const[a,c]=f.useState(!1),d=g=>{const r=g.target.checked;c(r),i&&i(r)},u=e?"bg-gray-5":a?"bg-green":"bg-gray-10",h={md:"w-8 h-5",lg:"w-12 h-7",xl:"w-14 h-8"},m={md:"w-4 h-4",lg:"w-6 h-6",xl:"w-7 h-7"},p={md:"translate-x-[13px]",lg:"translate-x-[21px]",xl:"translate-x-[25px]"};return t.jsxs("label",{htmlFor:s,className:`relative inline-flex items-center cursor-pointer ${h[n]}`,"data-testid":o,children:[t.jsx("input",{type:"checkbox",id:s,disabled:e,checked:a,onChange:d,onClick:l,className:"sr-only"}),t.jsx("div",{className:`absolute inset-0 rounded-full transition-colors duration-200 ${u} ${e?"data-[state=checked]:bg-green/50":""}`}),t.jsx("span",{className:`block bg-white rounded-full transition-transform duration-200 transform ${a?p[n]:"translate-x-[3px]"} ${m[n]} ${e?"pointer-events-none":""}`})]})};w.__docgenInfo={description:`SwitchComponent

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
- A callback function triggered when the switch is clicked. Allows for custom click behavior.`,methods:[],displayName:"SwitchComponent",props:{size:{required:!1,tsType:{name:"union",raw:"'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},dataTestId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'switch'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: unknown) => void",signature:{arguments:[{type:{name:"unknown"},name:"e"}],return:{name:"void"}}},description:""}}};export{w as S};
