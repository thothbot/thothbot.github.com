function XTb(){}
function aUb(){}
function Vac(){U5b.call(this)}
function VTb(){sTb.call(this,new XTb,20)}
function $Tb(){sTb.call(this,new aUb,20)}
function dUb(){sTb.call(this,new fUb,10)}
function fUb(){this.c=200;this.b=200}
function sTb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;WNb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.me(o,t);this.t.Mc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new b2b(g/b,j/20);q=new b2b(g/b,(j+1)/20);r=new b2b((g+1)/b,j/20);s=new b2b((g+1)/b,(j+1)/20);this.j.Mc(new COb(c,d,e));this.j.Mc(new COb(d,f,e));Xu(gob(this.i,0),121).Mc(new Lob(Nu(vR,rBc,245,[p,q,r])));Xu(gob(this.i,0),121).Mc(new Lob(Nu(vR,rBc,245,[q,s,r])))}}NNb(this);QNb(this,false)}
var LGc='thothbot.parallax.core.shared.geometries.parametric.';ES(862,805,sBc);ES(871,862,sBc,VTb);ES(872,1,{},XTb);_.me=function YTb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Aib(a)*(1+Jib(a))+2*(1-Aib(a)/2)*Aib(a)*Aib(b);e=-8*Jib(a)-2*(1-Aib(a)/2)*Jib(a)*Aib(b)}else{c=3*Aib(a)*(1+Jib(a))+2*(1-Aib(a)/2)*Math.cos(b+3.141592653589793);e=-8*Jib(a)}d=-2*(1-Aib(a)/2)*Jib(b);return new Q2b(c,d,e)};ES(873,862,sBc,$Tb);ES(874,1,{},aUb);_.me=function bUb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Aib(c)*(2+a*Math.cos(c/2));e=Jib(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new Q2b(d,e,f)};ES(875,862,sBc,dUb);ES(876,1,{},fUb);_.me=function gUb(a,b){var c,d;c=a*this.c;d=b*this.b;return new Q2b(c,0,d)};_.b=0;_.c=0;ES(1022,1,zBc);_.Cb=function Tac(){R5b(this.c,new Vac(this.b))};ES(1023,946,{},Vac);_.nb=function Wac(){var a,b,c,d,e,f,g,i;this.b=new lNb(45,jEb(this.F.o),1,2000);_1b(this.b.ab,400);mMb(this.G,new LUb(4210752));b=new lVb(16777215);K2b(b.ab,0,0,1);mMb(this.G,b);i=new TKb(IGc);NKb(i,(gDb(),fDb));OKb(i,fDb);i.n=16;d=new nob;c=new bZb;c.r=i;VYb(c,new V_b(12303291));mWb(c,(_Xb(),ZXb));Ou(d.b,d.c++,c);a=new jYb;dYb(a,new V_b(16777215));a.j=true;a.X=true;a.$=0.1;Ou(d.b,d.c++,a);e=e5b(new VTb,d);K2b(e.ab,0,0,0);e.fb.rf(20);mMb(this.G,e);f=e5b(new $Tb,d);K2b(f.ab,10,0,0);f.fb.rf(100);mMb(this.G,f);g=e5b(new dUb,d);K2b(g.ab,20,0,0);mMb(this.G,g)};_.ob=function Xac(a){var b,c,d;$1b(this.b.ab,Math.cos(a*1.0E-4)*800);M2b(this.b.ab,Math.sin(a*1.0E-4)*800);LMb(this.b,this.G.ab);for(b=0,c=this.G.R.c;b<c;b++){d=Xu(gob(this.G.R,b),196);$_b(d.db,0.01);__b(d.db,0.005)}vEb(this.F.o,this.G,this.b,null,false)};var eL=ohb(pGc,'GeometriesParametric$DemoScene',1023),vI=ohb(KGc,'ParametricGeometry',862),GI=ohb(LGc,'KleinParametricGeometry',871),FI=ohb(LGc,'KleinParametricGeometry$1',872),II=ohb(LGc,'MobiusParametricGeometry',873),HI=ohb(LGc,'MobiusParametricGeometry$1',874),KI=ohb(LGc,'PlaneParametricGeometry',875),JI=ohb(LGc,'PlaneParametricGeometry$1',876);LBc(Hi)(4);