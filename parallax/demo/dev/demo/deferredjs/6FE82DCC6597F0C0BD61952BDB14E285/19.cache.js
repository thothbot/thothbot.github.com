function Jlc(){}
function Nlc(){}
function Qlc(){}
function jGb(a,b){a.e=b}
function Blc(){m7b.call(this)}
function Flc(){Flc=YEc;Elc=new Jlc}
function Slc(){Slc=YEc;Hlc=new Nlc}
function Tlc(){Tlc=YEc;Ilc=new Qlc}
function HGb(a,b){!a.a&&(a.a=new NPb);a.a.nd(lKc,b)}
function Alc(a){var b,c;c=new _ob;for(b=0;b<a.i.Pc();b++){su(a.i.Hc(b),240);RG==RG?Qob(c,b,new xpb(iu(KR,wGc,300,[new x4b(1,0,0,0),new x4b(0,1,0,0),new x4b(0,0,1,0)]))):Qob(c,b,new xpb(iu(KR,wGc,300,[new x4b(1,0,0,1),new x4b(1,1,0,1),new x4b(0,1,0,1),new x4b(0,0,0,1)])))}return c}
RS(1159,1,FGc);_.zb=function ylc(){O6b(this.b,new Blc(this.a))};RS(1160,960,{},Blc);_.nb=function Clc(){var a,b,c,d,e,f,g,i,j,k,n;this.a=new kOb(40,XEb(this.D.k),1,2000);H3b(this.a._,800);d=new OTb(150,150,150);e=new OTb(150,150,150);f=new OTb(150,150,150);g=new jZb;g.i=true;this.b=new h5b(d,g);V2b(this.b._,0);jNb(this.F,this.b);b=new kGb((BGb(),AGb),Alc(e));jGb(b,(rGb(),pGb));j=new Z_b((Flc(),Elc));HGb(bXb(j),b);this.d=new h5b(e,j);V2b(this.d._,300);jNb(this.F,this.d);c=new kGb(AGb,Alc(f));jGb(c,pGb);k=new Z_b(Elc);HGb(bXb(k),c);this.e=new h5b(f,k);V2b(this.e._,-300);jNb(this.F,this.e);n=new DUb(75,32,16);a=new kGb(AGb,Alc(n));jGb(a,pGb);i=new Z_b(Elc);HGb(bXb(i),a);this.c=new h5b(n,i);V2b(this.c._,0);jNb(this.F,this.c)};_.ob=function Dlc(a){U0b(this.b.cb,0.005);V0b(this.b.cb,0.01);U0b(this.d.cb,0.005);V0b(this.d.cb,0.01);U0b(this.e.cb,0.005);V0b(this.e.cb,0.01);if(this.c){U0b(this.c.cb,0.005);V0b(this.c.cb,0.01)}hFb(this.D.k,this.F,this.a,null,false)};var Elc;RS(1161,1,{},Jlc);_.Md=function Klc(){return Slc(),Hlc};_.Nd=function Llc(){return Tlc(),Ilc};var Hlc,Ilc;RS(1162,1,{},Nlc);_.ac=function Olc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};RS(1163,1,{},Qlc);_.ac=function Rlc(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var VM=aib(vLc,'MaterialsWireframe$DemoScene',1160),KR=_hb(CMc,'Vector4;',1443,ZI),YM=aib(vLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1161),WM=aib(vLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1162),XM=aib(vLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1163);SGc(xi)(19);