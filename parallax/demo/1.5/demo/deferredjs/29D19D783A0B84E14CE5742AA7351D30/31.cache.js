function Dvc(){}
function Hvc(){}
function Kvc(){}
function Omc(){gac.call(this)}
function wvc(){_Ib.call(this,(zvc(),yvc))}
function zvc(){zvc=EKc;yvc=new Dvc}
function Mvc(){Mvc=EKc;Bvc=new Hvc}
function Nvc(){Nvc=EKc;Cvc=new Kvc}
JU(1159,1,pMc);_.Db=function Mmc(){I9b(this.c,new Omc(this.b))};JU(1160,973,mMc,Omc);_.Nd=function Pmc(a){L5b(Wu(Wu(oSb(this.c,ISc),225).e,297),a.b.$);M5b(Wu(Wu(oSb(this.c,ISc),225).e,297),a.b.Z)};_.ob=function Qmc(){var a,b;Lt((gyb(),fyb),(qyb(),pyb),this);this.b=new jQb;y6b(this.b.ab,1);a=new T2b(new wvc);this.c=LZb(a).j;b=new $7b(new aXb(2,2),a);LPb(this.I,b);L5b(Wu(Wu(oSb(this.c,ISc),225).e,297),this.H.n.$);M5b(Wu(Wu(oSb(this.c,ISc),225).e,297),this.H.n.Z)};_.pb=function Rmc(a){nNb(Wu(oSb(this.c,LSc),225),new lkb(Wu(Wu(oSb(this.c,LSc),225).e,150).b+0.05));oHb(this.H.n,this.I,this.b,null,false)};JU(1292,731,cMc,wvc);_.Sd=function xvc(){PIb(this,LSc,new pNb((INb(),uNb),new lkb(1)));PIb(this,ISc,new pNb(CNb,new N5b))};var yvc;JU(1293,1,{},Dvc);_.Vd=function Evc(){return Mvc(),Bvc};_.Wd=function Fvc(){return Nvc(),Cvc};var Bvc,Cvc;JU(1294,1,{},Hvc);_.uc=function Ivc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};JU(1295,1,{},Kvc);_.uc=function Lvc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var yN=_jb(qRc,'MaterialsShaderMonjori$DemoScene',1160),AP=_jb(jRc,'MonjoriShader',1292),zP=_jb(jRc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1293),xP=_jb(jRc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1294),yP=_jb(jRc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1295);DMc(Ii)(31);