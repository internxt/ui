import{j as t}from"./jsx-runtime-C89ddIqy.js";const c=({value:n,min:e=0,max:r,step:s,className:i,disabled:l=!1,ariaLabel:o="Range slider",onChange:d})=>{const a=(n-e)/(r-e)*100,p=`linear-gradient(to right, #3264fe ${a}%, #d5d5d5 ${a}%)`;return t.jsx("div",{className:i,children:t.jsx("input",{id:"my-slider",type:"range",min:e,max:r,value:n,step:s,onInput:u=>d(Number(u.target.value)),disabled:l,"aria-label":o,style:{background:p}})})};c.__docgenInfo={description:`RangeSlider component

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

The component also provides accessibility through the \`aria-label\` attribute.`,methods:[],displayName:"RangeSlider",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},percentageForProgressSliderBar:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Range slider'",computed:!1}}}};export{c as R};
