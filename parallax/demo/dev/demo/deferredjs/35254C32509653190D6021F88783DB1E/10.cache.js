function Fib(){}
function Oib(){}
function Lib(){}
function Tib(){}
function Sib(){}
function Xib(){}
function Wib(){}
function tkb(){}
function Ekb(){}
function Bkb(){}
function Jkb(){}
function Ikb(){}
function Nkb(){}
function Mkb(){}
function atb(){}
function rub(){}
function wub(){}
function zub(){}
function Qub(){}
function Uub(){}
function pDb(){}
function Rob(a,b){a.s=b}
function rDb(){uxb.call(this)}
function Aub(){ktb.call(this,new vtb)}
function Gib(){Ghb.call(this,(Kib(),Jib))}
function ukb(){Ghb.call(this,(Akb(),zkb))}
function sub(a){ktb.call(this,a);jtb(this,a.b)}
function xub(){vtb.call(this);this.b=(fub(),eub)}
function Kib(){Kib=sGb;Jib=new Oib}
function $ib(){$ib=sGb;Mib=new Tib}
function _ib(){_ib=sGb;Nib=new Xib}
function Akb(){Akb=sGb;zkb=new Ekb}
function Qkb(){Qkb=sGb;Ckb=new Jkb}
function Rkb(){Rkb=sGb;Dkb=new Nkb}
function btb(){Ssb.call(this,16777215);this.c=1;this.b=0;new rqb(0,0,0)}
function Rub(a){qtb.call(this,a);this.b=a.b;this.c=a.d;this.e=a.g;this.d=a.f;this.k=null;this.i=a.c;jtb(this,a.e)}
function Vub(){xtb.call(this);this.b=new cob(328965);this.g=new cob(1118481);this.d=new cob(0);this.c=(ymb(),xmb);this.e=(fub(),eub)}
function qDb(){var a,b,c,d,e,f,g,i;a=$doc.createElement(bLb);a.width=256;a.height=256;b=a.getContext(cLb);d=b.getImageData(0,0,256,256);i=0;for(c=0,e=0,f=d.data.length;c<f;c+=4,++e){g=e%64;i=g==0?i+1:i;d.data[c]=255;d.data[c+1]=255;d.data[c+2]=255;d.data[c+3]=Yp(Math.floor(g^i))}b.putImageData(d,0,0);return a}
_=Gib.prototype=Fib.prototype=new Bhb;_.gC=function Hib(){return ix};_.cd=function Iib(){Dhb(this,'mNear',new Tkb((mlb(),$kb),new SX(1)));Dhb(this,'mFar',new Tkb($kb,new SX(2000)));Dhb(this,GKb,new Tkb($kb,new SX(1)))};var Jib;_=Oib.prototype=Lib.prototype=new Jb;_.gC=function Pib(){return hx};_.fd=function Qib(){return $ib(),Mib};_.gd=function Rib(){return _ib(),Nib};var Mib=null,Nib=null;_=Tib.prototype=Sib.prototype=new Jb;_.gC=function Uib(){return fx};_.Qb=function Vib(){return 'uniform float mNear;\r\nuniform float mFar;\r\nuniform float opacity;\r\n\r\nvoid main() {\r\n\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\r\n\tgl_FragColor = vec4( vec3( color ), opacity );\r\n}\r\n'};_.cM={45:1};_=Xib.prototype=Wib.prototype=new Jb;_.gC=function Yib(){return gx};_.Qb=function Zib(){return 'void main() {\r\n\r\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\r\n\r\n}\r\n'};_.cM={45:1};_=ukb.prototype=tkb.prototype=new Bhb;_.gC=function vkb(){return yx};_.cd=function wkb(){Chb(this,(vlb(),qlb));Chb(this,rlb);Chb(this,slb);Chb(this,ulb);Dhb(this,HKb,new Tkb((mlb(),Zkb),new cob(16777215)));Dhb(this,IKb,new Tkb(Zkb,new cob(0)));Dhb(this,'specular',new Tkb(Zkb,new cob(1118481)));Dhb(this,'shininess',new Tkb($kb,new SX(30)));Dhb(this,JKb,new Tkb(ilb,new rqb(1,1,1)))};_.dd=function xkb(a){var b,c;c=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,[IJb,KKb,LKb,MKb,JJb,'uniform vec3 ambientLightColor;\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\r\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightAngle[ MAX_SPOT_LIGHTS ];\r\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\r\n\r\n\t#ifdef PHONG_PER_PIXEL\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\t#else\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n\tvarying vec3 vWorldPosition;\r\n\r\n#endif\r\n\r\n#ifdef WRAP_AROUND\r\n\tuniform vec3 wrapRGB;\r\n#endif\r\n\r\nvarying vec3 vViewPosition;\r\nvarying vec3 vNormal;',KJb]));b=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,[NKb,LJb,'vec3 normal = normalize( vNormal );\r\nvec3 viewPosition = normalize( vViewPosition );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\tvec3 pointDiffuse  = vec3( 0.0 );\r\n\tvec3 pointSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vPointLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vPointLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tpointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\r\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\r\n\t\tfloat pointSpecularWeight = max( pow( pointDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );\r\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\r\n\t\t#else\r\n\t\t\tpointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvec3 spotDiffuse  = vec3( 0.0 );\r\n\tvec3 spotSpecular = vec3( 0.0 );\r\n\r\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t#ifdef PHONG_PER_PIXEL\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\r\n\t\t\tlVector = normalize( lVector );\r\n\t\t#else\r\n\t\t\tvec3 lVector = normalize( vSpotLight[ i ].xyz );\r\n\t\t\tfloat lDistance = vSpotLight[ i ].w;\r\n\t\t#endif\r\n\r\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\r\n\r\n\t\tif ( spotEffect > spotLightAngle[ i ] ) {\r\n\t\t\tspotEffect = pow( spotEffect, spotLightExponent[ i ] );\r\n\r\n\t\t\t// diffuse\r\n\r\n\t\t\tfloat dotProduct = dot( normal, lVector );\r\n\r\n\t\t\t#ifdef WRAP_AROUND\r\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\r\n\t\t\t#else\r\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t\t#endif\r\n\r\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\r\n\r\n\t\t\t// specular\r\n\r\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\r\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\r\n\t\t\tfloat spotSpecularWeight = max( pow( spotDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );\r\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\r\n\t\t\t#else\r\n\t\t\t\tspotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;\r\n\t\t\t#endif\r\n\t\t}\r\n\t}\r\n\r\n#endif\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\tvec3 dirDiffuse  = vec3( 0.0 );\r\n\tvec3 dirSpecular = vec3( 0.0 );\r\n\r\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\r\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\r\n\t\tvec3 dirVector = normalize( lDirection.xyz );\r\n\r\n\t\t// diffuse\r\n\r\n\t\tfloat dotProduct = dot( normal, dirVector );\r\n\r\n\t\t#ifdef WRAP_AROUND\r\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\r\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\r\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\r\n\t\t#else\r\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\r\n\t\t#endif\r\n\r\n\t\tdirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\r\n\r\n\t\t// specular\r\n\r\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\r\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\r\n\t\tfloat dirSpecularWeight = max( pow( dirDotNormalHalf, shininess ), 0.0 );\r\n\r\n\t\t#ifdef PHYSICALLY_BASED_SHADING\r\n\t\t/*\r\n\t\t\t// fresnel term from skin shader\r\n\t\t\tconst float F0 = 0.128;\r\n\t\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\r\n\t\t\tfloat exponential = pow( base, 5.0 );\r\n\t\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\r\n\t\t*/\r\n\r\n\t\t/*\r\n\t\t\t// fresnel term from fresnel shader\r\n\t\t\tconst float mFresnelBias = 0.08;\r\n\t\t\tconst float mFresnelScale = 0.3;\r\n\t\t\tconst float mFresnelPower = 5.0;\r\n\t\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\r\n\t\t*/\r\n\r\n\t\t\t// 2.0 => 2.0001 is hack to work around ANGLE bug\r\n\t\t\tfloat specularNormalization = ( shininess + 2.0001 ) / 8.0;\r\n\t\t\t//dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\r\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );\r\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\r\n\t\t\r\n\t\t#else\r\n\t\t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\nvec3 totalDiffuse = vec3( 0.0 );\r\nvec3 totalSpecular = vec3( 0.0 );\r\n\r\n#if MAX_DIR_LIGHTS > 0\r\n\ttotalDiffuse += dirDiffuse;\r\n\ttotalSpecular += dirSpecular;\r\n#endif\r\n\r\n#if MAX_POINT_LIGHTS > 0\r\n\ttotalDiffuse += pointDiffuse;\r\n\ttotalSpecular += pointSpecular;\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\ttotalDiffuse += spotDiffuse;\r\n\ttotalSpecular += spotSpecular;\r\n#endif\r\n\r\n#ifdef METAL\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\r\n#else\r\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\r\n#endif',OKb,MJb,PKb,NJb,QKb,OJb]));Ehb(this,Khb(a,Jp(oB,{79:1,95:1},102,[c,b])))};_.ed=function ykb(a){var b,c,d,e;e=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,[RKb,SKb,TKb,'#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\r\n\t\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\r\n\t\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\r\n\r\n\t\tvarying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvarying vec3 vWorldPosition;\r\n#endif',IJb,UKb,VKb,PJb]));b=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,[WKb,XKb,YKb,QJb]));c=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,[ZKb]));d=new M1(Jp(mB,{79:1,80:1,84:1,95:1},1,['#ifndef PHONG_PER_PIXEL\r\n\r\n\t#if MAX_POINT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvPointLight[ i ] = vec4( lVector, lDistance );\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t#if MAX_SPOT_LIGHTS > 0\r\n\t\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\r\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\r\n\t\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\r\n\r\n\t\t\tfloat lDistance = 1.0;\r\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\r\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\r\n\t\t\t\r\n\t\t\tvSpotLight[ i ] = vec4( lVector, lDistance );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n\r\n#if MAX_SPOT_LIGHTS > 0\r\n\tvWorldPosition = mPosition.xyz;\r\n#endif',$Kb,_Kb,aLb,RJb]));Fhb(this,Khb(a,Jp(oB,{79:1,95:1},102,[e,b,c,d])))};var zkb;_=Ekb.prototype=Bkb.prototype=new Jb;_.gC=function Fkb(){return xx};_.fd=function Gkb(){return Qkb(),Ckb};_.gd=function Hkb(){return Rkb(),Dkb};var Ckb=null,Dkb=null;_=Jkb.prototype=Ikb.prototype=new Jb;_.gC=function Kkb(){return vx};_.Qb=function Lkb(){return 'uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform vec3 ambient;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tgl_FragColor = vec4( vec3 ( 1.0 ), opacity );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\t\r\n}\r\n'};_.cM={45:1};_=Nkb.prototype=Mkb.prototype=new Jb;_.gC=function Okb(){return wx};_.Qb=function Pkb(){return 'varying vec3 vViewPosition;\r\nvarying vec3 vNormal;\r\n\r\n//[*]\r\n\t\t\t\r\nvoid main() {\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\t\t\t\t\r\n//[*]\r\n\t\t\t\r\n#ifndef USE_ENVMAP\r\n\tvec4 mPosition = objectMatrix * vec4( position, 1.0 );\r\n#endif\r\n\r\nvViewPosition = -mvPosition.xyz;\r\n\t\t\t\r\n//[*]\r\n\t\t\t\r\nvNormal = transformedNormal;\r\n\r\n//[*]\r\n\r\n}\r\n'};_.cM={45:1};_=btb.prototype=atb.prototype=new Rsb;_.gC=function ctb(){return Jy};_.cM={146:1,147:1,158:1};_.b=0;_.c=0;_=sub.prototype=rub.prototype=new etb;_.zd=function tub(){return null};_.gC=function uub(){return Xy};_.Bd=function vub(){return new Gib};_.cM={150:1};_=xub.prototype=wub.prototype=new utb;_.gC=function yub(){return Wy};_=Aub.prototype=zub.prototype=new etb;_.gC=function Bub(){return Yy};_.cM={150:1,154:1};_=Rub.prototype=Qub.prototype=new dtb;_.gC=function Sub(){return cz};_.Bd=function Tub(){return new ukb};_.cM={148:1,150:1,156:1};_.b=null;_.c=null;_.d=0;_.e=null;_.f=null;_=Vub.prototype=Uub.prototype=new ttb;_.gC=function Wub(){return bz};_.f=30;_=kDb.prototype;_.ob=function oDb(){qxb(this.c,new rDb(this.b))};_=rDb.prototype=pDb.prototype=new txb;_.gC=function sDb(){return BA};_.bd=function tDb(){f6(this,new Qnb(45,n6(this.r.D),1,2000))};_.cb=function uDb(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;nqb(this.q.G,0,200,800);enb(this.t,this.q);c=new Sob;for(i=0;i<=40;++i){a1(c.C,new rqb(-500,-75,i*25-500));a1(c.C,new rqb(500,-75,i*25-500));a1(c.C,new rqb(i*25-500,-75,-500));a1(c.C,new rqb(i*25-500,-75,500))}o=new Etb;o.b=new cob(16777215);o.u=0.20000000298023224;n=new Atb(o);k=new uvb(c,n,(Dvb(),Bvb));enb(this.t,k);C=new Wlb(qDb());C.p=true;this.b=new k1;u=new Hub;u.k=C;u.v=true;a1(this.b,new Dub(u));v=new Hub;v.i=new cob(14540253);v.e=(fub(),cub);a1(this.b,new Dub(v));z=new Vub;z.b=new cob(197379);z.i=new cob(14540253);z.g=new cob(39168);z.f=30;z.e=cub;a1(this.b,new Rub(z));a1(this.b,new Kub(new Oub));q=new pub;q.i=new cob(16755200);q.v=true;q.r=(Ptb(),Itb);a1(this.b,new kub(q));w=new Hub;w.i=new cob(14540253);w.e=eub;a1(this.b,new Dub(w));z.k=C;z.v=true;a1(this.b,new Rub(z));y=new Oub;y.b=eub;a1(this.b,new Kub(y));r=new pub;r.i=new cob(65450);r.x=true;a1(this.b,new kub(r));a1(this.b,new sub(new xub));x=new Hub;x.i=new cob(6710886);x.d=new cob(16711680);x.b=new cob(0);x.e=eub;a1(this.b,new Dub(x));A=new Vub;A.b=new cob(0);A.d=new cob(16711680);A.i=new cob(0);A.g=new cob(6710886);A.f=10;A.e=eub;A.u=0.8999999761581421;A.v=true;a1(this.b,new Rub(A));s=new pub;r.k=C;r.v=true;a1(this.b,new kub(s));g=new Yrb(70,32,16);e=new Yrb(70,32,16);f=new Yrb(70,32,16);for(i=0,j=f.o.c;i<j;++i){b=Sp(e1(f.o,i),133);b.i=0}Rob(f,this.b);a1(this.b,new Aub);this.c=new k1;for(i=0,j=this.b.c;i<j;++i){p=Sp(e1(this.b,i),150);d=p.gC()==Yy?f:p.O==cub?e:g;B=new Rvb(d,p);bqb(B.G,i%4*200-400);oqb(B.G,Math.floor(i/4)*200-200);bqb(B.J,Math.random()*200-100);cqb(B.J,Math.random()*200-100);oqb(B.J,Math.random()*200-100);a1(this.c,B);enb(this.t,B)}t=new pub;t.i=new cob(16777215);this.d=new Rvb(new Yrb(4,8,8),new kub(t));enb(this.t,this.d);enb(this.t,new Vsb(1118481));a=new Zsb(0.125);bqb(a.G,Math.random()-0.5);cqb(a.G,Math.random()-0.5);oqb(a.G,Math.random()-0.5);a.G.vd();enb(this.t,a);this.e=new btb;enb(this.t,this.e)};_._c=function vDb(){};_.db=function wDb(a){var b,c,d,e,f;f=1.0E-4*a;bqb(this.q.G,Math.cos(f)*1000);oqb(this.q.G,Math.sin(f)*1000);unb(this.q,this.t.G);for(b=0,c=this.c.c;b<c;++b){e=Sp(e1(this.c,b),161);e.J.d+=0.009999999776482582;e.J.e+=0.004999999888241291;d=Sp(e1(this.b,b),150);b>9&&Up(d,156)?Znb(Sp(d,156).c,0.5400000214576721,1,0.7*(0.5+0.5*Math.sin(35*f))):b>9&&Up(d,155)&&Znb(Sp(d,155).c,0.03999999910593033,1,0.7*(0.5+0.5*Math.cos(35*f)))}bqb(this.d.G,Math.sin(f*7)*300);cqb(this.d.G,Math.cos(f*5)*400);oqb(this.d.G,Math.cos(f*3)*300);bqb(this.e.G,this.d.G.d);cqb(this.e.G,this.d.G.e);oqb(this.e.G,this.d.G.c);e6(this)};_.b=null;_.c=null;_.d=null;_.e=null;var ix=xX(mKb,'ShaderDepth'),hx=xX(mKb,'ShaderDepth_Resources_default_InlineClientBundleGenerator'),fx=xX(mKb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$1'),gx=xX(mKb,'ShaderDepth_Resources_default_InlineClientBundleGenerator$2'),yx=xX(mKb,'ShaderPhong'),xx=xX(mKb,'ShaderPhong_Resources_default_InlineClientBundleGenerator'),vx=xX(mKb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$1'),wx=xX(mKb,'ShaderPhong_Resources_default_InlineClientBundleGenerator$2'),Wy=xX(dLb,'MeshDepthMaterial$MeshDepthMaterialOptions'),Yy=xX(dLb,'MeshFaceMaterial'),bz=xX(dLb,'MeshPhongMaterial$MeshPhongMaterialOptions'),BA=xX(HJb,'MaterialsCanvas2D$DemoScene');uGb(Zd)(10);