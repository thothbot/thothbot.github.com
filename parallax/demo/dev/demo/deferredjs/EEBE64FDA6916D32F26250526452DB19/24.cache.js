function b_b(a,b){a.d=b}
function Hyb(a,b,c,d,e){Gyb(a,36160,b.a,c.a+d,e,0)}
function nOb(a,b,c,d,e){Xxb(b,36160,c);Hyb(b,(eCb(),aCb),d,e,a.D)}
function $yb(a,b,c,d,e,f,g){Yyb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function oOb(){pNb();hOb.call(this,256,256);this.a=0}
function Qkc(){t9b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function MPb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;MGb(b,c,a.d,e,false);e.a=1;MGb(b,c,a.a,e,false);e.a=2;MGb(b,c,a.e,e,false);e.a=3;MGb(b,c,a.b,e,false);e.a=4;MGb(b,c,a.f,e,false);e.r=d;e.a=5;MGb(b,c,a.c,e,false)}
function NPb(){gPb();yPb.call(this);this.d=new hQb(90,1,1,1000);L5b(this.d.fb,0,-1,0);FPb(this.d,new R5b(1,0,0));hPb(this,this.d);this.a=new hQb(90,1,1,1000);L5b(this.a.fb,0,-1,0);FPb(this.a,new R5b(-1,0,0));hPb(this,this.a);this.e=new hQb(90,1,1,1000);L5b(this.e.fb,0,0,1);FPb(this.e,new R5b(0,1,0));hPb(this,this.e);this.b=new hQb(90,1,1,1000);L5b(this.b.fb,0,0,-1);FPb(this.b,new R5b(0,-1,0));hPb(this,this.b);this.f=new hQb(90,1,1,1000);L5b(this.f.fb,0,-1,0);FPb(this.f,new R5b(0,0,1));hPb(this,this.f);this.c=new hQb(90,1,1,1000);L5b(this.c.fb,0,-1,0);FPb(this.c,new R5b(0,0,-1));hPb(this,this.c);this.g=new oOb;uNb(this.g,(wCb(),uCb));xNb(this.g,(aEb(),$Db));zNb(this.g,(lEb(),fEb))}
aU(802,803,{230:1,231:1},oOb);_.Pd=function pOb(a){var b;if(!this.D)return;tyb(a,this.D);this.D=null;for(b=0;b<6;b++){pyb(a,uu(rqb(this.b,b)));ryb(a,uu(rqb(this.c,b)))}this.b=null;this.c=null};_.Qd=function qOb(){return uu(rqb(this.b,this.a))};_.Rd=function rOb(a){var b,c;if(this.b)return;FNb(this,a.createTexture());c=t3b(this.j)&&t3b(this.d);this.b=new yqb;this.c=new yqb;$xb(a,(LEb(),EEb),this.D);DNb(this,a,0,EEb,c);for(b=0;b<6;b++){oqb(this.b,a.createFramebuffer());oqb(this.c,a.createRenderbuffer());$yb(a,IEb,b,this.j,this.d,this.o,this.C);nOb(this,a,uu(rqb(this.b,b)),IEb,b);gOb(this,a,uu(rqb(this.c,b)))}c&&Kyb(a,EEb.a);$xb(a,EEb,null);Yxb(a,36161,null);Xxb(a,36160,null)};_.Sd=function sOb(a){$xb(a,(LEb(),EEb),this.D);Kyb(a,EEb.a);$xb(a,EEb,null)};_.a=0;aU(815,814,VNc,NPb);aU(1134,1,eOc);_.zb=function Okc(){V8b(this.b,new Qkc(this.a))};aU(1135,973,{325:1},Qkc);_.nb=function Rkc(){var a,b,c,d;this.a=new hQb(this.d,AGb(this.G.k),1,1000);d=new MNb('./static/textures/ruins.jpg');b=new f_b;b.k=d;c=new n7b(new AWb(500,60,40),b);$4b(c.eb,-1);hPb(this.H,c);this.c=new NPb;zNb(this.c.g,(lEb(),gEb));hPb(this.H,this.c);a=new f_b;b_b(a,this.c.g);this.n=new n7b(new AWb(20,30,15),a);hPb(this.H,this.n);this.b=new n7b(new LVb(20,20,20),a);hPb(this.H,this.b);this.p=new n7b(new MWb(20,5,100,25),a);hPb(this.H,this.p);MGb(this.G.k,this.H,this.a,null,false)};_.ob=function Skc(a){this.f+=0.15;this.e=Nkb(-85,Pkb(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;$4b(this.n._,Math.sin(a*0.001)*30);_4b(this.n._,Math.sin(a*0.0011)*30);N5b(this.n._,Math.sin(a*0.0012)*30);_2b(this.n.cb,0.02);a3b(this.n.cb,0.03);$4b(this.b._,Math.sin(a*0.001+2)*30);_4b(this.b._,Math.sin(a*0.0011+2)*30);N5b(this.b._,Math.sin(a*0.0012+2)*30);_2b(this.b.cb,0.02);a3b(this.b.cb,0.03);$4b(this.p._,Math.sin(a*0.001+4)*30);_4b(this.p._,Math.sin(a*0.0011+4)*30);N5b(this.p._,Math.sin(a*0.0012+4)*30);_2b(this.p.cb,0.02);a3b(this.p.cb,0.03);$4b(this.a._,100*Ukb(this.k)*Lkb(this.o));_4b(this.a._,100*Lkb(this.k));N5b(this.a._,100*Ukb(this.k)*Ukb(this.o));FPb(this.a,this.H._);rPb(this.n,false);MPb(this.c,this.G.k,this.H);rPb(this.n,true);MGb(this.G.k,this.H,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var xM=zjb(YSc,'MaterialsCubemapDynamicReflection$DemoScene',1135),RG=zjb(iUc,'CubeCamera',815);sOc(xi)(24);