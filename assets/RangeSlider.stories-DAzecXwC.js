import{R as c}from"./RangeSlider-DcUOFDup.js";import"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const{useArgs:l}=__STORYBOOK_MODULE_PREVIEW_API__,p=(a,r)=>{const[,s]=l();return a({...r,args:{...r.args,onChange:i=>s({...r.args,value:i})}})},g={title:"Components/RangeSlider",component:c,parameters:{layout:"centered"},tags:["autodocs"],decorators:[p],argTypes:{min:{description:"The minimum value of the slider",control:{type:"number"},defaultValue:0},max:{description:"The maximum value of the slider",control:{type:"number"},defaultValue:100},value:{description:"The current value of the slider",control:{type:"number"}},className:{description:"The current width of the slider",control:{type:"text"}},step:{description:"The steps of the slider",control:{type:"number"}},percentageForProgressSliderBar:{description:"The custom percentage of the slider",control:{type:"number"}},ariaLabel:{description:"Label of the component",control:{type:"text"}},onChange:{description:"Function to handle value change",action:"onInput"}}},e={args:{min:0,max:100,value:50}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const h=["RangeSliderComponent"];export{e as RangeSliderComponent,h as __namedExportsOrder,g as default};
