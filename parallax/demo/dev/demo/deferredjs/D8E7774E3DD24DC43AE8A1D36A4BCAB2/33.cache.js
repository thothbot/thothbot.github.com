function Ktb(){}
function Vtb(){}
function Stb(){}
function $tb(){}
function Ztb(){}
function cub(){}
function bub(){}
function X7b(){}
function Y7b(){iTb.call(this)}
function Ltb(){Vqb.call(this,(Rtb(),Qtb))}
function Rtb(){Rtb=Phc;Qtb=new Vtb}
function fub(){fub=Phc;Ttb=new $tb}
function gub(){gub=Phc;Utb=new cub}
function kzb(a){rzb(a,a.d*a.d);ozb(a,a.b*a.b);nzb(a,a.a*a.a);return a}
var ymc='enableAO',zmc='enableDiffuse',Amc='tNormal',Bmc='tSpecular',Cmc='uNormalScale',Dmc='uShininess';_=Ltb.prototype=Ktb.prototype=new Hqb;_.gC=function Mtb(){return zA};_.qd=function Ntb(){Rqb(this,qwb());Rqb(this,rwb());Rqb(this,swb());Kqb(this,ymc,new Tvb((lwb(),awb),(C3(),C3(),A3)));Kqb(this,zmc,new Tvb(awb,A3));Kqb(this,Tlc,new Tvb(awb,A3));Kqb(this,'enableReflection',new Tvb(awb,A3));Kqb(this,'enableDisplacement',new Tvb(awb,A3));Kqb(this,'tDisplacement',new Svb(dwb));Kqb(this,Vlc,new Svb(dwb));Kqb(this,vmc,new Svb(dwb));Kqb(this,Amc,new Svb(dwb));Kqb(this,Bmc,new Svb(dwb));Kqb(this,'tAO',new Svb(dwb));Kqb(this,Cmc,new Tvb(fwb,new fEb(1,1)));Kqb(this,'uDisplacementBias',new Tvb(Zvb,new $3(0)));Kqb(this,'uDisplacementScale',new Tvb(Zvb,new $3(1)));Kqb(this,Zlc,new Tvb(Yvb,new vzb(16777215)));Kqb(this,$lc,new Tvb(Yvb,new vzb(1118481)));Kqb(this,Ylc,new Tvb(Yvb,new vzb(16777215)));Kqb(this,Dmc,new Tvb(Zvb,new $3(30)));Kqb(this,emc,new Tvb(Zvb,new $3(1)));Kqb(this,Emc,new Tvb(awb,A3));Kqb(this,'uRefractionRatio',new Tvb(Zvb,new $3(0.98)));Kqb(this,'uReflectivity',new Tvb(Zvb,new $3(0.5)));Kqb(this,'uOffset',new Tvb(fwb,new fEb(0,0)));Kqb(this,'uRepeat',new Tvb(fwb,new fEb(1,1)));Kqb(this,Fmc,new Tvb(hwb,new LEb(1,1,1)))};_.rd=function Otb(a){var b,c;c=new bab(ds(oI,{87:1,99:1},1,[fmc,gmc]));b=new bab(ds(oI,{87:1,99:1},1,[imc,jmc,kmc]));Qqb(this,_qb(a,ds(qI,{87:1,99:1},106,[c,b])))};_.sd=function Ptb(a){var b,c;c=new bab(ds(oI,{87:1,99:1},1,[Gmc,lmc]));b=new bab(ds(oI,{87:1,99:1},1,[Hmc,Imc]));Sqb(this,_qb(a,ds(qI,{87:1,99:1},106,[c,b])))};_.cM={131:1};var Qtb;_=Vtb.prototype=Stb.prototype=new Kb;_.gC=function Wtb(){return yA};_.td=function Xtb(){return fub(),Ttb};_.ud=function Ytb(){return gub(),Utb};var Ttb=null,Utb=null;_=$tb.prototype=Ztb.prototype=new Kb;_.gC=function _tb(){return wA};_.Vb=function aub(){return 'uniform vec3 uAmbientColor;\r\nuniform vec3 uDiffuseColor;\r\nuniform vec3 uSpecularColor;\r\nuniform float uShininess;\r\nuniform float uOpacity;\r\n\r\nuniform bool enableDiffuse;\r\nuniform bool enableSpecular;\r\nuniform bool enableAO;\r\nuniform bool enableReflection;\r\n\r\nuniform sampler2D tDiffuse;\r\nuniform sampler2D tNormal;\r\nuniform sampler2D tSpecular;\r\nuniform sampler2D tAO;\r\n\r\nuniform samplerCube tCube;\r\n\r\nuniform vec2 uNormalScale;\r\n\r\nuniform bool useRefract;\r\nuniform float uRefractionRatio;\r\nuniform float uReflectivity;\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nuniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_HEMI_LIGHTS > 0\r\n\r\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\r\n\tuniform vec3 hemisphereLightPosition[ MAX_HEMI_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\r\n\tuniform vec3 wrapRGB;\r\n\r\n#endif\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( vec3( 1.0 ), uOpacity );\r\n\r\n\tvec3 specularTex = vec3( 1.0 );\r\n\r\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\r\n\tnormalTex.xy *= uNormalScale;\r\n\tnormalTex = normalize( normalTex );\r\n\r\n\tif( enableDiffuse ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\r\n\t\t\ttexelColor.xyz *= texelColor.xyz;\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableAO ) {\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\r\n\t\t\taoColor.xyz *= aoColor.xyz;\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n\tif( enableSpecular )\r\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\r\n\r\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\r\n\tvec3 finalNormal = tsb * normalTex;\r\n\r\n\t#ifdef FLIP_SIDED\r\n\r\n\t\tfinalNormal = -finalNormal;\r\n\r\n\t#endif\r\n\r\n\tvec3 normal = normalize( finalNormal );\r\n\tvec3 viewPosition = normalize( vViewPosition );\r\n\r\n\t// point lights\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\tvec3 pointDiffuse = vec3( 0.0 );\r\n\t\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat pointDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tpointVector = normalize( pointVector );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\r\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\r\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );\r\n\t\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tpointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// spot lights\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\tvec3 spotDiffuse = vec3( 0.0 );\r\n\t\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat spotDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tspotVector = normalize( spotVector );\r\n\r\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\r\n\t\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t\t// diffuse\r\n\r\n\t\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\r\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t// specular\r\n\r\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\r\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );\r\n\t\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\r\n\r\n\t\t\t\t#else\r\n\r\n\t\t\t\t\tspotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;\r\n\r\n\t\t\t\t#endif\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// directional lights\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\tvec3 dirDiffuse = vec3( 0.0 );\r\n\t\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\r\n\r\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\r\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\r\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\r\n\r\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tdirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// hemisphere lights\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\tvec3 hemiDiffuse  = vec3( 0.0 );\r\n\t\tvec3 hemiSpecular = vec3( 0.0 );\r\n\r\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( hemisphereLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = normalize( lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\r\n\r\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\r\n\r\n\t\t\themiDiffuse += uDiffuseColor * hemiColor;\r\n\r\n\t\t\t// specular (sky light)\r\n\r\n\r\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );\r\n\r\n\t\t\t// specular (ground light)\r\n\r\n\t\t\tvec3 lVectorGround = normalize( -lPosition.xyz + vViewPosition.xyz );\r\n\r\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\r\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\r\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\r\n\t\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\r\n\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\r\n\t\t\t\tfloat specularNormalization = ( uShininess + 2.0001 ) / 8.0;\r\n\r\n\t\t\t\tvec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );\r\n\t\t\t\tvec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );\r\n\t\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\themiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t// all lights contribution summation\r\n\r\n\tvec3 totalDiffuse = vec3( 0.0 );\r\n\tvec3 totalSpecular = vec3( 0.0 );\r\n\r\n\t#if MAX_DIR_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += dirDiffuse;\r\n\t\ttotalSpecular += dirSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_HEMI_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += hemiDiffuse;\r\n\t\ttotalSpecular += hemiSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += pointDiffuse;\r\n\t\ttotalSpecular += pointSpecular;\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\r\n\t\ttotalDiffuse += spotDiffuse;\r\n\t\ttotalSpecular += spotSpecular;\r\n\r\n\t#endif\r\n\r\n\t#ifdef METAL\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );\r\n\r\n\t#else\r\n\r\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;\r\n\r\n\t#endif\r\n\r\n\tif ( enableReflection ) {\r\n\r\n\t\tvec3 vReflect;\r\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\r\n\r\n\t\tif ( useRefract ) {\r\n\r\n\t\t\tvReflect = refract( cameraToVertex, normal, uRefractionRatio );\r\n\r\n\t\t} else {\r\n\r\n\t\t\tvReflect = reflect( cameraToVertex, normal );\r\n\r\n\t\t}\r\n\r\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\r\n\r\n\t\t#ifdef GAMMA_INPUT\r\n\r\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\r\n\r\n\t\t#endif\r\n\r\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );\r\n\r\n\t}\r\n\r\n[*]\r\n\r\n}\r\n'};_=cub.prototype=bub.prototype=new Kb;_.gC=function dub(){return xA};_.Vb=function eub(){return 'attribute vec4 tangent;\r\n\r\nuniform vec2 uOffset;\r\nuniform vec2 uRepeat;\r\n\r\nuniform bool enableDisplacement;\r\n\r\n#ifdef VERTEX_TEXTURES\r\n\r\n\tuniform sampler2D tDisplacement;\r\n\tuniform float uDisplacementScale;\r\n\tuniform float uDisplacementBias;\r\n\r\n#endif\r\n\r\nvarying vec3 vTangent;\r\nvarying vec3 vBinormal;\r\nvarying vec3 vNormal;\r\nvarying vec2 vUv;\r\n\r\nvarying vec3 vWorldPosition;\r\nvarying vec3 vViewPosition;\r\n\r\n[*]\r\n\r\nvoid main() {\r\n\r\n[*]\r\n\r\n\t// normal, tangent and binormal vectors\r\n\r\n\t#ifdef USE_SKINNING\r\n\r\n\t\tvNormal = normalMatrix * skinnedNormal.xyz;\r\n\r\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\r\n\t\tvTangent = normalMatrix * skinnedTangent.xyz;\r\n\r\n\t#else\r\n\r\n\t\tvNormal = normalMatrix * normal;\r\n\t\tvTangent = normalMatrix * tangent.xyz;\r\n\r\n\t#endif\r\n\r\n\tvBinormal = cross( vNormal, vTangent ) * tangent.w;\r\n\r\n\tvUv = uv * uRepeat + uOffset;\r\n\r\n\t// displacement mapping\r\n\r\n\tvec3 displacedPosition;\r\n\r\n\t#ifdef VERTEX_TEXTURES\r\n\r\n\t\tif ( enableDisplacement ) {\r\n\r\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\r\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\r\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\r\n\r\n\t\t} else {\r\n\r\n\t\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tdisplacedPosition = position;\r\n\r\n\t\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t#else\r\n\r\n\t\t#ifdef USE_SKINNING\r\n\r\n\t\t\tvec4 skinVertex = vec4( position, 1.0 );\r\n\r\n\t\t\tvec4 skinned  = boneMatX * skinVertex * skinWeight.x;\r\n\t\t\tskinned \t  += boneMatY * skinVertex * skinWeight.y;\r\n\r\n\t\t\tdisplacedPosition  = skinned.xyz;\r\n\r\n\t\t#else\r\n\r\n\t\t\tdisplacedPosition = position;\r\n\r\n\t\t#endif\r\n\r\n\t#endif\r\n\r\n\t//\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\r\n\tvec4 mPosition = modelMatrix * vec4( displacedPosition, 1.0 );\r\n\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t//\r\n\r\n\tvWorldPosition = mPosition.xyz;\r\n\tvViewPosition = -mvPosition.xyz;\r\n\r\n\t// shadows\r\n\r\n\t#ifdef USE_SHADOWMAP\r\n\r\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\r\n\r\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * mPosition;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n}\r\n'};_=S7b.prototype;_.pb=function W7b(){eTb(this.b,new Y7b(this.a))};_=Y7b.prototype=X7b.prototype=new hTb;_.gC=function Z7b(){return xG};_.md=function $7b(){Mdb(this,new bzb(25,Eeb(this.A.D),50,10000000))};_.gb=function _7b(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z;this.z.W.b=44597;hyb(this.B,this.z);this.a=new xfb(this.z,this.A.D);this.a.o=0.2;this.a.a=0.3;this.a.k=7008.1;this.a.j=637100;b=new LLb(16777215);FEb(b.W,-1,0,1).ge();hyb(this.B,b);s=(hSb(),jSb('./static/textures/planets/earth_atmos_2048.jpg',(oxb(),nxb),null));a=jSb('./static/textures/planets/earth_clouds_1024.png',nxb,null);j=jSb('./static/textures/planets/earth_normal_2048.jpg',nxb,null);u=jSb('./static/textures/planets/earth_specular_2048.jpg',nxb,null);i=jSb(xmc,nxb,null);g=new yQb(new Ltb);g.c=true;y=dMb(g).i;Rvb(ms(y.a[Amc],133),j);bEb(ms(ms(y.a[Cmc],133).d,155),0.85,0.85);Rvb(ms(y.a[Vlc],133),s);Rvb(ms(y.a[Bmc],133),u);Rvb(ms(y.a[ymc],133),(C3(),C3(),A3));Rvb(ms(y.a[zmc],133),B3);Rvb(ms(y.a[Tlc],133),B3);qzb(ms(ms(y.a[Zlc],133).d,142),16777215);qzb(ms(ms(y.a[$lc],133).d,142),6710886);qzb(ms(ms(y.a[Ylc],133).d,142),0);Rvb(ms(y.a[Dmc],133),new $3(20));kzb(ms(ms(y.a[Zlc],133).d,142));kzb(ms(ms(y.a[$lc],133).d,142));kzb(ms(ms(y.a[Ylc],133).d,142));c=new KJb(6371,100,50);Nzb(c);this.d=new hRb(c,g);this.d.Z.d=0;this.d.Z.b=0.41;hyb(this.B,this.d);e=new aPb;WOb(e,new vzb(16777215));e.p=a;e.Q=true;this.b=new hRb(c,e);GEb(this.b._,1.005);this.b.Z.b=0.41;hyb(this.B,this.b);f=new NPb;GPb(f,new vzb(16777215));f.t=i;this.c=new hRb(c,f);FEb(this.c.W,31855,0,0);GEb(this.c._,0.23);hyb(this.B,this.c);w=new Wzb;for(d=0;d<1500;++d){z=new KEb;cEb(z,Math.random()*2-1);dEb(z,Math.random()*2-1);IEb(z,Math.random()*2-1);z.fe(6371);w.G.Bc(z)}k=new lQb;jQb(k,new vzb(5592405));k.d=2;k.e=false;x=new A9;es(x.a,x.b++,k);n=new lQb;jQb(n,new vzb(5592405));n.d=1;n.e=false;es(x.a,x.b++,n);o=new lQb;jQb(o,new vzb(3355443));o.d=2;o.e=false;es(x.a,x.b++,o);p=new lQb;jQb(p,new vzb(3815994));p.d=1;p.e=false;es(x.a,x.b++,p);q=new lQb;jQb(q,new vzb(1710618));q.d=2;q.e=false;es(x.a,x.b++,q);r=new lQb;jQb(r,new vzb(1710618));r.d=1;r.e=false;es(x.a,x.b++,r);for(d=10;d<30;++d){v=new rRb(w,ms((b8(d%6,x.b),x.a[d%6]),186));cEb(v.Z,Math.random()*6);dEb(v.Z,Math.random()*6);IEb(v.Z,Math.random()*6);t=d*10;GEb(v._,t);v.R=false;syb(v);hyb(this.B,v)}this.A.Q=false;this.A.I=false;this.A.K=true;this.A.L=true;this.e=Uc()};_.ld=function a8b(){};_.hb=function b8b(a){var b,c;c=(Uc()-this.e)*0.001;ZDb(this.d.Z,0.1*c);ZDb(this.b.Z,0.125*c);b=c*0.1;myb(this.c,new LEb(Math.cos(b)*this.c.W.c-Math.sin(b)*this.c.W.b,0,Math.sin(b)*this.c.W.c+Math.cos(b)*this.c.W.b));ZDb(this.c.Z,-b);vfb(this.a);rpb(this.A);this.e=Uc()};_.a=null;_.b=null;_.c=null;_.d=null;_.e=0;var zA=O3(smc,'NormalMapShader'),yA=O3(smc,'NormalMapShader_Resources_default_InlineClientBundleGenerator'),wA=O3(smc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$1'),xA=O3(smc,'NormalMapShader_Resources_default_InlineClientBundleGenerator$2'),xG=O3(qlc,'TrackballEarth$DemoScene');Rhc(Vd)(33);