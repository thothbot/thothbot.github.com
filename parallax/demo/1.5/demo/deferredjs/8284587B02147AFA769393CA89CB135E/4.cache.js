function RUb(){}
function WUb(){}
function Ncc(){_6b.call(this)}
function PUb(){kUb.call(this,new RUb,20)}
function UUb(){kUb.call(this,new WUb,20)}
function ZUb(){kUb.call(this,new _Ub,10)}
function _Ub(){this.b=200;this.a=200}
function kUb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;OOb.call(this);n=b+1;for(i=0;i<=20;i++){t=i/20;for(j=0;j<=b;j++){o=j/b;k=a.fe(o,t);this.s.Ec(k)}}for(g=0;g<20;g++){for(j=0;j<b;j++){c=g*n+j;d=g*n+j+1;e=(g+1)*n+j;f=(g+1)*n+j+1;p=new L2b(g/b,j/20);q=new L2b(g/b,(j+1)/20);r=new L2b((g+1)/b,j/20);s=new L2b((g+1)/b,(j+1)/20);this.i.Ec(new uPb(c,d,e));this.i.Ec(new uPb(d,f,e));qu(Nob(this.g,0),173).Ec(new qpb(gu(GR,nGc,296,[p,q,r])));qu(Nob(this.g,0),173).Ec(new qpb(gu(GR,nGc,296,[q,s,r])))}}FOb(this);IOb(this,false)}
var DLc='thothbot.parallax.core.shared.geometries.parametric.';NS(867,810,oGc);NS(877,867,oGc,PUb);NS(878,1,{},RUb);_.fe=function SUb(a,b){var c,d,e;a*=3.141592653589793;b*=6.283185307179586;a=a*2;if(a<3.141592653589793){c=3*fjb(a)*(1+ojb(a))+2*(1-fjb(a)/2)*fjb(a)*fjb(b);e=-8*ojb(a)-2*(1-fjb(a)/2)*ojb(a)*fjb(b)}else{c=3*fjb(a)*(1+ojb(a))+2*(1-fjb(a)/2)*Math.cos(b+3.141592653589793);e=-8*ojb(a)}d=-2*(1-fjb(a)/2)*ojb(b);return new y3b(c,d,e)};NS(879,867,oGc,UUb);NS(880,1,{},WUb);_.fe=function XUb(a,b){var c,d,e,f;a=a-0.5;c=6.283185307179586*b;d=fjb(c)*(2+a*Math.cos(c/2));e=ojb(c)*(2+a*Math.cos(c/2));f=a*Math.sin(c/2);return new y3b(d,e,f)};NS(881,867,oGc,ZUb);NS(882,1,{},_Ub);_.fe=function aVb(a,b){var c,d;c=a*this.b;d=b*this.a;return new y3b(c,0,d)};_.a=0;_.b=0;NS(1044,1,vGc);_.zb=function Lcc(){B6b(this.b,new Ncc(this.a))};NS(1045,959,{},Ncc);_.nb=function Occ(){var a,b,c,d,e,f,g,i;this.a=new eOb(45,SEb(this.D.k),1,2000);J2b(this.a._,400);eNb(this.F,new FVb(4210752));b=new fWb(16777215);s3b(b._,0,0,1);eNb(this.F,b);i=new JLb(ALc);DLb(i,(WDb(),VDb));ELb(i,VDb);i.k=16;d=new Uob;c=new NZb;c.q=i;FZb(c,new E0b(12303291));fXb(c,(SYb(),QYb));hu(d.a,d.b++,c);a=new aZb;WYb(a,new E0b(16777215));a.i=true;a.W=true;a.Z=0.1;fXb(a,QYb);hu(d.a,d.b++,a);e=Q5b(new PUb,d);s3b(e._,0,0,0);e.eb.hf(20);eNb(this.F,e);f=Q5b(new UUb,d);s3b(f._,10,0,0);f.eb.hf(100);eNb(this.F,f);g=Q5b(new ZUb,d);s3b(g._,20,0,0);eNb(this.F,g)};_.ob=function Pcc(a){var b,c,d;I2b(this.a._,Math.cos(a*1.0E-4)*800);u3b(this.a._,Math.sin(a*1.0E-4)*800);CNb(this.a,this.F._);for(b=0,c=this.F.Q.b;b<c;b++){d=qu(Nob(this.F.Q,b),248);J0b(d.cb,0.01);K0b(d.cb,0.005)}cFb(this.D.k,this.F,this.a,null,false)};var OK=Vhb(hLc,'GeometriesParametric$DemoScene',1045),OH=Vhb(CLc,'ParametricGeometry',867),$H=Vhb(DLc,'KleinParametricGeometry',877),ZH=Vhb(DLc,'KleinParametricGeometry$1',878),aI=Vhb(DLc,'MobiusParametricGeometry',879),_H=Vhb(DLc,'MobiusParametricGeometry$1',880),cI=Vhb(DLc,'PlaneParametricGeometry',881),bI=Vhb(DLc,'PlaneParametricGeometry$1',882);IGc(xi)(4);