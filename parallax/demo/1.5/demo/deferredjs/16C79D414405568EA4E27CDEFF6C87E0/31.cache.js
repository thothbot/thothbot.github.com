function Tuc(){}
function Xuc(){}
function $uc(){}
function cmc(){w9b.call(this)}
function Muc(){pIb.call(this,(Puc(),Ouc))}
function Puc(){Puc=UJc;Ouc=new Tuc}
function avc(){avc=UJc;Ruc=new Xuc}
function bvc(){bvc=UJc;Suc=new $uc}
YT(1157,1,DLc);_.zb=function amc(){Y8b(this.b,new cmc(this.a))};YT(1158,971,ALc,cmc);_.Gd=function dmc(a){_4b(pu(pu(ERb(this.b,MRc),225).d,297),a.a.Z);a5b(pu(pu(ERb(this.b,MRc),225).d,297),a.a.Y)};_.nb=function emc(){var a,b;et((wxb(),vxb),(Gxb(),Fxb),this);this.a=new zPb;O5b(this.a._,1);a=new h2b(new Muc);this.b=_Yb(a).i;b=new o7b(new qWb(2,2),a);_Ob(this.H,b);_4b(pu(pu(ERb(this.b,MRc),225).d,297),this.G.k.Z);a5b(pu(pu(ERb(this.b,MRc),225).d,297),this.G.k.Y)};_.ob=function fmc(a){DMb(pu(ERb(this.b,PRc),225),new Cjb(pu(pu(ERb(this.b,PRc),225).d,150).a+0.05));EGb(this.G.k,this.H,this.a,null,false)};YT(1290,729,qLc,Muc);_.Ld=function Nuc(){dIb(this,PRc,new FMb((YMb(),KMb),new Cjb(1)));dIb(this,MRc,new FMb(SMb,new b5b))};var Ouc;YT(1291,1,{},Tuc);_.Od=function Uuc(){return avc(),Ruc};_.Pd=function Vuc(){return bvc(),Suc};var Ruc,Suc;YT(1292,1,{},Xuc);_.nc=function Yuc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};YT(1293,1,{},$uc);_.nc=function _uc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var NM=qjb(uQc,'MaterialsShaderMonjori$DemoScene',1158),PO=qjb(nQc,'MonjoriShader',1290),OO=qjb(nQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1291),MO=qjb(nQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1292),NO=qjb(nQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1293);RLc(xi)(31);