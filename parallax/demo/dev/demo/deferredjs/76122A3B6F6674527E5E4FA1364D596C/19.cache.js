function toc(){}
function xoc(){}
function Aoc(){}
function oIb(a,b){a.f=b}
function loc(){V9b.call(this)}
function poc(){poc=YMc;ooc=new toc}
function Coc(){Coc=YMc;roc=new xoc}
function Doc(){Doc=YMc;soc=new Aoc}
function MIb(a,b){!a.b&&(a.b=new kSb);a.b.ud(xSc,b)}
function koc(a){var b,c;c=new $qb;for(b=0;b<a.j.Wc();b++){Xu(a.j.Oc(b),240);Pqb(c,b,new wrb(Nu(DT,zOc,298,[new r6b(1,0,0),new r6b(0,1,0),new r6b(0,0,1)])))}return c}
JU(1173,1,IOc);_.Db=function ioc(){v9b(this.c,new loc(this.b))};JU(1174,973,{},loc);_.ob=function moc(){var a,b,c,d,e,f,g,i;this.b=new JQb(40,aHb(this.H.n),1,2000);n6b(this.b.ab,800);c=new lWb(150,150,150);d=new lWb(150,150,150);e=new H_b;e.j=true;this.c=new P7b(c,e);A5b(this.c.ab,-150);JPb(this.I,this.c);b=new pIb((GIb(),EIb),koc(d));oIb(b,(wIb(),uIb));g=new H2b((poc(),ooc));MIb(AZb(g),b);this.e=new P7b(d,g);A5b(this.e.ab,150);JPb(this.I,this.e);i=new aXb(75,32,16);a=new pIb(EIb,koc(i));oIb(a,uIb);f=new H2b(ooc);MIb(AZb(f),a);this.d=new P7b(i,f);A5b(this.d.ab,-150);JPb(this.I,this.d)};_.pb=function noc(a){B3b(this.c.db,0.005);C3b(this.c.db,0.01);B3b(this.e.db,0.005);C3b(this.e.db,0.01);if(this.d){B3b(this.d.db,0.005);C3b(this.d.db,0.01)}mHb(this.H.n,this.I,this.b,null,false)};var ooc;JU(1175,1,{},toc);_.Ud=function uoc(){return Coc(),roc};_.Vd=function voc(){return Doc(),soc};var roc,soc;JU(1176,1,{},xoc);_.tc=function yoc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};JU(1177,1,{},Aoc);_.tc=function Boc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var NN=$jb(ITc,'MaterialsWireframe$DemoScene',1174),QN=$jb(ITc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1175),ON=$jb(ITc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1176),PN=$jb(ITc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1177);WOc(Ii)(19);