function jmc(){}
function nmc(){}
function qmc(){}
function QGb(a,b){a.f=b}
function bmc(){L7b.call(this)}
function fmc(){fmc=xFc;emc=new jmc}
function smc(){smc=xFc;hmc=new nmc}
function tmc(){tmc=xFc;imc=new qmc}
function mHb(a,b){!a.b&&(a.b=new rQb);a.b.ud(XKc,b)}
function amc(a){var b,c;c=new Epb;for(b=0;b<a.j.Wc();b++){Xu(a.j.Oc(b),240);tpb(c,b,new aqb(Nu(sS,$Gc,298,[new i4b(1,0,0),new i4b(0,1,0),new i4b(0,0,1)])))}return c}
yT(1161,1,hHc);_.Db=function $lc(){l7b(this.c,new bmc(this.b))};yT(1162,961,{},bmc);_.ob=function cmc(){var a,b,c,d,e,f,g,i;this.b=new QOb(40,CFb(this.F.n),1,2000);e4b(this.b.ab,800);c=new sUb(150,150,150);d=new sUb(150,150,150);e=new MZb;e.j=true;this.c=new G5b(c,e);s3b(this.c.ab,-150);QNb(this.G,this.c);b=new RGb((gHb(),eHb),amc(d));QGb(b,(YGb(),WGb));g=new z0b((fmc(),emc));mHb(GXb(g),b);this.e=new G5b(d,g);s3b(this.e.ab,150);QNb(this.G,this.e);i=new hVb(75,32,16);a=new RGb(eHb,amc(i));QGb(a,WGb);f=new z0b(emc);mHb(GXb(f),a);this.d=new G5b(i,f);s3b(this.d.ab,-150);QNb(this.G,this.d)};_.pb=function dmc(a){t1b(this.c.db,0.005);u1b(this.c.db,0.01);t1b(this.e.db,0.005);u1b(this.e.db,0.01);if(this.d){t1b(this.d.db,0.005);u1b(this.d.db,0.01)}OFb(this.F.n,this.G,this.b,null,false)};var emc;yT(1163,1,{},jmc);_.Td=function kmc(){return smc(),hmc};_.Ud=function lmc(){return tmc(),imc};var hmc,imc;yT(1164,1,{},nmc);_.hc=function omc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};yT(1165,1,{},qmc);_.hc=function rmc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var EN=Eib(fMc,'MaterialsWireframe$DemoScene',1162),HN=Eib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1163),FN=Eib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1164),GN=Eib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1165);uHc(Ii)(19);