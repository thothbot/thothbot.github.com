function bic(){}
function fic(){}
function iic(){}
function MEb(a,b){a.e=b}
function Vhc(){k5b.call(this)}
function lic(){lic=Xyc;aic=new iic}
function kic(){kic=Xyc;_hc=new fic}
function Zhc(){Zhc=Xyc;Yhc=new bic}
function iFb(a,b){!a.a&&(a.a=new lOb);a.a.od(gEc,b)}
function Uhc(a){var b,c;c=new Mnb;for(b=0;b<a.i.Qc();b++){tu(a.i.Ic(b),188);PG==PG?Bnb(c,b,new iob(ju(NQ,sAc,248,[new V2b(1,0,0,0),new V2b(0,1,0,0),new V2b(0,0,1,0)]))):Bnb(c,b,new iob(ju(NQ,sAc,248,[new V2b(1,0,0,1),new V2b(1,1,0,1),new V2b(0,1,0,1),new V2b(0,0,0,1)])))}return c}
UR(1123,1,BAc);_.yb=function Shc(){h5b(this.b,new Vhc(this.a))};UR(1124,946,{},Vhc);_.mb=function Whc(){var a,b,c,d,e,f,g,i,j,k,n;this.a=new JMb(40,HDb(this.D.n),1,2000);d2b(this.a._,800);d=new mSb(150,150,150);e=new mSb(150,150,150);f=new mSb(150,150,150);g=new JXb;g.i=true;this.b=new E3b(d,g);r1b(this.b._,0);KLb(this.F,this.b);b=new NEb((cFb(),bFb),Uhc(e));MEb(b,(UEb(),SEb));j=new x$b((Zhc(),Yhc));iFb(BVb(j),b);this.d=new E3b(e,j);r1b(this.d._,300);KLb(this.F,this.d);c=new NEb(bFb,Uhc(f));MEb(c,SEb);k=new x$b(Yhc);iFb(BVb(k),c);this.e=new E3b(f,k);r1b(this.e._,-300);KLb(this.F,this.e);n=new bTb(75,32,16);a=new NEb(bFb,Uhc(n));MEb(a,SEb);i=new x$b(Yhc);iFb(BVb(i),a);this.c=new E3b(n,i);r1b(this.c._,0);KLb(this.F,this.c)};_.nb=function Xhc(a){s_b(this.b.cb,0.005);t_b(this.b.cb,0.01);s_b(this.d.cb,0.005);t_b(this.d.cb,0.01);s_b(this.e.cb,0.005);t_b(this.e.cb,0.01);if(this.c){s_b(this.c.cb,0.005);t_b(this.c.cb,0.01)}TDb(this.D.n,this.F,this.a,null,false)};var Yhc;UR(1125,1,{},bic);_.Md=function cic(){return kic(),_hc};_.Nd=function dic(){return lic(),aic};var _hc,aic;UR(1126,1,{},fic);_.bc=function gic(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};UR(1127,1,{},iic);_.bc=function jic(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var sM=Ogb(mFc,'MaterialsWireframe$DemoScene',1124),NQ=Ngb(tGc,'Vector4;',1370,XI),wM=Ogb(mFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1125),uM=Ogb(mFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1126),vM=Ogb(mFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1127);NAc(xi)(19);