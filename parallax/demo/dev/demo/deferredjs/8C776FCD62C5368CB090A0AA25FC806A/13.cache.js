function Otb(){}
function Aec(){}
function Bec(){H7b.call(this)}
function VRb(a){var b,c;b=Math.cos(-1.5707963267948966);c=Math.sin(-1.5707963267948966);cSb(a,1,0,0,0,0,b,-c,0,0,c,b,0,0,0,0,1);return a}
function Qtb(a,b){Mtb.call(this,a,b);this.u=~~(Zf(b.A,nPc)/2);this.v=~~(Zf(b.A,oPc)/2);qz!=Mv&&(this.A.A.setAttribute(pPc,qPc),undefined);this.s=new CTb;RS(this.A,this,(Kl(),Kl(),Jl));RS(this.A,this,(Om(),Om(),Nm));RS(this.A,this,(Hm(),Hm(),Gm));RS(this.A,this,(Vm(),Vm(),Um));RS((U1(),Y1(null)),this,(lm(),lm(),km));RS(Y1(null),this,(sm(),sm(),rm))}
function Ptb(a,b){var c,d,e,f;if(a.b){return}else{a.a=0;d=b*a.q;a.k&&SMb(a.z,-(d+a.a));a.i&&SMb(a.z,d);a.n&&QMb(a.z,-d);a.o&&QMb(a.z,d);a.p&&RMb(a.z,d);a.j&&RMb(a.z,-d);c=b*a.e;a.d+=a.f*c;a.c-=a.g*c;a.c=Dgb(-85,Fgb(85,a.c));a.r=(90-a.c)*3.141592653589793/180;a.t=a.d*3.141592653589793/180;f=a.s;e=a.z.W;WSb(f,e.c+100*Jgb(a.r)*Bgb(a.t));XSb(f,e.d+100*Bgb(a.r));ATb(f,e.b+100*Jgb(a.r)*Jgb(a.t))}a.d+=a.f*c;a.c-=a.g*c;a.c=Dgb(-85,Fgb(85,a.c));a.r=(90-a.c)*3.141592653589793/180;a.t=a.d*3.141592653589793/180;f=a.s;e=a.z.W;WSb(f,e.c+100*Jgb(a.r)*Bgb(a.t));XSb(f,e.d+100*Bgb(a.r));ATb(f,e.b+100*Jgb(a.r)*Jgb(a.t));hNb(a.z,f)}
_=Qtb.prototype=Otb.prototype=new Ltb;_.gC=function Rtb(){return sz};_.Ib=function Stb(a){a.a.preventDefault()};_.Jb=function Ttb(a){switch(a.a.keyCode||0){case 38:case 87:this.k=true;break;case 37:case 65:this.n=true;break;case 40:case 83:this.i=true;break;case 39:case 68:this.o=true;break;case 82:this.p=true;break;case 70:this.j=true;break;case 81:this.b=!this.b;}};_.Kb=function Utb(a){switch(a.a.keyCode||0){case 38:case 87:this.k=false;break;case 37:case 65:this.n=false;break;case 40:case 83:this.i=false;break;case 39:case 68:this.o=false;break;case 82:this.p=false;break;case 70:this.j=false;}};_.Lb=function Vtb(a){a.a.preventDefault();a.a.stopPropagation();switch(sg(a.a)){case 1:this.k=true;break;case 2:this.i=true;}};_.Mb=function Wtb(a){if(qz==Mv){this.f=zl(a)-this.u;this.g=Al(a)-this.v}else{this.f=zl(a)-yg(this.A.A)-this.u;this.g=Al(a)-(Ag(this.A.A)+$wnd.pageYOffset)-this.v}};_.Nb=function Xtb(a){a.a.preventDefault();a.a.stopPropagation();switch(sg(a.a)){case 1:this.k=false;break;case 2:this.i=false;}};_.cM={18:1,21:1,22:1,24:1,25:1,26:1,38:1};_.a=0;_.b=false;_.c=0;_.d=0;_.e=0.005;_.f=0;_.g=0;_.i=false;_.j=false;_.k=false;_.n=false;_.o=false;_.p=false;_.q=1;_.r=0;_.s=null;_.t=0;_.u=0;_.v=0;_=vec.prototype;_.vb=function zec(){D7b(this.b,new Bec(this.a))};_=Bec.prototype=Aec.prototype=new G7b;_.gC=function Cec(){return pF};_.mb=function Dec(){var a,b,c,d;this.a=new HNb(60,CDb(this.C.n),1,20000);this.a.W.d=200;w6b(this.D,new l6b(11193599));this.b=new Qtb(this.a,this.C.b);this.b.q=500;this.b.e=0.1;this.c=new wYb(20000,20000,127,127);zOb(this.c,VRb(new gSb));this.c.U=true;for(a=0,b=this.c.x.Pc();a<b;++a)XSb(Qq(this.c.x.Hc(a),193),35*Math.sin(a/2));DOb(this.c,(zeb(),zeb(),xeb));GOb(this.c);d=new YKb('./static/textures/water.jpg');VKb(d,(ZCb(),YCb));WKb(d,YCb);VSb(d.x,5,5);c=new a2b;X1b(c,new bOb(17663));c.j=d;this.d=new z5b(this.c,c);IMb(this.D,this.d);this.e=Uc()};_.nb=function Eec(a){var b,c;for(b=0,c=this.c.x.Pc();b<c;++b)XSb(Qq(this.c.x.Hc(b),193),35*Math.sin(b/5+(a*0.01+b)/7));this.d.r.Z=true;Ptb(this.b,(Uc()-this.e)*0.001);this.e=Uc();HDb(this.C.n,this.D,this.a,null,false)};_.a=null;_.b=null;_.c=null;_.d=null;_.e=0;var sz=mfb(rPc,'FirstPersonControls',rz),pF=mfb(VOc,'GeometryDynamic$DemoScene',XD);xLc(Wd)(13);