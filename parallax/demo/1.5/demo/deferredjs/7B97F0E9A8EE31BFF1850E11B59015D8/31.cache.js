function Vuc(){}
function Zuc(){}
function avc(){}
function emc(){x9b.call(this)}
function Ouc(){qIb.call(this,(Ruc(),Quc))}
function Ruc(){Ruc=WJc;Quc=new Vuc}
function cvc(){cvc=WJc;Tuc=new Zuc}
function dvc(){dvc=WJc;Uuc=new avc}
YT(1158,1,FLc);_.zb=function cmc(){Z8b(this.b,new emc(this.a))};YT(1159,971,CLc,emc);_.Gd=function fmc(a){a5b(pu(pu(FRb(this.b,PRc),225).d,297),a.a.Z);b5b(pu(pu(FRb(this.b,PRc),225).d,297),a.a.Y)};_.nb=function gmc(){var a,b;et((xxb(),wxb),(Hxb(),Gxb),this);this.a=new APb;P5b(this.a._,1);a=new i2b(new Ouc);this.b=aZb(a).i;b=new p7b(new rWb(2,2),a);aPb(this.H,b);a5b(pu(pu(FRb(this.b,PRc),225).d,297),this.G.k.Z);b5b(pu(pu(FRb(this.b,PRc),225).d,297),this.G.k.Y)};_.ob=function hmc(a){EMb(pu(FRb(this.b,SRc),225),new Djb(pu(pu(FRb(this.b,SRc),225).d,150).a+0.05));FGb(this.G.k,this.H,this.a,null,false)};YT(1291,729,sLc,Ouc);_.Ld=function Puc(){eIb(this,SRc,new GMb((ZMb(),LMb),new Djb(1)));eIb(this,PRc,new GMb(TMb,new c5b))};var Quc;YT(1292,1,{},Vuc);_.Od=function Wuc(){return cvc(),Tuc};_.Pd=function Xuc(){return dvc(),Uuc};var Tuc,Uuc;YT(1293,1,{},Zuc);_.nc=function $uc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};YT(1294,1,{},avc);_.nc=function bvc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var NM=rjb(xQc,'MaterialsShaderMonjori$DemoScene',1159),PO=rjb(qQc,'MonjoriShader',1291),OO=rjb(qQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1292),MO=rjb(qQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1293),NO=rjb(qQc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1294);TLc(xi)(31);