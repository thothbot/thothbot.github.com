function HYb(){}
function pZb(){}
function tZb(){}
function sZb(){}
function wZb(){}
function AZb(){}
function zZb(){}
function DZb(){}
function GZb(){}
function Tdc(){}
function Udc(){Y7b.call(this)}
function IYb(a,b){JYb.call(this,a,b)}
function qZb(){IYb.call(this,new tZb,20)}
function xZb(){IYb.call(this,new AZb,20)}
function EZb(){IYb.call(this,new HZb,10)}
function HZb(){this.b=200;this.a=200}
function JYb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;cPb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.Le(n,s);this.x.Ec(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new bTb(g/b,i/20);p=new bTb(g/b,(i+1)/20);q=new bTb((g+1)/b,i/20);r=new bTb((g+1)/b,(i+1)/20);this.k.Ec(new $Pb(c,d,f,e));$q(Zmb(this.j,0),117).Ec(new Inb(Rq($L,{88:1,106:1,190:1},189,[o,p,q,r])))}}TOb(this);UOb(this,(Qeb(),Qeb(),Oeb));XOb(this)}
var FPc='thothbot.parallax.core.shared.geometries.parametric.';_=HYb.prototype=new wOb;_.gC=function KYb(){return VC};_=qZb.prototype=pZb.prototype=new HYb;_.gC=function rZb(){return dD};_=tZb.prototype=sZb.prototype=new Jb;_.gC=function uZb(){return cD};_.Le=function vZb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new UTb(c,d,e)};_=xZb.prototype=wZb.prototype=new HYb;_.gC=function yZb(){return fD};_=AZb.prototype=zZb.prototype=new Jb;_.gC=function BZb(){return eD};_.Le=function CZb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new UTb(d,e,f)};_=EZb.prototype=DZb.prototype=new HYb;_.gC=function FZb(){return hD};_=HZb.prototype=GZb.prototype=new Jb;_.gC=function IZb(){return gD};_.Le=function JZb(a,b){var c,d;c=a*this.b;d=b*this.a;return new UTb(c,0,d)};_.a=0;_.b=0;_=Odc.prototype;_.vb=function Sdc(){U7b(this.b,new Udc(this.a))};_=Udc.prototype=Tdc.prototype=new X7b;_.gC=function Vdc(){return oF};_.mb=function Wdc(){var a,b,c,d,e,f,g,i;this.a=new YNb(45,TDb(this.C.n),1,2000);this.a.W.d=400;ZMb(this.D,new B$b(4210752));b=new d_b(16777215);OTb(b.W,0,0,1);ZMb(this.D,b);i=new nLb(CPc);kLb(i,(oDb(),nDb));lLb(i,nDb);i.k=16;d=new fnb;c=new k3b;c.p=i;d3b(c,new sOb(12303291));o0b(c,(h2b(),f2b));Sq(d.a,d.b++,c);a=new r2b;m2b(a,new sOb(16777215));a.g=true;a.Q=true;a.R=0.1;Sq(d.a,d.b++,a);e=d7b(new qZb,d);OTb(e.W,0,0,0);e._.Ae(20);ZMb(this.D,e);f=d7b(new xZb,d);OTb(f.W,10,0,0);f._.Ae(100);ZMb(this.D,f);g=d7b(new EZb,d);OTb(g.W,20,0,0);ZMb(this.D,g)};_.nb=function Xdc(a){var b,c,d;lTb(this.a.W,Math.cos(a*1.0E-4)*800);RTb(this.a.W,Math.sin(a*1.0E-4)*800);yNb(this.a,this.D.W);for(b=0,c=this.D.K.b;b<c;++b){d=$q(Zmb(this.D.K,b),236);d.Xd().c+=0.01;d.Xd().d+=0.005}YDb(this.C.n,this.D,this.a,null,false)};_.a=null;var VC=Dfb(DPc,'ParametricGeometry',bC),dD=Dfb(FPc,'KleinParametricGeometry',VC),cD=Dfb(FPc,'KleinParametricGeometry$1',Xx),fD=Dfb(FPc,'MobiusParametricGeometry',VC),eD=Dfb(FPc,'MobiusParametricGeometry$1',Xx),hD=Dfb(FPc,'PlaneParametricGeometry',VC),gD=Dfb(FPc,'PlaneParametricGeometry$1',Xx),oF=Dfb(nPc,'GeometriesParametric$DemoScene',fE);OLc(Wd)(10);