function KUb(){LUb.call(this,5,8,6)}
function zRb(a,b){return a.be(ARb(a,b))}
function Nec(){n7b.call(this);this.d=Au(hnb(Mec(),mMc),250);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new L3b;this.q=new L3b;this.v=0;this.w=0;this.o=0;this.p=0}
function b1b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(gkb(c,gMc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=sjb(n,i);a.e=0}}else if(gkb(c,hMc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=sjb(f,o);a.e=sjb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(gkb(c,iMc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=sjb(g,d)}}else if(gkb(c,jMc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=sjb(n,o);a.e=sjb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(gkb(c,kMc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=sjb(f,o)}}else if(gkb(c,lMc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=sjb(n,i);a.d=sjb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{gNb();eV(fNb,(Osb(),Nsb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&fRb(a.a,a);return a}
YS(871,809,CGc,KUb);YS(1059,1,JGc);_.zb=function iec(){P6b(this.b,new Nec(this.a))};YS(1068,958,{313:1},Nec);_.nb=function Oec(){var a,b;this.n=new sOb(50,eFb(this.D.k),0.01,1000);G3b(this.n._,0,50,500);this.u=new sOb(84,eFb(this.D.k),0.01,1000);a=new tWb(16777215);G3b(a._,0,0,1);sNb(this.F,a);this.r=new JNb;X2b(this.r._,100);sNb(this.r,this.u);sNb(this.F,this.r);this.c=new NVb(this.u);sNb(this.F,this.c);Jec(this);b=new oZb;iZb(b,new S0b(14540253));this.b=new i5b(new KUb,b);sNb(this.r,this.b);CNb(this.c,this.k);CNb(this.b,this.k)};_.ob=function Pec(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Au(this.A.d.ae(j),298);g.hf(this.t);i=this.A.e.b;f=j*i;d=Iu(ujb(f));e=(d+1)%i;J3b(this.a,Au(_ob(this.A.a,e),295),Au(_ob(this.A.a,d),295));this.a.hf(f-d).cf(Au(_ob(this.A.a,d),295));b=Au(zRb(this.A.d,j),298);x3b(this.q.ef(this.a),b);g.cf(this.q.df().hf(15));ANb(this.u,g);ANb(this.b,g);c=Au(this.A.d.ae((j+30/this.A.d.$d())%1).Xe(this.t),298);this.j||c.ef(g).cf(b);K1b(this.u.V,this.u._,c,this.q);b1b(this.u.cb,this.u.V,this.u.cb.b);MVb(this.c);Y0b(this.r.cb,(this.v-this.r.cb.d)*0.05);qFb(this.D.k,this.F,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var wL=hib(GLc,'GeometryExtrudeSplines$DemoScene',1068);WGc(xi)(10);