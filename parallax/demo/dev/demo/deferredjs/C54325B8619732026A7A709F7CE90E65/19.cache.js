function Dsb(){}
function rub(){}
function iYb(){}
function EIb(a,b){a.d=b}
function jYb(){PNb.call(this)}
function Qsb(){Ksb.call(this,256,256)}
function sub(a,b,c){var d,e;e=a.i;d=e.r;e.r=false;e.b=0;kmb(b,c,a.e,e,false);e.b=1;kmb(b,c,a.b,e,false);e.b=2;kmb(b,c,a.f,e,false);e.b=3;kmb(b,c,a.c,e,false);e.b=4;kmb(b,c,a.g,e,false);e.r=d;e.b=5;kmb(b,c,a.d,e,false)}
function tub(){cub.call(this);this.e=new Jub(90,1,1,1000);Nzb(this.e.K,0,-1,0);nub(this.e,new Szb(1,0,0));Ttb(this,this.e);this.b=new Jub(90,1,1,1000);Nzb(this.b.K,0,-1,0);nub(this.b,new Szb(-1,0,0));Ttb(this,this.b);this.f=new Jub(90,1,1,1000);Nzb(this.f.K,0,0,1);nub(this.f,new Szb(0,1,0));Ttb(this,this.f);this.c=new Jub(90,1,1,1000);Nzb(this.c.K,0,0,-1);nub(this.c,new Szb(0,-1,0));Ttb(this,this.c);this.g=new Jub(90,1,1,1000);Nzb(this.g.K,0,-1,0);nub(this.g,new Szb(0,0,1));Ttb(this,this.g);this.d=new Jub(90,1,1,1000);Nzb(this.d.K,0,-1,0);nub(this.d,new Szb(0,0,-1));Ttb(this,this.d);this.i=new Qsb;jsb(this.i,(Lkb(),Jkb));lsb(this.i,(Tkb(),Rkb));msb(this.i,(dlb(),Zkb))}
_=Qsb.prototype=Dsb.prototype=new Esb;_.gC=function Rsb(){return wz};_.zd=function Ssb(){return tr(w6(this.c,this.b))};_.Ad=function Tsb(a){var b,c;if(this.c)return;rsb(this,a.createTexture());c=dyb(this.k)&&dyb(this.e);this.c=new C6;this.d=new C6;Vcb(a,(zkb(),Rjb).b,this.z);psb(this,a,0,Rjb.b,c);for(b=0;b<6;++b){s6(this.c,a.createFramebuffer());s6(this.d,a.createRenderbuffer());Bdb(a,Vjb.b+b,0,this.p.b,this.k,this.e,0,this.p.b,this.y.b,null);Isb(this,a,tr(w6(this.c,b)),Vjb.b+b);Jsb(this,a,tr(w6(this.d,b)))}c&&pdb(a,Rjb.b);Vcb(a,Rjb.b,null);Ucb(a,aib.b,null);Tcb(a,tgb.b,null)};_.Bd=function Usb(a){Vcb(a,(zkb(),Rjb).b,this.z);pdb(a,Rjb.b);Vcb(a,Rjb.b,null)};_.cM={135:1};_.b=0;_.c=null;_.d=null;_=tub.prototype=rub.prototype=new Rtb;_.gC=function uub(){return Hz};_.cM={190:1,195:1};_.b=null;_.c=null;_.d=null;_.e=null;_.f=null;_.g=null;_.i=null;_=dYb.prototype;_.ub=function hYb(){LNb(this.c,new jYb(this.b))};_=jYb.prototype=iYb.prototype=new ONb;_.gC=function kYb(){return UD};_.qd=function lYb(){Oab(this,new Jub(this.d,Gbb(this.B.D),1,1000))};_.ib=function mYb(){var a,b,c,d;this.A.E.c=400;Ttb(this.C,this.A);d=(PMb(),RMb('./static/textures/ruins.jpg',(atb(),_sb),null));b=new HIb;b.k=d;c=new QLb(new REb(500,60,40),b);c.J.d=-1;Ttb(this.C,c);this.c=new tub;msb(this.c.i,(dlb(),$kb));Ttb(this.C,this.c);a=new HIb;EIb(a,this.c.i);this.n=new QLb(new REb(20,60,40),a);Ttb(this.C,this.n);this.b=new QLb(new _Db(20,20,20),a);Ttb(this.C,this.b);this.p=new QLb(new fFb(20,5,100,100),a);Ttb(this.C,this.p)};_.pd=function nYb(){};_.jb=function oYb(a){this.f+=0.15;this.e=O1(-85,Q1(85,this.e));this.k=(90-this.e)*3.141592653589793/180;this.o=this.f*3.141592653589793/180;jzb(this.n.E,Math.sin(a*0.001)*30);kzb(this.n.E,Math.sin(a*0.0011)*30);Pzb(this.n.E,Math.sin(a*0.0012)*30);this.n.H.d+=0.02;this.n.H.e+=0.03;jzb(this.b.E,Math.sin(a*0.001+2)*30);kzb(this.b.E,Math.sin(a*0.0011+2)*30);Pzb(this.b.E,Math.sin(a*0.0012+2)*30);this.b.H.d+=0.02;this.b.H.e+=0.03;jzb(this.p.E,Math.sin(a*0.001+4)*30);kzb(this.p.E,Math.sin(a*0.0011+4)*30);Pzb(this.p.E,Math.sin(a*0.0012+4)*30);this.p.H.d+=0.02;this.p.H.e+=0.03;jzb(this.A.E,100*U1(this.k)*M1(this.o));kzb(this.A.E,100*M1(this.k));Pzb(this.A.E,100*U1(this.k)*U1(this.o));nub(this.A,this.C.E);this.n.N=false;sub(this.c,this.B,this.C);this.n.N=true};_.cM={211:1};_.b=null;_.c=null;_.d=70;_.e=0;_.f=0;_.g=false;_.i=0;_.j=0;_.k=0;_.n=null;_.o=0;_.p=null;var Hz=Q0(_8b,'CubeCamera'),UD=Q0(V7b,'MaterialsCubemapDynamicReflection$DemoScene');z4b(oe)(19);