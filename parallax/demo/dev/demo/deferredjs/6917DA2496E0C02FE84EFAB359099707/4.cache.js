function zeb(){}
function Meb(){}
function Leb(){}
function oNb(){}
function tNb(){}
function xNb(){}
function PTb(){}
function XTb(){}
function qNb(a,b){a.c=b}
function uNb(a){this.a=a}
function YTb(a){this.a=a}
function fCb(a,b,c,d){a.b=b;a.c=c;a.d=d;a.a=1;return a}
function Ceb(a){uCb(a.i,-a.d.e+(a.d.f?1:0));vCb(a.i,-(a.d.o?1:0)+a.d.n);$Cb(a.i,-(a.d.j?1:0)+(a.d.i?1:0))}
function Beb(a){var b;b=a.d.c||a.a&&!a.d.a?1:0;uCb(a.e,-(a.d.d?1:0)+(a.d.g?1:0));vCb(a.e,-(a.d.b?1:0)+(a.d.k?1:0));$Cb(a.e,-b+(a.d.a?1:0))}
function yNb(a,b,c,d,e,f){this.i=a;this.g=b.a;this.c=c;this.k=0;this.n=0;this.o=0;this.f=1;this.e=1;this.d=d;this.b=e;this.a=f}
function rNb(a,b,c,d){oyb.call(this);this.b=new aDb;this.a=new Y8;qNb(this,new uNb(this));!!a&&pNb(this,a,b,new n3(0),c,d,null)}
function eCb(a){var b;b=p4(a.b*a.b+a.c*a.c+a.d*a.d+a.a*a.a);if(b==0){a.b=0;a.c=0;a.d=0;a.a=0}else{b=1/b;a.b=a.b*b;a.c=a.c*b;a.d=a.d*b;a.a=a.a*b}}
function cCb(a,b){var c,d,e,f,g,i,j,k;d=a.b;e=a.c;f=a.d;c=a.a;i=b.b;j=b.c;k=b.d;g=b.a;a.b=d*g+c*i+e*k-f*j;a.c=e*g+c*j+f*i-d*k;a.d=f*g+c*k+d*j-e*i;a.a=c*g-d*i-e*j-f*k}
function Aeb(a,b){var c,d;c=b*a.f;d=b*a.g;jyb(a.w,a.e.c*c);kyb(a.w,a.e.d*c);lyb(a.w,a.e.b*c);eCb(fCb(a.j,a.i.c*d,a.i.d*d,a.i.b*d));cCb(a.w.E,a.j);SBb(a.w.y,a.w.D);UBb(a.w.y,a.w.E);a.w.B=true}
function pNb(a,b,c,d,e,f,g){Xxb();fK(Wxb,(NJ(),GJ),'LensFlare: add new LensSprite');!c&&(c=$3(-1));!d&&(d=new n3(0));!g&&(g=new n3(1));!f&&(f=new mzb(16777215));!e&&(e=(oKb(),mKb));d=new n3(k4(d.a,i4(0,d.a)));O8(a.a,new yNb(b,c,d.a,g.a,f,e))}
function RTb(){zQb.call(this);this.c=(yPb(),APb('./static/textures/lensflare/lensflare0.png',(nxb(),mxb),null));this.d=APb('./static/textures/lensflare/lensflare2.png',mxb,null);this.e=APb('./static/textures/lensflare/lensflare3.png',mxb,null)}
function Deb(a,b){neb.call(this,a,b);my!=Kv&&(this.x.A.setAttribute(lac,mac),undefined);this.k=~~(bg(b.A,nac)/2);this.n=~~(bg(b.A,oac)/2);this.w.K=true;this.j=new hCb;this.c=0;this.d=new Meb;this.e=new bDb(0,0,0);this.i=new bDb(0,0,0);aN(this.x,this,(zk(),zk(),yk));aN(this.x,this,(Dl(),Dl(),Cl));aN(this.x,this,(wl(),wl(),vl));aN(this.x,this,(Kl(),Kl(),Jl));aN((hY(),lY(null)),this,(al(),al(),_k));aN(lY(null),this,(hl(),hl(),gl))}
function QTb(a,b,c,d,e){var f,g,i;i=new wJb(16777215,1.5,4500);YCb(i.c,d,e,-1000);eyb(a.B,i);gzb(i.d,b,c,0.99);f=new mzb(16777215);czb(f,i.d);jPb(f,0,-0.5,0.5);g=new rNb(a.c,$3(700),(oKb(),hKb),f);pNb(g,a.d,$3(512),new n3(0),hKb,null,null);pNb(g,a.d,$3(512),new n3(0),hKb,null,null);pNb(g,a.d,$3(512),new n3(0),hKb,null,null);pNb(g,a.e,$3(60),new n3(0.6),hKb,null,null);pNb(g,a.e,$3(70),new n3(0.7),hKb,null,null);pNb(g,a.e,$3(120),new n3(0.9),hKb,null,null);pNb(g,a.e,$3(70),new n3(1),hKb,null,null);qNb(g,new YTb(g));gyb(g,i.c);eyb(a.B,g)}
_=Deb.prototype=zeb.prototype=new meb;_.gC=function Eeb(){return qy};_.Db=function Feb(a){wg(a.a)};_.Eb=function Geb(a){if(a.a.altKey)return;switch(a.a.keyCode||0){case 87:this.d.c=true;break;case 83:this.d.a=true;break;case 65:this.d.d=true;break;case 68:this.d.g=true;break;case 82:this.d.k=true;break;case 70:this.d.b=true;break;case 38:this.d.f=true;break;case 40:this.d.e=1;break;case 37:this.d.n=1;break;case 39:this.d.o=true;break;case 81:this.d.i=true;break;case 69:this.d.j=true;}Beb(this);Ceb(this)};_.Fb=function Heb(a){switch(a.a.keyCode||0){case 87:this.d.c=false;break;case 83:this.d.a=false;break;case 65:this.d.d=false;break;case 68:this.d.g=false;break;case 82:this.d.k=false;break;case 70:this.d.b=false;break;case 38:this.d.f=false;break;case 40:this.d.e=0;break;case 37:this.d.n=0;break;case 39:this.d.o=false;break;case 81:this.d.i=false;break;case 69:this.d.j=false;}Beb(this);Ceb(this)};_.Gb=function Ieb(a){wg(a.a);xg(a.a);if(this.b){++this.c}else{switch(a.a.button||0){case 1:this.d.c=true;break;case 2:this.d.c=false;}}};_.Hb=function Jeb(a){if(!this.b||this.c>0){this.d.n=~~(-(ok(a)-Gg(this.x.A)-this.k)/this.k);this.d.e=~~((pk(a)-Hg(this.x.A)-this.n)/this.n);Ceb(this)}};_.Ib=function Keb(a){wg(a.a);xg(a.a);if(this.b){--this.c;this.d.n=this.d.e=0}else{switch(a.a.button||0){case 1:this.d.c=false;break;case 2:this.d.c=false;}}Ceb(this)};_.cM={17:1,20:1,21:1,23:1,24:1,25:1,37:1};_.a=false;_.b=false;_.c=0;_.d=null;_.e=null;_.f=1;_.g=0.005;_.i=null;_.j=null;_.k=0;_.n=0;_=Meb.prototype=Leb.prototype=new Tb;_.gC=function Neb(){return py};_.a=false;_.b=false;_.c=false;_.d=false;_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.n=0;_.o=false;_=rNb.prototype=oNb.prototype=new cyb;_.gC=function sNb(){return WB};_.cM={194:1,197:1,202:1};_.a=null;_.b=null;_.c=null;_=uNb.prototype=tNb.prototype=new Tb;_.gC=function vNb(){return UB};_.Ne=function wNb(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;++a){b=hr(S8(this.a.a,a),198);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.j=b.k*3.141592653589793*0.25;b.e+=(b.j-b.e)*0.25}};_.a=null;_=yNb.prototype=xNb.prototype=new Tb;_.gC=function zNb(){return VB};_.cM={198:1};_.a=null;_.b=null;_.c=0;_.d=0;_.e=0;_.f=0;_.g=0;_.i=null;_.j=0;_.k=0;_.n=0;_.o=0;_=KTb.prototype;_.qb=function OTb(){vQb(this.b,new RTb(this.a))};_=RTb.prototype=PTb.prototype=new yQb;_.gC=function STb(){return ZC};_.qd=function TTb(){jdb(this,new Uyb(40,beb(this.A.C),1,15000))};_.hb=function UTb(){var a,b,c,d,e,f,g;this.z.D.b=250;eyb(this.B,this.z);this.a=new Deb(this.z,this.A.C);this.a.f=2500;this.a.g=0.5235987755982988;this.a.a=false;this.a.b=false;d=new aPb(0,3500,15000);gzb(d.c,0.51,0.6,0.025);gPb(this.B,d);b=new xHb(250,250,250);f=new mMb;gMb(f,new mzb(16777215));fMb(f,new mzb(16777215));jMb(f,new mzb(16777215));f.v=50;f.k=true;for(e=0;e<3000;++e){g=new _Nb(b,f);uCb(g.D,8000*(2*Math.random()-1));vCb(g.D,8000*(2*Math.random()-1));$Cb(g.D,8000*(2*Math.random()-1));uCb(g.G,Math.random()*3.141592653589793);vCb(g.G,Math.random()*3.141592653589793);$Cb(g.G,Math.random()*3.141592653589793);g.z=false;myb(g);eyb(this.B,g)}a=new mJb(16777215);gzb(a.d,0.1,0.5,0.3);eyb(this.B,a);c=new qJb(16777215,0.125);YCb(c.D,0,-1,0).ee();eyb(this.B,c);gzb(c.d,0.1,0.725,0.9);QTb(this,0.55,0.825,5000,0);QTb(this,0.08,0.825,0,0);QTb(this,0.995,0.025,5000,5000);this.A.N=8;Job(this.A,this.B.e.c);this.A.I=true;this.A.J=true;this.A.L=true;this.b=ad()};_.pd=function VTb(){};_.ib=function WTb(a){Aeb(this.a,(ad()-this.b)*0.001);this.b=ad()};_.a=null;_.b=0;_=YTb.prototype=XTb.prototype=new Tb;_.gC=function ZTb(){return YC};_.Ne=function $Tb(){var a,b,c,d;c=-this.a.b.c*2;d=-this.a.b.d*2;for(a=0;a<this.a.a.b;++a){b=hr(S8(this.a.a,a),198);b.k=this.a.b.c+c*b.c;b.n=this.a.b.d+d*b.c;b.e=0}hr(S8(this.a.a,2),198).n+=0.025;hr(S8(this.a.a,3),198).e=this.a.b.c*0.5+0.7853981633974483};_.a=null;var qy=$2(pac,'FlyControls'),py=$2(pac,'FlyControls$MoveState'),UB=$2(qac,'LensFlare$1'),VB=$2(qac,'LensFlare$LensSprite'),ZC=$2(dac,'EffectsLensFlares$DemoScene'),YC=$2(dac,'EffectsLensFlares$DemoScene$1');D6b(be)(4);