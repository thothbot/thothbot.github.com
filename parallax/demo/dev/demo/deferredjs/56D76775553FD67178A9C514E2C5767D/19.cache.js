function Qlc(){}
function Ulc(){}
function Xlc(){}
function qGb(a,b){a.f=b}
function Ilc(){t7b.call(this)}
function Mlc(){Mlc=dFc;Llc=new Qlc}
function Zlc(){Zlc=dFc;Olc=new Ulc}
function $lc(){$lc=dFc;Plc=new Xlc}
function OGb(a,b){!a.b&&(a.b=new UPb);a.b.qd(vKc,b)}
function Hlc(a){var b,c;c=new gpb;for(b=0;b<a.j.Sc();b++){Fu(a.j.Kc(b),240);bH==bH?Xob(c,b,new Epb(vu(WR,FGc,300,[new E4b(1,0,0,0),new E4b(0,1,0,0),new E4b(0,0,1,0)]))):Xob(c,b,new Epb(vu(WR,FGc,300,[new E4b(1,0,0,1),new E4b(1,1,0,1),new E4b(0,1,0,1),new E4b(0,0,0,1)])))}return c}
bT(1153,1,OGc);_.Db=function Flc(){V6b(this.c,new Ilc(this.b))};bT(1154,954,{},Ilc);_.ob=function Jlc(){var a,b,c,d,e,f,g,i,j,k,n;this.b=new rOb(40,cFb(this.F.n),1,2000);O3b(this.b.ab,800);d=new VTb(150,150,150);e=new VTb(150,150,150);f=new VTb(150,150,150);g=new qZb;g.j=true;this.c=new o5b(d,g);a3b(this.c.ab,0);qNb(this.G,this.c);b=new rGb((IGb(),HGb),Hlc(e));qGb(b,(yGb(),wGb));j=new e0b((Mlc(),Llc));OGb(iXb(j),b);this.e=new o5b(e,j);a3b(this.e.ab,300);qNb(this.G,this.e);c=new rGb(HGb,Hlc(f));qGb(c,wGb);k=new e0b(Llc);OGb(iXb(k),c);this.f=new o5b(f,k);a3b(this.f.ab,-300);qNb(this.G,this.f);n=new KUb(75,32,16);a=new rGb(HGb,Hlc(n));qGb(a,wGb);i=new e0b(Llc);OGb(iXb(i),a);this.d=new o5b(n,i);a3b(this.d.ab,0);qNb(this.G,this.d)};_.pb=function Klc(a){_0b(this.c.db,0.005);a1b(this.c.db,0.01);_0b(this.e.db,0.005);a1b(this.e.db,0.01);_0b(this.f.db,0.005);a1b(this.f.db,0.01);if(this.d){_0b(this.d.db,0.005);a1b(this.d.db,0.01)}oFb(this.F.n,this.G,this.b,null,false)};var Llc;bT(1155,1,{},Qlc);_.Pd=function Rlc(){return Zlc(),Olc};_.Qd=function Slc(){return $lc(),Plc};var Olc,Plc;bT(1156,1,{},Ulc);_.dc=function Vlc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec4 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nfloat edgeFactorQuad1() {\n\n\tvec2 d = fwidth( vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n\n}\n\nfloat edgeFactorQuad2() {\n\n\tvec2 d = fwidth( 1.0 - vCenter.xy );\n\tvec2 a2 = smoothstep( vec2( 0.0 ), d * 1.5, 1.0 - vCenter.xy );\n\n\treturn min( a2.x, a2.y );\n}\n\nvoid main() {\n\n\tif ( vCenter.w == 0.0 ) {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\n\t} else {\n\n\t\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), min( edgeFactorQuad1(), edgeFactorQuad2() ) );\n\n\t}\n\n\tgl_FragColor.a = 1.0;\n\n}\n'};bT(1157,1,{},Xlc);_.dc=function Ylc(){return 'attribute vec4 center;\nvarying vec4 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var fN=hib(HLc,'MaterialsWireframe$DemoScene',1154),WR=gib(OMc,'Vector4;',1437,jJ),iN=hib(HLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1155),gN=hib(HLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1156),hN=hib(HLc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1157);_Gc(Hi)(19);