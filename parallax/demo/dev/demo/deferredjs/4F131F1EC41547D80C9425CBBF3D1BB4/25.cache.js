function EZb(a,b){a.d=b}
function Fxb(a,b,c,d,e){Exb(a,36160,b.a,c.a+d,e,0)}
function SMb(a,b,c,d,e){Vwb(b,36160,c);Fxb(b,(cBb(),$Ab),d,e,a.D)}
function Yxb(a,b,c,d,e,f,g){Wxb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function TMb(){ULb();MMb.call(this,256,256);this.a=0}
function pjc(){U7b.call(this);this.i=0;this.j=0;this.g=false;this.d=70;this.e=0;this.f=0;this.k=0;this.o=0}
function pOb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;KFb(b,c,a.d,e,false);e.a=1;KFb(b,c,a.a,e,false);e.a=2;KFb(b,c,a.e,e,false);e.a=3;KFb(b,c,a.b,e,false);e.a=4;KFb(b,c,a.f,e,false);e.r=d;e.a=5;KFb(b,c,a.c,e,false)}
function qOb(){LNb();bOb.call(this);this.d=new MOb(90,1,1,1000);k4b(this.d.fb,0,-1,0);iOb(this.d,new q4b(1,0,0));MNb(this,this.d);this.a=new MOb(90,1,1,1000);k4b(this.a.fb,0,-1,0);iOb(this.a,new q4b(-1,0,0));MNb(this,this.a);this.e=new MOb(90,1,1,1000);k4b(this.e.fb,0,0,1);iOb(this.e,new q4b(0,1,0));MNb(this,this.e);this.b=new MOb(90,1,1,1000);k4b(this.b.fb,0,0,-1);iOb(this.b,new q4b(0,-1,0));MNb(this,this.b);this.f=new MOb(90,1,1,1000);k4b(this.f.fb,0,-1,0);iOb(this.f,new q4b(0,0,1));MNb(this,this.f);this.c=new MOb(90,1,1,1000);k4b(this.c.fb,0,-1,0);iOb(this.c,new q4b(0,0,-1));MNb(this,this.c);this.g=new TMb;ZLb(this.g,(uBb(),sBb));aMb(this.g,($Cb(),YCb));cMb(this.g,(jDb(),dDb))}
kT(793,794,{230:1,231:1},TMb);_.Od=function UMb(a){var b;if(!this.D)return;rxb(a,this.D);this.D=null;for(b=0;b<6;b++){nxb(a,Cu(spb(this.b,b)));pxb(a,Cu(spb(this.c,b)))}this.b=null;this.c=null};_.Pd=function VMb(){return Cu(spb(this.b,this.a))};_.Qd=function WMb(a){var b,c;if(this.b)return;iMb(this,a.createTexture());c=V1b(this.j)&&V1b(this.d);this.b=new zpb;this.c=new zpb;Ywb(a,(JDb(),CDb),this.D);gMb(this,a,0,CDb,c);for(b=0;b<6;b++){ppb(this.b,a.createFramebuffer());ppb(this.c,a.createRenderbuffer());Yxb(a,GDb,b,this.j,this.d,this.o,this.C);SMb(this,a,Cu(spb(this.b,b)),GDb,b);LMb(this,a,Cu(spb(this.c,b)))}c&&Ixb(a,CDb.a);Ywb(a,CDb,null);Wwb(a,36161,null);Vwb(a,36160,null)};_.Rd=function XMb(a){Ywb(a,(JDb(),CDb),this.D);Ixb(a,CDb.a);Ywb(a,CDb,null)};_.a=0;kT(806,805,tIc,qOb);kT(1125,1,EIc);_.zb=function njc(){u7b(this.b,new pjc(this.a))};kT(1126,964,{326:1},pjc);_.nb=function qjc(){var a,b,c,d;this.a=new MOb(this.d,yFb(this.D.k),1,1000);d=new pMb('./static/textures/ruins.jpg');b=new IZb;b.k=d;c=new O5b(new dVb(500,60,40),b);A3b(c.eb,-1);MNb(this.F,c);this.c=new qOb;cMb(this.c.g,(jDb(),eDb));MNb(this.F,this.c);a=new IZb;EZb(a,this.c.g);this.n=new O5b(new dVb(20,30,15),a);MNb(this.F,this.n);this.b=new O5b(new oUb(20,20,20),a);MNb(this.F,this.b);this.p=new O5b(new pVb(20,5,100,25),a);MNb(this.F,this.p);KFb(this.D.k,this.F,this.a,null,false)};_.ob=function rjc(a){this.f+=0.15;this.e=Ojb(-85,Qjb(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;A3b(this.n._,Math.sin(a*0.001)*30);B3b(this.n._,Math.sin(a*0.0011)*30);m4b(this.n._,Math.sin(a*0.0012)*30);B1b(this.n.cb,0.02);C1b(this.n.cb,0.03);A3b(this.b._,Math.sin(a*0.001+2)*30);B3b(this.b._,Math.sin(a*0.0011+2)*30);m4b(this.b._,Math.sin(a*0.0012+2)*30);B1b(this.b.cb,0.02);C1b(this.b.cb,0.03);A3b(this.p._,Math.sin(a*0.001+4)*30);B3b(this.p._,Math.sin(a*0.0011+4)*30);m4b(this.p._,Math.sin(a*0.0012+4)*30);B1b(this.p.cb,0.02);C1b(this.p.cb,0.03);A3b(this.a._,100*Vjb(this.k)*Mjb(this.o));B3b(this.a._,100*Mjb(this.k));m4b(this.a._,100*Vjb(this.k)*Vjb(this.o));iOb(this.a,this.F._);WNb(this.n,false);pOb(this.c,this.D.k,this.F);WNb(this.n,true);KFb(this.D.k,this.F,this.a,null,false)};_.d=0;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.o=0;var yM=Aib(ENc,'MaterialsCubemapDynamicReflection$DemoScene',1126),SG=Aib(TOc,'CubeCamera',806);RIc(xi)(25);