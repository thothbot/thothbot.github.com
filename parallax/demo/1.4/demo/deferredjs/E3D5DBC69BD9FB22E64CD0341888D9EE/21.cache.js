function MGb(){}
function QGb(){}
function TGb(){}
function IGb(){IGb=mzc;HGb=new MGb}
function VGb(){VGb=mzc;KGb=new QGb}
function WGb(){WGb=mzc;LGb=new TGb}
function FGb(){pFb.call(this,(IGb(),HGb))}
function _fc(){k5b.call(this);this.c=0;this.d=0}
TR(735,717,EAc,FGb);_.Jd=function GGb(){dFb(this,'mRefractionRatio',new kJb((DJb(),pJb),new Tgb(1.02)));dFb(this,'mFresnelBias',new kJb(pJb,new Tgb(0.1)));dFb(this,'mFresnelPower',new kJb(pJb,new Tgb(2)));dFb(this,'mFresnelScale',new kJb(pJb,new Tgb(1)));dFb(this,OGc,new jJb(vJb))};var HGb;TR(736,1,{},MGb);_.Md=function NGb(){return VGb(),KGb};_.Nd=function OGb(){return WGb(),LGb};var KGb,LGb;TR(737,1,{},QGb);_.bc=function RGb(){return 'uniform samplerCube tCube;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\tvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\r\n\r\n\trefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\r\n\trefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\r\n\trefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\r\n\trefractedColor.a = 1.0;\r\n\r\n\tgl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\r\n\r\n}\r\n'};TR(738,1,{},TGb);_.bc=function UGb(){return 'uniform float mRefractionRatio;\r\nuniform float mFresnelBias;\r\nuniform float mFresnelScale;\r\nuniform float mFresnelPower;\r\n\r\nvarying vec3 vReflect;\r\nvarying vec3 vRefract[3];\r\nvarying float vReflectionFactor;\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvec3 nWorld = normalize ( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );\r\n\r\n\tvec3 I = mPosition.xyz - cameraPosition;\r\n\r\n\tvReflect = reflect( I, nWorld );\r\n\tvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\r\n\tvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\r\n\tvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\r\n\tvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n}\r\n'};TR(1097,1,SAc);_.yb=function Zfc(){h5b(this.b,new _fc(this.a))};TR(1098,944,{273:1},_fc);_.mb=function agc(){var a,b,c,d,e,f,g,i,j;this.a=new DMb(60,BDb(this.D.n),1,100000);c2b(this.a._,3200);this.b=new DMb(60,BDb(this.D.n),1,100000);this.e=new n4b;a=new VSb(100,32,16);j=new sKb('./static/textures/cube/park2/*.jpg');TJb(j,(rzb(),pzb));g=new FGb;iJb(qu(aOb(g.i,OGc),174),j);c=new w$b(g);this.f=new Fnb;for(b=0;b<500;b++){e=new D3b(a,c);q1b(e._,$hb()*10000-5000);r1b(e._,$hb()*10000-5000);c2b(e._,$hb()*10000-5000);_1b(e.eb,$hb()*3+1);ELb(this.F,e);vnb(this.f,e)}this.F.W=false;i=new RFb;iJb(qu(aOb(i.i,OGc),174),j);f=new w$b(i);EVb(f,(rXb(),oXb));d=new D3b(new gSb(100000,100000,100000),f);ELb(this.e,d);this.D.n.Y=false};_.nb=function bgc(a){var b,c,d,e;e=1.0E-4*a;l1b(this.a._,(this.c-this.a._.c)*0.05);m1b(this.a._,(-this.d-this.a._.d)*0.05);bMb(this.a,this.F._);s_b(this.b.cb,this.a.cb);for(b=0,c=this.f.b;b<c;b++){d=qu(ynb(this.f,b),252);q1b(d._,5000*Math.cos(e+b));r1b(d._,5000*Math.sin(e+b*1.1))}wDb(this.D.n);NDb(this.D.n,this.e,this.b,null,false);NDb(this.D.n,this.F,this.a,null,false)};_.c=0;_.d=0;var RL=Hgb(BFc,'MaterialsCubemapFresnel$DemoScene',1098),OF=Hgb(PGc,'FresnelShader',735),NF=Hgb(PGc,'FresnelShader_Resources_default_InlineClientBundleGenerator',736),LF=Hgb(PGc,'FresnelShader_Resources_default_InlineClientBundleGenerator$1',737),MF=Hgb(PGc,'FresnelShader_Resources_default_InlineClientBundleGenerator$2',738);cBc(wi)(21);