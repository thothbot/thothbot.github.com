function Xsc(){}
function _sc(){}
function ctc(){}
function Skc(){L7b.call(this)}
function Qsc(){zHb.call(this,(Tsc(),Ssc))}
function Tsc(){Tsc=xFc;Ssc=new Xsc}
function etc(){etc=xFc;Vsc=new _sc}
function ftc(){ftc=xFc;Wsc=new ctc}
yT(1146,1,hHc);_.Db=function Qkc(){l7b(this.c,new Skc(this.b))};yT(1147,961,eHc,Skc);_.Ld=function Tkc(a){s3b(Xu(Xu(mQb(this.c,zNc),225).e,296),a.b.$);t3b(Xu(Xu(mQb(this.c,zNc),225).e,296),a.b.Z)};_.ob=function Ukc(){var a,b;Mt((Hwb(),Gwb),(Rwb(),Qwb),this);this.b=new nOb;e4b(this.b.ab,1);a=new A0b(new Qsc);this.c=GXb(a).j;b=new G5b(new YUb(2,2),a);QNb(this.G,b);s3b(Xu(Xu(mQb(this.c,zNc),225).e,296),this.F.n.$);t3b(Xu(Xu(mQb(this.c,zNc),225).e,296),this.F.n.Z)};_.pb=function Vkc(a){sLb(Xu(mQb(this.c,CNc),225),new Qib(Xu(Xu(mQb(this.c,CNc),225).e,150).b+0.05));OFb(this.F.n,this.G,this.b,null,false)};yT(1284,726,WGc,Qsc);_.Qd=function Rsc(){nHb(this,CNc,new uLb((NLb(),zLb),new Qib(1)));nHb(this,zNc,new uLb(HLb,new u3b))};var Ssc;yT(1285,1,{},Xsc);_.Td=function Ysc(){return etc(),Vsc};_.Ud=function Zsc(){return ftc(),Wsc};var Vsc,Wsc;yT(1286,1,{},_sc);_.hc=function atc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(abs(i-e),2.0)+pow(abs(d-f),2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}\n'};yT(1287,1,{},ctc);_.hc=function dtc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var pN=Eib(fMc,'MaterialsShaderMonjori$DemoScene',1147),NO=Eib($Lc,'MonjoriShader',1284),MO=Eib($Lc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1285),KO=Eib($Lc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1286),LO=Eib($Lc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1287);uHc(Ii)(31);