function cTb(){dTb.call(this,5,8,6)}
function VPb(a,b){return a.be(WPb(a,b))}
function Ybc(){u5b.call(this);this.d=su(Qlb(Xbc(),rGc),198);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new p2b;this.q=new p2b;this.v=0;this.w=0;this.o=0;this.p=0}
function G_b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Qib(c,lGc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=aib(n,i);a.e=0}}else if(Qib(c,mGc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=aib(f,o);a.e=aib(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(Qib(c,nGc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=aib(g,d)}}else if(Qib(c,oGc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=aib(n,o);a.e=aib(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(Qib(c,pGc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=aib(f,o)}}else if(Qib(c,qGc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=aib(n,i);a.d=aib(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{CLb();dU(BLb,(vrb(),urb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&BPb(a.a,a);return a}
XR(866,805,VAc,cTb);XR(1035,1,aBc);_.yb=function tbc(){r5b(this.b,new Ybc(this.a))};XR(1044,946,{260:1},Ybc);_.mb=function Zbc(){var a,b;this.n=new NMb(50,LDb(this.D.n),0.01,1000);k2b(this.n._,0,50,500);this.u=new NMb(84,LDb(this.D.n),0.01,1000);a=new NUb(16777215);k2b(a._,0,0,1);OLb(this.F,a);this.r=new dMb;B1b(this.r._,100);OLb(this.r,this.u);OLb(this.F,this.r);this.c=new fUb(this.u);OLb(this.F,this.c);Ubc(this);b=new LXb;FXb(b,new v_b(14540253));this.b=new N3b(new cTb,b);OLb(this.r,this.b);YLb(this.c,this.k);YLb(this.b,this.k)};_.nb=function $bc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=su(this.A.d.ae(j),247);g.kf(this.t);i=this.A.e.b;f=j*i;d=Au(cib(f));e=(d+1)%i;n2b(this.a,su(Inb(this.A.a,e),244),su(Inb(this.A.a,d),244));this.a.kf(f-d).ef(su(Inb(this.A.a,d),244));b=su(VPb(this.A.d,j),247);b2b(this.q.gf(this.a),b);g.ef(this.q.ff().kf(15));WLb(this.u,g);WLb(this.b,g);c=su(this.A.d.ae((j+30/this.A.d.$d())%1).Ze(this.t),247);this.j||c.gf(g).ef(b);m0b(this.u.V,this.u._,c,this.q);G_b(this.u.cb,this.u.V,this.u.cb.b);eUb(this.c);B_b(this.r.cb,(this.v-this.r.cb.d)*0.05);XDb(this.D.n,this.F,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var TK=Rgb(LFc,'GeometryExtrudeSplines$DemoScene',1044);mBc(wi)(9);