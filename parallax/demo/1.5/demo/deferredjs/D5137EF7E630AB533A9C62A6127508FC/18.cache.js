function bqc(){}
function fqc(){}
function iqc(){}
function qtc(){}
function utc(){}
function xtc(){}
function fic(a){this.b=a}
function mtc(){mtc=xFc;ltc=new qtc}
function ztc(){ztc=xFc;otc=new utc}
function Atc(){Atc=xFc;ptc=new xtc}
function Zpc(){Zpc=xFc;Ypc=new bqc}
function kqc(){kqc=xFc;_pc=new fqc}
function lqc(){lqc=xFc;aqc=new iqc}
function Wpc(){zHb.call(this,(Zpc(),Ypc))}
function htc(){zHb.call(this,(mtc(),ltc))}
function bic(){L7b.call(this);this.e=0;this.f=0}
function aic(a,b){var c,d,e,f,g,i;d=new tMb(PMc);d.n=4;r3b(d.C,0.998,0.998);r3b(d.B,0.001,0.001);nMb(d,(GEb(),FEb));oMb(d,FEb);bMb(d,(zBb(),xBb));e=new tMb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');r3b(e.C,0.998,0.998);r3b(e.B,0.001,0.001);nMb(e,FEb);oMb(e,FEb);bMb(e,xBb);c=new tMb('./static/models/obj/leeperrysmith/Map-COL.jpg');r3b(c.C,0.998,0.998);r3b(c.B,0.001,0.001);nMb(c,FEb);oMb(c,FEb);bMb(c,xBb);g=new htc;i=g.j;sLb(Xu(i.b[RMc],225),(Rhb(),Rhb(),Qhb));sLb(Xu(i.b[SMc],225),Qhb);sLb(Xu(i.b[TMc],225),a.c.f);sLb(Xu(i.b[UMc],225),c);sLb(Xu(i.b[VMc],225),d);sLb(Xu(i.b[WMc],225),e);l1b(Xu(Xu(i.b[XMc],225).e,292),10526880);l1b(Xu(Xu(i.b[YMc],225).e,292),10526880);l1b(Xu(Xu(i.b[ZMc],225).e,292),10526880);sLb(Xu(i.b[$Mc],225),new Qib(0.145));sLb(Xu(i.b[_Mc],225),new Qib(0.75));sLb(Xu(i.b[aNc],225),new Qib(16));S4b(Xu(Xu(i.b[bNc],225).e,300),0.001,0.001,0.998,0.998);f=new A0b(g);f.d=true;a.d=new G5b(b,f);t3b(a.d.ab,-50);b4b(a.d.fb,100);VNb(a.d,true);a.d.V=true;QNb(a.G,a.d)}
var RMc='enableBump',TMc='tBeckmann',$Mc='uRoughness',_Mc='uSpecularBrightness';yT(1106,1,hHc);_.Db=function $hc(){l7b(this.c,new bic(this.b))};yT(1107,961,{322:1},bic);_.ob=function cic(){var a,b,c,d,e,f,g;this.b=new QOb(27,CFb(this.F.n),1,10000);e4b(this.b.ab,1200);QNb(this.G,new pWb(5592405));d=new iXb(16777215,1.5,1000);c4b(d.ab,0,0,600);QNb(this.G,d);f=new qXb(1);c4b(f.ab,0.05,0.05,1);QNb(this.G,f);f.ab.pf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new SWb(16777215,0.85);c4b(a.ab,1,-0.5,1);k1b(a.M,0.6,1,0.85);QNb(this.G,a);a.ab.pf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new SWb(16777215,0.85);c4b(b.ab,1,-0.5,-1);QNb(this.G,b);new CDc(new Wpc);c=new CDc(new YDc);c.b=true;g=new QMb(512,512);gMb(g,(oDb(),iDb));eMb(g,(dDb(),bDb));bMb(g,(zBb(),xBb));g.g=false;this.c=new sDc(this.F.n,g);new puc(QMc,new fic(this));$Fb(this.F.n,new o1b(5001561),1);e=new UEb(this.F.n,this.G);e.i=false;WFb(this.F.n,false);this.F.n.bb=true;this.F.n.cb=true};_.pb=function dic(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){u1b(this.d.db,0.05*(b-this.d.db.e));t1b(this.d.db,0.05*(c-this.d.db.d))}wFb(this.F.n);OFb(this.F.n,this.G,this.b,null,false)};_.e=0;_.f=0;yT(1108,1,{},fic);_.Cf=function gic(a,b){aic(this.b,Xu(b,241))};yT(1214,726,WGc,Wpc);_.Qd=function Xpc(){};var Ypc;yT(1215,1,{},bqc);_.Td=function cqc(){return kqc(),_pc};_.Ud=function dqc(){return lqc(),aqc};var _pc,aqc;yT(1216,1,{},fqc);_.hc=function gqc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};yT(1217,1,{},iqc);_.hc=function jqc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};yT(1290,726,WGc,htc);_.Qd=function itc(){uHb(this,RLb());uHb(this,SLb());uHb(this,TLb());nHb(this,RMc,new uLb((NLb(),CLb),wjb(0)));nHb(this,SMc,new uLb(CLb,wjb(0)));nHb(this,UMc,new tLb(FLb));nHb(this,TMc,new tLb(FLb));nHb(this,YMc,new uLb(yLb,new o1b(15658734)));nHb(this,ZMc,new uLb(yLb,new o1b(1118481)));nHb(this,XMc,new uLb(yLb,new o1b(328965)));nHb(this,cNc,new uLb(zLb,new Qib(1)));nHb(this,$Mc,new uLb(zLb,new Qib(0.15)));nHb(this,_Mc,new uLb(zLb,new Qib(0.75)));nHb(this,VMc,new tLb(FLb));nHb(this,aNc,new uLb(zLb,new Qib(1)));nHb(this,WMc,new tLb(FLb));nHb(this,bNc,new uLb(LLb,new W4b(0,0,1,1)));nHb(this,'uWrapRGB',new uLb(JLb,new i4b(0.75,0.375,0.1875)))};_.Rd=function jtc(a){var b,c;c=new aqb(Nu(vR,DFc,1,[dNc,eNc,fNc]));b=new aqb(Nu(vR,DFc,1,[gNc,hNc,iNc]));wHb(this,EHb(a,Nu(yR,DFc,173,[c,b])))};_.Sd=function ktc(a){var b,c;c=new aqb(Nu(vR,DFc,1,[jNc]));b=new aqb(Nu(vR,DFc,1,[kNc]));xHb(this,EHb(a,Nu(yR,DFc,173,[c,b])))};var ltc;yT(1291,1,{},qtc);_.Td=function rtc(){return ztc(),otc};_.Ud=function stc(){return Atc(),ptc};var otc,ptc;yT(1292,1,{},utc);_.hc=function vtc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};yT(1293,1,{},xtc);_.hc=function ytc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var HM=Eib(fMc,'MaterialsBumpmapSkin$DemoScene',1107),GM=Eib(fMc,'MaterialsBumpmapSkin$DemoScene$1',1108),CO=Eib($Lc,'BeckmannShader',1214),BO=Eib($Lc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1215),zO=Eib($Lc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1216),AO=Eib($Lc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1217),RO=Eib($Lc,'SkinSimpleShader',1290),QO=Eib($Lc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1291),OO=Eib($Lc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1292),PO=Eib($Lc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1293);uHc(Ii)(18);