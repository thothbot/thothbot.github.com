function WIb(){}
function $Ib(){}
function bJb(){}
function dJb(){dJb=xFc;UIb=new $Ib}
function eJb(){eJb=xFc;VIb=new bJb}
function SIb(){SIb=xFc;RIb=new WIb}
function PIb(){zHb.call(this,(SIb(),RIb))}
function wjc(){L7b.call(this);this.d=0;this.e=0}
yT(744,726,WGc,PIb);_.Qd=function QIb(){nHb(this,'mRefractionRatio',new uLb((NLb(),zLb),new Qib(1.02)));nHb(this,'mFresnelBias',new uLb(zLb,new Qib(0.1)));nHb(this,'mFresnelPower',new uLb(zLb,new Qib(2)));nHb(this,'mFresnelScale',new uLb(zLb,new Qib(1)));nHb(this,nNc,new tLb(FLb))};var RIb;yT(745,1,{},WIb);_.Td=function XIb(){return dJb(),UIb};_.Ud=function YIb(){return eJb(),VIb};var UIb,VIb;yT(746,1,{},$Ib);_.hc=function _Ib(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};yT(747,1,{},bJb);_.hc=function cJb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};yT(1126,1,hHc);_.Db=function ujc(){l7b(this.c,new wjc(this.b))};yT(1127,961,{326:1},wjc);_.ob=function xjc(){var a,b,c,d,e,f,g,i,j;this.b=new QOb(60,CFb(this.F.n),1,100000);e4b(this.b.ab,3200);this.c=new QOb(60,CFb(this.F.n),1,100000);this.f=new r6b;a=new hVb(100,32,16);j=new CMb('./static/textures/cube/park2/*.jpg');bMb(j,(zBb(),xBb));g=new PIb;sLb(Xu(mQb(g.j,nNc),225),j);c=new A0b(g);this.g=new Epb;for(b=0;b<500;b++){e=new G5b(a,c);s3b(e.ab,Xjb()*10000-5000);t3b(e.ab,Xjb()*10000-5000);e4b(e.ab,Xjb()*10000-5000);b4b(e.fb,Xjb()*3+1);QNb(this.G,e);upb(this.g,e)}this.G.X=false;i=new _Hb;sLb(Xu(mQb(i.j,nNc),225),j);f=new A0b(i);RXb(f,(CZb(),zZb));d=new G5b(new sUb(100000,100000,100000),f);QNb(this.f,d);WFb(this.F.n,false)};_.pb=function yjc(a){var b,c,d,e;e=1.0E-4*a;n3b(this.b.ab,(this.d-this.b.ab.d)*0.05);o3b(this.b.ab,(-this.e-this.b.ab.e)*0.05);mOb(this.b,this.G.ab);v1b(this.c.db,this.b.db);for(b=0,c=this.g.c;b<c;b++){d=Xu(xpb(this.g,b),303);s3b(d.ab,5000*Math.cos(e+b));t3b(d.ab,5000*Math.sin(e+b*1.1))}wFb(this.F.n);OFb(this.F.n,this.f,this.c,null,false);OFb(this.F.n,this.G,this.b,null,false)};_.d=0;_.e=0;var _M=Eib(fMc,'MaterialsCubemapFresnel$DemoScene',1127),DG=Eib(oNc,'FresnelShader',744),CG=Eib(oNc,'FresnelShader_Resources_default_InlineClientBundleGenerator',745),AG=Eib(oNc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',746),BG=Eib(oNc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',747);uHc(Ii)(21);