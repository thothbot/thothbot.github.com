function jZb(a,b){a.d=b}
function jxb(a,b,c,d,e){ixb(a,36160,b.a,c.a+d,e,0)}
function tMb(a,b,c,d,e){zwb(b,36160,c);jxb(b,(GAb(),CAb),d,e,a.D)}
function Cxb(a,b,c,d,e,f,g){Axb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function uMb(){vLb();nMb.call(this,256,256);this.a=0}
function Kic(){q7b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function TNb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;lFb(b,c,a.d,e,false);e.a=1;lFb(b,c,a.a,e,false);e.a=2;lFb(b,c,a.e,e,false);e.a=3;lFb(b,c,a.b,e,false);e.a=4;lFb(b,c,a.f,e,false);e.r=d;e.a=5;lFb(b,c,a.c,e,false)}
function UNb(){mNb();ENb.call(this);this.d=new oOb(90,1,1,1000);J3b(this.d.fb,0,-1,0);MNb(this.d,new P3b(1,0,0));nNb(this,this.d);this.a=new oOb(90,1,1,1000);J3b(this.a.fb,0,-1,0);MNb(this.a,new P3b(-1,0,0));nNb(this,this.a);this.e=new oOb(90,1,1,1000);J3b(this.e.fb,0,0,1);MNb(this.e,new P3b(0,1,0));nNb(this,this.e);this.b=new oOb(90,1,1,1000);J3b(this.b.fb,0,0,-1);MNb(this.b,new P3b(0,-1,0));nNb(this,this.b);this.f=new oOb(90,1,1,1000);J3b(this.f.fb,0,-1,0);MNb(this.f,new P3b(0,0,1));nNb(this,this.f);this.c=new oOb(90,1,1,1000);J3b(this.c.fb,0,-1,0);MNb(this.c,new P3b(0,0,-1));nNb(this,this.c);this.g=new uMb;ALb(this.g,(YAb(),WAb));DLb(this.g,(CCb(),ACb));FLb(this.g,(NCb(),HCb))}
YS(787,788,{230:1,231:1},uMb);_.Od=function vMb(a){var b;if(!this.D)return;Xwb(a,this.D);this.D=null;for(b=0;b<6;b++){Twb(a,Cu(Yob(this.b,b)));Vwb(a,Cu(Yob(this.c,b)))}this.b=null;this.c=null};_.Pd=function wMb(){return Cu(Yob(this.b,this.a))};_.Qd=function xMb(a){var b,c;if(this.b)return;LLb(this,a.createTexture());c=q1b(this.j)&&q1b(this.d);this.b=new dpb;this.c=new dpb;Cwb(a,(lDb(),eDb),this.D);JLb(this,a,0,eDb,c);for(b=0;b<6;b++){Vob(this.b,a.createFramebuffer());Vob(this.c,a.createRenderbuffer());Cxb(a,iDb,b,this.j,this.d,this.o,this.C);tMb(this,a,Cu(Yob(this.b,b)),iDb,b);mMb(this,a,Cu(Yob(this.c,b)))}c&&mxb(a,eDb.a);Cwb(a,eDb,null);Awb(a,36161,null);zwb(a,36160,null)};_.Rd=function yMb(a){Cwb(a,(lDb(),eDb),this.D);mxb(a,eDb.a);Cwb(a,eDb,null)};_.a=0;YS(800,799,yGc,UNb);YS(1117,1,JGc);_.zb=function Iic(){S6b(this.b,new Kic(this.a))};YS(1118,957,{323:1},Kic);_.nb=function Lic(){var a,b,c,d;this.a=new oOb(this.d,_Eb(this.D.k),1,1000);d=new SLb('./static/textures/ruins.jpg');b=new nZb;b.k=d;c=new l5b(new HUb(500,60,40),b);Z2b(c.eb,-1);nNb(this.F,c);this.c=new UNb;FLb(this.c.g,(NCb(),ICb));nNb(this.F,this.c);a=new nZb;jZb(a,this.c.g);this.n=new l5b(new HUb(20,30,15),a);nNb(this.F,this.n);this.b=new l5b(new STb(20,20,20),a);nNb(this.F,this.b);this.p=new l5b(new TUb(20,5,100,25),a);nNb(this.F,this.p);lFb(this.D.k,this.F,this.a,null,false)};_.ob=function Mic(a){this.f+=0.15;this.e=sjb(-85,ujb(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;Z2b(this.n._,Math.sin(a*0.001)*30);$2b(this.n._,Math.sin(a*0.0011)*30);L3b(this.n._,Math.sin(a*0.0012)*30);Y0b(this.n.cb,0.02);Z0b(this.n.cb,0.03);Z2b(this.b._,Math.sin(a*0.001+2)*30);$2b(this.b._,Math.sin(a*0.0011+2)*30);L3b(this.b._,Math.sin(a*0.0012+2)*30);Y0b(this.b.cb,0.02);Z0b(this.b.cb,0.03);Z2b(this.p._,Math.sin(a*0.001+4)*30);$2b(this.p._,Math.sin(a*0.0011+4)*30);L3b(this.p._,Math.sin(a*0.0012+4)*30);Y0b(this.p.cb,0.02);Z0b(this.p.cb,0.03);Z2b(this.a._,100*zjb(this.k)*qjb(this.o));$2b(this.a._,100*qjb(this.k));L3b(this.a._,100*zjb(this.k)*zjb(this.o));MNb(this.a,this.F._);xNb(this.n,false);TNb(this.c,this.D.k,this.F);xNb(this.n,true);lFb(this.D.k,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var sM=eib(ILc,'MaterialsCubemapDynamicReflection$DemoScene',1118),PG=eib(WMc,'CubeCamera',800);WGc(xi)(24);