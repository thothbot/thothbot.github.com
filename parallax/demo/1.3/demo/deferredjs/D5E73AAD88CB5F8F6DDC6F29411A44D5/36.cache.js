function pqc(){}
function Aqc(){}
function xqc(){}
function Fqc(){}
function Eqc(){}
function Jqc(){}
function Iqc(){}
function cGb(a,b){a.e=b}
function rqc(){s9b.call(this)}
function wqc(){wqc=QNc;vqc=new Aqc}
function Mqc(){Mqc=QNc;yqc=new Fqc}
function Nqc(){Nqc=QNc;zqc=new Jqc}
function DGb(a,b){!a.a&&(a.a=new IRb);a.a.ud(VUc,b)}
function qqc(a){var b,c,d;d=new Bob;for(b=0;b<a.k.Wc();++b){c=kr(a.k.Oc(b),180);c.gC()==eC?qob(d,b,new cpb(br(uM,{89:1,107:1},195,[new ZVb(1,0,0,0),new ZVb(0,1,0,0),new ZVb(0,0,1,0)]))):qob(d,b,new cpb(br(uM,{89:1,107:1},195,[new ZVb(1,0,0,1),new ZVb(1,1,0,1),new ZVb(0,1,0,1),new ZVb(0,0,0,1)])))}return d}
function y8b(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;k=new Bob;i=new Bob;j=new Bob;for(n=0,o=a.i.b;n<o;++n){pob(i,new Bob)}for(n=0,o=a.j.b;n<o;++n){pob(j,new Bob)}for(n=0,o=a.k.Wc();n<o;++n){f=kr(a.k.Oc(n),180);if(f.gC()==fC){b=f.b;c=f.c;d=f.d;e=kr(f,181).a;r=new lRb(0,0,0);s=new lRb(0,0,0);EPb(r.f,f.f);EPb(s.f,f.f);eRb(r,f.g);eRb(s,f.g);r.b=b;r.c=c;r.d=e;s.b=c;s.c=d;s.d=e;if(f.n.Wc()==4){r.n.Vc(0,new OPb(kr(f.n.Oc(0),179).c));r.n.Vc(1,new OPb(kr(f.n.Oc(1),179).c));r.n.Vc(2,new OPb(kr(f.n.Oc(3),179).c));s.n.Vc(0,new OPb(kr(f.n.Oc(1),179).c));s.n.Vc(1,new OPb(kr(f.n.Oc(2),179).c));s.n.Vc(2,new OPb(kr(f.n.Oc(3),179).c))}cr(k.a,k.b++,r);cr(k.a,k.b++,s);for(p=0,q=a.j.b;p<q;++p){if(kr(tob(a.j,p),118).Wc()>0){x=kr(kr(tob(a.j,p),118).Oc(n),118);t=kr(x.Oc(0),190);u=kr(x.Oc(1),190);v=kr(x.Oc(2),190);w=kr(x.Oc(3),190);y=new cpb(br(rM,{89:1,107:1,191:1},190,[new xUb(t.a,t.b),new xUb(u.a,u.b),new xUb(w.a,w.b)]));z=new cpb(br(rM,{89:1,107:1,191:1},190,[new xUb(u.a,u.b),new xUb(v.a,v.b),new xUb(w.a,w.b)]));kr((qdb(p,j.b),j.a[p]),118).Lc(y);kr((qdb(p,j.b),j.a[p]),118).Lc(z)}}for(p=0,q=a.i.b;p<q;++p){if(kr(tob(a.i,p),118).Wc()>0){g=kr(kr(tob(a.i,p),118).Oc(n),190);kr((qdb(p,i.b),i.a[p]),118).Lc(g);kr((qdb(p,i.b),i.a[p]),118).Lc(g)}}}else{cr(k.a,k.b++,f);for(p=0,q=a.i.b;p<q;++p){kr((qdb(p,i.b),i.a[p]),118).Lc(kr(kr(tob(a.i,p),118).Oc(n),190))}for(p=0,q=a.j.b;p<q;++p){kr((qdb(p,j.b),j.a[p]),118).Lc(kr(kr(tob(a.j,p),118).Oc(n),118))}}}a.k=k;a.i=i;a.j=j;nQb(a);oQb(a,(kgb(),kgb(),igb));rQb(a);a.Q.a&&qQb(a)}
var Jcd='#extension GL_OES_standard_derivatives : enable\r\n\r\nvarying vec4 vCenter;\r\n\r\nfloat edgeFactorTri() {\r\n\r\n\tvec3 d = fwidth( vCenter.xyz );\r\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\r\n\treturn min( min( a3.x, a3.y ), a3.z );\r\n\r\n}\r\n\r\nfloat edgeFactorQuad1() {\r\n\r\n\tvec2 d = fwidth( vCenter.xy );\r\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\r\n\r\n\treturn min( a2.x, a2.y );\r\n\r\n}\r\n\r\nfloat edgeFactorQuad2() {\r\n\r\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\r\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\r\n\r\n\treturn min( a2.x, a2.y );\r\n}\r\n\r\nvoid main() {\r\n\r\n\tif ( vCenter.w == 0.0 ) {\r\n\r\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\r\n\r\n\t} else {\r\n\r\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\r\n\r\n\t}\r\n\r\n\tgl_FragColor.a = 1.0;\r\n\r\n}\r\n',Lcd='MaterialsWireframe$DemoScene',Ncd='MaterialsWireframe_Resources_default_StaticClientBundleGenerator',Ocd='MaterialsWireframe_Resources_default_StaticClientBundleGenerator$1',Pcd='MaterialsWireframe_Resources_default_StaticClientBundleGenerator$2',Mcd='Vector4;',Kcd='attribute vec4 center;\r\nvarying vec4 vCenter;\r\n\r\nvoid main() {\r\n\r\n\tvCenter = center;\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n';_=kqc.prototype;_.vb=function oqc(){o9b(this.b,new rqc(this.a))};_=rqc.prototype=pqc.prototype=new r9b;_.gC=function sqc(){return QH};_.mb=function tqc(){var a,b,c,d,e,f,g,i,j,k,n;this.a=new sPb(40,nFb(this.C.n),1,2000);this.a.W.b=800;d=new yZb(150,150,150);e=new yZb(150,150,150);f=new yZb(150,150,150);y8b(f);g=new N3b;g.g=true;this.b=new k7b(d,g);this.b.W.c=0;tOb(this.D,this.b);b=new dGb((wGb(),vGb),qqc(e));cGb(b,(lGb(),jGb));j=new w6b((wqc(),vqc));DGb(z1b(j),b);this.d=new k7b(e,j);this.d.W.c=300;tOb(this.D,this.d);c=new dGb(vGb,qqc(f));cGb(c,jGb);k=new w6b(vqc);DGb(z1b(k),c);this.e=new k7b(f,k);this.e.W.c=-300;tOb(this.D,this.e);n=new o$b(75,32,16);a=new dGb(vGb,qqc(n));cGb(a,jGb);i=new w6b(vqc);DGb(z1b(i),a);this.c=new k7b(n,i);this.c.W.c=0;tOb(this.D,this.c)};_.nb=function uqc(a){this.b.Z.c+=0.005;this.b.Z.d+=0.01;this.d.Z.c+=0.005;this.d.Z.d+=0.01;this.e.Z.c+=0.005;this.e.Z.d+=0.01;if(this.c){this.c.Z.c+=0.005;this.c.Z.d+=0.01}sFb(this.C.n,this.D,this.a,null,false)};_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;var vqc;_=Aqc.prototype=xqc.prototype=new Jb;_.gC=function Bqc(){return TH};_.Td=function Cqc(){return Mqc(),yqc};_.Ud=function Dqc(){return Nqc(),zqc};var yqc=null,zqc=null;_=Fqc.prototype=Eqc.prototype=new Jb;_.gC=function Gqc(){return RH};_.ac=function Hqc(){return Jcd};_=Jqc.prototype=Iqc.prototype=new Jb;_.gC=function Kqc(){return SH};_.ac=function Lqc(){return Kcd};var QH=Zgb(S6c,Lcd,xE),uM=Ygb(P9c,Mcd,EC),TH=Zgb(S6c,Ncd,ny),RH=Zgb(S6c,Ocd,ny),SH=Zgb(S6c,Pcd,ny);fOc(Wd)(36);