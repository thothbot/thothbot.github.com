function iic(){}
function mic(){}
function pic(){}
function TEb(a,b){a.f=b}
function aic(){r5b.call(this)}
function eic(){eic=czc;dic=new iic}
function ric(){ric=czc;gic=new mic}
function sic(){sic=czc;hic=new pic}
function pFb(a,b){!a.b&&(a.b=new sOb);a.b.rd(pEc,b)}
function _hc(a){var b,c;c=new Tnb;for(b=0;b<a.j.Tc();b++){Gu(a.j.Lc(b),188);_G==_G?Inb(c,b,new pob(wu(ZQ,AAc,248,[new a3b(1,0,0,0),new a3b(0,1,0,0),new a3b(0,0,1,0)]))):Inb(c,b,new pob(wu(ZQ,AAc,248,[new a3b(1,0,0,1),new a3b(1,1,0,1),new a3b(0,1,0,1),new a3b(0,0,0,1)])))}return c}
eS(1117,1,JAc);_.Cb=function Zhc(){o5b(this.c,new aic(this.b))};eS(1118,940,{},aic);_.nb=function bic(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new QMb(40,ODb(this.F.o),1,2000);k2b(this.b.ab,800);d=new tSb(150,150,150);e=new tSb(150,150,150);f=new tSb(150,150,150);g=new QXb;g.j=true;this.c=new L3b(d,g);y1b(this.c.ab,0);RLb(this.G,this.c);b=new UEb((jFb(),iFb),_hc(e));TEb(b,(_Eb(),ZEb));j=new E$b((eic(),dic));pFb(IVb(j),b);this.e=new L3b(e,j);y1b(this.e.ab,300);RLb(this.G,this.e);c=new UEb(iFb,_hc(f));TEb(c,ZEb);k=new E$b(dic);pFb(IVb(k),c);this.f=new L3b(f,k);y1b(this.f.ab,-300);RLb(this.G,this.f);n=new iTb(75,32,16);a=new UEb(iFb,_hc(n));TEb(a,ZEb);i=new E$b(dic);pFb(IVb(i),a);this.d=new L3b(n,i);y1b(this.d.ab,0);RLb(this.G,this.d)};_.ob=function cic(a){z_b(this.c.db,0.005);A_b(this.c.db,0.01);z_b(this.e.db,0.005);A_b(this.e.db,0.01);z_b(this.f.db,0.005);A_b(this.f.db,0.01);if(this.d){z_b(this.d.db,0.005);A_b(this.d.db,0.01)}$Db(this.F.o,this.G,this.b,null,false)};var dic;eS(1119,1,{},iic);_.Pd=function jic(){return ric(),gic};_.Qd=function kic(){return sic(),hic};var gic,hic;eS(1120,1,{},mic);_.ec=function nic(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};eS(1121,1,{},pic);_.ec=function qic(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var FM=Vgb(xFc,'MaterialsWireframe$DemoScene',1118),ZQ=Ugb(EGc,'Vector4;',1364,hJ),IM=Vgb(xFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1119),GM=Vgb(xFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1120),HM=Vgb(xFc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1121);VAc(Hi)(19);