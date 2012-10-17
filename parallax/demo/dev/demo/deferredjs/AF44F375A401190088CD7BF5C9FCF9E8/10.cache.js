function TYb(){}
function BZb(){}
function FZb(){}
function EZb(){}
function IZb(){}
function MZb(){}
function LZb(){}
function PZb(){}
function SZb(){}
function dec(){}
function eec(){i8b.call(this)}
function UYb(a,b){VYb.call(this,a,b)}
function CZb(){UYb.call(this,new FZb,20)}
function JZb(){UYb.call(this,new MZb,20)}
function QZb(){UYb.call(this,new TZb,10)}
function TZb(){this.c=200;this.b=200}
function VYb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;oPb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.Se(n,s);this.y.Lc(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new nTb(g/b,i/20);p=new nTb(g/b,(i+1)/20);q=new nTb((g+1)/b,i/20);r=new nTb((g+1)/b,(i+1)/20);this.n.Lc(new kQb(c,d,f,e));wr(jnb(this.k,0),117).Lc(new Unb(nr(BM,{88:1,106:1,190:1},189,[o,p,q,r])))}}dPb(this);ePb(this,(afb(),afb(),$eb));hPb(this)}
var RPc='thothbot.parallax.core.shared.geometries.parametric.';_=TYb.prototype=new IOb;_.gC=function WYb(){return wD};_=CZb.prototype=BZb.prototype=new TYb;_.gC=function DZb(){return GD};_=FZb.prototype=EZb.prototype=new Jb;_.gC=function GZb(){return FD};_.Se=function HZb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new eUb(c,d,e)};_=JZb.prototype=IZb.prototype=new TYb;_.gC=function KZb(){return ID};_=MZb.prototype=LZb.prototype=new Jb;_.gC=function NZb(){return HD};_.Se=function OZb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new eUb(d,e,f)};_=QZb.prototype=PZb.prototype=new TYb;_.gC=function RZb(){return KD};_=TZb.prototype=SZb.prototype=new Jb;_.gC=function UZb(){return JD};_.Se=function VZb(a,b){var c,d;c=a*this.c;d=b*this.b;return new eUb(c,0,d)};_.b=0;_.c=0;_=$dc.prototype;_.zb=function cec(){e8b(this.c,new eec(this.b))};_=eec.prototype=dec.prototype=new h8b;_.gC=function fec(){return RF};_.nb=function gec(){var a,b,c,d,e,f,g,i;this.b=new iOb(45,dEb(this.D.o),1,2000);this.b.X.e=400;jNb(this.E,new N$b(4210752));b=new p_b(16777215);$Tb(b.X,0,0,1);jNb(this.E,b);i=new zLb(OPc);wLb(i,(ADb(),zDb));xLb(i,zDb);i.n=16;d=new rnb;c=new w3b;c.q=i;p3b(c,new EOb(12303291));A0b(c,(t2b(),r2b));or(d.b,d.c++,c);a=new D2b;y2b(a,new EOb(16777215));a.i=true;a.R=true;a.S=0.1;or(d.b,d.c++,a);e=p7b(new CZb,d);$Tb(e.X,0,0,0);e.ab.He(20);jNb(this.E,e);f=p7b(new JZb,d);$Tb(f.X,10,0,0);f.ab.He(100);jNb(this.E,f);g=p7b(new QZb,d);$Tb(g.X,20,0,0);jNb(this.E,g)};_.ob=function hec(a){var b,c,d;xTb(this.b.X,Math.cos(a*1.0E-4)*800);bUb(this.b.X,Math.sin(a*1.0E-4)*800);KNb(this.b,this.E.X);for(b=0,c=this.E.L.c;b<c;++b){d=wr(jnb(this.E.L,b),236);d.ce().d+=0.01;d.ce().e+=0.005}iEb(this.D.o,this.E,this.b,null,false)};_.b=null;var wD=Pfb(PPc,'ParametricGeometry',EC),GD=Pfb(RPc,'KleinParametricGeometry',wD),FD=Pfb(RPc,'KleinParametricGeometry$1',yy),ID=Pfb(RPc,'MobiusParametricGeometry',wD),HD=Pfb(RPc,'MobiusParametricGeometry$1',yy),KD=Pfb(RPc,'PlaneParametricGeometry',wD),JD=Pfb(RPc,'PlaneParametricGeometry$1',yy),RF=Pfb(zPc,'GeometriesParametric$DemoScene',IE);$Lc(he)(10);