function wIb(){}
function AIb(){}
function DIb(){}
function sIb(){sIb=dFc;rIb=new wIb}
function FIb(){FIb=dFc;uIb=new AIb}
function GIb(){GIb=dFc;vIb=new DIb}
function pIb(){_Gb.call(this,(sIb(),rIb))}
function bjc(){t7b.call(this);this.d=0;this.e=0}
bT(737,719,BGc,pIb);_.Md=function qIb(){PGb(this,'mRefractionRatio',new WKb((nLb(),_Kb),new tib(1.02)));PGb(this,'mFresnelBias',new WKb(_Kb,new tib(0.1)));PGb(this,'mFresnelPower',new WKb(_Kb,new tib(2)));PGb(this,'mFresnelScale',new WKb(_Kb,new tib(1)));PGb(this,RMc,new VKb(fLb))};var rIb;bT(738,1,{},wIb);_.Pd=function xIb(){return FIb(),uIb};_.Qd=function yIb(){return GIb(),vIb};var uIb,vIb;bT(739,1,{},AIb);_.dc=function BIb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};bT(740,1,{},DIb);_.dc=function EIb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};bT(1118,1,OGc);_.Db=function _ic(){V6b(this.c,new bjc(this.b))};bT(1119,954,{324:1},bjc);_.ob=function cjc(){var a,b,c,d,e,f,g,i,j;this.b=new rOb(60,cFb(this.F.n),1,100000);O3b(this.b.ab,3200);this.c=new rOb(60,cFb(this.F.n),1,100000);this.f=new _5b;a=new KUb(100,32,16);j=new cMb('./static/textures/cube/park2/*.jpg');DLb(j,(_Ab(),ZAb));g=new pIb;UKb(Fu(PPb(g.j,RMc),225),j);c=new f0b(g);this.g=new gpb;for(b=0;b<500;b++){e=new o5b(a,c);a3b(e.ab,Ajb()*10000-5000);b3b(e.ab,Ajb()*10000-5000);O3b(e.ab,Ajb()*10000-5000);L3b(e.fb,Ajb()*3+1);qNb(this.G,e);Yob(this.g,e)}this.G.X=false;i=new BHb;UKb(Fu(PPb(i.j,RMc),225),j);f=new f0b(i);tXb(f,(gZb(),dZb));d=new o5b(new VTb(100000,100000,100000),f);qNb(this.f,d);wFb(this.F.n,false)};_.pb=function djc(a){var b,c,d,e;e=1.0E-4*a;X2b(this.b.ab,(this.d-this.b.ab.d)*0.05);Y2b(this.b.ab,(-this.e-this.b.ab.e)*0.05);PNb(this.b,this.G.ab);b1b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Fu(_ob(this.g,b),303);a3b(d.ab,5000*Math.cos(e+b));b3b(d.ab,5000*Math.sin(e+b*1.1))}YEb(this.F.n);oFb(this.F.n,this.f,this.c,null,false);oFb(this.F.n,this.G,this.b,null,false)};_.d=0;_.e=0;var CM=hib(HLc,'MaterialsCubemapFresnel$DemoScene',1119),fG=hib(SMc,'FresnelShader',737),eG=hib(SMc,'FresnelShader_Resources_default_InlineClientBundleGenerator',738),cG=hib(SMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',739),dG=hib(SMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',740);_Gc(Hi)(21);