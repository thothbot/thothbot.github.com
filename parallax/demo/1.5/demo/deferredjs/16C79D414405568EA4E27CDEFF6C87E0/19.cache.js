function rnc(){}
function vnc(){}
function ync(){}
function GHb(a,b){a.e=b}
function jnc(){w9b.call(this)}
function nnc(){nnc=UJc;mnc=new rnc}
function Anc(){Anc=UJc;pnc=new vnc}
function Bnc(){Bnc=UJc;qnc=new ync}
function cIb(a,b){!a.a&&(a.a=new JRb);a.a.od(jPc,b)}
function inc(a){var b,c;c=new qqb;for(b=0;b<a.i.Qc();b++){pu(a.i.Ic(b),241);fqb(c,b,new Oqb(fu(SS,uLc,299,[new S5b(1,0,0),new S5b(0,1,0),new S5b(0,0,1)])))}return c}
YT(1172,1,DLc);_.zb=function gnc(){Y8b(this.b,new jnc(this.a))};YT(1173,971,{},jnc);_.nb=function knc(){var a,b,c,d,e,f,g,i;this.a=new cQb(40,sGb(this.G.k),1,2000);O5b(this.a._,800);c=new MVb(150,150,150);d=new MVb(150,150,150);e=new g_b;e.i=true;this.b=new o7b(c,e);_4b(this.b._,-150);_Ob(this.H,this.b);b=new HHb((YHb(),WHb),inc(d));GHb(b,(OHb(),MHb));g=new g2b((nnc(),mnc));cIb(_Yb(g),b);this.d=new o7b(d,g);_4b(this.d._,150);_Ob(this.H,this.d);i=new BWb(75,32,16);a=new HHb(WHb,inc(i));GHb(a,MHb);f=new g2b(mnc);cIb(_Yb(f),a);this.c=new o7b(i,f);_4b(this.c._,-150);_Ob(this.H,this.c)};_.ob=function lnc(a){a3b(this.b.cb,0.005);b3b(this.b.cb,0.01);a3b(this.d.cb,0.005);b3b(this.d.cb,0.01);if(this.c){a3b(this.c.cb,0.005);b3b(this.c.cb,0.01)}EGb(this.G.k,this.H,this.a,null,false)};var mnc;YT(1174,1,{},rnc);_.Od=function snc(){return Anc(),pnc};_.Pd=function tnc(){return Bnc(),qnc};var pnc,qnc;YT(1175,1,{},vnc);_.nc=function wnc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};YT(1176,1,{},ync);_.nc=function znc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var aN=qjb(uQc,'MaterialsWireframe$DemoScene',1173),dN=qjb(uQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1174),bN=qjb(uQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1175),cN=qjb(uQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1176);RLc(xi)(19);