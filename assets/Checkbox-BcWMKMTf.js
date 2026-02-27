import{j as t}from"./jsx-runtime-C89ddIqy.js";import{r as n}from"./iframe-CeiX8cuE.js";const d=e=>n.createElement("svg",{fill:"none",height:20,viewBox:"0 0 20 20",width:20,xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("path",{d:"m8.85955 15c.38202 0 .67978-.1461.88202-.4551l5.23593-8.00557c.1461-.22472.2079-.43259.2079-.62922 0-.52809-.3933-.91011-.9326-.91011-.3708 0-.6011.13483-.8258.48876l-4.59554 7.24724-2.33146-2.8933c-.20787-.24719-.43259-.35955-.74719-.35955-.54495 0-.9382.38764-.9382.91575 0 .2359.07303.4438.27528.6741l2.89887 3.5113c.24158.2865.51124.4157.87079.4157z",fill:"currentColor"})),u=e=>n.createElement("svg",{fill:"none",height:20,viewBox:"0 0 20 20",width:20,xmlns:"http://www.w3.org/2000/svg",...e},n.createElement("rect",{fill:"currentColor",height:2,rx:1,width:12,x:4,y:9})),h=({id:e,checked:r=!0,indeterminate:a=!1,onClick:s,required:c,className:i,checkboxDataCy:l,disabled:o=!1})=>t.jsxs("label",{className:`relative h-5 w-5 rounded focus-within:outline-primary ${i}`,onClick:o?void 0:s,onKeyDown:()=>{},children:[t.jsx("div",{onClick:p=>p.preventDefault(),"data-cy":l,onKeyDown:()=>{},className:`relative flex h-5 w-5 cursor-pointer flex-col items-center justify-center rounded border text-white ${o?a||r?"bg-gray-20 cursor-auto":"border-gray-10 cursor-auto":a||r?"border-primary bg-primary":"border-gray-30 hover:border-gray-40"}`,children:a?t.jsx(u,{className:"absolute -inset-px"}):r&&t.jsx(d,{className:"absolute -inset-px"})}),t.jsx("input",{id:e,checked:r,type:"checkbox",required:c??!1,readOnly:!0,className:"base-checkbox h-0 w-0 appearance-none opacity-0",disabled:o})]});h.__docgenInfo={description:`Checkbox component

@property {string} [id]
- Optional ID for the checkbox input element, useful for accessibility and styling.

@property {boolean} [checked]
- Controls whether the checkbox is checked. Defaults to true.
  - If true, the checkbox appears checked.
  - If false, the checkbox appears unchecked.

@property {boolean} [indeterminate]
- If true, the checkbox appears in an indeterminate state (a visual state between checked and unchecked).
  - This state is typically used for a parent checkbox representing a partial selection of child checkboxes.

@property {React.DOMAttributes<HTMLLabelElement>['onClick']} [onClick]
- Function called when the checkbox label is clicked. It is triggered only if the checkbox is not disabled.
  - Accepts an event object from the click event.

@property {boolean} [required]
- If true, marks the checkbox as required in form validation.
  - Defaults to false.

@property {string} [className]
- Custom CSS classes for additional styling of the checkbox container element.

@property {string} [checkboxDataCy]
- Custom data attribute for the checkbox element.

@property {boolean} [disabled]
- Disables the checkbox, preventing user interaction and applying a disabled style.
  - If true, the checkbox cannot be checked or unchecked.
  - Defaults to false.`,methods:[],displayName:"Checkbox",props:{id:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"ReactDOMAttributes['onClick']",raw:"React.DOMAttributes<HTMLLabelElement>['onClick']"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},checkboxDataCy:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};export{h as C};
