function xVb(){}
function CVb(){}
function xdc(){O7b.call(this)}
function vVb(){SUb.call(this,new xVb,20)}
function AVb(){SUb.call(this,new CVb,20)}
function FVb(){SUb.call(this,new HVb,10)}
function HVb(){this.c=200;this.b=200}
function SUb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;uPb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.ne(o,t);this.t.Lc(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new y3b(g/b,j/20);q=new y3b(g/b,(j+1)/20);r=new y3b((g+1)/b,j/20);s=new y3b((g+1)/b,(j+1)/20);this.j.Lc(new aQb(c,d,e));this.j.Lc(new aQb(d,f,e));Xu(upb(this.i,0),173).Lc(new Zpb(Nu(pS,_Gc,296,[p,q,r])));Xu(upb(this.i,0),173).Lc(new Zpb(Nu(pS,_Gc,296,[q,s,r])))}}lPb(this);oPb(this,false)}
var zMc='thothbot.parallax.core.shared.geometries.parametric.';yT(868,811,aHc);yT(878,868,aHc,vVb);yT(879,1,{},xVb);_.ne=function yVb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*Njb(a)*(1+Wjb(a))+2*(1-Njb(a)/2)*Njb(a)*Njb(b);e=-8*Wjb(a)-2*(1-Njb(a)/2)*Wjb(a)*Njb(b)}else{c=3*Njb(a)*(1+Wjb(a))+2*(1-Njb(a)/2)*Math.cos(b+3.141592653589793);e=-8*Wjb(a)}d=-2*(1-Njb(a)/2)*Wjb(b);return new l4b(c,d,e)};yT(880,868,aHc,AVb);yT(881,1,{},CVb);_.ne=function DVb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=Njb(c)*(2+a*Math.cos(c/2));e=Wjb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new l4b(d,e,f)};yT(882,868,aHc,FVb);yT(883,1,{},HVb);_.ne=function IVb(a,b){var c,d;c=a*this.c;d=b*this.b;return new l4b(c,0,d)};_.b=0;_.c=0;yT(1044,1,hHc);_.Db=function vdc(){o7b(this.c,new xdc(this.b))};yT(1045,960,{},xdc);_.ob=function ydc(){var a,b,c,d,e,f,g,i;this.b=new MOb(45,xFb(this.F.n),1,2000);w3b(this.b.ab,400);LNb(this.G,new lWb(4210752));b=new NWb(16777215);f4b(b.ab,0,0,1);LNb(this.G,b);i=new oMb(wMc);iMb(i,(BEb(),AEb));jMb(i,AEb);i.n=16;d=new Bpb;c=new x$b;c.r=i;p$b(c,new p1b(12303291));OXb(c,(BZb(),zZb));Ou(d.b,d.c++,c);a=new LZb;FZb(a,new p1b(16777215));a.j=true;a.X=true;a.$=0.1;OXb(a,zZb);Ou(d.b,d.c++,a);e=D6b(new vVb,d);f4b(e.ab,0,0,0);e.fb.sf(20);LNb(this.G,e);f=D6b(new AVb,d);f4b(f.ab,10,0,0);f.fb.sf(100);LNb(this.G,f);g=D6b(new FVb,d);f4b(g.ab,20,0,0);LNb(this.G,g)};_.pb=function zdc(a){var b,c,d;v3b(this.b.ab,Math.cos(a*1.0E-4)*800);h4b(this.b.ab,Math.sin(a*1.0E-4)*800);iOb(this.b,this.G.ab);for(b=0,c=this.G.R.c;b<c;b++){d=Xu(upb(this.G.R,b),248);u1b(d.db,0.01);v1b(d.db,0.005)}JFb(this.F.n,this.G,this.b,null,false)};var xL=Bib(dMc,'GeometriesParametric$DemoScene',1045),yI=Bib(yMc,'ParametricGeometry',868),KI=Bib(zMc,'KleinParametricGeometry',878),JI=Bib(zMc,'KleinParametricGeometry$1',879),MI=Bib(zMc,'MobiusParametricGeometry',880),LI=Bib(zMc,'MobiusParametricGeometry$1',881),OI=Bib(zMc,'PlaneParametricGeometry',882),NI=Bib(zMc,'PlaneParametricGeometry$1',883);uHc(Ii)(4);