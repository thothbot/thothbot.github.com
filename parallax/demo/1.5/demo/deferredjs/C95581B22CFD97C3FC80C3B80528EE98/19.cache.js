function Bnc(){}
function Fnc(){}
function Inc(){}
function QHb(a,b){a.e=b}
function tnc(){G9b.call(this)}
function xnc(){xnc=cKc;wnc=new Bnc}
function Knc(){Knc=cKc;znc=new Fnc}
function Lnc(){Lnc=cKc;Anc=new Inc}
function mIb(a,b){!a.a&&(a.a=new TRb);a.a.od(uPc,b)}
function snc(a){var b,c;c=new Aqb;for(b=0;b<a.i.Qc();b++){ru(a.i.Ic(b),241);pqb(c,b,new Yqb(hu(WS,ELc,299,[new a6b(1,0,0),new a6b(0,1,0),new a6b(0,0,1)])))}return c}
aU(1174,1,NLc);_.zb=function qnc(){g9b(this.b,new tnc(this.a))};aU(1175,973,{},tnc);_.nb=function unc(){var a,b,c,d,e,f,g,i;this.a=new mQb(40,CGb(this.G.k),1,2000);Y5b(this.a._,800);c=new WVb(150,150,150);d=new WVb(150,150,150);e=new q_b;e.i=true;this.b=new y7b(c,e);j5b(this.b._,-150);jPb(this.H,this.b);b=new RHb((gIb(),eIb),snc(d));QHb(b,(YHb(),WHb));g=new q2b((xnc(),wnc));mIb(jZb(g),b);this.d=new y7b(d,g);j5b(this.d._,150);jPb(this.H,this.d);i=new LWb(75,32,16);a=new RHb(eIb,snc(i));QHb(a,WHb);f=new q2b(wnc);mIb(jZb(f),a);this.c=new y7b(i,f);j5b(this.c._,-150);jPb(this.H,this.c)};_.ob=function vnc(a){k3b(this.b.cb,0.005);l3b(this.b.cb,0.01);k3b(this.d.cb,0.005);l3b(this.d.cb,0.01);if(this.c){k3b(this.c.cb,0.005);l3b(this.c.cb,0.01)}OGb(this.G.k,this.H,this.a,null,false)};var wnc;aU(1176,1,{},Bnc);_.Od=function Cnc(){return Knc(),znc};_.Pd=function Dnc(){return Lnc(),Anc};var znc,Anc;aU(1177,1,{},Fnc);_.nc=function Gnc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};aU(1178,1,{},Inc);_.nc=function Jnc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var eN=Ajb(GQc,'MaterialsWireframe$DemoScene',1175),hN=Ajb(GQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1176),fN=Ajb(GQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1177),gN=Ajb(GQc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1178);_Lc(xi)(19);