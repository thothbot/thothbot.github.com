function imc(){}
function mmc(){}
function pmc(){}
function epc(){}
function ipc(){}
function lpc(){}
function apc(){apc=szc;_oc=new epc}
function npc(){npc=szc;cpc=new ipc}
function opc(){opc=szc;dpc=new lpc}
function emc(){emc=szc;dmc=new imc}
function rmc(){rmc=szc;gmc=new mmc}
function smc(){smc=szc;hmc=new pmc}
function bmc(){xFb.call(this,(emc(),dmc))}
function Xoc(){xFb.call(this,(apc(),_oc))}
function Mec(){s5b.call(this);this.d=0;this.e=0}
function Qec(a,b){this.a=a;this.b=b}
function Lec(a,b){var c,d,e,f,g,i;d=new rKb(qGc);d.k=4;x1b(d.B,0.998,0.998);x1b(d.A,0.001,0.001);lKb(d,(GCb(),FCb));mKb(d,FCb);_Jb(d,(zzb(),xzb));e=new rKb('./static/models/obj/leeperrysmith/Map-SPEC.jpg');x1b(e.B,0.998,0.998);x1b(e.A,0.001,0.001);lKb(e,FCb);mKb(e,FCb);_Jb(e,xzb);c=new rKb('./static/models/obj/leeperrysmith/Map-COL.jpg');x1b(c.B,0.998,0.998);x1b(c.A,0.001,0.001);lKb(c,FCb);mKb(c,FCb);_Jb(c,xzb);g=new Xoc;i=g.i;qJb(su(i.a[tGc],174),(dgb(),dgb(),cgb));qJb(su(i.a[uGc],174),cgb);qJb(su(i.a[vGc],174),a.b.e);qJb(su(i.a[wGc],174),c);qJb(su(i.a[xGc],174),d);qJb(su(i.a[yGc],174),e);q_b(su(su(i.a[zGc],174).d,241),10526880);q_b(su(su(i.a[AGc],174).d,241),10526880);q_b(su(su(i.a[BGc],174).d,241),10526880);qJb(su(i.a[CGc],174),new _gb(0.145));qJb(su(i.a[DGc],174),new _gb(0.75));qJb(su(i.a[EGc],174),new _gb(16));Y2b(su(su(i.a[FGc],174).d,249),0.001,0.001,0.998,0.998);f=new E$b(g);f.c=true;a.c=new L3b(b,f);z1b(a.c._,-50);h2b(a.c.eb,100);RLb(a.c,true);a.c.U=true;MLb(a.F,a.c)}
var tGc='enableBump',vGc='tBeckmann',CGc='uRoughness',DGc='uSpecularBrightness';XR(1079,1,YAc);_.yb=function Jec(){p5b(this.b,new Mec(this.a))};XR(1080,946,{269:1},Mec);_.mb=function Nec(){var b,c,d,e,f,g,i,j;this.a=new LMb(27,JDb(this.D.n),1,10000);k2b(this.a._,1200);MLb(this.F,new jUb(5592405));f=new cVb(16777215,1.5,1000);i2b(f._,0,0,600);MLb(this.F,f);i=new kVb(1);i2b(i._,0.05,0.05,1);MLb(this.F,i);i._.kf(700);i.S=true;i.t=true;i.I=2048;i.G=2048;i.A=200;i.w=1500;i.d=40;i.u=-0.005;i.D=0.15;b=new MUb(16777215,0.85);i2b(b._,1,-0.5,1);p_b(b.L,0.6,1,0.85);MLb(this.F,b);b._.kf(500);b.S=true;b.I=2048;b.G=2048;b.A=200;b.w=1500;b.e=-500;b.f=500;b.g=500;b.d=-500;b.u=-0.005;b.D=0.15;c=new MUb(16777215,0.85);i2b(c._,1,-0.5,-1);MLb(this.F,c);new rxc(new bmc);d=new rxc(new Nxc);d.a=true;j=new OKb(512,512);eKb(j,(oBb(),iBb));cKb(j,(dBb(),bBb));_Jb(j,(zzb(),xzb));j.f=false;this.b=new hxc(this.D.n,j);e=new Zpc;try{Opc(e,rGc,new Qec(this,e))}catch(a){a=aR(a);if(vu(a,46)){ALb();dU(zLb,(trb(),rrb),sGc)}else throw _Q(a)}eEb(this.D.n,new t_b(5001561),1);g=new $Cb(this.D.n,this.F);g.g=false;this.D.n.Y=false;this.D.n.$=true;this.D.n._=true};_.nb=function Oec(a){var b,c;b=this.d*0.001;c=this.e*0.001;if(this.c){z_b(this.c.cb,0.05*(b-this.c.cb.d));y_b(this.c.cb,0.05*(c-this.c.cb.c))}EDb(this.D.n);VDb(this.D.n,this.F,this.a,null,false)};_.d=0;_.e=0;XR(1081,1,{},Qec);_.vf=function Rec(){Lec(this.a,this.b.a)};XR(1181,719,KAc,bmc);_.Jd=function cmc(){};var dmc;XR(1182,1,{},imc);_.Md=function jmc(){return rmc(),gmc};_.Nd=function kmc(){return smc(),hmc};var gmc,hmc;XR(1183,1,{},mmc);_.bc=function nmc(){return 'varying vec2 vUv;\n\nfloat PHBeckmann( float ndoth, float m ) {\n\n\tfloat alpha = acos( ndoth );\n\tfloat ta = tan( alpha );\n\n\tfloat val = 1.0 / ( m * m * pow( ndoth, 4.0 ) ) * exp( -( ta * ta ) / ( m * m ) );\n\treturn val;\n\n}\n\nfloat KSTextureCompute( vec2 tex ) {\n\n\t// Scale the value to fit within [0,1]  invert upon lookup.\n\n\treturn 0.5 * pow( PHBeckmann( tex.x, tex.y ), 0.1 );\n\n}\n\nvoid main() {\n\n\tfloat x = KSTextureCompute( vUv );\n\n\tgl_FragColor = vec4( x, x, x, 1.0 );\n\n}\n'};XR(1184,1,{},pmc);_.bc=function qmc(){return 'varying vec2 vUv;\n\nvoid main() {\n\n\tvUv = uv;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n}\n'};XR(1248,719,KAc,Xoc);_.Jd=function Yoc(){sFb(this,PJb());sFb(this,QJb());sFb(this,RJb());lFb(this,tGc,new sJb((LJb(),AJb),Hhb(0)));lFb(this,uGc,new sJb(AJb,Hhb(0)));lFb(this,wGc,new rJb(DJb));lFb(this,vGc,new rJb(DJb));lFb(this,AGc,new sJb(wJb,new t_b(15658734)));lFb(this,BGc,new sJb(wJb,new t_b(1118481)));lFb(this,zGc,new sJb(wJb,new t_b(328965)));lFb(this,GGc,new sJb(xJb,new _gb(1)));lFb(this,CGc,new sJb(xJb,new _gb(0.15)));lFb(this,DGc,new sJb(xJb,new _gb(0.75)));lFb(this,xGc,new rJb(DJb));lFb(this,EGc,new sJb(xJb,new _gb(1)));lFb(this,yGc,new rJb(DJb));lFb(this,FGc,new sJb(JJb,new a3b(0,0,1,1)));lFb(this,'uWrapRGB',new sJb(HJb,new o2b(0.75,0.375,0.1875)))};_.Kd=function Zoc(a){var b,c;c=new job(iu(RP,xzc,1,[HGc,IGc,JGc]));b=new job(iu(RP,xzc,1,[KGc,LGc,MGc]));uFb(this,CFb(a,iu(UP,xzc,121,[c,b])))};_.Ld=function $oc(a){var b,c;c=new job(iu(RP,xzc,1,[NGc]));b=new job(iu(RP,xzc,1,[OGc]));vFb(this,CFb(a,iu(UP,xzc,121,[c,b])))};var _oc;XR(1249,1,{},epc);_.Md=function fpc(){return npc(),cpc};_.Nd=function gpc(){return opc(),dpc};var cpc,dpc;XR(1250,1,{},ipc);_.bc=function jpc(){return '#define USE_BUMPMAP\n#extension GL_OES_standard_derivatives : enable\n\nuniform bool enableBump;\nuniform bool enableSpecular;\n\nuniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float opacity;\n\nuniform float uRoughness;\nuniform float uSpecularBrightness;\n\nuniform vec3 uWrapRGB;\n\nuniform sampler2D tDiffuse;\nuniform sampler2D tBeckmann;\n\nuniform sampler2D specularMap;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\nvarying vec3 vViewPosition;\n\n[*]\n\n\t\t\t// Fresnel term\n\nfloat fresnelReflectance( vec3 H, vec3 V, float F0 ) {\n\n\tfloat base = 1.0 - dot( V, H );\n\tfloat exponential = pow( base, 5.0 );\n\n\treturn exponential + F0 * ( 1.0 - exponential );\n\n}\n\n\t\t\t// Kelemen/Szirmay-Kalos specular BRDF\n\nfloat KS_Skin_Specular( vec3 N, \t\t// Bumped surface normal\n\t\t\t\t\t\tvec3 L, \t\t// Points to light\n\t\t\t\t\t\tvec3 V, \t\t// Points to eye\n\t\t\t\t\t\tfloat m,  \t// Roughness\n\t\t\t\t\t\tfloat rho_s \t// Specular brightness\n\t\t\t\t\t\t) {\n\n\tfloat result = 0.0;\n\tfloat ndotl = dot( N, L );\n\n\tif( ndotl > 0.0 ) {\n\n\t\tvec3 h = L + V; // Unnormalized half-way vector\n\t\tvec3 H = normalize( h );\n\n\t\tfloat ndoth = dot( N, H );\n\n\t\tfloat PH = pow( 2.0 * texture2D( tBeckmann, vec2( ndoth, m ) ).x, 10.0 );\n\n\t\tfloat F = fresnelReflectance( H, V, 0.028 );\n\t\tfloat frSpec = max( PH * F / dot( h, h ), 0.0 );\n\n\t\tresult = ndotl * rho_s * frSpec; // BRDF * dot(N,L) * rho_s\n\n\t}\n\n\treturn result;\n\n}\n\nvoid main() {\n\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\n\tvec4 colDiffuse = texture2D( tDiffuse, vUv );\n\tcolDiffuse.rgb *= colDiffuse.rgb;\n\n\tgl_FragColor = gl_FragColor * colDiffuse;\n\n\tvec3 normal = normalize( vNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\n\tfloat specularStrength;\n\n\tif ( enableSpecular ) {\n\n\t\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\t\tspecularStrength = texelSpecular.r;\n\n\t} else {\n\n\t\tspecularStrength = 1.0;\n\n\t}\n\n\t#ifdef USE_BUMPMAP\n\n\t\tif ( enableBump ) normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n\t#endif\n\n\t\t\t\t// point lights\n\n\tvec3 specularTotal = vec3( 0.0 );\n\n\t#if MAX_POINT_LIGHTS > 0\n\n\t\tvec3 pointTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\t\tfloat lDistance = 1.0;\n\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, lVector ), 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, lVector ) + 0.5, 0.0 );\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat pointSpecularWeight = KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tpointTotal    += lDistance * diffuse * pointLightColor[ i ] * pointDiffuseWeight;\n\t\t\tspecularTotal += lDistance * specular * pointLightColor[ i ] * pointSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// directional lights\n\n\t#if MAX_DIR_LIGHTS > 0\n\n\t\tvec3 dirTotal = vec3( 0.0 );\n\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dirDiffuseWeightFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\tvec3 dirDiffuseWeight = mix( vec3 ( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), uWrapRGB );\n\n\t\t\tfloat dirSpecularWeight =  KS_Skin_Specular( normal, dirVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tdirTotal \t   += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\t\t\tspecularTotal += specular * directionalLightColor[ i ] * dirSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// hemisphere lights\n\n\t#if MAX_HEMI_LIGHTS > 0\n\n\t\tvec3 hemiTotal = vec3( 0.0 );\n\n\t\tfor ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\t\themiTotal += diffuse * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t\t\t\t\t// specular (sky light)\n\n\t\t\tfloat hemiSpecularWeight = 0.0;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVector, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\t\t\t\t// specular (ground light)\n\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\themiSpecularWeight += KS_Skin_Specular( normal, lVectorGround, viewPosition, uRoughness, uSpecularBrightness );\n\n\t\t\tspecularTotal += specular * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * specularStrength;\n\n\t\t}\n\n\t#endif\n\n\t\t\t\t// all lights contribution summation\n\n\tvec3 totalLight = vec3( 0.0 );\n\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalLight += dirTotal;\n\t#endif\n\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalLight += pointTotal;\n\t#endif\n\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalLight += hemiTotal;\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalLight + ambientLightColor * ambient ) + specularTotal;\n\n[*]\n\n}\n'};XR(1251,1,{},lpc);_.bc=function mpc(){return 'uniform vec4 offsetRepeat;\n\nvarying vec3 vNormal;\nvarying vec2 vUv;\n\nvarying vec3 vViewPosition;\n\n[*]\n\nvoid main() {\n\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\tvViewPosition = -mvPosition.xyz;\n\n\tvNormal = normalize( normalMatrix * normal );\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n\tgl_Position = projectionMatrix * mvPosition;\n\n[*]\n\n}\n'};var BL=Pgb(IFc,'MaterialsBumpmapSkin$DemoScene',1080),AL=Pgb(IFc,'MaterialsBumpmapSkin$DemoScene$1',1081),tN=Pgb(BFc,'BeckmannShader',1181),sN=Pgb(BFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator',1182),qN=Pgb(BFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$1',1183),rN=Pgb(BFc,'BeckmannShader_Resources_default_InlineClientBundleGenerator$2',1184),IN=Pgb(BFc,'SkinSimpleShader',1248),HN=Pgb(BFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator',1249),FN=Pgb(BFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$1',1250),GN=Pgb(BFc,'SkinSimpleShader_Resources_default_InlineClientBundleGenerator$2',1251);iBc(wi)(17);