import{R as a}from"./RangeSlider-BDNltDB-.js";import"./jsx-runtime-o9qq2xiW.js";import"./iframe-C1-GEPpH.js";import"./preload-helper-PPVm8Dsz.js";const{useArgs:s}=__STORYBOOK_MODULE_PREVIEW_API__,i=(t,r)=>{const[,o]=s();return t({...r,args:{...r.args,onChange:n=>o({...r.args,value:n})}})},d={title:"Components/RangeSlider",component:a,parameters:{layout:"centered"},tags:["autodocs"],decorators:[i],argTypes:{min:{description:"The minimum value of the slider",control:{type:"number"},defaultValue:0},max:{description:"The maximum value of the slider",control:{type:"number"},defaultValue:100},value:{description:"The current value of the slider",control:{type:"number"}},className:{description:"The current width of the slider",control:{type:"text"}},step:{description:"The steps of the slider",control:{type:"number"}},percentageForProgressSliderBar:{description:"The custom percentage of the slider",control:{type:"number"}},ariaLabel:{description:"Label of the component",control:{type:"text"}},onChange:{description:"Function to handle value change",action:"onInput"}}},e={args:{min:0,max:100,value:50}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50
  }
}`,...e.parameters?.docs?.source}}};const u=["RangeSliderComponent"];export{e as RangeSliderComponent,u as __namedExportsOrder,d as default};
