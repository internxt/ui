import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as d,a as m,b as s,c as a,d as o}from"./Table-Bh8R2jLa.js";import"./index-RYns6xqu.js";const b=[{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed in",color:"text-green-600"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Steven S",memberEmail:"stevens@internxt.com",activity:{action:"Changed",color:"text-orange-500"},access:"Web"},{date:"February 6, 2024",time:"4:41 PM",memberName:"Daniel Dun",memberEmail:"daniel@internxt.com",activity:{action:"Signed out",color:"text-gray-400"},access:"Web"}],v={title:"Components/Table",component:d},r={render:()=>e.jsxs(d,{children:[e.jsx(m,{children:e.jsxs(s,{children:[e.jsx(a,{isHeader:!0,children:"Date"}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Name"})]})}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Activity"})]})}),e.jsx(a,{isHeader:!0,children:e.jsxs("div",{className:"flex flex-row gap-6",children:[e.jsx("div",{className:"border border-gray-10"}),e.jsx("p",{children:"Access"})]})})]})}),e.jsx(o,{children:b.map((l,t)=>e.jsxs(s,{children:[e.jsx(a,{isHeader:!0,children:l.date}),e.jsxs(a,{className:"pl-10",children:[e.jsx("div",{children:l.memberName}),e.jsx("div",{className:"text-sm text-gray-50",children:l.memberEmail})]}),e.jsx(a,{className:"pl-10",children:e.jsx("span",{className:`${l.activity.color} font-medium`,children:l.activity.action})}),e.jsx(a,{className:"pl-10",children:l.access})]},t))})]})};var i,n,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const N=["Default"];export{r as Default,N as __namedExportsOrder,v as default};
