import{j as o}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";function re({fullName:a,diameter:e,className:r=""}){const s=ie(a);return o.jsx("div",{style:{width:e,height:e,fontSize:e/2.1},className:`${r} flex shrink-0 select-none items-center justify-center rounded-full bg-primary/20 font-medium text-primary dark:bg-primary/75 dark:text-white`,children:o.jsx("p",{children:s})})}function ie(a){const e=a.trim().split(" ");if(e.length===1)return`${e[0].charAt(0)}`;{const r=e[0].charAt(0),s=e[1].charAt(0);return r+s}}re.__docgenInfo={description:"",methods:[],displayName:"DefaultAvatar",props:{className:{defaultValue:{value:"''",computed:!1},required:!1}}};function se({src:a,diameter:e,className:r="",style:s={}}){return o.jsx("img",{style:{width:e,height:e,...s},className:`${r} shrink-0 select-none rounded-full object-cover`,src:a,draggable:!1})}se.__docgenInfo={description:"",methods:[],displayName:"PictureAvatar",props:{className:{defaultValue:{value:"''",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const le={xxs:28,xs:36,sm:40,base:48,lg:80,xl:128},te=({src:a,diameter:e=80,size:r,className:s="",fullName:ne,style:oe={}})=>{const S=r?le[r]:e;return a?o.jsx(se,{src:a,diameter:S,className:s,style:oe}):o.jsx(re,{diameter:S,className:s,fullName:ne})};te.__docgenInfo={description:"Renders an avatar component which can be either a picture or a default avatar with initials.\r\n\r\n@param {Object} props - The properties for the Avatar component.\r\n@param {string} props.fullName - The full name of the user, used to generate initials if no image is provided.\r\n@param {number} [props.diameter=80] - The diameter of the avatar in pixels. Ignored if `size` is provided.\r\n@param {SIZE_KEYS} [props.size] - Predefined size for the avatar. If provided, overrides the `diameter`.\r\n                                  The associated value in `SIZES` will be used as the diameter. Possible values are:\r\n                                   - `'xxs'`: 28px\r\n                                   - `'xs'`: 36px\r\n                                   - `'sm'`: 40px\r\n                                   - `'base'`: 48px\r\n                                   - `'lg'`: 80px\r\n                                   - `'xl'`: 128px\r\n@param {string|null} [props.src] - The URL of the image to display as the avatar. If not provided, initials are shown\r\n@param {string} [props.className=''] - Additional CSS classes to apply to the avatar component.\r\n@param {Object} [props.style={}] - Additional inline styles to apply to the avatar component.\r\n@returns {JSX.Element} The rendered avatar component.",methods:[],displayName:"Avatar",props:{fullName:{required:!0,tsType:{name:"string"},description:""},diameter:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xxs'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:""},src:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},style:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Record<string, string | number>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const me={title:"Components/Avatar",component:te,parameters:{layout:"centered"},tags:["autodocs"]},t="My Internxt",n="https://internxt.com/favicon.ico",i={args:{fullName:t,size:"xxs"}},l={args:{src:n,size:"xxs"}},c={args:{fullName:t,size:"xs"}},u={args:{src:n,size:"xs"}},m={args:{fullName:t,size:"sm"}},p={args:{src:n,size:"sm"}},d={args:{fullName:t,size:"base"}},f={args:{src:n,size:"base"}},g={args:{fullName:t,size:"lg"}},v={args:{src:n,size:"lg"}},x={args:{fullName:t,size:"xl"}},A={args:{src:n,size:"xl"}};var h,N,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'xxs'
  }
}`,...(z=(N=i.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var y,L,_;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'xxs'
  }
}`,...(_=(L=l.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var b,E,M;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'xs'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var I,X,P;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'xs'
  }
}`,...(P=(X=u.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var D,T,R;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'sm'
  }
}`,...(R=(T=m.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var j,w,G;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'sm'
  }
}`,...(G=(w=p.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var q,C,U;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'base'
  }
}`,...(U=(C=d.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var F,V,k;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'base'
  }
}`,...(k=(V=f.parameters)==null?void 0:V.docs)==null?void 0:k.source}}};var B,O,Z;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'lg'
  }
}`,...(Z=(O=g.parameters)==null?void 0:O.docs)==null?void 0:Z.source}}};var $,J,K;v.parameters={...v.parameters,docs:{...($=v.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'lg'
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Y,H,Q;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    fullName: FULL_NAME,
    size: 'xl'
  }
}`,...(Q=(H=x.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};var W,ee,ae;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    src: IMAGE_SRC,
    size: 'xl'
  }
}`,...(ae=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const pe=["DefaultAvatarXXS","PictureAvatarXXS","DefaultAvatarXS","PictureAvatarXS","DefaultAvatarSM","PictureAvatarSM","DefaultAvatarBase","PictureAvatarBase","DefaultAvatarLG","PictureAvatarLG","DefaultAvatarXL","PictureAvatarXL"];export{d as DefaultAvatarBase,g as DefaultAvatarLG,m as DefaultAvatarSM,x as DefaultAvatarXL,c as DefaultAvatarXS,i as DefaultAvatarXXS,f as PictureAvatarBase,v as PictureAvatarLG,p as PictureAvatarSM,A as PictureAvatarXL,u as PictureAvatarXS,l as PictureAvatarXXS,pe as __namedExportsOrder,me as default};
