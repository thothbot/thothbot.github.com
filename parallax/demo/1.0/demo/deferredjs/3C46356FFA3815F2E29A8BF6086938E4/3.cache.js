function pKb(){}
function qKb(){pHb.call(this)}
function tGb(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E;C=a.E.b;hr(l7(a.k,0),112).Mc();D=a.E;E=b.E;i=a.n;j=b.n;y=hr(l7(a.k,0),112);z=hr(l7(b.k,0),112);k=new Y8;if(a.r){for(n=0;n<a.r.b;++n){o=hr(l7(a.r,n),175).H;R4(k,x2(o),x2(n))}}for(n=0,p=E.b;n<p;++n){A=hr((X5(n,E.b),E.a[n]),156);B=A.Ld();_q(D.a,D.b++,B)}for(n=0,p=j.Mc();n<p;++n){d=hr(j.Ec(n),144);e=null;g=d.o;f=d.n;!!d&&(e=new Pvb(d.b+C,d.c+C,d.d+C));e.i.Md(d.i);for(q=0,r=g.Mc();q<r;++q){v=hr(g.Ec(q),156).Ld();e.o.Dc(v)}qvb(e.f,d.f);for(q=0,r=f.b;q<r;++q){c=hr((X5(q,f.b),f.a[q]),143);h7(e.n,new Avb(c.c))}if(d.g>=0&&b.r.b>0){s=hr(l7(b.r,d.g),175);t=s.H;if(J4(k,x2(t))){u=a.r.b;R4(k,x2(t),x2(u));h7(a.r,s);e.g=u}}e.e.Md(d.e);i.Dc(e)}for(n=0,p=z.Mc();n<p;++n){w=hr(z.Ec(n),112);x=new r7;for(q=0,r=w.Mc();q<r;++q)h7(x,new Sxb(hr(w.Ec(q),152).a,hr(w.Ec(q),152).b));y.Dc(x)}}
var pec='./static/textures/sprites/disc.png',qec=':texture',rec='CustomAttributesParticles2$DemoScene';_=kKb.prototype;_.nb=function oKb(){lHb(this.b,new qKb(this.a))};_=qKb.prototype=pKb.prototype=new oHb;_.gC=function rKb(){return SB};_.pd=function sKb(){Bbb(this,new jvb(45,tcb(this.r.C),1,10000))};_.eb=function tKb(){var a,b,c,d,e,f,g,i;this.q.D.b=300;zub(this.s,this.q);this.a=new Y8;R4(this.a,hec,new ozb((yzb(),uzb),new r7));R4(this.a,iec,new ozb(tzb,new r7));d=new Y8;R4(d,jec,new dsb((ysb(),ksb),new X1(1)));R4(d,F3b,new dsb(jsb,new Avb(16777215)));R4(d,kec,new esb(qsb,x2(0),(wGb(),yGb(pec,(Jtb(),Itb),null))));htb(hr(d.e[qec],135).c,(Mlb(),Llb));itb(hr(d.e[qec],135).c,Llb);c=new MEb;c.S=d;FBb(c,this.a);c.T=mec;c.G=nec;a=new pAb(100,68,38);this.c=a.E.b;b=new Fzb(80,80,80,10,10,10);tGb(a,b);this.b=new PFb(a,c);i=this.b.j.E;g=hr(M4(this.a,hec),158).k;f=hr(M4(this.a,iec),158).k;for(e=0;e<i.b;++e){i7(f,e,new Avb(16777215));if(e<this.c){i7(g,e,new X1(10));uvb(hr((X5(e,f.b),f.a[e]),143),0.009999999776482582+0.10000000149011612*(e/this.c),0.9900000095367432,(hr((X5(e,i.b),i.a[e]),156).d+100)/200)}else{i7(g,e,new X1(40));uvb(hr((X5(e,f.b),f.a[e]),143),0.6000000238418579,0.75,0.5+hr((X5(e,i.b),i.a[e]),156).d/80)}}zub(this.s,this.b)};_.od=function uKb(){};_.fb=function vKb(a){var b,c,d;c=a*0.005;$xb(this.b.G,0.02*c);tyb(this.b.G,0.02*c);for(b=0;b<hr(M4(this.a,hec),158).k.b;++b){d=hr(M4(this.a,hec),158).k;b<this.c&&p7(d,b,new X1(16+12*Math.sin(0.1*b+c)))}hr(M4(this.a,hec),158).g=true};_.a=null;_.b=null;_.c=0;var SB=z1(Tcc,rec);eWb(be)(3);