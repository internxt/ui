import{j as s}from"./jsx-runtime-CkxqCPlQ.js";const l=({disabled:e=!1,accentColor:t,placeholder:r="",value:a="",onChange:n,name:o})=>s.jsx("textarea",{disabled:e,placeholder:r,className:`
        w-full h-full py-4 px-3.5 bg-transparent border rounded-md outline-none text-lg font-regular resize-none
        placeholder:text-gray-30
        ${e?"border-gray-5 text-gray-40":"border-gray-20 text-gray-100"}
        ${!t&&"border-gray-20 focus:border-primary focus:ring focus:ring-primary/10"}
        ${t==="red"&&"border-red focus:ring focus:ring-red/10"}
        `,value:a,onChange:n,name:o});l.__docgenInfo={description:`TextArea component

@param {TextAreaComponentProps} props - Properties of the TextArea component.

@property {boolean} [disabled=false]
- Optional flag to disable the text area. Defaults to false if not specified.

@property {'red'} [accentColor]
- Optional accent color for the text area.

@property {string} [placeholder='']
- Optional placeholder text that is displayed when the text area is empty.

@property {string} [value='']
- Optional value for the text area. The content inside the text area is controlled by this value.

@property {(e: React.ChangeEvent<HTMLTextAreaElement>) => void} [onChange]
- Optional callback function triggered when the text area value changes. Receives the event object as an argument.

@property {string} [name]
- Optional name attribute for the text area, typically used for form submissions.

@returns {JSX.Element}
- The rendered TextArea component.`,methods:[],displayName:"TextArea",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},accentColor:{required:!1,tsType:{name:"literal",value:"'red'"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"e"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""}}};export{l as T};
