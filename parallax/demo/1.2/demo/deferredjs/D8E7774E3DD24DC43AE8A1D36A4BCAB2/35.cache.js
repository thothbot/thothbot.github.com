function I8b(){}
function dgb(b,a){b.deleteBuffer(a)}
function egb(b,a){b.deleteTexture(a)}
function J8b(a){this.a=a;iTb.call(this)}
function upb(a,b){if(!b.z)return;egb(a.D.b,b.z);--a.H.a.c}
function tpb(a,b){var c,d;if(!b.P)return;b.P=false;b.I=null;b.J=null;if(b)for(d=b9(z6(b.i.o));d.a.xc();){c=ms(i9(d),149);vpb(a,c)}}
function vpb(a,b){var c,d,e;dgb(a.D.b,b.W);dgb(a.D.b,b.P);dgb(a.D.b,b.T);dgb(a.D.b,b.H);dgb(a.D.b,b.V);dgb(a.D.b,b.U);dgb(a.D.b,b.R);dgb(a.D.b,b.S);dgb(a.D.b,b.J);dgb(a.D.b,b.L);if(b.$!=0){for(e=0;e<b.$;++e){dgb(a.D.b,ns(u9(b.O,e)))}}if(b.Z!=0){for(e=0;e<b.Z;++e){dgb(a.D.b,ns(u9(b.N,e)))}}if(b.I){for(d=new t8(b.I);d.b<d.d.Mc();){c=ms(r8(d),128);dgb(a.D.b,c.f)}}--a.H.a.a}
_=D8b.prototype;_.pb=function H8b(){eTb(this.b,new J8b(this.a))};_=J8b.prototype=I8b.prototype=new hTb;_.gC=function K8b(){return EG};_.md=function L8b(){Mdb(this,new bzb(60,Eeb(this.A.D),1,10000))};_.gb=function M8b(){this.z.W.b=200;hyb(this.B,this.z)};_.ld=function N8b(){};_.hb=function O8b(a){var b,c,d,e;if(this.a.a){kyb(this.B,this.a.a);tpb(this.A,this.a.a)}!!this.a.b&&upb(this.A,this.a.b);b=new KJb(50,ss(Math.random()*64),ss(Math.random()*32));this.a.b=new Jwb((d=$doc.createElement(qmc),d.width=256,d.height=256,e=d.getContext(rmc),Jc(e,Jmc+L4(Math.random()*256)+_ic+L4(Math.random()*256)+_ic+L4(Math.random()*256)+bic),e.fillRect(0,0,256,256),d));Bwb(this.a.b,(C3(),C3(),B3));c=new mOb;kOb(c,this.a.b);c.g=true;this.a.a=new hRb(b,c);hyb(this.B,this.a.a)};_.a=null;var EG=O3(rlc,'MiscMemoryTestGeometries$DemoScene');Rhc(Vd)(35);