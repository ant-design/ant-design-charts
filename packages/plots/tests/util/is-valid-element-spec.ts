import { isValidElement } from '../../src/util';

const BUILD_ASSESTS = `(e,t)=>{let{title:a,items:n}=t,r=0;return n.forEach((e=>{r+=e.origin.times})),r=Number(r.toFixed(1)),l().createElement("div",null,l().createElement("div",{style:{fontSize:14,fontWeight:"bold",paddingBottom:10}},a,":",l().createElement("span",{style:{float:"right",marginLeft:5}},r)),n.map((e=>{const{name:t,color:a,origin:n}=e;return l().createElement("div",{key:n.bus},l().createElement("div",{style:{margin:0,display:"flex",justifyContent:"space-between"}},l().createElement("div",null,l().createElement("span",{style:{display:"inline-block",width:6,height:6,borderRadius:"50%",backgroundColor:a,marginRight:6}}),l().createElement("span",null,n.bus)),l().createElement("b",{style:{marginLeft:10}},n.times)))})))}`

describe('isValidElement', () => {
  it('ice build product', async () => {
    expect(isValidElement(BUILD_ASSESTS)).toBeTruthy();
  });
});
