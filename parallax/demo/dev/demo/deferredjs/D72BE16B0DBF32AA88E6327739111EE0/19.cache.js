function Pnc(){}
function Tnc(){}
function Wnc(){}
function KHb(a,b){a.e=b}
function Hnc(){p9b.call(this)}
function Lnc(){Lnc=sMc;Knc=new Pnc}
function Ync(){Ync=sMc;Nnc=new Tnc}
function Znc(){Znc=sMc;Onc=new Wnc}
function gIb(a,b){!a.a&&(a.a=new GRb);a.a.nd(RRc,b)}
function Gnc(a){var b,c;c=new uqb;for(b=0;b<a.i.Pc();b++){Au(a.i.Hc(b),240);jqb(c,b,new Sqb(qu(_S,TNc,298,[new N5b(1,0,0),new N5b(0,1,0),new N5b(0,0,1)])))}return c}
fU(1170,1,aOc);_.zb=function Enc(){R8b(this.b,new Hnc(this.a))};fU(1171,970,{},Hnc);_.nb=function Inc(){var a,b,c,d,e,f,g,i;this.a=new dQb(40,wGb(this.G.k),1,2000);J5b(this.a._,800);c=new HVb(150,150,150);d=new HVb(150,150,150);e=new b_b;e.i=true;this.b=new j7b(c,e);W4b(this.b._,-150);dPb(this.H,this.b);b=new LHb((aIb(),$Hb),Gnc(d));KHb(b,(SHb(),QHb));g=new b2b((Lnc(),Knc));gIb(WYb(g),b);this.d=new j7b(d,g);W4b(this.d._,150);dPb(this.H,this.d);i=new wWb(75,32,16);a=new LHb($Hb,Gnc(i));KHb(a,QHb);f=new b2b(Knc);gIb(WYb(f),a);this.c=new j7b(i,f);W4b(this.c._,-150);dPb(this.H,this.c)};_.ob=function Jnc(a){X2b(this.b.cb,0.005);Y2b(this.b.cb,0.01);X2b(this.d.cb,0.005);Y2b(this.d.cb,0.01);if(this.c){X2b(this.c.cb,0.005);Y2b(this.c.cb,0.01)}IGb(this.G.k,this.H,this.a,null,false)};var Knc;fU(1172,1,{},Pnc);_.Nd=function Qnc(){return Ync(),Nnc};_.Od=function Rnc(){return Znc(),Onc};var Nnc,Onc;fU(1173,1,{},Tnc);_.mc=function Unc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};fU(1174,1,{},Wnc);_.mc=function Xnc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var jN=vjb(bTc,'MaterialsWireframe$DemoScene',1171),mN=vjb(bTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1172),kN=vjb(bTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1173),lN=vjb(bTc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1174);oOc(xi)(19);