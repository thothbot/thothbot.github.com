function ipc(){}
function mpc(){}
function ppc(){}
function ZIb(a,b){a.e=b}
function apc(){Kac.call(this)}
function epc(){epc=AQc;dpc=new ipc}
function rpc(){rpc=AQc;gpc=new mpc}
function spc(){spc=AQc;hpc=new ppc}
function vJb(a,b){!a.a&&(a.a=new YSb);a.a.nd(ZVc,b)}
function _oc(a){var b,c;c=new crb;for(b=0;b<a.i.Pc();b++){Au(a.i.Hc(b),242);Tqb(c,b,new Arb(qu(JT,_Rc,300,[new f7b(1,0,0),new f7b(0,1,0),new f7b(0,0,1)])))}return c}
PU(1172,1,iSc);_.zb=function Zoc(){kac(this.b,new apc(this.a))};PU(1173,972,{},apc);_.nb=function bpc(){var a,b,c,d,e,f,g,i;this.a=new tRb(40,LHb(this.G.k),1,2000);b7b(this.a._,800);c=new _Wb(150,150,150);d=new _Wb(150,150,150);e=new v0b;e.i=true;this.b=new D8b(c,e);o6b(this.b._,-150);sQb(this.H,this.b);b=new $Ib((pJb(),nJb),_oc(d));ZIb(b,(fJb(),dJb));g=new v3b((epc(),dpc));vJb(o$b(g),b);this.d=new D8b(d,g);o6b(this.d._,150);sQb(this.H,this.d);i=new QXb(75,32,16);a=new $Ib(nJb,_oc(i));ZIb(a,dJb);f=new v3b(dpc);vJb(o$b(f),a);this.c=new D8b(i,f);o6b(this.c._,-150);sQb(this.H,this.c)};_.ob=function cpc(a){p4b(this.b.cb,0.005);q4b(this.b.cb,0.01);p4b(this.d.cb,0.005);q4b(this.d.cb,0.01);if(this.c){p4b(this.c.cb,0.005);q4b(this.c.cb,0.01)}XHb(this.G.k,this.H,this.a,null,false)};var dpc;PU(1174,1,{},ipc);_.Nd=function jpc(){return rpc(),gpc};_.Od=function kpc(){return spc(),hpc};var gpc,hpc;PU(1175,1,{},mpc);_.mc=function npc(){return '#extension GL_OES_standard_derivatives : enable\n\nvarying vec3 vCenter;\n\nfloat edgeFactorTri() {\n\n\tvec3 d = fwidth( vCenter.xyz );\n\tvec3 a3 = smoothstep( vec3( 0.0 ), d * 1.5, vCenter.xyz );\n\treturn min( min( a3.x, a3.y ), a3.z );\n\n}\n\nvoid main() {\n\n\tgl_FragColor.rgb = mix( vec3( 1.0 ), vec3( 0.2 ), edgeFactorTri() );\n\tgl_FragColor.a = 1.0;\n}\n'};PU(1176,1,{},ppc);_.mc=function qpc(){return 'attribute vec3 center;\nvarying vec3 vCenter;\n\nvoid main() {\n\n\tvCenter = center;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};var lN=dkb(kXc,'MaterialsWireframe$DemoScene',1173),oN=dkb(kXc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator',1174),mN=dkb(kXc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$1',1175),nN=dkb(kXc,'MaterialsWireframe_Resources_default_InlineClientBundleGenerator$2',1176);wSc(xi)(19);