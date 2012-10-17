function BYb(){}
function jZb(){}
function nZb(){}
function mZb(){}
function qZb(){}
function uZb(){}
function tZb(){}
function xZb(){}
function AZb(){}
function Ndc(){}
function Odc(){S7b.call(this)}
function CYb(a,b){DYb.call(this,a,b)}
function kZb(){CYb.call(this,new nZb,20)}
function rZb(){CYb.call(this,new uZb,20)}
function yZb(){CYb.call(this,new BZb,10)}
function BZb(){this.c=200;this.b=200}
function DYb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;YOb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.Oe(n,s);this.y.Hc(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new XSb(g/b,i/20);p=new XSb(g/b,(i+1)/20);q=new XSb((g+1)/b,i/20);r=new XSb((g+1)/b,(i+1)/20);this.n.Hc(new UPb(c,d,f,e));ir(Tmb(this.k,0),117).Hc(new Cnb(_q(jM,{88:1,106:1,190:1},189,[o,p,q,r])))}}NOb(this);OOb(this,(Keb(),Keb(),Ieb));ROb(this)}
var yPc='thothbot.parallax.core.shared.geometries.parametric.';_=BYb.prototype=new qOb;_.gC=function EYb(){return eD};_=kZb.prototype=jZb.prototype=new BYb;_.gC=function lZb(){return oD};_=nZb.prototype=mZb.prototype=new Jb;_.gC=function oZb(){return nD};_.Oe=function pZb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new OTb(c,d,e)};_=rZb.prototype=qZb.prototype=new BYb;_.gC=function sZb(){return qD};_=uZb.prototype=tZb.prototype=new Jb;_.gC=function vZb(){return pD};_.Oe=function wZb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new OTb(d,e,f)};_=yZb.prototype=xZb.prototype=new BYb;_.gC=function zZb(){return sD};_=BZb.prototype=AZb.prototype=new Jb;_.gC=function CZb(){return rD};_.Oe=function DZb(a,b){var c,d;c=a*this.c;d=b*this.b;return new OTb(c,0,d)};_.b=0;_.c=0;_=Idc.prototype;_.zb=function Mdc(){O7b(this.c,new Odc(this.b))};_=Odc.prototype=Ndc.prototype=new R7b;_.gC=function Pdc(){return zF};_.nb=function Qdc(){var a,b,c,d,e,f,g,i;this.b=new SNb(45,NDb(this.D.o),1,2000);this.b.X.e=400;TMb(this.E,new v$b(4210752));b=new Z$b(16777215);ITb(b.X,0,0,1);TMb(this.E,b);i=new hLb(vPc);eLb(i,(iDb(),hDb));fLb(i,hDb);i.n=16;d=new _mb;c=new e3b;c.q=i;Z2b(c,new mOb(12303291));i0b(c,(b2b(),_1b));ar(d.b,d.c++,c);a=new l2b;g2b(a,new mOb(16777215));a.i=true;a.R=true;a.S=0.1;ar(d.b,d.c++,a);e=Z6b(new kZb,d);ITb(e.X,0,0,0);e.ab.De(20);TMb(this.E,e);f=Z6b(new rZb,d);ITb(f.X,10,0,0);f.ab.De(100);TMb(this.E,f);g=Z6b(new yZb,d);ITb(g.X,20,0,0);TMb(this.E,g)};_.ob=function Rdc(a){var b,c,d;fTb(this.b.X,Math.cos(a*1.0E-4)*800);LTb(this.b.X,Math.sin(a*1.0E-4)*800);sNb(this.b,this.E.X);for(b=0,c=this.E.L.c;b<c;++b){d=ir(Tmb(this.E.L,b),236);d.$d().d+=0.01;d.$d().e+=0.005}SDb(this.D.o,this.E,this.b,null,false)};_.b=null;var eD=xfb(wPc,'ParametricGeometry',mC),oD=xfb(yPc,'KleinParametricGeometry',eD),nD=xfb(yPc,'KleinParametricGeometry$1',gy),qD=xfb(yPc,'MobiusParametricGeometry',eD),pD=xfb(yPc,'MobiusParametricGeometry$1',gy),sD=xfb(yPc,'PlaneParametricGeometry',eD),rD=xfb(yPc,'PlaneParametricGeometry$1',gy),zF=xfb(gPc,'GeometriesParametric$DemoScene',qE);ILc(ge)(10);