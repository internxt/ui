import{j as e}from"./jsx-runtime-BTUVAWqj.js";import{A as i}from"./Avatar-DSMSE_Qt.js";const l=({email:r,active:a,selected:s,onClick:n})=>{const t=a||s;return e.jsx("button",{onClick:()=>n(r.id),className:`flex flex-col border-b border-gray-10 text-left gap-2 w-full py-3 px-5 ${t?"bg-primary/10":""}`,children:e.jsxs("div",{className:"flex flex-row w-full gap-2",children:[e.jsx(i,{fullName:r.from.name,src:r.from.avatar,size:"xxs"}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsxs("div",{className:`flex flex-row w-full justify-between ${t?"text-primary":""}`,children:[e.jsxs("div",{className:"flex flex-row gap-1 w-full max-w-[150px] items-center",children:[!r.read&&e.jsx("div",{className:"h-2 w-2 rounded-full bg-primary"}),e.jsx("p",{className:"font-semibold truncate",children:r.from.name})]}),e.jsx("div",{children:e.jsx("p",{className:`text-sm font-medium ${t?"text-primary":"text-gray-50"}`,children:r.createdAt})})]}),e.jsx("p",{className:`text-sm font-semibold ${t?"text-primary":""}`,children:r.subject}),e.jsx("p",{className:`text-sm ${t?"text-primary/80":"text-gray-50"}`,children:r.body})]})]})})};l.__docgenInfo={description:"",methods:[],displayName:"MessageCheap",props:{email:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  id: string;
  from: {
    name: string;
    avatar: string;
  };
  subject: string;
  createdAt: string;
  body: string;
  read: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"from",value:{name:"signature",type:"object",raw:`{
  name: string;
  avatar: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"avatar",value:{name:"string",required:!0}}]},required:!0}},{key:"subject",value:{name:"string",required:!0}},{key:"createdAt",value:{name:"string",required:!0}},{key:"body",value:{name:"string",required:!0}},{key:"read",value:{name:"boolean",required:!0}}]}},description:""},active:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""}}};export{l as M};
