import{j as e}from"./jsx-runtime-CiAlIWFd.js";import"./iframe-B8JFBOZm.js";import"./preload-helper-PPVm8Dsz.js";const i=({children:a,className:r,...s})=>e.jsx("div",{className:r,children:e.jsx("table",{className:"w-full",...s,children:a})}),d=({children:a,className:r,...s})=>e.jsx("thead",{className:r,...s,children:a}),c=({children:a,className:r,...s})=>e.jsx("tbody",{className:r,...s,children:a}),o=({children:a,className:r,onClick:s,...n})=>e.jsx("tr",{onClick:s,className:r,...n,children:a}),l=({children:a,className:r,isHeader:s=!1,onClick:n,...p})=>{const m=s?"th":"td";return e.jsx(m,{onClick:n,className:r,...p,children:a})};i.__docgenInfo={description:`Table component

A container for tabular data. Wraps the \`<table>\` element with a div for additional styling or layout purposes.
@param {TableProps} props - The props for the table component.`,methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};d.__docgenInfo={description:`TableHeader component

Represents the header section of the table. Wraps the \`<thead>\` element.
@param {TableHeaderProps} props - The props for the table header component.`,methods:[],displayName:"TableHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:`TableBody component

Represents the body section of the table. Wraps the \`<tbody>\` element.
@param {TableBodyProps} props - The props for the table body component.`,methods:[],displayName:"TableBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:`TableRow component

Represents a single row in the table. Wraps the \`<tr>\` element.
@param {TableRowProps} props - The props for the table row component.`,methods:[],displayName:"TableRow",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};l.__docgenInfo={description:"TableCell component\n\nRepresents a single cell in the table, either header (`<th>`) or data (`<td>`).\n@param {TableCellProps} props - The props for the table cell component.\n@param {boolean} [props.isHeader=false] - Determines if the cell is a header (`<th>`).",methods:[],displayName:"TableCell",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b=[{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed in",color:"text-green-600"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Steven S",memberEmail:"stevens@internxt.com",activity:{action:"Changed",color:"text-orange-500"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed out",color:"text-gray-400"},access:"Web"}],y={title:"Data Display/Table",component:i},t={render:()=>e.jsxs(i,{children:[e.jsx(d,{children:e.jsxs(o,{children:[e.jsx(l,{isHeader:!0,children:"Date"}),e.jsx(l,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Name"})]})}),e.jsx(l,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Activity"})]})}),e.jsx(l,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Access"})]})})]})}),e.jsx(c,{children:b.map((a,r)=>e.jsxs(o,{children:[e.jsx(l,{isHeader:!0,children:a.date}),e.jsxs(l,{className:"pl-10",children:[e.jsx("div",{children:a.memberName}),e.jsx("div",{className:"text-sm text-gray-50",children:a.memberEmail})]}),e.jsx(l,{className:"pl-10",children:e.jsx("span",{className:`${a.activity.color} font-medium`,children:a.activity.action})}),e.jsx(l,{className:"pl-10",children:a.access})]},r))})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableCell isHeader>Date</TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Name</p>
            </div>
          </TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Activity</p>
            </div>
          </TableCell>
          <TableCell isHeader>
            <div className="flex flex-row gap-6">
              <div className="border border-gray-10" />
              <p>Access</p>
            </div>
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mockData.map((item, index) => <TableRow key={index}>
            <TableCell isHeader>{item.date}</TableCell>
            <TableCell className="pl-10">
              <div>{item.memberName}</div>
              <div className="text-sm text-gray-50">{item.memberEmail}</div>
            </TableCell>
            <TableCell className="pl-10">
              <span className={\`\${item.activity.color} font-medium\`}>{item.activity.action}</span>
            </TableCell>
            <TableCell className="pl-10">{item.access}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...t.parameters?.docs?.source}}};const N=["Default"];export{t as Default,N as __namedExportsOrder,y as default};
