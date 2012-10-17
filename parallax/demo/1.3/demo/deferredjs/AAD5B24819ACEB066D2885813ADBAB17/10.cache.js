function UXb(){}
function CYb(){}
function GYb(){}
function FYb(){}
function JYb(){}
function NYb(){}
function MYb(){}
function QYb(){}
function TYb(){}
function edc(){}
function fdc(){j7b.call(this)}
function VXb(a,b){WXb.call(this,a,b)}
function DYb(){VXb.call(this,new GYb,20)}
function KYb(){VXb.call(this,new NYb,20)}
function RYb(){VXb.call(this,new UYb,10)}
function UYb(){this.c=200;this.b=200}
function WXb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s;pOb.call(this);k=b+1;for(g=0;g<=20;++g){s=g/20;for(i=0;i<=b;++i){n=i/b;j=a.Le(n,s);this.y.Ec(j)}}for(g=0;g<20;++g){for(i=0;i<b;++i){c=g*k+i;d=g*k+i+1;e=(g+1)*k+i;f=(g+1)*k+i+1;o=new oSb(g/b,i/20);p=new oSb(g/b,(i+1)/20);q=new oSb((g+1)/b,i/20);r=new oSb((g+1)/b,(i+1)/20);this.n.Ec(new lPb(c,d,f,e));Mq(kmb(this.k,0),117).Ec(new Vmb(Dq(KL,{88:1,106:1,190:1},189,[o,p,q,r])))}}eOb(this);fOb(this,(beb(),beb(),_db));iOb(this)}
var KOc='thothbot.parallax.core.shared.geometries.parametric.';_=UXb.prototype=new JNb;_.gC=function XXb(){return FC};_=DYb.prototype=CYb.prototype=new UXb;_.gC=function EYb(){return PC};_=GYb.prototype=FYb.prototype=new Jb;_.gC=function HYb(){return OC};_.Le=function IYb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(a)*Math.cos(b);e=-8*Math.sin(a)-2*(1-Math.cos(a)/2)*Math.sin(a)*Math.cos(b)}else{c=3*Math.cos(a)*(1+Math.sin(a))+2*(1-Math.cos(a)/2)*Math.cos(b+3.141592653589793);e=-8*Math.sin(a)}d=-2*(1-Math.cos(a)/2)*Math.sin(b);return new fTb(c,d,e)};_=KYb.prototype=JYb.prototype=new UXb;_.gC=function LYb(){return RC};_=NYb.prototype=MYb.prototype=new Jb;_.gC=function OYb(){return QC};_.Le=function PYb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Math.cos(c)*(2+a*Math.cos(c/2));e=Math.sin(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new fTb(d,e,f)};_=RYb.prototype=QYb.prototype=new UXb;_.gC=function SYb(){return TC};_=UYb.prototype=TYb.prototype=new Jb;_.gC=function VYb(){return SC};_.Le=function WYb(a,b){var c,d;c=a*this.c;d=b*this.b;return new fTb(c,0,d)};_.b=0;_.c=0;_=_cc.prototype;_.wb=function ddc(){f7b(this.c,new fdc(this.b))};_=fdc.prototype=edc.prototype=new i7b;_.gC=function gdc(){return $E};_.nb=function hdc(){var a,b,c,d,e,f,g,i;this.b=new jNb(45,eDb(this.D.o),1,2000);this.b.X.e=400;kMb(this.E,new OZb(4210752));b=new q$b(16777215);_Sb(b.X,0,0,1);kMb(this.E,b);i=new AKb(HOc);xKb(i,(BCb(),ACb));yKb(i,ACb);i.n=16;d=new smb;c=new x2b;c.q=i;q2b(c,new FNb(12303291));B_b(c,(u1b(),s1b));Eq(d.b,d.c++,c);a=new E1b;z1b(a,new FNb(16777215));a.i=true;a.R=true;a.S=0.1;Eq(d.b,d.c++,a);e=q6b(new DYb,d);_Sb(e.X,0,0,0);e.ab.Ae(20);kMb(this.E,e);f=q6b(new KYb,d);_Sb(f.X,10,0,0);f.ab.Ae(100);kMb(this.E,f);g=q6b(new RYb,d);_Sb(g.X,20,0,0);kMb(this.E,g)};_.ob=function idc(a){var b,c,d;ySb(this.b.X,Math.cos(a*1.0E-4)*800);cTb(this.b.X,Math.sin(a*1.0E-4)*800);LMb(this.b,this.E.X);for(b=0,c=this.E.L.c;b<c;++b){d=Mq(kmb(this.E.L,b),236);d.Xd().d+=0.01;d.Xd().e+=0.005}jDb(this.D.o,this.E,this.b,null,false)};_.b=null;var FC=Qeb(IOc,'ParametricGeometry',NB),PC=Qeb(KOc,'KleinParametricGeometry',FC),OC=Qeb(KOc,'KleinParametricGeometry$1',Hx),RC=Qeb(KOc,'MobiusParametricGeometry',FC),QC=Qeb(KOc,'MobiusParametricGeometry$1',Hx),TC=Qeb(KOc,'PlaneParametricGeometry',FC),SC=Qeb(KOc,'PlaneParametricGeometry$1',Hx),$E=Qeb(sOc,'GeometriesParametric$DemoScene',RD);_Kc(Wd)(10);