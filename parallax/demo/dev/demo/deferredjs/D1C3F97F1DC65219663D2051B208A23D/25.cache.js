function xZb(a,b){a.d=b}
function yxb(a,b,c,d,e){xxb(a,36160,b.a,c.a+d,e,0)}
function LMb(a,b,c,d,e){Owb(b,36160,c);yxb(b,(XAb(),TAb),d,e,a.D)}
function Rxb(a,b,c,d,e,f,g){Pxb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function MMb(){NLb();FMb.call(this,256,256);this.a=0}
function ijc(){N7b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function iOb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;DFb(b,c,a.d,e,false);e.a=1;DFb(b,c,a.a,e,false);e.a=2;DFb(b,c,a.e,e,false);e.a=3;DFb(b,c,a.b,e,false);e.a=4;DFb(b,c,a.f,e,false);e.r=d;e.a=5;DFb(b,c,a.c,e,false)}
function jOb(){ENb();WNb.call(this);this.d=new FOb(90,1,1,1000);d4b(this.d.fb,0,-1,0);bOb(this.d,new j4b(1,0,0));FNb(this,this.d);this.a=new FOb(90,1,1,1000);d4b(this.a.fb,0,-1,0);bOb(this.a,new j4b(-1,0,0));FNb(this,this.a);this.e=new FOb(90,1,1,1000);d4b(this.e.fb,0,0,1);bOb(this.e,new j4b(0,1,0));FNb(this,this.e);this.b=new FOb(90,1,1,1000);d4b(this.b.fb,0,0,-1);bOb(this.b,new j4b(0,-1,0));FNb(this,this.b);this.f=new FOb(90,1,1,1000);d4b(this.f.fb,0,-1,0);bOb(this.f,new j4b(0,0,1));FNb(this,this.f);this.c=new FOb(90,1,1,1000);d4b(this.c.fb,0,-1,0);bOb(this.c,new j4b(0,0,-1));FNb(this,this.c);this.g=new MMb;SLb(this.g,(nBb(),lBb));VLb(this.g,(TCb(),RCb));XLb(this.g,(cDb(),YCb))}
bT(794,795,{230:1,231:1},MMb);_.Od=function NMb(a){var b;if(!this.D)return;kxb(a,this.D);this.D=null;for(b=0;b<6;b++){gxb(a,su(lpb(this.b,b)));ixb(a,su(lpb(this.c,b)))}this.b=null;this.c=null};_.Pd=function OMb(){return su(lpb(this.b,this.a))};_.Qd=function PMb(a){var b,c;if(this.b)return;bMb(this,a.createTexture());c=O1b(this.j)&&O1b(this.d);this.b=new spb;this.c=new spb;Rwb(a,(CDb(),vDb),this.D);_Lb(this,a,0,vDb,c);for(b=0;b<6;b++){ipb(this.b,a.createFramebuffer());ipb(this.c,a.createRenderbuffer());Rxb(a,zDb,b,this.j,this.d,this.o,this.C);LMb(this,a,su(lpb(this.b,b)),zDb,b);EMb(this,a,su(lpb(this.c,b)))}c&&Bxb(a,vDb.a);Rwb(a,vDb,null);Pwb(a,36161,null);Owb(a,36160,null)};_.Rd=function QMb(a){Rwb(a,(CDb(),vDb),this.D);Bxb(a,vDb.a);Rwb(a,vDb,null)};_.a=0;bT(807,806,mIc,jOb);bT(1126,1,xIc);_.zb=function gjc(){n7b(this.b,new ijc(this.a))};bT(1127,965,{326:1},ijc);_.nb=function jjc(){var a,b,c,d;this.a=new FOb(this.d,rFb(this.D.k),1,1000);d=new iMb('./static/textures/ruins.jpg');b=new BZb;b.k=d;c=new H5b(new YUb(500,60,40),b);t3b(c.eb,-1);FNb(this.F,c);this.c=new jOb;XLb(this.c.g,(cDb(),ZCb));FNb(this.F,this.c);a=new BZb;xZb(a,this.c.g);this.n=new H5b(new YUb(20,30,15),a);FNb(this.F,this.n);this.b=new H5b(new hUb(20,20,20),a);FNb(this.F,this.b);this.p=new H5b(new iVb(20,5,100,25),a);FNb(this.F,this.p);DFb(this.D.k,this.F,this.a,null,false)};_.ob=function kjc(a){this.f+=0.15;this.e=Hjb(-85,Jjb(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;t3b(this.n._,Math.sin(a*0.001)*30);u3b(this.n._,Math.sin(a*0.0011)*30);f4b(this.n._,Math.sin(a*0.0012)*30);u1b(this.n.cb,0.02);v1b(this.n.cb,0.03);t3b(this.b._,Math.sin(a*0.001+2)*30);u3b(this.b._,Math.sin(a*0.0011+2)*30);f4b(this.b._,Math.sin(a*0.0012+2)*30);u1b(this.b.cb,0.02);v1b(this.b.cb,0.03);t3b(this.p._,Math.sin(a*0.001+4)*30);u3b(this.p._,Math.sin(a*0.0011+4)*30);f4b(this.p._,Math.sin(a*0.0012+4)*30);u1b(this.p.cb,0.02);v1b(this.p.cb,0.03);t3b(this.a._,100*Ojb(this.k)*Fjb(this.o));u3b(this.a._,100*Fjb(this.k));f4b(this.a._,100*Ojb(this.k)*Ojb(this.o));bOb(this.a,this.F._);PNb(this.n,false);iOb(this.c,this.D.k,this.F);PNb(this.n,true);DFb(this.D.k,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var oM=tib(mNc,'MaterialsCubemapDynamicReflection$DemoScene',1127),JG=tib(BOc,'CubeCamera',807);KIc(xi)(25);