function jmc(){}
function nmc(){}
function qmc(){}
function LGb(a,b){a.f=b}
function bmc(){O7b.call(this)}
function fmc(){fmc=yFc;emc=new jmc}
function smc(){smc=yFc;hmc=new nmc}
function tmc(){tmc=yFc;imc=new qmc}
function hHb(a,b){!a.b&&(a.b=new nQb);a.b.ud(XKc,b)}
function amc(a){var b,c;c=new Bpb;for(b=0;b<a.j.Wc();b++){Xu(a.j.Oc(b),240);yH==yH?qpb(c,b,new Zpb(Nu(rS,$Gc,300,[new Z4b(1,0,0,0),new Z4b(0,1,0,0),new Z4b(0,0,1,0)]))):qpb(c,b,new Zpb(Nu(rS,$Gc,300,[new Z4b(1,0,0,1),new Z4b(1,1,0,1),new Z4b(0,1,0,1),new Z4b(0,0,0,1)])))}return c}
yT(1159,1,hHc);_.Db=function $lc(){o7b(this.c,new bmc(this.b))};yT(1160,960,{},bmc);_.ob=function cmc(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new MOb(40,xFb(this.F.n),1,2000);h4b(this.b.ab,800);d=new oUb(150,150,150);e=new oUb(150,150,150);f=new oUb(150,150,150);g=new LZb;g.j=true;this.c=new J5b(d,g);v3b(this.c.ab,0);LNb(this.G,this.c);b=new MGb((bHb(),aHb),amc(e));LGb(b,(TGb(),RGb));j=new z0b((fmc(),emc));hHb(DXb(j),b);this.e=new J5b(e,j);v3b(this.e.ab,300);LNb(this.G,this.e);c=new MGb(aHb,amc(f));LGb(c,RGb);k=new z0b(emc);hHb(DXb(k),c);this.f=new J5b(f,k);v3b(this.f.ab,-300);LNb(this.G,this.f);n=new dVb(75,32,16);a=new MGb(aHb,amc(n));LGb(a,RGb);i=new z0b(emc);hHb(DXb(i),a);this.d=new J5b(n,i);v3b(this.d.ab,0);LNb(this.G,this.d)};_.pb=function dmc(a){u1b(this.c.db,0.005);v1b(this.c.db,0.01);u1b(this.e.db,0.005);v1b(this.e.db,0.01);u1b(this.f.db,0.005);v1b(this.f.db,0.01);if(this.d){u1b(this.d.db,0.005);v1b(this.d.db,0.01)}JFb(this.F.n,this.G,this.b,null,false)};var emc;yT(1161,1,{},jmc);_.Td=function kmc(){return smc(),hmc};_.Ud=function lmc(){return tmc(),imc};var hmc,imc;yT(1162,1,{},nmc);_.hc=function omc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};yT(1163,1,{},qmc);_.hc=function rmc(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var CN=Bib(fMc,'MaterialsWireframe$DemoScene',1160),rS=Aib(mNc,'Vector4;',1443,GJ),FN=Bib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1161),DN=Bib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1162),EN=Bib(fMc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1163);uHc(Ii)(19);