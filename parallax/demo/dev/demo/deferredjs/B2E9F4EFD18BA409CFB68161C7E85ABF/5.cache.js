function CNb(){}
function xTb(){}
function DNb(a,b){a.c=b}
function ENb(a,b){a.e=b}
function FNb(a,b){a.f=b}
function GNb(a,b){a.i=b}
function HNb(a,b){a.k=b}
function yTb(){NPb.call(this);this.c=(MOb(),OOb('./static/textures/sprite0.png',(Bwb(),Awb),null));this.d=OOb('./static/textures/sprite1.png',Awb,null);this.e=OOb('./static/textures/sprite2.png',Awb,null)}
function JNb(){Cxb.call(this);this.d=(CJb(),AJb);ngb();$fb();Mfb();this.c=(YNb(),SNb);this.e=new Ayb(16777215);this.f=new bwb;this.g=!this.o;this.b=!this.o;this.n=!this.b;this.j=this.H;this.k=0;this.p=new LBb(0,0);this.q=new LBb(1,1)}
_=JNb.prototype=CNb.prototype=new qxb;_.cT=function KNb(a){var b;return b=Vq(a,203).r-this.r,b==0?0:b>0?1:-1};_.gC=function LNb(){return PB};_.Fd=function MNb(){eBb(this.z,this.E);kCb(this.j,0,0,this.k);fBb(this.z,this.j);(this.J.d!=1||this.J.e!=1)&&cBb(this.z,this.J);this.C=true};_.cM={93:1,194:1,202:1,203:1};_.b=false;_.e=null;_.f=null;_.g=false;_.i=1;_.j=null;_.k=0;_.n=false;_.o=true;_.p=null;_.q=null;_.r=0;_=sTb.prototype;_.rb=function wTb(){JPb(this.c,new yTb(this.b))};_=yTb.prototype=xTb.prototype=new MPb;_.gC=function zTb(){return NC};_.pd=function ATb(){xcb(this,new gyb(60,pdb(this.B.D),1,5000))};_.ib=function BTb(){var a,b,c,d,e;this.A.E.c=1500;sxb(this.C,this.A);this.b=new Cxb;for(a=0;a<200;++a){b=new JNb;FNb(b,this.e);b.o=false;ENb(b,new Ayb(16777215));kCb(b.E,Math.random()-0.5,Math.random()-0.5,Math.random()-0.5);if(b.E.c<0){FNb(b,this.d)}else{uyb(b.e,0.5*Math.random(),0.8,0.9);HBb(b.q,2,2);HBb(b.p,-0.5,-0.5)}b.E.de();b.E.ce(500);sxb(this.b,b)}sxb(this.C,this.b);c=new JNb;FNb(c,this.c);DNb(c,(YNb(),WNb));kCb(c.E,100,100,0);c.i=0.25;sxb(this.C,c);d=new JNb;FNb(d,this.c);DNb(d,WNb);kCb(d.E,150,150,2);d.i=0.5;sxb(this.C,d);e=new JNb;FNb(e,this.c);DNb(e,WNb);kCb(e.E,200,200,3);e.i=1;sxb(this.C,e)};_.od=function CTb(){};_.jb=function DTb(a){var b,c,d,e;e=a*0.001;for(b=0;b<this.b.v.c;++b){d=Vq(e8(this.b.v,b),203);c=C3(e+d.E.d*0.01)*0.3+0.5;HNb(d,d.k+0.1*(b/this.b.v.c));kCb(d.J,c,c,1);d.f==this.e||GNb(d,C3(e+d.E.d*0.01)*0.4+0.6)}IBb(this.b.H,e*0.5);JBb(this.b.H,e*0.75);mCb(this.b.H,e)};_.b=null;var NC=m2(k9b,'EffectsSprites$DemoScene');R5b(be)(5);