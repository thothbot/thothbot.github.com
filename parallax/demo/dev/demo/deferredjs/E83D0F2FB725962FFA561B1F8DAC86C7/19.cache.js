function Vnc(){}
function Znc(){}
function Zqc(){}
function aoc(){}
function brc(){}
function erc(){}
function grc(){grc=tDc;Xqc=new brc}
function hrc(){hrc=tDc;Yqc=new erc}
function Vqc(){Vqc=tDc;Uqc=new Zqc}
function coc(){coc=tDc;Tnc=new Znc}
function doc(){doc=tDc;Unc=new aoc}
function Rnc(){Rnc=tDc;Qnc=new Vnc}
function hfc(a,b){this.b=a;this.c=b}
function dfc(){$4b.call(this);this.e=0;this.f=0}
function Onc(){XEb.call(this,(Rnc(),Qnc))}
function Qqc(){XEb.call(this,(Vqc(),Uqc))}
function cfc(a,b){var c,d,e,f,g,i;d=new bKb(mKc);d.n=4;a1b(d.B,0.998,0.998);a1b(d.A,0.001,0.001);XJb(d,(_Cb(),$Cb));YJb(d,$Cb);NJb(d,(CAb(),AAb));e=new bKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');a1b(e.B,0.998,0.998);a1b(e.A,0.001,0.001);XJb(e,$Cb);YJb(e,$Cb);NJb(e,AAb);c=new bKb('./static/models/obj/leeperrysmith/Map-COL.jpg');a1b(c.B,0.998,0.998);a1b(c.A,0.001,0.001);XJb(c,$Cb);YJb(c,$Cb);NJb(c,AAb);g=new Qqc;i=g.j;cJb(Uu(i.b[pKc],168),(khb(),khb(),jhb));cJb(Uu(i.b[qKc],168),jhb);cJb(Uu(i.b[rKc],168),a.c.f);cJb(Uu(i.b[sKc],168),c);cJb(Uu(i.b[tKc],168),d);cJb(Uu(i.b[uKc],168),e);$$b(Uu(Uu(i.b[vKc],168).e,230),10526880);$$b(Uu(Uu(i.b[wKc],168).e,230),10526880);$$b(Uu(Uu(i.b[xKc],168).e,230),10526880);cJb(Uu(i.b[yKc],168),new gib(0.145));cJb(Uu(i.b[zKc],168),new gib(0.75));cJb(Uu(i.b[AKc],168),new gib(16));v2b(Uu(Uu(i.b[BKc],168).e,237),0.001,0.001,0.998,0.998);f=new r$b(g);f.d=true;a.d=new h3b(b,f);c1b(a.d.bb,-50);G1b(a.d.gb,100);a.d.R=true;a.d.T=true;xLb(a.I,a.d)}
var pKc='enableBump',rKc='tBeckmann',yKc='uRoughness',zKc='uSpecularBrightness';kT(1082,1,UEc);_.Gb=function afc(){X4b(this.c,new dfc(this.b))};kT(1083,940,{263:1},dfc);_.rb=function efc(){var b,c,d,e,f,g,i,j;this.b=new BMb(27,BDb(this.H.o),1,10000);L1b(this.b.bb,1200);xLb(this.I,new pUb(5592405));f=new fVb(16777215,1.5,1000);H1b(f.bb,0,0,600);xLb(this.I,f);i=new qVb(1);H1b(i.bb,0.05,0.05,1);xLb(this.I,i);i.bb.Bf(700);i.R=true;i.u=true;i.I=2048;i.G=2048;i.B=200;i.A=1500;i.d=40;i.v=-0.005;i.D=0.15;b=new RUb(16777215,0.85);H1b(b.bb,1,-0.5,1);Z$b(b.L,0.6,0.3,1);xLb(this.I,b);b.bb.Bf(500);b.R=true;b.I=2048;b.G=2048;b.B=200;b.A=1500;b.f=-500;b.g=500;b.i=500;b.e=-500;b.v=-0.005;b.D=0.15;c=new RUb(16777215,0.85);H1b(c.bb,1,-0.5,-1);xLb(this.I,c);new Fzc(new Onc);d=new Fzc(new sAc);d.b=true;j=new AKb(512,512);RJb(j,(JBb(),DBb));PJb(j,(yBb(),wBb));NJb(j,(CAb(),AAb));j.g=false;this.c=new vzc(this.H.o,j);e=new osc;try{csc(e,nKc,new hfc(this,e))}catch(a){a=pS(a);if(Xu(a,46)){mLb();nV(lLb,(ysb(),wsb),oKc)}else throw oS(a)}ODb(this.H.o,5001561,1);g=new qDb(this.H.o,this.I);g.g=false;this.H.o.S=false;this.H.o.U=true;this.H.o.V=true;this.H.o.X=true};_.sb=function ffc(a){var b,c;b=this.e*0.001;c=this.f*0.001;if(this.d){Z0b(this.d.eb,0.05*(b-this.d.eb.e));Y0b(this.d.eb,0.05*(c-this.d.eb.d))}yDb(this.H.o);GDb(this.H.o,this.I,this.b,null,false)};_.e=0;_.f=0;kT(1084,1,{},hfc);_.Lf=function ifc(){cfc(this.b,this.c.b)};kT(1203,709,IEc,Onc);_.Sd=function Pnc(){};var Qnc;kT(1204,1,{},Vnc);_.Vd=function Wnc(){return coc(),Tnc};_.Wd=function Xnc(){return doc(),Unc};var Tnc,Unc;kT(1205,1,{},Znc);_.mc=function $nc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};kT(1206,1,{},aoc);_.mc=function boc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};kT(1274,709,IEc,Qqc);_.Sd=function Rqc(){SEb(this,BJb());SEb(this,CJb());SEb(this,DJb());LEb(this,pKc,new eJb((xJb(),mJb),Oib(0)));LEb(this,qKc,new eJb(mJb,Oib(0)));LEb(this,sKc,new dJb(pJb));LEb(this,rKc,new dJb(pJb));LEb(this,wKc,new eJb(iJb,new b_b(15658734)));LEb(this,xKc,new eJb(iJb,new b_b(1118481)));LEb(this,vKc,new eJb(iJb,new b_b(328965)));LEb(this,CKc,new eJb(jJb,new gib(1)));LEb(this,yKc,new eJb(jJb,new gib(0.15)));LEb(this,zKc,new eJb(jJb,new gib(0.75)));LEb(this,tKc,new dJb(pJb));LEb(this,AKc,new eJb(jJb,new gib(1)));LEb(this,uKc,new dJb(pJb));LEb(this,BKc,new eJb(vJb,new z2b(0,0,1,1)));LEb(this,'uWrapRGB',new eJb(tJb,new O1b(0.75,0.375,0.1875)))};_.Td=function Sqc(a){var b,c;c=new tpb(Ku(iR,zDc,1,[DKc,EKc,FKc]));b=new tpb(Ku(iR,zDc,1,[GKc,HKc,IKc]));UEb(this,aFb(a,Ku(lR,zDc,120,[c,b])))};_.Ud=function Tqc(a){var b,c;c=new tpb(Ku(iR,zDc,1,[JKc]));b=new tpb(Ku(iR,zDc,1,[KKc]));VEb(this,aFb(a,Ku(lR,zDc,120,[c,b])))};var Uqc;kT(1275,1,{},Zqc);_.Vd=function $qc(){return grc(),Xqc};_.Wd=function _qc(){return hrc(),Yqc};var Xqc,Yqc;kT(1276,1,{},brc);_.mc=function crc(){return '#define USE_BUMPMAP\n#extension GL_OES_standard_derivatives : enable\n\nuniform bool enableBump;\nuniform bool enableSpecular;\n\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uOpacity;\n\nuniform float uRoughness;\nuniform float uSpecularBrightness;\n\nuniform vec3 uWrapRGB;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tBeckmann;\n\nuniform sampler2D specularMap;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\nvarying vec3 vViewPosition;\n\n[*]\n\n// Fresnel term\n\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\n\n\tfloat base = 1.0 - dot( V, H );\n\tfloat exponential = pow( base, 5.0 );\n\n\treturn exponential + F0 * ( 1.0 - exponential );\n\n}\n\n// Kelemen/Szirmay-Kalos specular BRDF\n\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\n\t\t\t\t\t\tfloat m,  \t// Roughness\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\n\t\t\t\t\t\t) {\n\n\tfloat result = 0.0;\n\tfloat ndotl = dot( N, L );\n\n\tif( ndotl > 0.0 ) {\n\n\t\tvec3 h = L + V; // Unnormalized half-way vector\n\t\tvec3 H = normalize( h );\n\n\t\tfloat ndoth = dot( N, H );\n\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\n\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\n\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\n\n\t}\n\n\treturn result;\n\n}\n\nvoid main() {\n\n\tgl_FragColor = vec4( vec3( 1.0 ), uOpacity );\n\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\n\tcolDiffuse.rgb *= colDiffuse.rgb;\n\n\tgl_FragColor = gl_FragColor * colDiffuse;\n\n\tvec3 normal = normalize( vNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\n\tfloat specularStrength;\n\n\tif ( enableSpecular ) {\n\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\t\tspecularStrength = texelSpecular.r;\n\n\t} else {\n\n\t\tspecularStrength = 1.0;\n\n\t}\n\n\t#ifdef USE_BUMPMAP\n\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n\t#endif\n\n\t// point lights\n\n\tvec3 specularTotal = vec3( 0.0 );\n\n\t#if MAX_POINT_LIGHTS > 0\n\n\t\tvec3 pointTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\t\tfloat lDistance = 1.0;\n\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tpointTotal    += lDistance * uDiffuseColor * pointLightColor[ i ] * pointDiffuseWeight;\n\t\t\tspecularTotal += lDistance * uSpecularColor * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t// directional lights\n\t\t\t\t\n\t#if MAX_DIR_LIGHTS > 0\n\n\t\tvec3 dirTotal = vec3( 0.0 );\n\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tdirTotal \t   += uDiffuseColor * directionalLightColor[ i ] * dirDiffuseWeight;\n\t\t\tspecularTotal += uSpecularColor * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t// hemisphere lights\n\n\t#if MAX_HEMI_LIGHTS > 0\n\n\t\tvec3 hemiTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\n\t\t\tvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\t\themiTotal += uDiffuseColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t\t// specular (sky light)\n\n\t\t\tfloat hemiSpecularWeight = 0.0;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\t// specular (ground light)\n\n\t\t\tvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tspecularTotal += uSpecularColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t// all lights contribution summation\n\n\tvec3 totalLight = vec3( 0.0 );\n\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalLight += dirTotal;\n\t#endif\n\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalLight += pointTotal;\n\t#endif\n\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalLight += hemiTotal;\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * uAmbientColor ) + specularTotal;\n\n[*]\n\n}'};kT(1277,1,{},erc);_.mc=function frc(){return 'uniform vec4 offsetRepeat;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying vec3 vViewPosition;\n\n[*]\n\nvoid main() {\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tvec4 mPosition = modelMatrix * vec4( position, 1.0 );\n\n\tvViewPosition = -mvPosition.xyz;\n\n\tvNormal = normalMatrix * normal;\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n[*]\n\n}\n'};var gM=Whb(NJc,'MaterialsBumpmapSkin$DemoScene',1083),fM=Whb(NJc,'MaterialsBumpmapSkin$DemoScene$1',1084),pO=Whb(GJc,'BeckmannShader',1203),oO=Whb(GJc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1204),mO=Whb(GJc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1205),nO=Whb(GJc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1206),EO=Whb(GJc,'SkinSimpleShader',1274),DO=Whb(GJc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1275),BO=Whb(GJc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1276),CO=Whb(GJc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1277);fFc(Ei)(19);