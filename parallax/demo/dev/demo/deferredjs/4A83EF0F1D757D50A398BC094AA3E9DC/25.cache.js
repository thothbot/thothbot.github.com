function YFb(){}
function aGb(){}
function dGb(){}
function fGb(){fGb=JCc;WFb=new aGb}
function gGb(){gGb=JCc;XFb=new dGb}
function UFb(){UFb=JCc;TFb=new YFb}
function RFb(){lEb.call(this,(UFb(),TFb))}
function _fc(){o4b.call(this);this.c=0;this.d=0}
zS(731,707,XDc,RFb);_.Ld=function SFb(){_Db(this,'mRefractionRatio',new uIb((NIb(),zIb),new xhb(1.02)));_Db(this,'mFresnelBias',new uIb(zIb,new xhb(0.1)));_Db(this,'mFresnelPower',new uIb(zIb,new xhb(2)));_Db(this,'mFresnelScale',new uIb(zIb,new xhb(1)));_Db(this,aKc,new tIb(FIb))};var TFb;zS(732,1,{},YFb);_.Od=function ZFb(){return fGb(),WFb};_.Pd=function $Fb(){return gGb(),XFb};var WFb,XFb;zS(733,1,{},aGb);_.fc=function bGb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};zS(734,1,{},dGb);_.fc=function eGb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};zS(1103,1,hEc);_.Cb=function Zfc(){l4b(this.b,new _fc(this.a))};zS(1104,938,{267:1},_fc);_.qb=function agc(){var a,b,c,d,e,f,g,i,j;this.a=new RLb(60,RCb(this.G.n),1,100000);_0b(this.a.ab,3200);this.b=new RLb(60,RCb(this.G.n),1,100000);this.e=new p3b;a=new iSb(100,32,16);j=new AJb('./static/textures/cube/park2/*.jpg');bJb(j,(Szb(),Qzb));g=new RFb;sIb(nu(CNb(g.i,aKc),168),j);c=new HZb(g);this.f=new job;for(b=0;b<500;b++){e=new x2b(a,c);r0b(e.ab,Eib()*10000-5000);s0b(e.ab,Eib()*10000-5000);_0b(e.ab,Eib()*10000-5000);W0b(e.fb,Eib()*3+1);NKb(this.H,e);_nb(this.f,e)}this.H.W=false;i=new NEb;sIb(nu(CNb(i.i,aKc),168),j);f=new HZb(i);fVb(f,(UWb(),RWb));d=new x2b(new CRb(100000,100000,100000),f);NKb(this.e,d);this.G.n.R=false};_.rb=function bgc(a){var b,c,d,e;e=1.0E-4*a;m0b(this.a.ab,(this.c-this.a.ab.c)*0.05);n0b(this.a.ab,(-this.d-this.a.ab.d)*0.05);rLb(this.a,this.H.ab);this.b.db.sf(this.a.db);for(b=0,c=this.f.b;b<c;b++){d=nu(cob(this.f,b),242);r0b(d.ab,5000*Math.cos(e+b));s0b(d.ab,5000*Math.sin(e+b*1.1))}OCb(this.G.n);WCb(this.G.n,this.e,this.b,null,false);WCb(this.G.n,this.H,this.a,null,false)};_.c=0;_.d=0;var SL=lhb(SIc,'MaterialsCubemapFresnel$DemoScene',1104),GF=lhb(ZJc,'FresnelShader',731),FF=lhb(ZJc,'FresnelShader_Resources_default_InlineClientBundleGenerator',732),DF=lhb(ZJc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',733),EF=lhb(ZJc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',734);uEc(ti)(25);