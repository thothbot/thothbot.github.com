function fYb(a,b){a.e=b}
function owb(a,b,c,d,e){nwb(a,36160,b.b,c.b+d,e,0)}
function tLb(a,b,c,d,e){Hvb(b,36160,c);owb(b,(Jzb(),Fzb),d,e,a.F)}
function Hwb(a,b,c,d,e,f,g){Fwb(a,b.b+c,0,f.b,d,e,0,f.b,g.b,null)}
function uLb(){wKb();oLb.call(this,256,256);this.b=0}
function rgc(){U5b.call(this);this.j=0;this.k=0;this.i=false;this.e=70;this.f=0;this.g=0;this.n=0;this.p=0}
function SMb(a,b,c){var d,e;e=a.i;d=e.s;e.s=false;e.b=0;vEb(b,c,a.e,e,false);e.b=1;vEb(b,c,a.b,e,false);e.b=2;vEb(b,c,a.f,e,false);e.b=3;vEb(b,c,a.c,e,false);e.b=4;vEb(b,c,a.g,e,false);e.s=d;e.b=5;vEb(b,c,a.d,e,false)}
function TMb(){lMb();DMb.call(this);this.e=new lNb(90,1,1,1000);K2b(this.e.gb,0,-1,0);LMb(this.e,new Q2b(1,0,0));mMb(this,this.e);this.b=new lNb(90,1,1,1000);K2b(this.b.gb,0,-1,0);LMb(this.b,new Q2b(-1,0,0));mMb(this,this.b);this.f=new lNb(90,1,1,1000);K2b(this.f.gb,0,0,1);LMb(this.f,new Q2b(0,1,0));mMb(this,this.f);this.c=new lNb(90,1,1,1000);K2b(this.c.gb,0,0,-1);LMb(this.c,new Q2b(0,-1,0));mMb(this,this.c);this.g=new lNb(90,1,1,1000);K2b(this.g.gb,0,-1,0);LMb(this.g,new Q2b(0,0,1));mMb(this,this.g);this.d=new lNb(90,1,1,1000);K2b(this.d.gb,0,-1,0);LMb(this.d,new Q2b(0,0,-1));mMb(this,this.d);this.i=new uLb;BKb(this.i,(_zb(),Zzb));EKb(this.i,(FBb(),DBb));GKb(this.i,(QBb(),KBb))}
ES(784,785,{179:1,180:1},uLb);_.Vd=function vLb(){return Zu(gob(this.c,this.b))};_.Wd=function wLb(a){var b,c;if(this.c)return;MKb(this,a.createTexture());c=s0b(this.k)&&s0b(this.e);this.c=new nob;this.d=new nob;Kvb(a,(oCb(),hCb),this.F);KKb(this,a,0,hCb,c);for(b=0;b<6;b++){dob(this.c,a.createFramebuffer());dob(this.d,a.createRenderbuffer());Hwb(a,lCb,b,this.k,this.e,this.p,this.D);tLb(this,a,Zu(gob(this.c,b)),lCb,b);nLb(this,a,Zu(gob(this.d,b)))}c&&rwb(a,hCb.b);Kvb(a,hCb,null);Ivb(a,36161,null);Hvb(a,36160,null)};_.Xd=function xLb(a){Kvb(a,(oCb(),hCb),this.F);rwb(a,hCb.b);Kvb(a,hCb,null)};_.b=0;ES(797,796,nBc,TMb);ES(1095,1,zBc);_.Cb=function pgc(){R5b(this.c,new rgc(this.b))};ES(1096,946,{272:1},rgc);_.nb=function sgc(){var a,b,c,d;this.b=new lNb(this.e,jEb(this.F.o),1,1000);d=new TKb('./static/textures/ruins.jpg');b=new jYb;b.n=d;c=new l4b(new DTb(500,60,40),b);$1b(c.fb,-1);mMb(this.G,c);this.d=new TMb;GKb(this.d.i,(QBb(),LBb));mMb(this.G,this.d);a=new jYb;fYb(a,this.d.i);this.o=new l4b(new DTb(20,30,15),a);mMb(this.G,this.o);this.c=new l4b(new QSb(20,20,20),a);mMb(this.G,this.c);this.q=new l4b(new PTb(20,5,100,25),a);mMb(this.G,this.q);vEb(this.F.o,this.G,this.b,null,false)};_.ob=function tgc(a){this.g+=0.15;this.f=Cib(-85,Eib(85,this.f));this.n=(90-this.f)*3.141592653589793/180;this.p=this.g*3.141592653589793/180;$1b(this.o.ab,Math.sin(a*0.001)*30);_1b(this.o.ab,Math.sin(a*0.0011)*30);M2b(this.o.ab,Math.sin(a*0.0012)*30);$_b(this.o.db,0.02);__b(this.o.db,0.03);$1b(this.c.ab,Math.sin(a*0.001+2)*30);_1b(this.c.ab,Math.sin(a*0.0011+2)*30);M2b(this.c.ab,Math.sin(a*0.0012+2)*30);$_b(this.c.db,0.02);__b(this.c.db,0.03);$1b(this.q.ab,Math.sin(a*0.001+4)*30);_1b(this.q.ab,Math.sin(a*0.0011+4)*30);M2b(this.q.ab,Math.sin(a*0.0012+4)*30);$_b(this.q.db,0.02);__b(this.q.db,0.03);$1b(this.b.ab,100*Jib(this.n)*Aib(this.p));_1b(this.b.ab,100*Aib(this.n));M2b(this.b.ab,100*Jib(this.n)*Jib(this.p));LMb(this.b,this.G.ab);wMb(this.o,false);SMb(this.d,this.F.o,this.G);wMb(this.o,true);vEb(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;_.n=0;_.p=0;var zM=ohb(rGc,'MaterialsCubemapDynamicReflection$DemoScene',1096),mH=ohb(IHc,'CubeCamera',797);LBc(Hi)(24);