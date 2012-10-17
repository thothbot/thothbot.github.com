function qYb(){}
function $Yb(){}
function cZb(){}
function bZb(){}
function fZb(){}
function jZb(){}
function iZb(){}
function mZb(){}
function pZb(){}
function Cdc(){}
function Ddc(){H7b.call(this)}
function rYb(a,b){sYb.call(this,a,b)}
function _Yb(){rYb.call(this,new cZb,20)}
function gZb(){rYb.call(this,new jZb,20)}
function nZb(){rYb.call(this,new qZb,10)}
function qZb(){this.b=200;this.a=200}
function sYb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;NOb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.Le(n,s);this.x.Ec(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new MSb(g/b,i/20);p=new MSb(g/b,(i+1)/20);q=new MSb((g+1)/b,i/20);r=new MSb((g+1)/b,(i+1)/20);this.k.Ec(new JPb(c,d,f,e));Qq(Imb(this.j,0),117).Ec(new rnb(Hq(QL,{88:1,106:1,190:1},189,[o,p,q,r])))}}COb(this);DOb(this,(zeb(),zeb(),xeb));GOb(this)}
var lPc='thothbot.parallax.core.shared.geometries.parametric.';_=qYb.prototype=new fOb;_.gC=function tYb(){return LC};_=_Yb.prototype=$Yb.prototype=new qYb;_.gC=function aZb(){return VC};_=cZb.prototype=bZb.prototype=new Jb;_.gC=function dZb(){return UC};_.Le=function eZb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new DTb(c,d,e)};_=gZb.prototype=fZb.prototype=new qYb;_.gC=function hZb(){return XC};_=jZb.prototype=iZb.prototype=new Jb;_.gC=function kZb(){return WC};_.Le=function lZb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new DTb(d,e,f)};_=nZb.prototype=mZb.prototype=new qYb;_.gC=function oZb(){return ZC};_=qZb.prototype=pZb.prototype=new Jb;_.gC=function rZb(){return YC};_.Le=function sZb(a,b){var c,d;c=a*this.b;d=b*this.a;return new DTb(c,0,d)};_.a=0;_.b=0;_=xdc.prototype;_.vb=function Bdc(){D7b(this.b,new Ddc(this.a))};_=Ddc.prototype=Cdc.prototype=new G7b;_.gC=function Edc(){return eF};_.mb=function Fdc(){var a,b,c,d,e,f,g,i;this.a=new HNb(45,CDb(this.C.n),1,2000);this.a.W.d=400;IMb(this.D,new k$b(4210752));b=new O$b(16777215);xTb(b.W,0,0,1);IMb(this.D,b);i=new YKb(iPc);VKb(i,(ZCb(),YCb));WKb(i,YCb);i.k=16;d=new Qmb;c=new V2b;c.p=i;O2b(c,new bOb(12303291));Z_b(c,(S1b(),Q1b));Iq(d.a,d.b++,c);a=new a2b;X1b(a,new bOb(16777215));a.g=true;a.Q=true;a.R=0.1;Iq(d.a,d.b++,a);e=O6b(new _Yb,d);xTb(e.W,0,0,0);e._.Ae(20);IMb(this.D,e);f=O6b(new gZb,d);xTb(f.W,10,0,0);f._.Ae(100);IMb(this.D,f);g=O6b(new nZb,d);xTb(g.W,20,0,0);IMb(this.D,g)};_.nb=function Gdc(a){var b,c,d;WSb(this.a.W,Math.cos(a*1.0E-4)*800);ATb(this.a.W,Math.sin(a*1.0E-4)*800);hNb(this.a,this.D.W);for(b=0,c=this.D.K.b;b<c;++b){d=Qq(Imb(this.D.K,b),236);d.Xd().c+=0.01;d.Xd().d+=0.005}HDb(this.C.n,this.D,this.a,null,false)};_.a=null;var LC=mfb(jPc,'ParametricGeometry',TB),VC=mfb(lPc,'KleinParametricGeometry',LC),UC=mfb(lPc,'KleinParametricGeometry$1',Nx),XC=mfb(lPc,'MobiusParametricGeometry',LC),WC=mfb(lPc,'MobiusParametricGeometry$1',Nx),ZC=mfb(lPc,'PlaneParametricGeometry',LC),YC=mfb(lPc,'PlaneParametricGeometry$1',Nx),eF=mfb(VOc,'GeometriesParametric$DemoScene',XD);xLc(Wd)(10);