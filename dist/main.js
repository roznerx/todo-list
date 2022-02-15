(()=>{"use strict";let e=document.createElement("div");e.id="container";let t=document.createElement("table");t.id="todo-table";let n=document.createElement("tr");function l(e){let t=document.createElement("th");return t.className="table-header",t.innerHTML=e,n.appendChild(t),t}n.id="todo-table-rows",t.appendChild(n),l("title"),l("description"),l("deadline"),l("priority"),l("status"),l("location");class i{constructor(e,t,n,l,i,a){this.title=e,this.description=t,this.deadline=n,this.priority=l,this.status=i,this.location=a}changeStatus(){this.status="Complete"}changePriority(e){this.priority=e}}function a(e,t){let n=document.createElement("tr");n.className="visual-item-row";let l=document.createElement("td");l.className="table-data",l.innerHTML=t.title,n.appendChild(l);let i=document.createElement("td");i.className="table-data",i.innerHTML=t.description,n.appendChild(i);let a=document.createElement("td");a.className="table-data",a.innerHTML=t.deadline,n.appendChild(a);let d=document.createElement("td");d.className="table-data",d.innerHTML=t.priority,n.appendChild(d);let o=document.createElement("td");o.className="table-data",o.innerHTML=t.status,n.appendChild(o);let r=document.createElement("td");r.className="table-data",r.innerHTML=t.location,n.appendChild(r),e.appendChild(n)}let d,o=[];class r{constructor(e){this.name=e,this.content=[]}addItem(e){this.content.push(e)}removeItem(e){for(let t=0;t<this.content.length;t++)if(this.content[t].name===e.name){let e=this.content.indexOf(this.content[t].name);this.content.splice(e,1)}}}function c(e,n){let l=document.createElement("div");l.className="visual-folder";let i=document.createElement("img");i.src="./img/folder-icon.png",i.alt="folder icon",i.className="visual-folder-img",l.appendChild(i);let r=document.createElement("h5");if(r.className="visual-folder-text",r.innerHTML=n.value,r.innerHTML.length>=16){let e=r.innerHTML.substring(0,16);r.innerHTML=e}l.appendChild(r),e.appendChild(l),l.onclick=e=>{for(let e=0;e<o.length;e++)o[e].name.toUpperCase()==r.innerHTML.toUpperCase()&&(d=o[e],document.querySelectorAll(".visual-item-row").forEach((e=>e.remove())),d.content.forEach((e=>{a(t,e)})))}}function p(e,t){let n=document.createElement("div");return n.className=e,n.id=t,n}let s=p("section","folder-section"),m=p("section","task-section");m.appendChild(t);let u=document.createElement("div");u.id="folder-pop-up",u.className="modal";let h=document.createElement("form");h.className="modal-content",u.appendChild(h);let E=document.createElement("h2");E.id="folder-pop-up-label",E.for="name",E.innerHTML="Enter Folder Name",h.appendChild(E);let f=document.createElement("input");f.type="text",f.placeholder="Enter Folder Name",f.name="name",h.appendChild(f);let C=document.createElement("h4");C.id="folder-pop-up-create-button",C.innerHTML="Create",C.onclick=e=>{""==f.value?(E.innerHTML="This Field Cannot Be Empty! Please Name Your Folder!",E.style.fontSize="20px",E.style.textAlign="center",E.style.marginLeft="35px"):(function(){let e=new r(f.value);o.push(e),c(s,f),u.style.display="none",f.value=""}(),E.innerHTML="Enter Folder Name",E.style.fontSize="30px",E.style.textAlign="none",E.style.marginLeft="45px")},h.append(C);let y=document.createElement("div");y.id="item-pop-up",y.className="modal";let v=document.createElement("form");v.id="item-pop-up-form",y.appendChild(v);let L=document.createElement("h2");L.id="item-pop-up-label",L.for="name",L.innerHTML="Create Your New Task",v.appendChild(L);let T=document.createElement("div");function N(e,t){let n=document.createElement("input");return n.className="item-input-field",n.type="text",n.placeholder=t,n.id=e,T.appendChild(n),n}T.id="item-pop-up-input-container",v.appendChild(T);let g=N("title-input-field","Enter Title"),b=N("description-input-field","Enter Description"),H=N("deadline-input-field","Enter Deadline"),M=document.createElement("div");M.className="item-input-field",M.id="priority-input-field",T.appendChild(M);let x=[];function w(e,t){let n=document.createElement("div");n.className="priority-selection",n.id=e,n.innerHTML=t,M.appendChild(n),x.push(n)}w("low-priority","Low Priority"),w("mid-priority","Mid Priority"),w("high-priority","High Priority"),console.log(x[1]);let k=document.createElement("h4");function F(e){let t=document.createElement("button");return t.className="headerButton",t.id=e,t}k.id="item-pop-up-create-button",k.innerHTML="Create",v.append(k),k.addEventListener("click",(()=>{let e=new i(g.value,b.value,H.value,M.value,statusInputField.value,locationInputField.value);for(let t=0;t<o.length;t++)o[t].name.toUpperCase()==e.location.toUpperCase()?(o[t].addItem(e),y.style.display="none",L.innerHTML="Create Your New Task",L.style.fontSize="30px",L.style.alignItems="center",L.style.marginLeft="135px",L.style.marginRight="45px",L.style.paddingTop="none",g.value="",b.value="",H.value="",M.value="",statusInputField.value="",locationInputField.value=""):(L.innerHTML="Please Select An Existing Folder!",L.style.fontSize="25px",L.style.marginLeft="50px",L.style.marginTop="30px")}));let I=F("new-folder-button");I.innerHTML="New Folder",I.addEventListener("click",(()=>{document.body.appendChild(u),u.style.display="block"}));let S=F("new-task-button");S.innerHTML="New Task",S.addEventListener("click",(()=>{document.body.appendChild(y),y.style.display="block"}));let P=document.createElement("div");P.className="header";let D=document.createElement("h1");D.className="header-title",D.innerHTML="TODO LIST",P.appendChild(D);let z=document.createElement("div");z.id="bar",P.appendChild(z);let A=document.createElement("div");A.id="headerButtons",A.appendChild(I),A.appendChild(S),P.appendChild(A);let U=document.createElement("div");U.className="content",U.appendChild(s);let B=document.createElement("div");B.id="sections-bar",U.appendChild(B),U.appendChild(m),document.body.appendChild(e),e.appendChild(P),e.appendChild(U);let O=new r("Default");O.value="Default",o.push(O),c(s,O)})();