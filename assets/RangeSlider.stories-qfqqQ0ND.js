import{j as o}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const l=({value:r,min:e=0,max:t,step:a,className:p,disabled:c=!1,ariaLabel:m="Range slider",onChange:g})=>{const s=(r-e)/(t-e)*100,f=`linear-gradient(to right, #3264fe ${s}%, #d5d5d5 ${s}%)`;return o.jsx("div",{className:p,children:o.jsx("input",{id:"my-slider",type:"range",min:e,max:t,value:r,step:a,onInput:y=>g(Number(y.target.value)),disabled:c,"aria-label":m,style:{background:f}})})};l.__docgenInfo={description:"",methods:[],displayName:"RangeSlider",props:{value:{required:!0,tsType:{name:"number"},description:""},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!0,tsType:{name:"number"},description:""},step:{required:!1,tsType:{name:"number"},description:""},percentageForProgressSliderBar:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Range slider'",computed:!1}}}};const{useArgs:h}=__STORYBOOK_MODULE_PREVIEW_API__,b=(r,e)=>{const[,t]=h();return r({...e,args:{...e.args,onChange:a=>t({...e.args,value:a})}})},_={title:"Components/RangeSlider",component:l,parameters:{layout:"centered"},tags:["autodocs"],decorators:[b],argTypes:{min:{description:"The minimum value of the slider",control:{type:"number"},defaultValue:0},max:{description:"The maximum value of the slider",control:{type:"number"},defaultValue:100},value:{description:"The current value of the slider",control:{type:"number"}},className:{description:"The current width of the slider",control:{type:"text"}},step:{description:"The steps of the slider",control:{type:"number"}},percentageForProgressSliderBar:{description:"The custom percentage of the slider",control:{type:"number"}},ariaLabel:{description:"Label of the component",control:{type:"text"}},onChange:{description:"Function to handle value change",action:"onInput"}}},n={args:{min:0,max:100,value:50}};var i,d,u;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    min: 0,
    max: 100,
    value: 50
  }
}`,...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const x=["RangeSliderComponent"];export{n as RangeSliderComponent,x as __namedExportsOrder,_ as default};
