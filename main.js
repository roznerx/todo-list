(()=>{"use strict";let e=document.createElement("div");e.id="container";let t=document.createElement("table");t.id="todo-table";let n=document.createElement("tr");function i(e){let t=document.createElement("th");return t.className="table-header",t.innerHTML=e,n.appendChild(t),t}n.id="todo-table-rows",t.appendChild(n),i("title"),i("description"),i("deadline"),i("priority"),i("status"),i("location");class l{constructor(e,t,n,i,l,d){this.title=e,this.description=t,this.deadline=n,this.priority=i,this.status=l,this.location=d}changeStatus(e){this.status=e}changePriority(e){this.priority=e}}function d(e,t){let n=document.createElement("tr");n.className="visual-item-row";let i=document.createElement("td");i.className="table-data",i.innerHTML=t.title,n.appendChild(i);let l=document.createElement("td");l.className="table-data",l.innerHTML=t.description,n.appendChild(l);let d=document.createElement("td");d.className="table-data",d.innerHTML=t.deadline,n.appendChild(d);let a=document.createElement("td");a.className="table-data",a.innerHTML=t.priority,n.appendChild(a);let o=document.createElement("td");o.className="table-data",o.innerHTML=t.status,n.appendChild(o),o.addEventListener("click",(()=>{(o.innerHTML="Pending")&&(o.innerHTML="Completed",t.changeStatus("Completed"))}));let r=document.createElement("td");r.className="table-data",r.innerHTML=t.location,n.appendChild(r),e.appendChild(n)}let a,o=[];class r{constructor(e){this.name=e,this.content=[]}addItem(e){this.content.push(e)}removeItem(e){for(let t=0;t<this.content.length;t++)if(this.content[t].name===e.name){let e=this.content.indexOf(this.content[t].name);this.content.splice(e,1)}}}function c(e,n){let i=document.createElement("div");i.className="visual-folder";let l=document.createElement("img");l.src="./img/folder-icon.png",l.alt="folder icon",l.className="visual-folder-img",i.appendChild(l);let r=document.createElement("h5");if(r.className="visual-folder-text",r.innerHTML=n.value,r.innerHTML.length>=16){let e=r.innerHTML.substring(0,16);r.innerHTML=e}i.appendChild(r),e.appendChild(i),i.onclick=e=>{for(let e=0;e<o.length;e++)o[e].name.toUpperCase()==r.innerHTML.toUpperCase()&&(a=o[e],document.querySelectorAll(".visual-item-row").forEach((e=>e.remove())),a.content.forEach((e=>{d(t,e)})))}}function p(e,t){let n=document.createElement("div");return n.className=e,n.id=t,n}let s=p("section","folder-section"),m=p("section","task-section");m.appendChild(t);let u=document.createElement("div");u.id="folder-pop-up",u.className="modal";let h=document.createElement("form");h.className="modal-content",u.appendChild(h);let f=document.createElement("h2");f.id="folder-pop-up-label",f.for="name",f.innerHTML="Enter Folder Name",h.appendChild(f);let y=document.createElement("input");y.type="text",y.placeholder="Enter Folder Name",y.name="name",h.appendChild(y);let E=document.createElement("h4");E.id="folder-pop-up-create-button",E.innerHTML="Create",E.onclick=e=>{""==y.value?(f.innerHTML="This Field Cannot Be Empty! Please Name Your Folder!",f.style.fontSize="20px",f.style.textAlign="center",f.style.marginLeft="35px"):(function(){let e=new r(y.value);o.push(e),c(s,y),u.style.display="none",y.value=""}(),f.innerHTML="Enter Folder Name",f.style.fontSize="30px",f.style.textAlign="none",f.style.marginLeft="45px")},h.append(E);let v=document.createElement("div");v.id="item-pop-up",v.className="modal";let C=document.createElement("form");C.id="item-pop-up-form",v.appendChild(C);let g=document.createElement("h2");g.id="item-pop-up-label",g.for="name",g.innerHTML="Create Your New Task",C.appendChild(g);let L=document.createElement("div");function b(e,t){let n=document.createElement("input");return n.className="item-input-field",n.type="text",n.placeholder=t,n.id=e,L.appendChild(n),n}L.id="item-pop-up-input-container",C.appendChild(L);let T=b("title-input-field","Enter Title"),N=b("description-input-field","Enter Description"),k=b("deadline-input-field","Enter Deadline");function H(e){e.style.backgroundColor="#222323",e.style.color="#f0f6f0",e.style.padding="1%, 0, 2%, 2%"}function M(e){e.style.backgroundColor="#f0f6f0",e.style.color="#222323",e.style.padding="0"}let w=document.createElement("div");function x(e,t){let n=document.createElement("div");return n.className="priority-selection",n.id=e,n.innerHTML=t,w.appendChild(n),n}w.className="item-input-field",w.id="priority-input-field",L.appendChild(w);let S=x("low-priority","Low Priority"),P=x("mid-priority","Mid Priority"),F=x("high-priority","High Priority");S.addEventListener("click",(()=>{S.id.includes("black")||(H(S),S.id="low-priority-black",w.value="Low",M(P),P.id="mid-priority",M(F),F.id="high-priority")})),P.addEventListener("click",(()=>{P.id.includes("black")||(H(P),P.id="mid-priority-black",w.value="Medium",M(S),S.id="low-priority",M(F),F.id="high-priority")})),F.addEventListener("click",(()=>{F.id.includes("black")||(H(F),F.id="high-priority-black",w.value="High",M(S),S.id="low-priority",M(P),P.id="mid-priority")}));let A=document.createElement("div");function D(e,t){let n=document.createElement("div");return n.className="status-selection",n.id=e,n.innerHTML=t,A.appendChild(n),n}A.className="item-input-field",A.id="status-input-field",L.appendChild(A);let I=D("status-pending","Pending"),z=D("status-completed","Completed");I.addEventListener("click",(()=>{I.id.includes("black")||(H(I),I.id="status-pending-black",A.value="Pending",M(z),z.id="status-completed")})),z.addEventListener("click",(()=>{z.id.includes("black")||(H(z),z.id="status-pending-black",z.value="Completed",M(I),I.id="status-pending")}));let U=b("location-input-field","Select An Existing Folder"),B=document.createElement("h4");function O(e){let t=document.createElement("button");return t.className="headerButton",t.id=e,t}B.id="item-pop-up-create-button",B.innerHTML="Create",C.append(B),B.addEventListener("click",(()=>{console.log(a);let e=new l(T.value,N.value,k.value,w.value,A.value,U.value);for(let n=0;n<o.length;n++)o[n].name.toUpperCase()==e.location.toUpperCase()?(o[n].addItem(e),d(t,e),v.style.display="none",g.innerHTML="Create Your New Task",g.style.fontSize="30px",g.style.alignItems="center",g.style.marginLeft="135px",g.style.marginRight="45px",g.style.paddingTop="none",T.value="",N.value="",k.value="",w.value="",A.value="",U.value=""):(g.innerHTML="Please Select An Existing Folder!",g.style.fontSize="25px",g.style.marginLeft="50px",g.style.marginTop="30px")}));let Y=O("new-folder-button");Y.innerHTML="New Folder",Y.addEventListener("click",(()=>{document.body.appendChild(u),u.style.display="block"}));let q=O("new-task-button");q.innerHTML="New Task",q.addEventListener("click",(()=>{document.body.appendChild(v),v.style.display="block"}));let R=document.createElement("div");R.className="header";let j=document.createElement("h1");j.className="header-title",j.innerHTML="TODO LIST",R.appendChild(j);let G=document.createElement("div");G.id="bar",R.appendChild(G);let J=document.createElement("div");J.id="headerButtons",J.appendChild(Y),J.appendChild(q),R.appendChild(J);let K=document.createElement("div");K.className="content",K.appendChild(s);let Q=document.createElement("div");Q.id="sections-bar",K.appendChild(Q),K.appendChild(m),document.body.appendChild(e),e.appendChild(R),e.appendChild(K);let V=new r("Default");V.value="Default",o.push(V),c(s,V)})();