function NLb(){}
function DNb(){}
function Blc(){}
function o2b(a,b){a.c=b}
function Clc(){Y7b.call(this)}
function _Lb(){XKb();ULb.call(this,256,256)}
function Pwb(a,b,c,d,e){Qwb(a,36160,b.a,c.a+d,e,0)}
function fxb(a,b,c,d,e,f,g){gxb(a,b.a+c,0,f.a,d,e,0,f.a,g.a,null)}
function $Lb(a,b,c,d,e){b.bindFramebuffer(36160,c);Pwb(b,(nAb(),jAb),d,e,a.z)}
function ENb(a,b,c){var d,e;e=a.g;d=e.r;e.r=false;e.a=0;YDb(b,c,a.d,e,false);e.a=1;YDb(b,c,a.a,e,false);e.a=2;YDb(b,c,a.e,e,false);e.a=3;YDb(b,c,a.b,e,false);e.a=4;YDb(b,c,a.f,e,false);e.r=d;e.a=5;YDb(b,c,a.c,e,false)}
function FNb(){YMb();kNb.call(this);this.d=new YNb(90,1,1,1000);OTb(this.d.ab,0,-1,0);yNb(this.d,new UTb(1,0,0));ZMb(this,this.d);this.a=new YNb(90,1,1,1000);OTb(this.a.ab,0,-1,0);yNb(this.a,new UTb(-1,0,0));ZMb(this,this.a);this.e=new YNb(90,1,1,1000);OTb(this.e.ab,0,0,1);yNb(this.e,new UTb(0,1,0));ZMb(this,this.e);this.b=new YNb(90,1,1,1000);OTb(this.b.ab,0,0,-1);yNb(this.b,new UTb(0,-1,0));ZMb(this,this.b);this.f=new YNb(90,1,1,1000);OTb(this.f.ab,0,-1,0);yNb(this.f,new UTb(0,0,1));ZMb(this,this.f);this.c=new YNb(90,1,1,1000);OTb(this.c.ab,0,-1,0);yNb(this.c,new UTb(0,0,-1));ZMb(this,this.c);this.g=new _Lb;aLb(this.g,(HAb(),FAb));cLb(this.g,(IBb(),GBb));eLb(this.g,(UBb(),OBb))}
_=_Lb.prototype=NLb.prototype=new OLb;_.gC=function aMb(){return wB};_.Od=function bMb(){return ar(Zmb(this.b,this.a))};_.Pd=function cMb(a){var b,c;if(this.b)return;jLb(this,a.createTexture());c=KRb(this.j)&&KRb(this.d);this.b=new fnb;this.c=new fnb;iwb(a,(uCb(),nCb),this.z);hLb(this,a,0,nCb,c);for(b=0;b<6;++b){Vmb(this.b,a.createFramebuffer());Vmb(this.c,a.createRenderbuffer());fxb(a,rCb,b,this.j,this.d,this.o,this.y);$Lb(this,a,ar(Zmb(this.b,b)),rCb,b);TLb(this,a,ar(Zmb(this.c,b)))}c&&Swb(a,nCb.a);iwb(a,nCb,null);a.bindRenderbuffer(36161,null);a.bindFramebuffer(36160,null)};_.Qd=function dMb(a){iwb(a,(uCb(),nCb),this.z);Swb(a,nCb.a);iwb(a,nCb,null)};_.cM={171:1,172:1};_.a=0;_.b=null;_.c=null;_=FNb.prototype=DNb.prototype=new WMb;_.gC=function GNb(){return GB};_.cM={236:1,242:1};_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_=wlc.prototype;_.vb=function Alc(){U7b(this.b,new Clc(this.a))};_=Clc.prototype=Blc.prototype=new X7b;_.gC=function Dlc(){return RG};_.mb=function Elc(){var a,b,c,d;this.a=new YNb(this.d,TDb(this.C.n),1,1000);this.a.W.b=400;d=new nLb('./static/textures/ruins.jpg');b=new r2b;b.j=d;c=new Q5b(new UYb(500,60,40),b);c._.c=-1;ZMb(this.D,c);this.c=new FNb;eLb(this.c.g,(UBb(),PBb));ZMb(this.D,this.c);a=new r2b;o2b(a,this.c.g);this.n=new Q5b(new UYb(20,60,40),a);ZMb(this.D,this.n);this.b=new Q5b(new cYb(20,20,20),a);ZMb(this.D,this.b);this.p=new Q5b(new iZb(20,5,100,100),a);ZMb(this.D,this.p);YDb(this.C.n,this.D,this.a,null,false)};_.nb=function Flc(a){this.f+=0.15;this.e=Ugb(-85,Wgb(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;lTb(this.n.W,Math.sin(a*0.001)*30);mTb(this.n.W,Math.sin(a*0.0011)*30);RTb(this.n.W,Math.sin(a*0.0012)*30);this.n.Z.c+=0.02;this.n.Z.d+=0.03;lTb(this.b.W,Math.sin(a*0.001+2)*30);mTb(this.b.W,Math.sin(a*0.0011+2)*30);RTb(this.b.W,Math.sin(a*0.0012+2)*30);this.b.Z.c+=0.02;this.b.Z.d+=0.03;lTb(this.p.W,Math.sin(a*0.001+4)*30);mTb(this.p.W,Math.sin(a*0.0011+4)*30);RTb(this.p.W,Math.sin(a*0.0012+4)*30);this.p.Z.c+=0.02;this.p.Z.d+=0.03;lTb(this.a.W,100*$gb(this.k)*Sgb(this.o));mTb(this.a.W,100*Sgb(this.k));RTb(this.a.W,100*$gb(this.k)*$gb(this.o));yNb(this.a,this.D.W);this.n.db=false;ENb(this.c,this.C.n,this.D);this.n.db=true;YDb(this.C.n,this.D,this.a,null,false)};_.cM={264:1};_.a=null;_.b=null;_.c=null;_.d=70;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.n=null;_.o=0;_.p=null;var GB=Dfb(xQc,'CubeCamera',VD),RG=Dfb(pPc,'MaterialsCubemapDynamicReflection$DemoScene',fE);OLc(Wd)(27);