function Nqc(){Fac.call(this);this.b=0;this.c=0}
function c5b(a,b){var c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,A,B,C,D;A=a.a;B=b.c;C=b.d;D=b.e;c=klb(B);i=tlb(B);p=klb(C);s=tlb(C);v=klb(D);w=tlb(D);if(Zlb(b.b,yXc)){f=c*v;g=c*w;n=i*v;o=i*w;gAb(A,0,p*v);gAb(A,4,-p*w);gAb(A,8,s);gAb(A,1,g+n*s);gAb(A,5,f-o*s);gAb(A,9,-i*p);gAb(A,2,o-f*s);gAb(A,6,n+g*s);gAb(A,10,c*p)}else if(Zlb(b.b,zXc)){q=p*v;r=p*w;t=s*v;u=s*w;gAb(A,0,q+u*i);gAb(A,4,t*i-r);gAb(A,8,c*s);gAb(A,1,c*w);gAb(A,5,c*v);gAb(A,9,-i);gAb(A,2,r*i-t);gAb(A,6,u+q*i);gAb(A,10,c*p)}else if(Zlb(b.b,AXc)){q=p*v;r=p*w;t=s*v;u=s*w;gAb(A,0,q-u*i);gAb(A,4,-c*w);gAb(A,8,t+r*i);gAb(A,1,r+t*i);gAb(A,5,c*v);gAb(A,9,u-q*i);gAb(A,2,-c*s);gAb(A,6,i);gAb(A,10,c*p)}else if(Zlb(b.b,BXc)){f=c*v;g=c*w;n=i*v;o=i*w;gAb(A,0,p*v);gAb(A,4,n*s-g);gAb(A,8,f*s+o);gAb(A,1,p*w);gAb(A,5,o*s+f);gAb(A,9,g*s-n);gAb(A,2,-s);gAb(A,6,i*p);gAb(A,10,c*p)}else if(Zlb(b.b,CXc)){d=c*p;e=c*s;j=i*p;k=i*s;gAb(A,0,p*v);gAb(A,4,k-d*w);gAb(A,8,j*w+e);gAb(A,1,w);gAb(A,5,c*v);gAb(A,9,-i*v);gAb(A,2,-s*v);gAb(A,6,e*w+j);gAb(A,10,d-k*w)}else if(Zlb(b.b,DXc)){d=c*p;e=c*s;j=i*p;k=i*s;gAb(A,0,p*v);gAb(A,4,-w);gAb(A,8,s*v);gAb(A,1,d*w+k);gAb(A,5,c*v);gAb(A,9,e*w-j);gAb(A,2,j*w-e);gAb(A,6,i*v);gAb(A,10,k*w+d)}gAb(A,3,0);gAb(A,7,0);gAb(A,11,0);gAb(A,12,0);gAb(A,13,0);gAb(A,14,0);gAb(A,15,1);return a}
GU(1198,1,hSc);_.zb=function Lqc(){fac(this.b,new Nqc(this.a))};GU(1199,973,{334:1},Nqc);_.nb=function Oqc(){var a,b,c,d,e;this.a=new oRb(50,GHb(this.G.k),1,15000);Y6b(this.a._,3200);c=new T1b;S1b(c,($_b(),Z_b));this.d=new y8b(new LXb(100,20,20),c);nQb(this.H,this.d);a=new _Wb(0,10,100,3,1);PRb(a,c5b(new j5b,new w4b(1.5707963267948966,3.141592653589793)));d=new T1b;for(b=0;b<1000;b++){e=new y8b(a,d);j6b(e._,rlb()*4000-2000);k6b(e._,rlb()*4000-2000);Y6b(e._,rlb()*4000-2000);V6b(e.eb,rlb()*4+2);nQb(this.H,e)}this.H.W=false;oIb(this.G.k,false);cIb(this.G.k,new f4b(15658734),1)};_.ob=function Pqc(a){var b,c,d;d=a*5.0E-4;j6b(this.d._,Math.sin(d*0.7)*2000);k6b(this.d._,Math.cos(d*0.5)*2000);Y6b(this.d._,Math.cos(d*0.3)*2000);for(b=1,c=this.H.Q.b;b<c;b++){pu(Sqb(this.H.Q,b),250).Wd(this.d._)}e6b(this.a._,(this.b-this.a._.c)*0.05);f6b(this.a._,(-this.c-this.a._.d)*0.05);MQb(this.a,this.H._);SHb(this.G.k,this.H,this.a,null,false)};_.b=0;_.c=0;var yN=$jb(cXc,'MiscLookAt$DemoScene',1199);vSc(xi)(46);