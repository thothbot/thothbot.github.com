function CUb(){DUb.call(this,5,8,6)}
function rRb(a,b){return a.ce(sRb(a,b))}
function Jec(){m7b.call(this);this.d=su(anb(Iec(),_Lc),250);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new K3b;this.q=new K3b;this.v=0;this.w=0;this.o=0;this.p=0}
function $0b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(_jb(c,VLc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=ljb(n,i);a.e=0}}else if(_jb(c,WLc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=ljb(f,o);a.e=ljb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(_jb(c,XLc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=ljb(g,d)}}else if(_jb(c,YLc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=ljb(n,o);a.e=ljb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(_jb(c,ZLc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=ljb(f,o)}}else if(_jb(c,$Lc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=ljb(n,i);a.d=ljb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{ZMb();ZU(YMb,(Hsb(),Gsb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&ZQb(a.a,a);return a}
RS(873,811,yGc,CUb);RS(1060,1,FGc);_.zb=function eec(){O6b(this.b,new Jec(this.a))};RS(1069,960,{311:1},Jec);_.nb=function Kec(){var a,b;this.n=new kOb(50,XEb(this.D.k),0.01,1000);F3b(this.n._,0,50,500);this.u=new kOb(84,XEb(this.D.k),0.01,1000);a=new lWb(16777215);F3b(a._,0,0,1);jNb(this.F,a);this.r=new ANb;W2b(this.r._,100);jNb(this.r,this.u);jNb(this.F,this.r);this.c=new FVb(this.u);jNb(this.F,this.c);Fec(this);b=new jZb;dZb(b,new P0b(14540253));this.b=new h5b(new CUb,b);jNb(this.r,this.b);tNb(this.c,this.k);tNb(this.b,this.k)};_.ob=function Lec(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=su(this.A.d.be(j),298);g.lf(this.t);i=this.A.e.b;f=j*i;d=Au(njb(f));e=(d+1)%i;I3b(this.a,su(Uob(this.A.a,e),295),su(Uob(this.A.a,d),295));this.a.lf(f-d).ff(su(Uob(this.A.a,d),295));b=su(rRb(this.A.d,j),298);w3b(this.q.hf(this.a),b);g.ff(this.q.gf().lf(15));rNb(this.u,g);rNb(this.b,g);c=su(this.A.d.be((j+30/this.A.d._d())%1).$e(this.t),298);this.j||c.hf(g).ff(b);H1b(this.u.V,this.u._,c,this.q);$0b(this.u.cb,this.u.V,this.u.cb.b);EVb(this.c);V0b(this.r.cb,(this.v-this.r.cb.d)*0.05);hFb(this.D.k,this.F,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var nL=aib(tLc,'GeometryExtrudeSplines$DemoScene',1069);SGc(xi)(10);