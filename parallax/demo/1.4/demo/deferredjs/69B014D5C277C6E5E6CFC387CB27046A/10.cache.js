function hTb(){iTb.call(this,5,8,6)}
function YPb(a,b){return a.ee(ZPb(a,b))}
function hcc(){r5b.call(this);this.e=Gu(Ulb(gcc(),bGc),198);this.f=100;this.t=3;this.u=4;this.g=false;this.i=true;this.j=false;this.k=false;this.n=false;this.b=new n2b;this.r=new n2b;this.w=0;this.A=0;this.p=0;this.q=0}
function F_b(a,b,c){var d,e,f,g,i,j,k,n,o,p;p=b.b;d=p[0];e=p[4];f=p[8];g=p[1];i=p[5];j=p[9];k=p[2];n=p[6];o=p[10];if(Uib(c,XFc)){a.e=Math.asin(f<-1?-1:f>1?1:f);if((f<=0?0-f:f)<0.99999){a.d=Math.atan2(-j,o);a.f=Math.atan2(-e,d)}else{a.d=eib(n,i);a.f=0}}else if(Uib(c,YFc)){a.d=Math.asin(-(j<-1?-1:j>1?1:j));if((j<=0?0-j:j)<0.99999){a.e=eib(f,o);a.f=eib(g,i)}else{a.e=Math.atan2(-k,d);a.f=0}}else if(Uib(c,ZFc)){a.d=Math.asin(n<-1?-1:n>1?1:n);if((n<=0?0-n:n)<0.99999){a.e=Math.atan2(-k,o);a.f=Math.atan2(-e,i)}else{a.e=0;a.f=eib(g,d)}}else if(Uib(c,$Fc)){a.e=Math.asin(-(k<-1?-1:k>1?1:k));if((k<=0?0-k:k)<0.99999){a.d=eib(n,o);a.f=eib(g,d)}else{a.d=0;a.f=Math.atan2(-e,i)}}else if(Uib(c,_Fc)){a.f=Math.asin(g<-1?-1:g>1?1:g);if((g<=0?0-g:g)<0.99999){a.d=Math.atan2(-j,i);a.e=Math.atan2(-k,d)}else{a.d=0;a.e=eib(f,o)}}else if(Uib(c,aGc)){a.f=Math.asin(-(e<-1?-1:e>1?1:e));if((e<=0?0-e:e)<0.99999){a.d=eib(n,i);a.e=eib(f,d)}else{a.d=Math.atan2(-j,o);a.e=0}}else{FLb();hU(ELb,(zrb(),yrb),'Euler: .setFromRotationMatrix() given unsupported order: '+c)}a.c=c;!!a.b&&EPb(a.b,a);return a}
eS(861,799,CAc,hTb);eS(1032,1,JAc);_.Cb=function Ebc(){o5b(this.c,new hcc(this.b))};eS(1041,940,{259:1},hcc);_.nb=function icc(){var a,b;this.o=new QMb(50,ODb(this.F.o),0.01,1000);i2b(this.o.ab,0,50,500);this.v=new QMb(84,ODb(this.F.o),0.01,1000);a=new SUb(16777215);i2b(a.ab,0,0,1);RLb(this.G,a);this.s=new gMb;z1b(this.s.ab,100);RLb(this.s,this.v);RLb(this.G,this.s);this.d=new kUb(this.v);RLb(this.G,this.d);dcc(this);b=new QXb;KXb(b,new u_b(14540253));this.c=new L3b(new hTb,b);RLb(this.s,this.c);_Lb(this.d,this.n);_Lb(this.c,this.n)};_.ob=function jcc(a){var b,c,d,e,f,g,i,j;j=a%20000/20000;g=Gu(this.B.e.de(j),246);g.nf(this.u);i=this.B.f.c;f=j*i;d=Ou(gib(f));e=(d+1)%i;l2b(this.b,Gu(Mnb(this.B.b,e),243),Gu(Mnb(this.B.b,d),243));this.b.nf(f-d).hf(Gu(Mnb(this.B.b,d),243));b=Gu(YPb(this.B.e,j),246);_1b(this.r.kf(this.b),b);g.hf(this.r.jf().nf(15));ZLb(this.v,g);ZLb(this.c,g);c=Gu(this.B.e.de((j+30/this.B.e.be())%1).af(this.u),246);this.k||c.kf(g).hf(b);l0b(this.v.W,this.v.ab,c,this.r);F_b(this.v.db,this.v.W,this.v.db.c);jUb(this.d);A_b(this.s.db,(this.w-this.s.db.e)*0.05);$Db(this.F.o,this.G,this.g?this.v:this.o,null,false)};_.f=0;_.g=false;_.i=false;_.j=false;_.k=false;_.n=false;_.p=0;_.q=0;_.t=0;_.u=0;_.w=0;_.A=0;var hL=Vgb(vFc,'GeometryExtrudeSplines$DemoScene',1041);VAc(Hi)(10);