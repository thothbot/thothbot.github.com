function XTb(){}
function aUb(){}
function Qac(){M5b.call(this)}
function VTb(){qTb.call(this,new XTb,20)}
function $Tb(){qTb.call(this,new aUb,20)}
function dUb(){qTb.call(this,new fUb,10)}
function fUb(){this.c=200;this.b=200}
function qTb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;UNb.call(this);n=b+1;for(g=0;g<=20;g++){t=g/20;for(j=0;j<=b;j++){o=j/b;k=a.me(o,t);this.t.Mc(k)}}for(i=0;i<20;i++){for(j=0;j<b;j++){c=i*n+j;d=i*n+j+1;e=(i+1)*n+j;f=(i+1)*n+j+1;p=new W1b(i/b,j/20);q=new W1b(i/b,(j+1)/20);r=new W1b((i+1)/b,j/20);s=new W1b((i+1)/b,(j+1)/20);this.j.Mc(new AOb(c,d,e));this.j.Mc(new AOb(d,f,e));Yu(fob(this.i,0),121).Mc(new Kob(Ou(sR,WAc,244,[p,q,r])));Yu(fob(this.i,0),121).Mc(new Kob(Ou(sR,WAc,244,[q,s,r])))}}LNb(this);ONb(this,false)}
var pGc='thothbot.parallax.core.shared.geometries.parametric.';BS(862,805,XAc);BS(872,862,XAc,VTb);BS(873,1,{},XTb);_.me=function YTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*zib(a)*(1+Iib(a))+2*(1-zib(a)/2)*zib(a)*zib(b);e=-8*Iib(a)-2*(1-zib(a)/2)*Iib(a)*zib(b)}else{c=3*zib(a)*(1+Iib(a))+2*(1-zib(a)/2)*Math.cos(b+3.141592653589793);e=-8*Iib(a)}d=-2*(1-zib(a)/2)*Iib(b);return new J2b(c,d,e)};BS(874,862,XAc,$Tb);BS(875,1,{},aUb);_.me=function bUb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=zib(c)*(2+a*Math.cos(c/2));e=Iib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new J2b(d,e,f)};BS(876,862,XAc,dUb);BS(877,1,{},fUb);_.me=function gUb(a,b){var c,d;c=a*this.c;d=b*this.b;return new J2b(c,0,d)};_.b=0;_.c=0;BS(1022,1,cBc);_.Cb=function Oac(){J5b(this.c,new Qac(this.b))};BS(1023,946,{},Qac);_.nb=function Rac(){var a,b,c,d,e,f,g,i;this.b=new jNb(45,hEb(this.F.o),1,2000);U1b(this.b.ab,400);kMb(this.G,new LUb(4210752));b=new lVb(16777215);D2b(b.ab,0,0,1);kMb(this.G,b);i=new RKb(mGc);LKb(i,(fDb(),eDb));MKb(i,eDb);i.n=16;d=new mob;c=new XYb;c.r=i;PYb(c,new P_b(12303291));mWb(c,(_Xb(),ZXb));Pu(d.b,d.c++,c);a=new jYb;dYb(a,new P_b(16777215));a.j=true;a.X=true;a.$=0.1;mWb(a,ZXb);Pu(d.b,d.c++,a);e=Y4b(new VTb,d);D2b(e.ab,0,0,0);e.fb.rf(20);kMb(this.G,e);f=Y4b(new $Tb,d);D2b(f.ab,10,0,0);f.fb.rf(100);kMb(this.G,f);g=Y4b(new dUb,d);D2b(g.ab,20,0,0);kMb(this.G,g)};_.ob=function Sac(a){var b,c,d;T1b(this.b.ab,Math.cos(a*1.0E-4)*800);F2b(this.b.ab,Math.sin(a*1.0E-4)*800);JMb(this.b,this.G.ab);for(b=0,c=this.G.R.c;b<c;b++){d=Yu(fob(this.G.R,b),196);U_b(d.db,0.01);V_b(d.db,0.005)}tEb(this.F.o,this.G,this.b,null,false)};var fL=nhb(VFc,'GeometriesParametric$DemoScene',1023),wI=nhb(oGc,'ParametricGeometry',862),II=nhb(pGc,'KleinParametricGeometry',872),HI=nhb(pGc,'KleinParametricGeometry$1',873),KI=nhb(pGc,'MobiusParametricGeometry',874),JI=nhb(pGc,'MobiusParametricGeometry$1',875),MI=nhb(pGc,'PlaneParametricGeometry',876),LI=nhb(pGc,'PlaneParametricGeometry$1',877);oBc(Ii)(4);