function hYb(a,b){a.e=b}
function qwb(a,b,c,d,e){pwb(a,36160,b.b,c.b+d,e,0)}
function vLb(a,b,c,d,e){Jvb(b,36160,c);qwb(b,(Lzb(),Hzb),d,e,a.F)}
function Jwb(a,b,c,d,e,f,g){Hwb(a,b.b+c,0,f.b,d,e,0,f.b,g.b,null)}
function wLb(){yKb();qLb.call(this,256,256);this.b=0}
function vgc(){W5b.call(this);this.j=0;this.k=0;this.i=false;this.e=70;this.f=0;this.g=0;this.n=0;this.p=0}
function UMb(a,b,c){var d,e;e=a.i;d=e.s;e.s=false;e.b=0;xEb(b,c,a.e,e,false);e.b=1;xEb(b,c,a.b,e,false);e.b=2;xEb(b,c,a.f,e,false);e.b=3;xEb(b,c,a.c,e,false);e.b=4;xEb(b,c,a.g,e,false);e.s=d;e.b=5;xEb(b,c,a.d,e,false)}
function VMb(){nMb();FMb.call(this);this.e=new nNb(90,1,1,1000);M2b(this.e.gb,0,-1,0);NMb(this.e,new S2b(1,0,0));oMb(this,this.e);this.b=new nNb(90,1,1,1000);M2b(this.b.gb,0,-1,0);NMb(this.b,new S2b(-1,0,0));oMb(this,this.b);this.f=new nNb(90,1,1,1000);M2b(this.f.gb,0,0,1);NMb(this.f,new S2b(0,1,0));oMb(this,this.f);this.c=new nNb(90,1,1,1000);M2b(this.c.gb,0,0,-1);NMb(this.c,new S2b(0,-1,0));oMb(this,this.c);this.g=new nNb(90,1,1,1000);M2b(this.g.gb,0,-1,0);NMb(this.g,new S2b(0,0,1));oMb(this,this.g);this.d=new nNb(90,1,1,1000);M2b(this.d.gb,0,-1,0);NMb(this.d,new S2b(0,0,-1));oMb(this,this.d);this.i=new wLb;DKb(this.i,(bAb(),_zb));GKb(this.i,(HBb(),FBb));IKb(this.i,(SBb(),MBb))}
ES(784,785,{179:1,180:1},wLb);_.Vd=function xLb(){return Zu(iob(this.c,this.b))};_.Wd=function yLb(a){var b,c;if(this.c)return;OKb(this,a.createTexture());c=u0b(this.k)&&u0b(this.e);this.c=new pob;this.d=new pob;Mvb(a,(qCb(),jCb),this.F);MKb(this,a,0,jCb,c);for(b=0;b<6;b++){fob(this.c,a.createFramebuffer());fob(this.d,a.createRenderbuffer());Jwb(a,nCb,b,this.k,this.e,this.p,this.D);vLb(this,a,Zu(iob(this.c,b)),nCb,b);pLb(this,a,Zu(iob(this.d,b)))}c&&twb(a,jCb.b);Mvb(a,jCb,null);Kvb(a,36161,null);Jvb(a,36160,null)};_.Xd=function zLb(a){Mvb(a,(qCb(),jCb),this.F);twb(a,jCb.b);Mvb(a,jCb,null)};_.b=0;ES(797,796,rBc,VMb);ES(1095,1,DBc);_.Cb=function tgc(){T5b(this.c,new vgc(this.b))};ES(1096,946,{272:1},vgc);_.nb=function wgc(){var a,b,c,d;this.b=new nNb(this.e,lEb(this.F.o),1,1000);d=new VKb('./static/textures/ruins.jpg');b=new lYb;b.n=d;c=new n4b(new FTb(500,60,40),b);a2b(c.fb,-1);oMb(this.G,c);this.d=new VMb;IKb(this.d.i,(SBb(),NBb));oMb(this.G,this.d);a=new lYb;hYb(a,this.d.i);this.o=new n4b(new FTb(20,30,15),a);oMb(this.G,this.o);this.c=new n4b(new SSb(20,20,20),a);oMb(this.G,this.c);this.q=new n4b(new RTb(20,5,100,25),a);oMb(this.G,this.q);xEb(this.F.o,this.G,this.b,null,false)};_.ob=function xgc(a){this.g+=0.15;this.f=Eib(-85,Gib(85,this.f));this.n=(90-this.f)*3.141592653589793/180;this.p=this.g*3.141592653589793/180;a2b(this.o.ab,Math.sin(a*0.001)*30);b2b(this.o.ab,Math.sin(a*0.0011)*30);O2b(this.o.ab,Math.sin(a*0.0012)*30);a0b(this.o.db,0.02);b0b(this.o.db,0.03);a2b(this.c.ab,Math.sin(a*0.001+2)*30);b2b(this.c.ab,Math.sin(a*0.0011+2)*30);O2b(this.c.ab,Math.sin(a*0.0012+2)*30);a0b(this.c.db,0.02);b0b(this.c.db,0.03);a2b(this.q.ab,Math.sin(a*0.001+4)*30);b2b(this.q.ab,Math.sin(a*0.0011+4)*30);O2b(this.q.ab,Math.sin(a*0.0012+4)*30);a0b(this.q.db,0.02);b0b(this.q.db,0.03);a2b(this.b.ab,100*Lib(this.n)*Cib(this.p));b2b(this.b.ab,100*Cib(this.n));O2b(this.b.ab,100*Lib(this.n)*Lib(this.p));NMb(this.b,this.G.ab);yMb(this.o,false);UMb(this.d,this.F.o,this.G);yMb(this.o,true);xEb(this.F.o,this.G,this.b,null,false)};_.e=0;_.f=0;_.g=0;_.i=false;_.j=0;_.k=0;_.n=0;_.p=0;var zM=qhb(wGc,'MaterialsCubemapDynamicReflection$DemoScene',1096),mH=qhb(NHc,'CubeCamera',797);PBc(Hi)(24);