function Foc(){}
function Joc(){}
function Moc(){}
function bhc(){k5b.call(this)}
function yoc(){pFb.call(this,(Boc(),Aoc))}
function Boc(){Boc=mzc;Aoc=new Foc}
function Ooc(){Ooc=mzc;Doc=new Joc}
function Poc(){Poc=mzc;Eoc=new Moc}
TR(1112,1,SAc);_.yb=function _gc(){h5b(this.b,new bhc(this.a))};TR(1113,944,PAc,bhc);_.Fd=function chc(a){q1b(qu(qu(aOb(this.b,aHc),174).d,245),a.a.X);r1b(qu(qu(aOb(this.b,aHc),174).d,245),a.a.W)};_.mb=function dhc(){var a,b;et((Gub(),Fub),(Qub(),Pub),this);this.a=new cMb;c2b(this.a._,1);a=new w$b(new yoc);this.b=tVb(a).i;b=new D3b(new PSb(2,2),a);ELb(this.F,b)};_.nb=function ehc(a){iJb(qu(aOb(this.b,dHc),174),new Tgb(qu(qu(aOb(this.b,dHc),174).d,98).a+0.05));NDb(this.D.n,this.F,this.a,null,false)};TR(1240,717,EAc,yoc);_.Jd=function zoc(){dFb(this,dHc,new kJb((DJb(),pJb),new Tgb(1)));dFb(this,aHc,new kJb(xJb,new s1b))};var Aoc;TR(1241,1,{},Foc);_.Md=function Goc(){return Ooc(),Doc};_.Nd=function Hoc(){return Poc(),Eoc};var Doc,Eoc;TR(1242,1,{},Joc);_.bc=function Koc(){return 'uniform vec2 resolution;\nuniform float time;\n\nvoid main()\t{\n\n\tvec2 p = -1.0 + 2.0 * gl_FragCoord.xy / resolution.xy;\n\tfloat a = time*40.0;\n\tfloat d,e,f,g=1.0/40.0,h,i,r,q;\n\te=400.0*(p.x*0.5+0.5);\n\tf=400.0*(p.y*0.5+0.5);\n\ti=200.0+sin(e*g+a/150.0)*20.0;\n\td=200.0+cos(f*g/2.0)*18.0+cos(e*g)*7.0;\n\tr=sqrt(pow(i-e,2.0)+pow(d-f,2.0));\n\tq=f/r;\n\te=(r*cos(q))-a/2.0;f=(r*sin(q))-a/2.0;\n\td=sin(e*g)*176.0+sin(e*g)*164.0+r;\n\th=((f+d)+a/2.0)*g;\n\ti=cos(h+r*p.x/1.3)*(e+e+a)+cos(q*g*6.0)*(r+h/3.0);\n\th=sin(f*g)*144.0-sin(e*g)*212.0*p.x;\n\th=(h+(f-e)*q+sin(r-(a+h)/7.0)*10.0+i/4.0)*g;\n\ti+=cos(h*2.3*sin(a/350.0-q))*184.0*sin(q-(r*4.3+a/12.0)*g)+tan(r*g+h)*184.0*cos(r*g+h);\n\ti=mod(i/5.6,256.0)/64.0;\n\tif(i<0.0) i+=4.0;\n\tif(i>=2.0) i=4.0-i;\n\td=r/350.0;\n\td+=sin(d*d*8.0)*0.52;\n\tf=(sin(a*g)+1.0)/2.0;\n\tgl_FragColor=vec4(vec3(f*i/1.6,i/2.0+d/13.0,i)*d*p.x+vec3(i/1.3+d/8.0,i/2.0+d/18.0,i)*d*(1.0-p.x),1.0);\n\n}'};TR(1243,1,{},Moc);_.bc=function Noc(){return 'void main()\t{\n\n\tgl_Position = vec4( position, 1.0 );\n\n}'};var cM=Hgb(BFc,'MaterialsShaderMonjori$DemoScene',1113),AN=Hgb(uFc,'MonjoriShader',1240),zN=Hgb(uFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator',1241),xN=Hgb(uFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$1',1242),yN=Hgb(uFc,'MonjoriShader_Resources_default_InlineClientBundleGenerator$2',1243);cBc(wi)(31);