function HWb(){IWb.call(this,5,8,6)}
function wTb(a,b){return a.fe(xTb(a,b))}
function Tgc(){D9b.call(this);this.d=zu(yob(Sgc(),sRc),251);this.e=100;this.s=3;this.t=4;this.f=false;this.g=true;this.i=false;this.j=false;this.k=false;this.a=new Y5b;this.q=new Y5b;this.v=0;this.w=0;this.o=0;this.p=0}
function n3b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.a;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(wlb(c,mRc)){a.d=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.c=Math.atan2(-j,o);a.e=Math.atan2(-e,d)}else{a.c=Ikb(n,i);a.e=0}}else if(wlb(c,nRc)){a.c=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.d=Ikb(f,o);a.e=Ikb(g,i)}else{a.d=Math.atan2(-k,d);a.e=0}}else if(wlb(c,oRc)){a.c=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.d=Math.atan2(-k,o);a.e=Math.atan2(-e,i)}else{a.d=0;a.e=Ikb(g,d)}}else if(wlb(c,pRc)){a.d=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.c=Ikb(n,o);a.e=Ikb(g,d)}else{a.c=0;a.e=Math.atan2(-e,i)}}else if(wlb(c,qRc)){a.e=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.c=Math.atan2(-j,i);a.d=Math.atan2(-k,d)}else{a.c=0;a.d=Ikb(f,o)}}else if(wlb(c,rRc)){a.e=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.c=Ikb(n,i);a.d=Ikb(f,d)}else{a.c=Math.atan2(-j,o);a.d=0}}else{WOb();nW(VOb,(dub(),cub),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.b=c;!!a.a&&cTb(a.a,a);return a}
fU(882,820,ELc,HWb);fU(1073,1,LLc);_.zb=function ogc(){d9b(this.b,new Tgc(this.a))};fU(1082,970,{314:1},Tgc);_.nb=function Ugc(){var a,b;this.n=new jQb(50,zGb(this.G.k),0.01,1000);T5b(this.n._,0,50,500);this.u=new jQb(84,zGb(this.G.k),0.01,1000);a=new qYb(16777215);T5b(a._,0,0,1);gPb(this.H,a);this.r=new yPb;h5b(this.r._,100);gPb(this.r,this.u);gPb(this.H,this.r);this.c=new KXb(this.u);gPb(this.H,this.c);Pgc(this);b=new n_b;h_b(b,new c3b(14540253));this.b=new v7b(new HWb,b);gPb(this.r,this.b);rPb(this.c,this.k);rPb(this.b,this.k)};_.ob=function Vgc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=zu(this.A.d.ee(j),299);g.of(this.t);i=this.A.e.b;f=j*i;d=Hu(Kkb(f));e=(d+1)%i;W5b(this.a,zu(qqb(this.A.a,e),296),zu(qqb(this.A.a,d),296));this.a.of(f-d).jf(zu(qqb(this.A.a,d),296));b=zu(wTb(this.A.d,j),299);J5b(this.q.lf(this.a),b);g.jf(this.q.kf().of(15));oPb(this.u,g);oPb(this.b,g);c=zu(this.A.d.ee((j+30/this.A.d.ce())%1).bf(this.t),299);this.j||c.lf(g).jf(b);W3b(this.u.V,this.u._,c,this.q);n3b(this.u.cb,this.u.V,this.u.cb.b);JXb(this.c);i3b(this.r.cb,(this.v-this.r.cb.d)*0.05);LGb(this.G.k,this.H,this.f?this.u:this.n,null,false)};_.e=0;_.f=false;_.g=false;_.i=false;_.j=false;_.k=false;_.o=0;_.p=0;_.s=0;_.t=0;_.v=0;_.w=0;var DL=xjb(MQc,'GeometryExtrudeSplines$DemoScene',1082);ZLc(xi)(10);