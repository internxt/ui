import{j as e}from"./jsx-runtime-DQ7wxIhe.js";import{A as t}from"./Avatar-DGL7XgHv.js";const n=({fullName:r,email:s,avatar:a})=>e.jsx("div",{className:"flex flex-row gap-2 border max-w-64 bg-surface w-full border-gray-10 shadow-subtle rounded-lg",children:e.jsxs("div",{className:"flex flex-row w-full gap-2 p-4",children:[e.jsx(t,{src:a,fullName:r,diameter:40}),e.jsxs("div",{className:"flex flex-col min-w-0",children:[e.jsx("p",{className:"font-medium text-gray-100 truncate",children:r}),e.jsx("p",{className:"text-sm text-gray-50 truncate",children:s})]})]})});n.__docgenInfo={description:`A cheap user component to render a user's information.

@param {UserCheapProps} props - The props object.
@param {string} props.fullName - The user's full name.
@param {string} props.email - The user's email address.
@param {string} [props.avatar] - The user's avatar URL. If not provided, the avatar will be generated from the user's name.`,methods:[],displayName:"UserCheap",props:{fullName:{required:!0,tsType:{name:"string"},description:""},email:{required:!0,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"string"},description:""}}};export{n as U};
