import{j as o}from"./jsx-runtime-CiAlIWFd.js";import"./iframe-B8JFBOZm.js";import"./preload-helper-PPVm8Dsz.js";const i=({value:n,min:e=0,max:r,step:a,className:l,disabled:p=!1,ariaLabel:d="Range slider",onChange:u})=>{const s=(n-e)/(r-e)*100,c=`linear-gradient(to right, #3264fe ${s}%, #d5d5d5 ${s}%)`;return o.jsx("div",{className:l,children:o.jsx("input",{id:"my-slider",type:"range",min:e,max:r,value:n,step:a,onInput:m=>u(Number(m.target.value)),disabled:p,"aria-label":d,style:{background:c}})})};i.__docgenInfo={description:`RangeSlider component

@param {RangeSliderProps} props - Properties of the RangeSlider component.

@property {number} value
- The current value of the slider.

@property {number} [min=0]
- The minimum value of the slider. Defaults to 0 if not specified.

@property {number} max
- The maximum value of the slider.

@property {number} [step]
- The step interval for the slider. Defines how much the value increments or decrements on each step.

@property {number} [percentageForProgressSliderBar]
- Optional. This value could control the width or progress of the slider,
but it's not used in the component directly.

@property {string} [className]
- Optional class name to apply custom styles to the slider container.

@property {(value: number) => void} onChange
- Callback function triggered when the slider value changes. Receives the new value as an argument.

@property {boolean} [disabled=false]
- Optional flag to disable the slider. Defaults to false if not specified.

@property {string} [ariaLabel="Range slider"]
- Optional ARIA label for accessibility purposes. Defaults to 'Range slider' if not specified.

@returns {JSX.Element}
- The rendered RangeSlider component.

The slider visually represents its value with a linear gradient background.
The background dynamically adjusts as the slider's value changes, reflecting the percentage of progress.
The slider supports custom min, max, and step values, and handles input changes via the \`onChange\` callback.

The component also provides accessibility through the \`aria-label\` attribute.`,methods:[],displayName:"RangeSlider",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},percentageForProgressSliderBar:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Range slider'",computed:!1}}}};const{useArgs:g}=__STORYBOOK_MODULE_PREVIEW_API__,h=(n,e)=>{const[,r]=g();return n({...e,args:{...e.args,onChange:a=>r({...e.args,value:a})}})},v={title:"Input/RangeSlider",component:i,parameters:{layout:"centered"},tags:["autodocs"],decorators:[h],argTypes:{min:{description:"The minimum value of the slider",control:{type:"number"},defaultValue:0},max:{description:"The maximum value of the slider",control:{type:"number"},defaultValue:100},value:{description:"The current value of the slider",control:{type:"number"}},className:{description:"The current width of the slider",control:{type:"text"}},step:{description:"The steps of the slider",control:{type:"number"}},percentageForProgressSliderBar:{description:"The custom percentage of the slider",control:{type:"number"}},ariaLabel:{description:"Label of the component",control:{type:"text"}},onChange:{description:"Function to handle value change",action:"onInput"}}},t={args:{min:0,max:100,value:50}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50
  }
}`,...t.parameters?.docs?.source}}};const T=["RangeSliderComponent"];export{t as RangeSliderComponent,T as __namedExportsOrder,v as default};
