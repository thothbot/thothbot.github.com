function Otc(){}
function Stc(){}
function Vtc(){}
function jyc(){}
function nyc(){}
function qyc(){}
function ikc(a){this.b=a}
function Ktc(){Ktc=RMc;Jtc=new Otc}
function Xtc(){Xtc=RMc;Mtc=new Stc}
function Ytc(){Ytc=RMc;Ntc=new Vtc}
function fyc(){fyc=RMc;eyc=new jyc}
function syc(){syc=RMc;hyc=new nyc}
function tyc(){tyc=RMc;iyc=new qyc}
function ayc(){FIb.call(this,(fyc(),eyc))}
function Htc(){FIb.call(this,(Ktc(),Jtc))}
function ekc(){L9b.call(this);this.e=0;this.f=0}
function dkc(a,b){var c,d,e,f,g,i;d=new UNb(eUc);d.n=4;o5b(d.C,0.998,0.998);o5b(d.B,0.001,0.001);ONb(d,(LFb(),KFb));PNb(d,KFb);CNb(d,(ECb(),CCb));e=new UNb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');o5b(e.C,0.998,0.998);o5b(e.B,0.001,0.001);ONb(e,KFb);PNb(e,KFb);CNb(e,CCb);c=new UNb('./static/models/obj/leeperrysmith/Map-COL.jpg');o5b(c.C,0.998,0.998);o5b(c.B,0.001,0.001);ONb(c,KFb);PNb(c,KFb);CNb(c,CCb);g=new ayc;i=g.j;TMb(Eu(i.b[gUc],225),(Uib(),Uib(),Tib));TMb(Eu(i.b[hUc],225),Tib);TMb(Eu(i.b[iUc],225),a.c.f);TMb(Eu(i.b[jUc],225),c);TMb(Eu(i.b[kUc],225),d);TMb(Eu(i.b[lUc],225),e);i3b(Eu(Eu(i.b[mUc],225).e,293),10526880);i3b(Eu(Eu(i.b[nUc],225).e,293),10526880);i3b(Eu(Eu(i.b[oUc],225).e,293),10526880);TMb(Eu(i.b[pUc],225),new Tjb(0.145));TMb(Eu(i.b[qUc],225),new Tjb(0.75));TMb(Eu(i.b[rUc],225),new Tjb(16));Q6b(Eu(Eu(i.b[sUc],225).e,301),0.001,0.001,0.998,0.998);f=new x2b(g);f.d=true;a.d=new E7b(b,f);q5b(a.d.ab,-50);_5b(a.d.fb,100);uPb(a.d,true);a.d.V=true;pPb(a.I,a.d)}
var gUc='enableBump',iUc='tBeckmann',pUc='uRoughness',qUc='uSpecularBrightness';mU(1113,1,COc);_.Db=function bkc(){l9b(this.c,new ekc(this.b))};mU(1114,967,{323:1},ekc);_.ob=function fkc(){var a,b,c,d,e,f,g;this.b=new sQb(27,IGb(this.H.n),1,10000);c6b(this.b.ab,1200);pPb(this.I,new ZXb(5592405));d=new TYb(16777215,1.5,1000);a6b(d.ab,0,0,600);pPb(this.I,d);f=new _Yb(1);a6b(f.ab,0.05,0.05,1);pPb(this.I,f);f.ab.rf(700);f.T=true;f.u=true;f.J=2048;f.H=2048;f.B=200;f.A=1500;f.e=40;f.v=-0.005;f.F=0.15;a=new AYb(16777215,0.85);a6b(a.ab,1,-0.5,1);h3b(a.M,0.6,1,0.85);pPb(this.I,a);a.ab.rf(500);a.T=true;a.J=2048;a.H=2048;a.B=200;a.A=1500;a.f=-500;a.g=500;a.i=500;a.e=-500;a.v=-0.005;a.F=0.15;b=new AYb(16777215,0.85);a6b(b.ab,1,-0.5,-1);pPb(this.I,b);new hJc(new Htc);c=new hJc(new WJc);c.b=true;g=new pOb(512,512);HNb(g,(tEb(),nEb));FNb(g,(iEb(),gEb));CNb(g,(ECb(),CCb));g.g=false;this.c=new ZIc(this.H.n,g);new Dzc(fUc,new ikc(this));eHb(this.H.n,new l3b(5001561),1);e=new ZFb(this.H.n,this.I);e.i=false;aHb(this.H.n,false);this.H.n.bb=true;this.H.n.cb=true};_.pb=function gkc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){r3b(this.d.db,0.05*(b-this.d.db.e));q3b(this.d.db,0.05*(c-this.d.db.d))}BGb(this.H.n,true);UGb(this.H.n,this.I,this.b,null,false)};_.e=0;_.f=0;mU(1115,1,{},ikc);_.Ef=function jkc(a,b){dkc(this.b,Eu(b,242))};mU(1243,725,pOc,Htc);_.Od=function Itc(){};var Jtc;mU(1244,1,{},Otc);_.Rd=function Ptc(){return Xtc(),Mtc};_.Sd=function Qtc(){return Ytc(),Ntc};var Mtc,Ntc;mU(1245,1,{},Stc);_.qc=function Ttc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};mU(1246,1,{},Vtc);_.qc=function Wtc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};mU(1340,725,pOc,ayc);_.Od=function byc(){AIb(this,qNb());AIb(this,rNb());AIb(this,sNb());tIb(this,gUc,new VMb((mNb(),bNb),zkb(0)));tIb(this,hUc,new VMb(bNb,zkb(0)));tIb(this,jUc,new UMb(eNb));tIb(this,iUc,new UMb(eNb));tIb(this,nUc,new VMb(ZMb,new l3b(15658734)));tIb(this,oUc,new VMb(ZMb,new l3b(1118481)));tIb(this,mUc,new VMb(ZMb,new l3b(328965)));tIb(this,tUc,new VMb($Mb,new Tjb(1)));tIb(this,pUc,new VMb($Mb,new Tjb(0.15)));tIb(this,qUc,new VMb($Mb,new Tjb(0.75)));tIb(this,kUc,new UMb(eNb));tIb(this,rUc,new VMb($Mb,new Tjb(1)));tIb(this,lUc,new UMb(eNb));tIb(this,sUc,new VMb(kNb,new U6b(0,0,1,1)));tIb(this,'uWrapRGB',new VMb(iNb,new g6b(0.75,0.375,0.1875)))};_.Pd=function cyc(a){var b,c;c=new crb(uu(jS,XMc,1,[uUc,vUc,wUc]));b=new crb(uu(jS,XMc,1,[xUc,yUc,zUc]));CIb(this,KIb(a,uu(mS,XMc,173,[c,b])))};_.Qd=function dyc(a){var b,c;c=new crb(uu(jS,XMc,1,[AUc]));b=new crb(uu(jS,XMc,1,[BUc]));DIb(this,KIb(a,uu(mS,XMc,173,[c,b])))};var eyc;mU(1341,1,{},jyc);_.Rd=function kyc(){return syc(),hyc};_.Sd=function lyc(){return tyc(),iyc};var hyc,iyc;mU(1342,1,{},nyc);_.qc=function oyc(){return '#define USE_BUMPMAP\r\n#extension GL_OES_standard_derivatives : enable\r\n\r\nuniform bool enableBump;\r\nuniform bool enableSpecular;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 diffuse;\r\nuniform vec3 specular;\r\nuniform float opacity;\r\n\r\nuniform float uRoughness;\r\nuniform float uSpecularBrightness;\r\n\r\nuniform vec3 uWrapRGB;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tBeckmann;\r\n\r\nuniform sampler2D specularMap;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\n\t\t\t// Fresnel term\r\n\r\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\r\n\r\n\tfloat base = 1.0 - dot( V, H );\r\n\tfloat exponential = pow( base, 5.0 );\r\n\r\n\treturn exponential + F0 * ( 1.0 - exponential );\r\n\r\n}\r\n\r\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\r\n\r\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\r\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\r\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\r\n\t\t\t\t\t\tfloat m,  \t// Roughness\r\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\r\n\t\t\t\t\t\t) {\r\n\r\n\tfloat result = 0.0;\r\n\tfloat ndotl = dot( N, L );\r\n\r\n\tif( ndotl > 0.0 ) {\r\n\r\n\t\tvec3 h = L + V; // Unnormalized half-way vector\r\n\t\tvec3 H = normalize( h );\r\n\r\n\t\tfloat ndoth = dot( N, H );\r\n\r\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\r\n\r\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\r\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\r\n\r\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\r\n\r\n\t}\r\n\r\n\treturn result;\r\n\r\n}\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\r\n\r\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\r\n\tcolDiffuse.rgb *= colDiffuse.rgb;\r\n\r\n\tgl_FragColor = gl_FragColor * colDiffuse;\r\n\r\n\tvec3 normal = normalize( vNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\tfloat specularStrength;\r\n\r\n\tif ( enableSpecular ) {\r\n\r\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\t\tspecularStrength = texelSpecular.r;\r\n\r\n\t} else {\r\n\r\n\t\tspecularStrength = 1.0;\r\n\r\n\t}\r\n\r\n\t#ifdef USE_BUMPMAP\r\n\r\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// point lights\r\n\r\n\tvec3 specularTotal = vec3( 0.0 );\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\r\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\r\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirTotal = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\r\n\r\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiTotal = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\t\t\t\t// specular (sky light)\r\n\r\n\t\t\tfloat hemiSpecularWeight = 0.0;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\t\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = -lVector;\r\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\r\n\r\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t\t\t\t// all lights contribution summation\r\n\r\n\tvec3 totalLight = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\t\ttotalLight += dirTotal;\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\ttotalLight += pointTotal;\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\t\ttotalLight += hemiTotal;\r\n\t#endif\r\n\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\r\n\r\n[*]\r\n\r\n}\r\n'};mU(1343,1,{},qyc);_.qc=function ryc(){return 'uniform vec4 offsetRepeat;\r\n\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\r\n\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n[*]\r\n\r\n}\r\n'};var sM=Hjb(xTc,'MaterialsBumpmapSkin$DemoScene',1114),rM=Hjb(xTc,'MaterialsBumpmapSkin$DemoScene$1',1115),IO=Hjb(qTc,'BeckmannShader',1243),HO=Hjb(qTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1244),FO=Hjb(qTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1245),GO=Hjb(qTc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1246),hP=Hjb(qTc,'SkinSimpleShader',1340),gP=Hjb(qTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1341),eP=Hjb(qTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1342),fP=Hjb(qTc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1343);QOc(Hi)(18);