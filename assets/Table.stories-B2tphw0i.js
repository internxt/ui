import{j as e}from"./jsx-runtime-C89ddIqy.js";import{T as i,a as c,b as s,c as a,d}from"./Table-BmZ1tDmk.js";import"./iframe-CeiX8cuE.js";import"./preload-helper-PPVm8Dsz.js";const t=[{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed in",color:"text-green-600"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Steven S",memberEmail:"stevens@internxt.com",activity:{action:"Changed",color:"text-orange-500"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed out",color:"text-gray-400"},access:"Web"}],p={title:"Components/Table",component:i},r={render:()=>e.jsxs(i,{children:[e.jsx(c,{children:e.jsxs(s,{children:[e.jsx(a,{isHeader:!0,children:"Date"}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Name"})]})}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Activity"})]})}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Access"})]})})]})}),e.jsx(d,{children:t.map((l,n)=>e.jsxs(s,{children:[e.jsx(a,{isHeader:!0,children:l.date}),e.jsxs(a,{className:"pl-10",children:[e.jsx("div",{children:l.memberName}),e.jsx("div",{className:"text-sm text-gray-50",children:l.memberEmail})]}),e.jsx(a,{className:"pl-10",children:e.jsx("span",{className:`${l.activity.color} font-medium`,children:l.activity.action})}),e.jsx(a,{className:"pl-10",children:l.access})]},n))})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,p as default};
