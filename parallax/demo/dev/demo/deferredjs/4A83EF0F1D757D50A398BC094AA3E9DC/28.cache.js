function $Wb(a,b){a.c=b}
function jwb(a,b,c,d,e){iwb(a,36160,b.a,c.a+d,e,0)}
function VJb(a,b,c,d,e){Bvb(b,36160,c);jwb(b,(Azb(),wzb),d,e,a.C)}
function Cwb(a,b,c,d,e,f,g){Awb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function WJb(){YIb();QJb.call(this,256,256);this.a=0}
function Lfc(){o4b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function wLb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;WCb(b,c,a.d,e,false);e.a=1;WCb(b,c,a.a,e,false);e.a=2;WCb(b,c,a.e,e,false);e.a=3;WCb(b,c,a.b,e,false);e.a=4;WCb(b,c,a.f,e,false);e.r=d;e.a=5;WCb(b,c,a.c,e,false)}
function xLb(){MKb();bLb.call(this);this.d=new RLb(90,1,1,1000);X0b(this.d.gb,0,-1,0);rLb(this.d,new c1b(1,0,0));NKb(this,this.d);this.a=new RLb(90,1,1,1000);X0b(this.a.gb,0,-1,0);rLb(this.a,new c1b(-1,0,0));NKb(this,this.a);this.e=new RLb(90,1,1,1000);X0b(this.e.gb,0,0,1);rLb(this.e,new c1b(0,1,0));NKb(this,this.e);this.b=new RLb(90,1,1,1000);X0b(this.b.gb,0,0,-1);rLb(this.b,new c1b(0,-1,0));NKb(this,this.b);this.f=new RLb(90,1,1,1000);X0b(this.f.gb,0,-1,0);rLb(this.f,new c1b(0,0,1));NKb(this,this.f);this.c=new RLb(90,1,1,1000);X0b(this.c.gb,0,-1,0);rLb(this.c,new c1b(0,0,-1));NKb(this,this.c);this.g=new WJb;bJb(this.g,(Szb(),Qzb));dJb(this.g,(OAb(),MAb));fJb(this.g,(ZAb(),TAb))}
zS(778,779,{173:1,174:1},WJb);_.Qd=function XJb(){return pu(cob(this.b,this.a))};_.Rd=function YJb(a){var b,c;if(this.b)return;kJb(this,a.createTexture());c=B$b(this.j)&&B$b(this.d);this.b=new job;this.c=new job;Evb(a,(xBb(),qBb),this.C);iJb(this,a,0,qBb,c);for(b=0;b<6;b++){_nb(this.b,a.createFramebuffer());_nb(this.c,a.createRenderbuffer());Cwb(a,uBb,b,this.j,this.d,this.o,this.B);VJb(this,a,pu(cob(this.b,b)),uBb,b);PJb(this,a,pu(cob(this.c,b)))}c&&mwb(a,qBb.a);Evb(a,qBb,null);Cvb(a,36161,null);Bvb(a,36160,null)};_.Sd=function ZJb(a){Evb(a,(xBb(),qBb),this.C);mwb(a,qBb.a);Evb(a,qBb,null)};_.a=0;zS(791,790,ZDc,xLb);zS(1099,1,hEc);_.Cb=function Jfc(){l4b(this.b,new Lfc(this.a))};zS(1100,938,{266:1},Lfc);_.qb=function Mfc(){var a,b,c,d;this.a=new RLb(this.d,RCb(this.G.n),1,1000);_0b(this.a.ab,400);d=new rJb('./static/textures/ruins.jpg');b=new bXb;b.j=d;c=new x2b(new iSb(500,60,40),b);r0b(c.fb,-1);NKb(this.H,c);this.c=new xLb;fJb(this.c.g,(ZAb(),UAb));NKb(this.H,this.c);a=new bXb;$Wb(a,this.c.g);this.n=new x2b(new iSb(20,60,40),a);NKb(this.H,this.n);this.b=new x2b(new CRb(20,20,20),a);NKb(this.H,this.b);this.p=new x2b(new vSb(20,5,100,100),a);NKb(this.H,this.p);WCb(this.G.n,this.H,this.a,null,false)};_.rb=function Nfc(a){this.f+=0.15;this.e=zib(-85,Bib(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;r0b(this.n.ab,Math.sin(a*0.001)*30);s0b(this.n.ab,Math.sin(a*0.0011)*30);_0b(this.n.ab,Math.sin(a*0.0012)*30);m0b(this.n.db,0.02);n0b(this.n.db,0.03);r0b(this.b.ab,Math.sin(a*0.001+2)*30);s0b(this.b.ab,Math.sin(a*0.0011+2)*30);_0b(this.b.ab,Math.sin(a*0.0012+2)*30);m0b(this.b.db,0.02);n0b(this.b.db,0.03);r0b(this.p.ab,Math.sin(a*0.001+4)*30);s0b(this.p.ab,Math.sin(a*0.0011+4)*30);_0b(this.p.ab,Math.sin(a*0.0012+4)*30);m0b(this.p.db,0.02);n0b(this.p.db,0.03);r0b(this.a.ab,100*Gib(this.k)*xib(this.o));s0b(this.a.ab,100*xib(this.k));_0b(this.a.ab,100*Gib(this.k)*Gib(this.o));rLb(this.a,this.H.ab);WKb(this.n,false);wLb(this.c,this.G.n,this.H);WKb(this.n,true);WCb(this.G.n,this.H,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var OL=lhb(SIc,'MaterialsCubemapDynamicReflection$DemoScene',1100),tG=lhb(dKc,'CubeCamera',791);uEc(ti)(28);