function fIb(){}
function jIb(){}
function mIb(){}
function bIb(){bIb=OEc;aIb=new fIb}
function oIb(){oIb=OEc;dIb=new jIb}
function pIb(){pIb=OEc;eIb=new mIb}
function $Hb(){KGb.call(this,(bIb(),aIb))}
function Mic(){c7b.call(this);this.c=0;this.d=0}
NS(741,723,iGc,$Hb);_.Jd=function _Hb(){yGb(this,'mRefractionRatio',new FKb((YKb(),KKb),new cib(1.02)));yGb(this,'mFresnelBias',new FKb(KKb,new cib(0.1)));yGb(this,'mFresnelPower',new FKb(KKb,new cib(2)));yGb(this,'mFresnelScale',new FKb(KKb,new cib(1)));yGb(this,tMc,new EKb(QKb))};var aIb;NS(742,1,{},fIb);_.Md=function gIb(){return oIb(),dIb};_.Nd=function hIb(){return pIb(),eIb};var dIb,eIb;NS(743,1,{},jIb);_.ac=function kIb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};NS(744,1,{},mIb);_.ac=function nIb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};NS(1122,1,vGc);_.zb=function Kic(){E6b(this.b,new Mic(this.a))};NS(1123,958,{324:1},Mic);_.nb=function Nic(){var a,b,c,d,e,f,g,i,j;this.a=new aOb(60,NEb(this.D.k),1,100000);x3b(this.a._,3200);this.b=new aOb(60,NEb(this.D.k),1,100000);this.e=new K5b;a=new tUb(100,32,16);j=new NLb('./static/textures/cube/park2/*.jpg');mLb(j,(KAb(),IAb));g=new $Hb;DKb(qu(yPb(g.i,tMc),225),j);c=new Q_b(g);this.f=new Rob;for(b=0;b<500;b++){e=new Z4b(a,c);L2b(e._,jjb()*10000-5000);M2b(e._,jjb()*10000-5000);x3b(e._,jjb()*10000-5000);u3b(e.eb,jjb()*3+1);_Mb(this.F,e);Hob(this.f,e)}this.F.W=false;i=new kHb;DKb(qu(yPb(i.i,tMc),225),j);f=new Q_b(i);cXb(f,(RYb(),OYb));d=new Z4b(new ETb(100000,100000,100000),f);_Mb(this.e,d);fFb(this.D.k,false)};_.ob=function Oic(a){var b,c,d,e;e=1.0E-4*a;G2b(this.a._,(this.c-this.a._.c)*0.05);H2b(this.a._,(-this.d-this.a._.d)*0.05);yNb(this.a,this.F._);M0b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=qu(Kob(this.f,b),303);L2b(d._,5000*Math.cos(e+b));M2b(d._,5000*Math.sin(e+b*1.1))}HEb(this.D.k);ZEb(this.D.k,this.e,this.b,null,false);ZEb(this.D.k,this.F,this.a,null,false)};_.c=0;_.d=0;var lM=Shb(jLc,'MaterialsCubemapFresnel$DemoScene',1123),RF=Shb(uMc,'FresnelShader',741),QF=Shb(uMc,'FresnelShader_Resources_default_InlineClientBundleGenerator',742),OF=Shb(uMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',743),PF=Shb(uMc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',744);IGc(xi)(21);