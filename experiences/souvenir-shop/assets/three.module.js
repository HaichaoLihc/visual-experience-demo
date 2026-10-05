/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */import{Matrix3 as Fe,Vector2 as ct,Color as Ye,mergeUniforms as dt,Vector3 as Ve,CubeUVReflectionMapping as Jt,Mesh as xt,BoxGeometry as Nn,ShaderMaterial as Rt,BackSide as ht,cloneUniforms as qi,Euler as Fn,Matrix4 as Ht,ColorManagement as nt,SRGBTransfer as Xe,PlaneGeometry as On,FrontSide as Vt,getUnlitUniformColorSpace as $i,IntType as Bn,HalfFloatType as jt,UnsignedByteType as Ct,FloatType as bt,RGBAFormat as St,Plane as Zi,EquirectangularReflectionMapping as un,EquirectangularRefractionMapping as pn,WebGLCubeRenderTarget as Qi,CubeReflectionMapping as kt,CubeRefractionMapping as Dt,OrthographicCamera as Ji,PerspectiveCamera as en,NoToneMapping as At,MeshBasicMaterial as ji,NoBlending as Pt,WebGLRenderTarget as wt,BufferGeometry as Gn,BufferAttribute as tn,LinearSRGBColorSpace as nn,LinearFilter as It,warnOnce as Hn,Uint32BufferAttribute as er,Uint16BufferAttribute as tr,arrayNeedsUint32 as Qa,Vector4 as lt,DataArrayTexture as Vn,CubeTexture as nr,Data3DTexture as ir,LessEqualCompare as kn,DepthTexture as Wn,Texture as rr,GLSL3 as zn,PCFShadowMap as Xn,PCFSoftShadowMap as ar,VSMShadowMap as Et,CustomToneMapping as or,NeutralToneMapping as sr,AgXToneMapping as cr,ACESFilmicToneMapping as lr,CineonToneMapping as fr,ReinhardToneMapping as dr,LinearToneMapping as ur,LinearTransfer as Kn,AddOperation as pr,MixOperation as hr,MultiplyOperation as mr,UniformsUtils as _r,DoubleSide as Mt,NormalBlending as rn,TangentSpaceNormalMap as vr,ObjectSpaceNormalMap as gr,Layers as Sr,Frustum as Yn,MeshDepthMaterial as Er,RGBADepthPacking as Mr,MeshDistanceMaterial as Tr,NearestFilter as Wt,LessEqualDepth as an,ReverseSubtractEquation as xr,SubtractEquation as Ar,AddEquation as zt,OneMinusConstantAlphaFactor as Rr,ConstantAlphaFactor as Cr,OneMinusConstantColorFactor as br,ConstantColorFactor as Pr,OneMinusDstAlphaFactor as Lr,OneMinusDstColorFactor as Ur,OneMinusSrcAlphaFactor as Dr,OneMinusSrcColorFactor as wr,DstAlphaFactor as Ir,DstColorFactor as yr,SrcAlphaSaturateFactor as Nr,SrcAlphaFactor as Fr,SrcColorFactor as Or,OneFactor as Br,ZeroFactor as Gr,NotEqualDepth as hn,GreaterDepth as mn,GreaterEqualDepth as _n,EqualDepth as vn,LessDepth as gn,AlwaysDepth as Sn,NeverDepth as En,CullFaceNone as Hr,CullFaceBack as qn,CullFaceFront as Vr,CustomBlending as kr,MultiplyBlending as $n,SubtractiveBlending as Zn,AdditiveBlending as Qn,MinEquation as Wr,MaxEquation as zr,MirroredRepeatWrapping as Xr,ClampToEdgeWrapping as Kr,RepeatWrapping as Yr,LinearMipmapLinearFilter as Xt,LinearMipmapNearestFilter as Mn,NearestMipmapLinearFilter as on,NearestMipmapNearestFilter as qr,NotEqualCompare as $r,GreaterCompare as Zr,GreaterEqualCompare as Qr,EqualCompare as Jr,LessCompare as jr,AlwaysCompare as ea,NeverCompare as ta,NoColorSpace as yt,DepthStencilFormat as sn,getByteLength as na,DepthFormat as Tn,UnsignedIntType as Kt,UnsignedInt248Type as Yt,UnsignedShortType as cn,createElementNS as Ja,UnsignedShort4444Type as Jn,UnsignedShort5551Type as jn,UnsignedInt5999Type as ia,UnsignedInt101111Type as ra,ByteType as aa,ShortType as oa,AlphaFormat as sa,RGBFormat as ca,RedFormat as la,RedIntegerFormat as ei,RGFormat as fa,RGIntegerFormat as ti,RGBAIntegerFormat as ni,RGB_S3TC_DXT1_Format as xn,RGBA_S3TC_DXT1_Format as An,RGBA_S3TC_DXT3_Format as Rn,RGBA_S3TC_DXT5_Format as Cn,RGB_PVRTC_4BPPV1_Format as ii,RGB_PVRTC_2BPPV1_Format as ri,RGBA_PVRTC_4BPPV1_Format as ai,RGBA_PVRTC_2BPPV1_Format as oi,RGB_ETC1_Format as si,RGB_ETC2_Format as ci,RGBA_ETC2_EAC_Format as li,RGBA_ASTC_4x4_Format as fi,RGBA_ASTC_5x4_Format as di,RGBA_ASTC_5x5_Format as ui,RGBA_ASTC_6x5_Format as pi,RGBA_ASTC_6x6_Format as hi,RGBA_ASTC_8x5_Format as mi,RGBA_ASTC_8x6_Format as _i,RGBA_ASTC_8x8_Format as vi,RGBA_ASTC_10x5_Format as gi,RGBA_ASTC_10x6_Format as Si,RGBA_ASTC_10x8_Format as Ei,RGBA_ASTC_10x10_Format as Mi,RGBA_ASTC_12x10_Format as Ti,RGBA_ASTC_12x12_Format as xi,RGBA_BPTC_Format as Ai,RGB_BPTC_SIGNED_Format as Ri,RGB_BPTC_UNSIGNED_Format as Ci,RED_RGTC1_Format as bi,SIGNED_RED_RGTC1_Format as Pi,RED_GREEN_RGTC2_Format as Li,SIGNED_RED_GREEN_RGTC2_Format as Ui,ExternalTexture as Di,EventDispatcher as da,ArrayCamera as ua,WebXRController as bn,RAD2DEG as ja,createCanvasElement as pa,SRGBColorSpace as ha,REVISION as ma,WebGLCoordinateSystem as wi,probeAsync as eo}from"./three.core.js";import{AdditiveAnimationBlendMode as Vf,AlwaysStencilFunc as kf,AmbientLight as Wf,AnimationAction as zf,AnimationClip as Xf,AnimationLoader as Kf,AnimationMixer as Yf,AnimationObjectGroup as qf,AnimationUtils as $f,ArcCurve as Zf,ArrowHelper as Qf,AttachedBindMode as Jf,Audio as jf,AudioAnalyser as ed,AudioContext as td,AudioListener as nd,AudioLoader as id,AxesHelper as rd,BasicDepthPacking as ad,BasicShadowMap as od,BatchedMesh as sd,Bone as cd,BooleanKeyframeTrack as ld,Box2 as fd,Box3 as dd,Box3Helper as ud,BoxHelper as pd,BufferGeometryLoader as hd,Cache as md,Camera as _d,CameraHelper as vd,CanvasTexture as gd,CapsuleGeometry as Sd,CatmullRomCurve3 as Ed,CircleGeometry as Md,Clock as Td,ColorKeyframeTrack as xd,CompressedArrayTexture as Ad,CompressedCubeTexture as Rd,CompressedTexture as Cd,CompressedTextureLoader as bd,ConeGeometry as Pd,Controls as Ld,CubeCamera as Ud,CubeTextureLoader as Dd,CubicBezierCurve as wd,CubicBezierCurve3 as Id,CubicInterpolant as yd,CullFaceFrontBack as Nd,Curve as Fd,CurvePath as Od,CylinderGeometry as Bd,Cylindrical as Gd,DataTexture as Hd,DataTextureLoader as Vd,DataUtils as kd,DecrementStencilOp as Wd,DecrementWrapStencilOp as zd,DefaultLoadingManager as Xd,DetachedBindMode as Kd,DirectionalLight as Yd,DirectionalLightHelper as qd,DiscreteInterpolant as $d,DodecahedronGeometry as Zd,DynamicCopyUsage as Qd,DynamicDrawUsage as Jd,DynamicReadUsage as jd,EdgesGeometry as eu,EllipseCurve as tu,EqualStencilFunc as nu,ExtrudeGeometry as iu,FileLoader as ru,Float16BufferAttribute as au,Float32BufferAttribute as ou,Fog as su,FogExp2 as cu,FramebufferTexture as lu,FrustumArray as fu,GLBufferAttribute as du,GLSL1 as uu,GreaterEqualStencilFunc as pu,GreaterStencilFunc as hu,GridHelper as mu,Group as _u,HemisphereLight as vu,HemisphereLightHelper as gu,IcosahedronGeometry as Su,ImageBitmapLoader as Eu,ImageLoader as Mu,ImageUtils as Tu,IncrementStencilOp as xu,IncrementWrapStencilOp as Au,InstancedBufferAttribute as Ru,InstancedBufferGeometry as Cu,InstancedInterleavedBuffer as bu,InstancedMesh as Pu,Int16BufferAttribute as Lu,Int32BufferAttribute as Uu,Int8BufferAttribute as Du,InterleavedBuffer as wu,InterleavedBufferAttribute as Iu,Interpolant as yu,InterpolateDiscrete as Nu,InterpolateLinear as Fu,InterpolateSmooth as Ou,InterpolationSamplingMode as Bu,InterpolationSamplingType as Gu,InvertStencilOp as Hu,KeepStencilOp as Vu,KeyframeTrack as ku,LOD as Wu,LatheGeometry as zu,LessEqualStencilFunc as Xu,LessStencilFunc as Ku,Light as Yu,LightProbe as qu,Line as $u,Line3 as Zu,LineBasicMaterial as Qu,LineCurve as Ju,LineCurve3 as ju,LineDashedMaterial as ep,LineLoop as tp,LineSegments as np,LinearInterpolant as ip,LinearMipMapLinearFilter as rp,LinearMipMapNearestFilter as ap,Loader as op,LoaderUtils as sp,LoadingManager as cp,LoopOnce as lp,LoopPingPong as fp,LoopRepeat as dp,MOUSE as up,Material as pp,MaterialLoader as hp,MathUtils as mp,Matrix2 as _p,MeshLambertMaterial as vp,MeshMatcapMaterial as gp,MeshNormalMaterial as Sp,MeshPhongMaterial as Ep,MeshPhysicalMaterial as Mp,MeshStandardMaterial as Tp,MeshToonMaterial as xp,NearestMipMapLinearFilter as Ap,NearestMipMapNearestFilter as Rp,NeverStencilFunc as Cp,NormalAnimationBlendMode as bp,NotEqualStencilFunc as Pp,NumberKeyframeTrack as Lp,Object3D as Up,ObjectLoader as Dp,OctahedronGeometry as wp,Path as Ip,PlaneHelper as yp,PointLight as Np,PointLightHelper as Fp,Points as Op,PointsMaterial as Bp,PolarGridHelper as Gp,PolyhedronGeometry as Hp,PositionalAudio as Vp,PropertyBinding as kp,PropertyMixer as Wp,QuadraticBezierCurve as zp,QuadraticBezierCurve3 as Xp,Quaternion as Kp,QuaternionKeyframeTrack as Yp,QuaternionLinearInterpolant as qp,RGBDepthPacking as $p,RGBIntegerFormat as Zp,RGDepthPacking as Qp,RawShaderMaterial as Jp,Ray as jp,Raycaster as eh,RectAreaLight as th,RenderTarget as nh,RenderTarget3D as ih,ReplaceStencilOp as rh,RingGeometry as ah,Scene as oh,ShadowMaterial as sh,Shape as ch,ShapeGeometry as lh,ShapePath as fh,ShapeUtils as dh,Skeleton as uh,SkeletonHelper as ph,SkinnedMesh as hh,Source as mh,Sphere as _h,SphereGeometry as vh,Spherical as gh,SphericalHarmonics3 as Sh,SplineCurve as Eh,SpotLight as Mh,SpotLightHelper as Th,Sprite as xh,SpriteMaterial as Ah,StaticCopyUsage as Rh,StaticDrawUsage as Ch,StaticReadUsage as bh,StereoCamera as Ph,StreamCopyUsage as Lh,StreamDrawUsage as Uh,StreamReadUsage as Dh,StringKeyframeTrack as wh,TOUCH as Ih,TetrahedronGeometry as yh,TextureLoader as Nh,TextureUtils as Fh,Timer as Oh,TimestampQuery as Bh,TorusGeometry as Gh,TorusKnotGeometry as Hh,Triangle as Vh,TriangleFanDrawMode as kh,TriangleStripDrawMode as Wh,TrianglesDrawMode as zh,TubeGeometry as Xh,UVMapping as Kh,Uint8BufferAttribute as Yh,Uint8ClampedBufferAttribute as qh,Uniform as $h,UniformsGroup as Zh,VectorKeyframeTrack as Qh,VideoFrameTexture as Jh,VideoTexture as jh,WebGL3DRenderTarget as em,WebGLArrayRenderTarget as tm,WebGPUCoordinateSystem as nm,WireframeGeometry as im,WrapAroundEnding as rm,ZeroCurvatureEnding as am,ZeroSlopeEnding as om,ZeroStencilOp as sm}from"./three.core.js";function _a(){let e=null,n=!1,t=null,i=null;function c(o,h){t(o,h),i=e.requestAnimationFrame(c)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(c),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function to(e){const n=new WeakMap;function t(f,P){const M=f.array,U=f.usage,g=M.byteLength,S=e.createBuffer();e.bindBuffer(P,S),e.bufferData(P,M,U),f.onUploadCallback();let x;if(M instanceof Float32Array)x=e.FLOAT;else if(typeof Float16Array<"u"&&M instanceof Float16Array)x=e.HALF_FLOAT;else if(M instanceof Uint16Array)f.isFloat16BufferAttribute?x=e.HALF_FLOAT:x=e.UNSIGNED_SHORT;else if(M instanceof Int16Array)x=e.SHORT;else if(M instanceof Uint32Array)x=e.UNSIGNED_INT;else if(M instanceof Int32Array)x=e.INT;else if(M instanceof Int8Array)x=e.BYTE;else if(M instanceof Uint8Array)x=e.UNSIGNED_BYTE;else if(M instanceof Uint8ClampedArray)x=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+M);return{buffer:S,type:x,bytesPerElement:M.BYTES_PER_ELEMENT,version:f.version,size:g}}function i(f,P,M){const U=P.array,g=P.updateRanges;if(e.bindBuffer(M,f),g.length===0)e.bufferSubData(M,0,U);else{g.sort((x,O)=>x.start-O.start);let S=0;for(let x=1;x<g.length;x++){const O=g[S],D=g[x];D.start<=O.start+O.count+1?O.count=Math.max(O.count,D.start+D.count-O.start):(++S,g[S]=D)}g.length=S+1;for(let x=0,O=g.length;x<O;x++){const D=g[x];e.bufferSubData(M,D.start*U.BYTES_PER_ELEMENT,U,D.start,D.count)}P.clearUpdateRanges()}P.onUploadCallback()}function c(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const P=n.get(f);P&&(e.deleteBuffer(P.buffer),n.delete(f))}function h(f,P){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const U=n.get(f);(!U||U.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const M=n.get(f);if(M===void 0)n.set(f,t(f,P));else if(M.version<f.version){if(M.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(M.buffer,f,P),M.version=f.version}}return{get:c,remove:o,update:h}}var no=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,io=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ro=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ao=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oo=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,so=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,co=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,lo=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fo=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uo=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,po=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ho=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mo=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_o=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vo=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,go=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,So=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Eo=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mo=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,To=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xo=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ao=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ro=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Co=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bo=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Po=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lo=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uo=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Do=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wo=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Io="gl_FragColor = linearToOutputTexel( gl_FragColor );",yo=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,No=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fo=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Oo=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Go=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ho=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vo=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ko=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zo=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ko=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yo=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,$o=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zo=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qo=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jo=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,es=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ts=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ns=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,is=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,as=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,os=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ss=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cs=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ls=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ds=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,us=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ps=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ms=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_s=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vs=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gs=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ss=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Es=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ms=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ts=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xs=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,As=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rs=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cs=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bs=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ps=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ls=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Us=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ds=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ws=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Is=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ys=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ns=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fs=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Os=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bs=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gs=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hs=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vs=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ks=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ws=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zs=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xs=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ks=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ys=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qs=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$s=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zs=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qs=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Js=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,js=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ec=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tc=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nc=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ic=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ac=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sc=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cc=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lc=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fc=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dc=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,uc=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pc=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hc=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mc=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_c=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vc=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gc=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sc=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ec=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mc=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tc=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xc=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ac=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rc=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cc=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bc=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pc=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lc=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uc=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wc=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ic=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yc=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nc=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:no,alphahash_pars_fragment:io,alphamap_fragment:ro,alphamap_pars_fragment:ao,alphatest_fragment:oo,alphatest_pars_fragment:so,aomap_fragment:co,aomap_pars_fragment:lo,batching_pars_vertex:fo,batching_vertex:uo,begin_vertex:po,beginnormal_vertex:ho,bsdfs:mo,iridescence_fragment:_o,bumpmap_pars_fragment:vo,clipping_planes_fragment:go,clipping_planes_pars_fragment:So,clipping_planes_pars_vertex:Eo,clipping_planes_vertex:Mo,color_fragment:To,color_pars_fragment:xo,color_pars_vertex:Ao,color_vertex:Ro,common:Co,cube_uv_reflection_fragment:bo,defaultnormal_vertex:Po,displacementmap_pars_vertex:Lo,displacementmap_vertex:Uo,emissivemap_fragment:Do,emissivemap_pars_fragment:wo,colorspace_fragment:Io,colorspace_pars_fragment:yo,envmap_fragment:No,envmap_common_pars_fragment:Fo,envmap_pars_fragment:Oo,envmap_pars_vertex:Bo,envmap_physical_pars_fragment:$o,envmap_vertex:Go,fog_vertex:Ho,fog_pars_vertex:Vo,fog_fragment:ko,fog_pars_fragment:Wo,gradientmap_pars_fragment:zo,lightmap_pars_fragment:Xo,lights_lambert_fragment:Ko,lights_lambert_pars_fragment:Yo,lights_pars_begin:qo,lights_toon_fragment:Zo,lights_toon_pars_fragment:Qo,lights_phong_fragment:Jo,lights_phong_pars_fragment:jo,lights_physical_fragment:es,lights_physical_pars_fragment:ts,lights_fragment_begin:ns,lights_fragment_maps:is,lights_fragment_end:rs,logdepthbuf_fragment:as,logdepthbuf_pars_fragment:os,logdepthbuf_pars_vertex:ss,logdepthbuf_vertex:cs,map_fragment:ls,map_pars_fragment:fs,map_particle_fragment:ds,map_particle_pars_fragment:us,metalnessmap_fragment:ps,metalnessmap_pars_fragment:hs,morphinstance_vertex:ms,morphcolor_vertex:_s,morphnormal_vertex:vs,morphtarget_pars_vertex:gs,morphtarget_vertex:Ss,normal_fragment_begin:Es,normal_fragment_maps:Ms,normal_pars_fragment:Ts,normal_pars_vertex:xs,normal_vertex:As,normalmap_pars_fragment:Rs,clearcoat_normal_fragment_begin:Cs,clearcoat_normal_fragment_maps:bs,clearcoat_pars_fragment:Ps,iridescence_pars_fragment:Ls,opaque_fragment:Us,packing:Ds,premultiplied_alpha_fragment:ws,project_vertex:Is,dithering_fragment:ys,dithering_pars_fragment:Ns,roughnessmap_fragment:Fs,roughnessmap_pars_fragment:Os,shadowmap_pars_fragment:Bs,shadowmap_pars_vertex:Gs,shadowmap_vertex:Hs,shadowmask_pars_fragment:Vs,skinbase_vertex:ks,skinning_pars_vertex:Ws,skinning_vertex:zs,skinnormal_vertex:Xs,specularmap_fragment:Ks,specularmap_pars_fragment:Ys,tonemapping_fragment:qs,tonemapping_pars_fragment:$s,transmission_fragment:Zs,transmission_pars_fragment:Qs,uv_pars_fragment:Js,uv_pars_vertex:js,uv_vertex:ec,worldpos_vertex:tc,background_vert:nc,background_frag:ic,backgroundCube_vert:rc,backgroundCube_frag:ac,cube_vert:oc,cube_frag:sc,depth_vert:cc,depth_frag:lc,distanceRGBA_vert:fc,distanceRGBA_frag:dc,equirect_vert:uc,equirect_frag:pc,linedashed_vert:hc,linedashed_frag:mc,meshbasic_vert:_c,meshbasic_frag:vc,meshlambert_vert:gc,meshlambert_frag:Sc,meshmatcap_vert:Ec,meshmatcap_frag:Mc,meshnormal_vert:Tc,meshnormal_frag:xc,meshphong_vert:Ac,meshphong_frag:Rc,meshphysical_vert:Cc,meshphysical_frag:bc,meshtoon_vert:Pc,meshtoon_frag:Lc,points_vert:Uc,points_frag:Dc,shadow_vert:wc,shadow_frag:Ic,sprite_vert:yc,sprite_frag:Nc},ie={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},vt={basic:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:dt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:dt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:dt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Ye(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:dt([ie.points,ie.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:dt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:dt([ie.common,ie.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:dt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:dt([ie.sprite,ie.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:dt([ie.common,ie.displacementmap,{referencePosition:{value:new Ve},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:dt([ie.lights,ie.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};vt.physical={uniforms:dt([vt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Pn={r:0,b:0,g:0},Nt=new Fn,Fc=new Ht;function Oc(e,n,t,i,c,o,h){const f=new Ye(0);let P=o===!0?0:1,M,U,g=null,S=0,x=null;function O(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?t:n).get(_)),_}function D(A){let _=!1;const N=O(A);N===null?r(f,P):N&&N.isColor&&(r(N,1),_=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,h):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,h),(e.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function l(A,_){const N=O(_);N&&(N.isCubeTexture||N.mapping===Jt)?(U===void 0&&(U=new xt(new Nn(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:qi(vt.backgroundCube.uniforms),vertexShader:vt.backgroundCube.vertexShader,fragmentShader:vt.backgroundCube.fragmentShader,side:ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),U.geometry.deleteAttribute("normal"),U.geometry.deleteAttribute("uv"),U.onBeforeRender=function(C,y,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(U.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(U)),Nt.copy(_.backgroundRotation),Nt.x*=-1,Nt.y*=-1,Nt.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Nt.y*=-1,Nt.z*=-1),U.material.uniforms.envMap.value=N,U.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,U.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,U.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,U.material.uniforms.backgroundRotation.value.setFromMatrix4(Fc.makeRotationFromEuler(Nt)),U.material.toneMapped=nt.getTransfer(N.colorSpace)!==Xe,(g!==N||S!==N.version||x!==e.toneMapping)&&(U.material.needsUpdate=!0,g=N,S=N.version,x=e.toneMapping),U.layers.enableAll(),A.unshift(U,U.geometry,U.material,0,0,null)):N&&N.isTexture&&(M===void 0&&(M=new xt(new On(2,2),new Rt({name:"BackgroundMaterial",uniforms:qi(vt.background.uniforms),vertexShader:vt.background.vertexShader,fragmentShader:vt.background.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),M.geometry.deleteAttribute("normal"),Object.defineProperty(M.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(M)),M.material.uniforms.t2D.value=N,M.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,M.material.toneMapped=nt.getTransfer(N.colorSpace)!==Xe,N.matrixAutoUpdate===!0&&N.updateMatrix(),M.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||S!==N.version||x!==e.toneMapping)&&(M.material.needsUpdate=!0,g=N,S=N.version,x=e.toneMapping),M.layers.enableAll(),A.unshift(M,M.geometry,M.material,0,0,null))}function r(A,_){A.getRGB(Pn,$i(e)),i.buffers.color.setClear(Pn.r,Pn.g,Pn.b,_,h)}function L(){U!==void 0&&(U.geometry.dispose(),U.material.dispose(),U=void 0),M!==void 0&&(M.geometry.dispose(),M.material.dispose(),M=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,_=1){f.set(A),P=_,r(f,P)},getClearAlpha:function(){return P},setClearAlpha:function(A){P=A,r(f,P)},render:D,addToRenderList:l,dispose:L}}function Bc(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},c=S(null);let o=c,h=!1;function f(d,R,B,X,K){let $=!1;const z=g(X,B,R);o!==z&&(o=z,M(o.object)),$=x(d,X,B,K),$&&O(d,X,B,K),K!==null&&n.update(K,e.ELEMENT_ARRAY_BUFFER),($||h)&&(h=!1,_(d,R,B,X),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))}function P(){return e.createVertexArray()}function M(d){return e.bindVertexArray(d)}function U(d){return e.deleteVertexArray(d)}function g(d,R,B){const X=B.wireframe===!0;let K=i[d.id];K===void 0&&(K={},i[d.id]=K);let $=K[R.id];$===void 0&&($={},K[R.id]=$);let z=$[X];return z===void 0&&(z=S(P()),$[X]=z),z}function S(d){const R=[],B=[],X=[];for(let K=0;K<t;K++)R[K]=0,B[K]=0,X[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:X,object:d,attributes:{},index:null}}function x(d,R,B,X){const K=o.attributes,$=R.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){const Te=K[H];let we=$[H];if(we===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(we=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(we=d.instanceColor)),Te===void 0||Te.attribute!==we||we&&Te.data!==we.data)return!0;z++}return o.attributesNum!==z||o.index!==X}function O(d,R,B,X){const K={},$=R.attributes;let z=0;const ne=B.getAttributes();for(const H in ne)if(ne[H].location>=0){let Te=$[H];Te===void 0&&(H==="instanceMatrix"&&d.instanceMatrix&&(Te=d.instanceMatrix),H==="instanceColor"&&d.instanceColor&&(Te=d.instanceColor));const we={};we.attribute=Te,Te&&Te.data&&(we.data=Te.data),K[H]=we,z++}o.attributes=K,o.attributesNum=z,o.index=X}function D(){const d=o.newAttributes;for(let R=0,B=d.length;R<B;R++)d[R]=0}function l(d){r(d,0)}function r(d,R){const B=o.newAttributes,X=o.enabledAttributes,K=o.attributeDivisors;B[d]=1,X[d]===0&&(e.enableVertexAttribArray(d),X[d]=1),K[d]!==R&&(e.vertexAttribDivisor(d,R),K[d]=R)}function L(){const d=o.newAttributes,R=o.enabledAttributes;for(let B=0,X=R.length;B<X;B++)R[B]!==d[B]&&(e.disableVertexAttribArray(B),R[B]=0)}function A(d,R,B,X,K,$,z){z===!0?e.vertexAttribIPointer(d,R,B,K,$):e.vertexAttribPointer(d,R,B,X,K,$)}function _(d,R,B,X){D();const K=X.attributes,$=B.getAttributes(),z=R.defaultAttributeValues;for(const ne in $){const H=$[ne];if(H.location>=0){let ve=K[ne];if(ve===void 0&&(ne==="instanceMatrix"&&d.instanceMatrix&&(ve=d.instanceMatrix),ne==="instanceColor"&&d.instanceColor&&(ve=d.instanceColor)),ve!==void 0){const Te=ve.normalized,we=ve.itemSize,Be=n.get(ve);if(Be===void 0)continue;const et=Be.buffer,Je=Be.type,ke=Be.bytesPerElement,V=Je===e.INT||Je===e.UNSIGNED_INT||ve.gpuType===Bn;if(ve.isInterleavedBufferAttribute){const q=ve.data,le=q.stride,be=ve.offset;if(q.isInstancedInterleavedBuffer){for(let Se=0;Se<H.locationSize;Se++)r(H.location+Se,q.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Se=0;Se<H.locationSize;Se++)l(H.location+Se);e.bindBuffer(e.ARRAY_BUFFER,et);for(let Se=0;Se<H.locationSize;Se++)A(H.location+Se,we/H.locationSize,Je,Te,le*ke,(be+we/H.locationSize*Se)*ke,V)}else{if(ve.isInstancedBufferAttribute){for(let q=0;q<H.locationSize;q++)r(H.location+q,ve.meshPerAttribute);d.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let q=0;q<H.locationSize;q++)l(H.location+q);e.bindBuffer(e.ARRAY_BUFFER,et);for(let q=0;q<H.locationSize;q++)A(H.location+q,we/H.locationSize,Je,Te,we*ke,we/H.locationSize*q*ke,V)}}else if(z!==void 0){const Te=z[ne];if(Te!==void 0)switch(Te.length){case 2:e.vertexAttrib2fv(H.location,Te);break;case 3:e.vertexAttrib3fv(H.location,Te);break;case 4:e.vertexAttrib4fv(H.location,Te);break;default:e.vertexAttrib1fv(H.location,Te)}}}}L()}function N(){W();for(const d in i){const R=i[d];for(const B in R){const X=R[B];for(const K in X)U(X[K].object),delete X[K];delete R[B]}delete i[d]}}function C(d){if(i[d.id]===void 0)return;const R=i[d.id];for(const B in R){const X=R[B];for(const K in X)U(X[K].object),delete X[K];delete R[B]}delete i[d.id]}function y(d){for(const R in i){const B=i[R];if(B[d.id]===void 0)continue;const X=B[d.id];for(const K in X)U(X[K].object),delete X[K];delete B[d.id]}}function W(){p(),h=!0,o!==c&&(o=c,M(o.object))}function p(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:W,resetDefaultState:p,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:y,initAttributes:D,enableAttribute:l,disableUnusedAttributes:L}}function Gc(e,n,t){let i;function c(M){i=M}function o(M,U){e.drawArrays(i,M,U),t.update(U,i,1)}function h(M,U,g){g!==0&&(e.drawArraysInstanced(i,M,U,g),t.update(U,i,g))}function f(M,U,g){if(g===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,M,0,U,0,g);let x=0;for(let O=0;O<g;O++)x+=U[O];t.update(x,i,1)}function P(M,U,g,S){if(g===0)return;const x=n.get("WEBGL_multi_draw");if(x===null)for(let O=0;O<M.length;O++)h(M[O],U[O],S[O]);else{x.multiDrawArraysInstancedWEBGL(i,M,0,U,0,S,0,g);let O=0;for(let D=0;D<g;D++)O+=U[D]*S[D];t.update(O,i,1)}}this.setMode=c,this.render=o,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=P}function Hc(e,n,t,i){let c;function o(){if(c!==void 0)return c;if(n.has("EXT_texture_filter_anisotropic")===!0){const y=n.get("EXT_texture_filter_anisotropic");c=e.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else c=0;return c}function h(y){return!(y!==St&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(y){const W=y===jt&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(y!==Ct&&i.convert(y)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&y!==bt&&!W)}function P(y){if(y==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let M=t.precision!==void 0?t.precision:"highp";const U=P(M);U!==M&&(console.warn("THREE.WebGLRenderer:",M,"not supported, using",U,"instead."),M=U);const g=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&n.has("EXT_clip_control"),x=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),O=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),D=e.getParameter(e.MAX_TEXTURE_SIZE),l=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),r=e.getParameter(e.MAX_VERTEX_ATTRIBS),L=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),A=e.getParameter(e.MAX_VARYING_VECTORS),_=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=O>0,C=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:P,textureFormatReadable:h,textureTypeReadable:f,precision:M,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:x,maxVertexTextures:O,maxTextureSize:D,maxCubemapSize:l,maxAttributes:r,maxVertexUniforms:L,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:N,maxSamples:C}}function Vc(e){const n=this;let t=null,i=0,c=!1,o=!1;const h=new Zi,f=new Fe,P={value:null,needsUpdate:!1};this.uniform=P,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const x=g.length!==0||S||i!==0||c;return c=S,i=g.length,x},this.beginShadows=function(){o=!0,U(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,S){t=U(g,S,0)},this.setState=function(g,S,x){const O=g.clippingPlanes,D=g.clipIntersection,l=g.clipShadows,r=e.get(g);if(!c||O===null||O.length===0||o&&!l)o?U(null):M();else{const L=o?0:i,A=L*4;let _=r.clippingState||null;P.value=_,_=U(O,S,A,x);for(let N=0;N!==A;++N)_[N]=t[N];r.clippingState=_,this.numIntersection=D?this.numPlanes:0,this.numPlanes+=L}};function M(){P.value!==t&&(P.value=t,P.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function U(g,S,x,O){const D=g!==null?g.length:0;let l=null;if(D!==0){if(l=P.value,O!==!0||l===null){const r=x+D*4,L=S.matrixWorldInverse;f.getNormalMatrix(L),(l===null||l.length<r)&&(l=new Float32Array(r));for(let A=0,_=x;A!==D;++A,_+=4)h.copy(g[A]).applyMatrix4(L,f),h.normal.toArray(l,_),l[_+3]=h.constant}P.value=l,P.needsUpdate=!0}return n.numPlanes=D,n.numIntersection=0,l}}function kc(e){let n=new WeakMap;function t(h,f){return f===un?h.mapping=kt:f===pn&&(h.mapping=Dt),h}function i(h){if(h&&h.isTexture){const f=h.mapping;if(f===un||f===pn)if(n.has(h)){const P=n.get(h).texture;return t(P,h.mapping)}else{const P=h.image;if(P&&P.height>0){const M=new Qi(P.height);return M.fromEquirectangularTexture(e,h),n.set(h,M),h.addEventListener("dispose",c),t(M.texture,h.mapping)}else return null}}return h}function c(h){const f=h.target;f.removeEventListener("dispose",c);const P=n.get(f);P!==void 0&&(n.delete(f),P.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const qt=4,va=[.125,.215,.35,.446,.526,.582],Ft=20,Ii=new Ji,ga=new Ye;let yi=null,Ni=0,Fi=0,Oi=!1;const Ot=(1+Math.sqrt(5))/2,$t=1/Ot,Sa=[new Ve(-Ot,$t,0),new Ve(Ot,$t,0),new Ve(-$t,0,Ot),new Ve($t,0,Ot),new Ve(0,Ot,-$t),new Ve(0,Ot,$t),new Ve(-1,1,-1),new Ve(1,1,-1),new Ve(-1,1,1),new Ve(1,1,1)],Wc=new Ve;class Bi{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,c=100,o={}){const{size:h=256,position:f=Wc}=o;yi=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Fi=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const P=this._allocateTargets();return P.depthBuffer=!0,this._sceneToCubeUV(n,i,c,P,f),t>0&&this._blur(P,0,0,t),this._applyPMREM(P),this._cleanup(P),P}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ta(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ma(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(yi,Ni,Fi),this._renderer.xr.enabled=Oi,n.scissorTest=!1,Ln(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===kt||n.mapping===Dt?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),yi=this._renderer.getRenderTarget(),Ni=this._renderer.getActiveCubeFace(),Fi=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:jt,format:St,colorSpace:nn,depthBuffer:!1},c=Ea(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ea(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zc(o)),this._blurMaterial=Xc(o,n,t)}return c}_compileMaterial(n){const t=new xt(this._lodPlanes[0],n);this._renderer.compile(t,Ii)}_sceneToCubeUV(n,t,i,c,o){const P=new en(90,1,t,i),M=[1,-1,1,1,1,1],U=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(ga),g.toneMapping=At,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(c),g.clearDepth(),g.setRenderTarget(null));const D=new ji({name:"PMREM.Background",side:ht,depthWrite:!1,depthTest:!1}),l=new xt(new Nn,D);let r=!1;const L=n.background;L?L.isColor&&(D.color.copy(L),n.background=null,r=!0):(D.color.copy(ga),r=!0);for(let A=0;A<6;A++){const _=A%3;_===0?(P.up.set(0,M[A],0),P.position.set(o.x,o.y,o.z),P.lookAt(o.x+U[A],o.y,o.z)):_===1?(P.up.set(0,0,M[A]),P.position.set(o.x,o.y,o.z),P.lookAt(o.x,o.y+U[A],o.z)):(P.up.set(0,M[A],0),P.position.set(o.x,o.y,o.z),P.lookAt(o.x,o.y,o.z+U[A]));const N=this._cubeSize;Ln(c,_*N,A>2?N:0,N,N),g.setRenderTarget(c),r&&g.render(l,P),g.render(n,P)}l.geometry.dispose(),l.material.dispose(),g.toneMapping=x,g.autoClear=S,n.background=L}_textureToCubeUV(n,t){const i=this._renderer,c=n.mapping===kt||n.mapping===Dt;c?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ta()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ma());const o=c?this._cubemapMaterial:this._equirectMaterial,h=new xt(this._lodPlanes[0],o),f=o.uniforms;f.envMap.value=n;const P=this._cubeSize;Ln(t,0,0,3*P,2*P),i.setRenderTarget(t),i.render(h,Ii)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const c=this._lodPlanes.length;for(let o=1;o<c;o++){const h=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),f=Sa[(c-o-1)%Sa.length];this._blur(n,o-1,o,h,f)}t.autoClear=i}_blur(n,t,i,c,o){const h=this._pingPongRenderTarget;this._halfBlur(n,h,t,i,c,"latitudinal",o),this._halfBlur(h,n,i,i,c,"longitudinal",o)}_halfBlur(n,t,i,c,o,h,f){const P=this._renderer,M=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const U=3,g=new xt(this._lodPlanes[c],M),S=M.uniforms,x=this._sizeLods[i]-1,O=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*Ft-1),D=o/O,l=isFinite(o)?1+Math.floor(U*D):Ft;l>Ft&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${l} samples when the maximum is set to ${Ft}`);const r=[];let L=0;for(let y=0;y<Ft;++y){const W=y/D,p=Math.exp(-W*W/2);r.push(p),y===0?L+=p:y<l&&(L+=2*p)}for(let y=0;y<r.length;y++)r[y]=r[y]/L;S.envMap.value=n.texture,S.samples.value=l,S.weights.value=r,S.latitudinal.value=h==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:A}=this;S.dTheta.value=O,S.mipInt.value=A-i;const _=this._sizeLods[c],N=3*_*(c>A-qt?c-A+qt:0),C=4*(this._cubeSize-_);Ln(t,N,C,3*_,2*_),P.setRenderTarget(t),P.render(g,Ii)}}function zc(e){const n=[],t=[],i=[];let c=e;const o=e-qt+1+va.length;for(let h=0;h<o;h++){const f=Math.pow(2,c);t.push(f);let P=1/f;h>e-qt?P=va[h-e+qt-1]:h===0&&(P=0),i.push(P);const M=1/(f-2),U=-M,g=1+M,S=[U,U,g,U,g,g,U,U,g,g,U,g],x=6,O=6,D=3,l=2,r=1,L=new Float32Array(D*O*x),A=new Float32Array(l*O*x),_=new Float32Array(r*O*x);for(let C=0;C<x;C++){const y=C%3*2/3-1,W=C>2?0:-1,p=[y,W,0,y+2/3,W,0,y+2/3,W+1,0,y,W,0,y+2/3,W+1,0,y,W+1,0];L.set(p,D*O*C),A.set(S,l*O*C);const d=[C,C,C,C,C,C];_.set(d,r*O*C)}const N=new Gn;N.setAttribute("position",new tn(L,D)),N.setAttribute("uv",new tn(A,l)),N.setAttribute("faceIndex",new tn(_,r)),n.push(N),c>qt&&c--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Ea(e,n,t){const i=new wt(e,n,t);return i.texture.mapping=Jt,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ln(e,n,t,i,c){e.viewport.set(n,t,i,c),e.scissor.set(n,t,i,c)}function Xc(e,n,t){const i=new Float32Array(Ft),c=new Ve(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Ft,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Gi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Ma(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Ta(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pt,depthTest:!1,depthWrite:!1})}function Gi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kc(e){let n=new WeakMap,t=null;function i(f){if(f&&f.isTexture){const P=f.mapping,M=P===un||P===pn,U=P===kt||P===Dt;if(M||U){let g=n.get(f);const S=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new Bi(e)),g=M?t.fromEquirectangular(f,g):t.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const x=f.image;return M&&x&&x.height>0||U&&x&&c(x)?(t===null&&(t=new Bi(e)),g=M?t.fromEquirectangular(f):t.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",o),g.texture):null}}}return f}function c(f){let P=0;const M=6;for(let U=0;U<M;U++)f[U]!==void 0&&P++;return P===M}function o(f){const P=f.target;P.removeEventListener("dispose",o);const M=n.get(P);M!==void 0&&(n.delete(P),M.dispose())}function h(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:h}}function Yc(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let c;switch(i){case"WEBGL_depth_texture":c=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":c=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":c=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":c=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:c=e.getExtension(i)}return n[i]=c,c}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const c=t(i);return c===null&&Hn("THREE.WebGLRenderer: "+i+" extension not supported."),c}}}function qc(e,n,t,i){const c={},o=new WeakMap;function h(g){const S=g.target;S.index!==null&&n.remove(S.index);for(const O in S.attributes)n.remove(S.attributes[O]);S.removeEventListener("dispose",h),delete c[S.id];const x=o.get(S);x&&(n.remove(x),o.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(g,S){return c[S.id]===!0||(S.addEventListener("dispose",h),c[S.id]=!0,t.memory.geometries++),S}function P(g){const S=g.attributes;for(const x in S)n.update(S[x],e.ARRAY_BUFFER)}function M(g){const S=[],x=g.index,O=g.attributes.position;let D=0;if(x!==null){const L=x.array;D=x.version;for(let A=0,_=L.length;A<_;A+=3){const N=L[A+0],C=L[A+1],y=L[A+2];S.push(N,C,C,y,y,N)}}else if(O!==void 0){const L=O.array;D=O.version;for(let A=0,_=L.length/3-1;A<_;A+=3){const N=A+0,C=A+1,y=A+2;S.push(N,C,C,y,y,N)}}else return;const l=new(Qa(S)?er:tr)(S,1);l.version=D;const r=o.get(g);r&&n.remove(r),o.set(g,l)}function U(g){const S=o.get(g);if(S){const x=g.index;x!==null&&S.version<x.version&&M(g)}else M(g);return o.get(g)}return{get:f,update:P,getWireframeAttribute:U}}function $c(e,n,t){let i;function c(S){i=S}let o,h;function f(S){o=S.type,h=S.bytesPerElement}function P(S,x){e.drawElements(i,x,o,S*h),t.update(x,i,1)}function M(S,x,O){O!==0&&(e.drawElementsInstanced(i,x,o,S*h,O),t.update(x,i,O))}function U(S,x,O){if(O===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,S,0,O);let l=0;for(let r=0;r<O;r++)l+=x[r];t.update(l,i,1)}function g(S,x,O,D){if(O===0)return;const l=n.get("WEBGL_multi_draw");if(l===null)for(let r=0;r<S.length;r++)M(S[r]/h,x[r],D[r]);else{l.multiDrawElementsInstancedWEBGL(i,x,0,o,S,0,D,0,O);let r=0;for(let L=0;L<O;L++)r+=x[L]*D[L];t.update(r,i,1)}}this.setMode=c,this.setIndex=f,this.render=P,this.renderInstances=M,this.renderMultiDraw=U,this.renderMultiDrawInstances=g}function Zc(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,h,f){switch(t.calls++,h){case e.TRIANGLES:t.triangles+=f*(o/3);break;case e.LINES:t.lines+=f*(o/2);break;case e.LINE_STRIP:t.lines+=f*(o-1);break;case e.LINE_LOOP:t.lines+=f*o;break;case e.POINTS:t.points+=f*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function c(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:c,update:i}}function Qc(e,n,t){const i=new WeakMap,c=new lt;function o(h,f,P){const M=h.morphTargetInfluences,U=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=U!==void 0?U.length:0;let S=i.get(f);if(S===void 0||S.count!==g){let p=function(){y.dispose(),i.delete(f),f.removeEventListener("dispose",p)};S!==void 0&&S.texture.dispose();const x=f.morphAttributes.position!==void 0,O=f.morphAttributes.normal!==void 0,D=f.morphAttributes.color!==void 0,l=f.morphAttributes.position||[],r=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let A=0;x===!0&&(A=1),O===!0&&(A=2),D===!0&&(A=3);let _=f.attributes.position.count*A,N=1;_>n.maxTextureSize&&(N=Math.ceil(_/n.maxTextureSize),_=n.maxTextureSize);const C=new Float32Array(_*N*4*g),y=new Vn(C,_,N,g);y.type=bt,y.needsUpdate=!0;const W=A*4;for(let d=0;d<g;d++){const R=l[d],B=r[d],X=L[d],K=_*N*4*d;for(let $=0;$<R.count;$++){const z=$*W;x===!0&&(c.fromBufferAttribute(R,$),C[K+z+0]=c.x,C[K+z+1]=c.y,C[K+z+2]=c.z,C[K+z+3]=0),O===!0&&(c.fromBufferAttribute(B,$),C[K+z+4]=c.x,C[K+z+5]=c.y,C[K+z+6]=c.z,C[K+z+7]=0),D===!0&&(c.fromBufferAttribute(X,$),C[K+z+8]=c.x,C[K+z+9]=c.y,C[K+z+10]=c.z,C[K+z+11]=X.itemSize===4?c.w:1)}}S={count:g,texture:y,size:new ct(_,N)},i.set(f,S),f.addEventListener("dispose",p)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)P.getUniforms().setValue(e,"morphTexture",h.morphTexture,t);else{let x=0;for(let D=0;D<M.length;D++)x+=M[D];const O=f.morphTargetsRelative?1:1-x;P.getUniforms().setValue(e,"morphTargetBaseInfluence",O),P.getUniforms().setValue(e,"morphTargetInfluences",M)}P.getUniforms().setValue(e,"morphTargetsTexture",S.texture,t),P.getUniforms().setValue(e,"morphTargetsTextureSize",S.size)}return{update:o}}function Jc(e,n,t,i){let c=new WeakMap;function o(P){const M=i.render.frame,U=P.geometry,g=n.get(P,U);if(c.get(g)!==M&&(n.update(g),c.set(g,M)),P.isInstancedMesh&&(P.hasEventListener("dispose",f)===!1&&P.addEventListener("dispose",f),c.get(P)!==M&&(t.update(P.instanceMatrix,e.ARRAY_BUFFER),P.instanceColor!==null&&t.update(P.instanceColor,e.ARRAY_BUFFER),c.set(P,M))),P.isSkinnedMesh){const S=P.skeleton;c.get(S)!==M&&(S.update(),c.set(S,M))}return g}function h(){c=new WeakMap}function f(P){const M=P.target;M.removeEventListener("dispose",f),t.remove(M.instanceMatrix),M.instanceColor!==null&&t.remove(M.instanceColor)}return{update:o,dispose:h}}const xa=new rr,Aa=new Wn(1,1),Ra=new Vn,Ca=new ir,ba=new nr,Pa=[],La=[],Ua=new Float32Array(16),Da=new Float32Array(9),wa=new Float32Array(4);function Zt(e,n,t){const i=e[0];if(i<=0||i>0)return e;const c=n*t;let o=Pa[c];if(o===void 0&&(o=new Float32Array(c),Pa[c]=o),n!==0){i.toArray(o,0);for(let h=1,f=0;h!==n;++h)f+=t,e[h].toArray(o,f)}return o}function it(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function rt(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function Un(e,n){let t=La[n];t===void 0&&(t=new Int32Array(n),La[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function jc(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function el(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2fv(this.addr,n),rt(t,n)}}function tl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(it(t,n))return;e.uniform3fv(this.addr,n),rt(t,n)}}function nl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4fv(this.addr,n),rt(t,n)}}function il(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;wa.set(i),e.uniformMatrix2fv(this.addr,!1,wa),rt(t,i)}}function rl(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Da.set(i),e.uniformMatrix3fv(this.addr,!1,Da),rt(t,i)}}function al(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(it(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),rt(t,n)}else{if(it(t,i))return;Ua.set(i),e.uniformMatrix4fv(this.addr,!1,Ua),rt(t,i)}}function ol(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function sl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2iv(this.addr,n),rt(t,n)}}function cl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3iv(this.addr,n),rt(t,n)}}function ll(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4iv(this.addr,n),rt(t,n)}}function fl(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function dl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(it(t,n))return;e.uniform2uiv(this.addr,n),rt(t,n)}}function ul(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(it(t,n))return;e.uniform3uiv(this.addr,n),rt(t,n)}}function pl(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(it(t,n))return;e.uniform4uiv(this.addr,n),rt(t,n)}}function hl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c);let o;this.type===e.SAMPLER_2D_SHADOW?(Aa.compareFunction=kn,o=Aa):o=xa,t.setTexture2D(n||o,c)}function ml(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture3D(n||Ca,c)}function _l(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTextureCube(n||ba,c)}function vl(e,n,t){const i=this.cache,c=t.allocateTextureUnit();i[0]!==c&&(e.uniform1i(this.addr,c),i[0]=c),t.setTexture2DArray(n||Ra,c)}function gl(e){switch(e){case 5126:return jc;case 35664:return el;case 35665:return tl;case 35666:return nl;case 35674:return il;case 35675:return rl;case 35676:return al;case 5124:case 35670:return ol;case 35667:case 35671:return sl;case 35668:case 35672:return cl;case 35669:case 35673:return ll;case 5125:return fl;case 36294:return dl;case 36295:return ul;case 36296:return pl;case 35678:case 36198:case 36298:case 36306:case 35682:return hl;case 35679:case 36299:case 36307:return ml;case 35680:case 36300:case 36308:case 36293:return _l;case 36289:case 36303:case 36311:case 36292:return vl}}function Sl(e,n){e.uniform1fv(this.addr,n)}function El(e,n){const t=Zt(n,this.size,2);e.uniform2fv(this.addr,t)}function Ml(e,n){const t=Zt(n,this.size,3);e.uniform3fv(this.addr,t)}function Tl(e,n){const t=Zt(n,this.size,4);e.uniform4fv(this.addr,t)}function xl(e,n){const t=Zt(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function Al(e,n){const t=Zt(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function Rl(e,n){const t=Zt(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function Cl(e,n){e.uniform1iv(this.addr,n)}function bl(e,n){e.uniform2iv(this.addr,n)}function Pl(e,n){e.uniform3iv(this.addr,n)}function Ll(e,n){e.uniform4iv(this.addr,n)}function Ul(e,n){e.uniform1uiv(this.addr,n)}function Dl(e,n){e.uniform2uiv(this.addr,n)}function wl(e,n){e.uniform3uiv(this.addr,n)}function Il(e,n){e.uniform4uiv(this.addr,n)}function yl(e,n,t){const i=this.cache,c=n.length,o=Un(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture2D(n[h]||xa,o[h])}function Nl(e,n,t){const i=this.cache,c=n.length,o=Un(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture3D(n[h]||Ca,o[h])}function Fl(e,n,t){const i=this.cache,c=n.length,o=Un(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTextureCube(n[h]||ba,o[h])}function Ol(e,n,t){const i=this.cache,c=n.length,o=Un(t,c);it(i,o)||(e.uniform1iv(this.addr,o),rt(i,o));for(let h=0;h!==c;++h)t.setTexture2DArray(n[h]||Ra,o[h])}function Bl(e){switch(e){case 5126:return Sl;case 35664:return El;case 35665:return Ml;case 35666:return Tl;case 35674:return xl;case 35675:return Al;case 35676:return Rl;case 5124:case 35670:return Cl;case 35667:case 35671:return bl;case 35668:case 35672:return Pl;case 35669:case 35673:return Ll;case 5125:return Ul;case 36294:return Dl;case 36295:return wl;case 36296:return Il;case 35678:case 36198:case 36298:case 36306:case 35682:return yl;case 35679:case 36299:case 36307:return Nl;case 35680:case 36300:case 36308:case 36293:return Fl;case 36289:case 36303:case 36311:case 36292:return Ol}}class Gl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=gl(t.type)}}class Hl{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bl(t.type)}}class Vl{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const c=this.seq;for(let o=0,h=c.length;o!==h;++o){const f=c[o];f.setValue(n,t[f.id],i)}}}const Hi=/(\w+)(\])?(\[|\.)?/g;function Ia(e,n){e.seq.push(n),e.map[n.id]=n}function kl(e,n,t){const i=e.name,c=i.length;for(Hi.lastIndex=0;;){const o=Hi.exec(i),h=Hi.lastIndex;let f=o[1];const P=o[2]==="]",M=o[3];if(P&&(f=f|0),M===void 0||M==="["&&h+2===c){Ia(t,M===void 0?new Gl(f,e,n):new Hl(f,e,n));break}else{let g=t.map[f];g===void 0&&(g=new Vl(f),Ia(t,g)),t=g}}}class Dn{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const o=n.getActiveUniform(t,c),h=n.getUniformLocation(t,o.name);kl(o,h,this)}}setValue(n,t,i,c){const o=this.map[t];o!==void 0&&o.setValue(n,i,c)}setOptional(n,t,i){const c=t[i];c!==void 0&&this.setValue(n,i,c)}static upload(n,t,i,c){for(let o=0,h=t.length;o!==h;++o){const f=t[o],P=i[f.id];P.needsUpdate!==!1&&f.setValue(n,P.value,c)}}static seqWithValue(n,t){const i=[];for(let c=0,o=n.length;c!==o;++c){const h=n[c];h.id in t&&i.push(h)}return i}}function ya(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const Wl=37297;let zl=0;function Xl(e,n){const t=e.split(`
`),i=[],c=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let h=c;h<o;h++){const f=h+1;i.push(`${f===n?">":" "} ${f}: ${t[h]}`)}return i.join(`
`)}const Na=new Fe;function Kl(e){nt._getMatrix(Na,nt.workingColorSpace,e);const n=`mat3( ${Na.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(e)){case Kn:return[n,"LinearTransferOETF"];case Xe:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Fa(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),o=(e.getShaderInfoLog(n)||"").trim();if(i&&o==="")return"";const h=/ERROR: 0:(\d+)/.exec(o);if(h){const f=parseInt(h[1]);return t.toUpperCase()+`

`+o+`

`+Xl(e.getShaderSource(n),f)}else return o}function Yl(e,n){const t=Kl(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ql(e,n){let t;switch(n){case ur:t="Linear";break;case dr:t="Reinhard";break;case fr:t="Cineon";break;case lr:t="ACESFilmic";break;case cr:t="AgX";break;case sr:t="Neutral";break;case or:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wn=new Ve;function $l(){nt.getLuminanceCoefficients(wn);const e=wn.x.toFixed(4),n=wn.y.toFixed(4),t=wn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zl(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ln).join(`
`)}function Ql(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function Jl(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let c=0;c<i;c++){const o=e.getActiveAttrib(n,c),h=o.name;let f=1;o.type===e.FLOAT_MAT2&&(f=2),o.type===e.FLOAT_MAT3&&(f=3),o.type===e.FLOAT_MAT4&&(f=4),t[h]={type:o.type,location:e.getAttribLocation(n,h),locationSize:f}}return t}function ln(e){return e!==""}function Oa(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Ba(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const jl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vi(e){return e.replace(jl,tf)}const ef=new Map;function tf(e,n){let t=De[n];if(t===void 0){const i=ef.get(n);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return Vi(t)}const nf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ga(e){return e.replace(nf,rf)}function rf(e,n,t,i){let c="";for(let o=parseInt(n);o<parseInt(t);o++)c+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return c}function Ha(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function af(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Xn?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===ar?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Et&&(n="SHADOWMAP_TYPE_VSM"),n}function of(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case kt:case Dt:n="ENVMAP_TYPE_CUBE";break;case Jt:n="ENVMAP_TYPE_CUBE_UV";break}return n}function sf(e){let n="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Dt&&(n="ENVMAP_MODE_REFRACTION"),n}function cf(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case mr:n="ENVMAP_BLENDING_MULTIPLY";break;case hr:n="ENVMAP_BLENDING_MIX";break;case pr:n="ENVMAP_BLENDING_ADD";break}return n}function lf(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ff(e,n,t,i){const c=e.getContext(),o=t.defines;let h=t.vertexShader,f=t.fragmentShader;const P=af(t),M=of(t),U=sf(t),g=cf(t),S=lf(t),x=Zl(t),O=Ql(o),D=c.createProgram();let l,r,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(l=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter(ln).join(`
`),l.length>0&&(l+=`
`),r=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O].filter(ln).join(`
`),r.length>0&&(r+=`
`)):(l=[Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+U:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ln).join(`
`),r=[Ha(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,O,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+M:"",t.envMap?"#define "+U:"",t.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+P:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==At?"#define TONE_MAPPING":"",t.toneMapping!==At?De.tonemapping_pars_fragment:"",t.toneMapping!==At?ql("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Yl("linearToOutputTexel",t.outputColorSpace),$l(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ln).join(`
`)),h=Vi(h),h=Oa(h,t),h=Ba(h,t),f=Vi(f),f=Oa(f,t),f=Ba(f,t),h=Ga(h),f=Ga(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,l=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+l,r=["#define varying in",t.glslVersion===zn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const A=L+l+h,_=L+r+f,N=ya(c,c.VERTEX_SHADER,A),C=ya(c,c.FRAGMENT_SHADER,_);c.attachShader(D,N),c.attachShader(D,C),t.index0AttributeName!==void 0?c.bindAttribLocation(D,0,t.index0AttributeName):t.morphTargets===!0&&c.bindAttribLocation(D,0,"position"),c.linkProgram(D);function y(R){if(e.debug.checkShaderErrors){const B=c.getProgramInfoLog(D)||"",X=c.getShaderInfoLog(N)||"",K=c.getShaderInfoLog(C)||"",$=B.trim(),z=X.trim(),ne=K.trim();let H=!0,ve=!0;if(c.getProgramParameter(D,c.LINK_STATUS)===!1)if(H=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(c,D,N,C);else{const Te=Fa(c,N,"vertex"),we=Fa(c,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+c.getError()+" - VALIDATE_STATUS "+c.getProgramParameter(D,c.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+$+`
`+Te+`
`+we)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||ne==="")&&(ve=!1);ve&&(R.diagnostics={runnable:H,programLog:$,vertexShader:{log:z,prefix:l},fragmentShader:{log:ne,prefix:r}})}c.deleteShader(N),c.deleteShader(C),W=new Dn(c,D),p=Jl(c,D)}let W;this.getUniforms=function(){return W===void 0&&y(this),W};let p;this.getAttributes=function(){return p===void 0&&y(this),p};let d=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return d===!1&&(d=c.getProgramParameter(D,Wl)),d},this.destroy=function(){i.releaseStatesOfProgram(this),c.deleteProgram(D),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zl++,this.cacheKey=n,this.usedTimes=1,this.program=D,this.vertexShader=N,this.fragmentShader=C,this}let df=0;class uf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,c=this._getShaderStage(t),o=this._getShaderStage(i),h=this._getShaderCacheForMaterial(n);return h.has(c)===!1&&(h.add(c),c.usedTimes++),h.has(o)===!1&&(h.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new pf(n),t.set(n,i)),i}}class pf{constructor(n){this.id=df++,this.code=n,this.usedTimes=0}}function hf(e,n,t,i,c,o,h){const f=new Sr,P=new uf,M=new Set,U=[],g=c.logarithmicDepthBuffer,S=c.vertexTextures;let x=c.precision;const O={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(p){return M.add(p),p===0?"uv":`uv${p}`}function l(p,d,R,B,X){const K=B.fog,$=X.geometry,z=p.isMeshStandardMaterial?B.environment:null,ne=(p.isMeshStandardMaterial?t:n).get(p.envMap||z),H=ne&&ne.mapping===Jt?ne.image.height:null,ve=O[p.type];p.precision!==null&&(x=c.getMaxPrecision(p.precision),x!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",x,"instead."));const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,we=Te!==void 0?Te.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let et,Je,ke,V;if(ve){const Ge=vt[ve];et=Ge.vertexShader,Je=Ge.fragmentShader}else et=p.vertexShader,Je=p.fragmentShader,P.update(p),ke=P.getVertexShaderID(p),V=P.getFragmentShaderID(p);const q=e.getRenderTarget(),le=e.state.buffers.depth.getReversed(),be=X.isInstancedMesh===!0,Se=X.isBatchedMesh===!0,Ne=!!p.map,ot=!!p.matcap,m=!!ne,qe=!!p.aoMap,Le=!!p.lightMap,Re=!!p.bumpMap,ue=!!p.normalMap,$e=!!p.displacementMap,pe=!!p.emissiveMap,Ie=!!p.metalnessMap,at=!!p.roughnessMap,tt=p.anisotropy>0,u=p.clearcoat>0,a=p.dispersion>0,b=p.iridescence>0,G=p.sheen>0,Y=p.transmission>0,F=tt&&!!p.anisotropyMap,ge=u&&!!p.clearcoatMap,ee=u&&!!p.clearcoatNormalMap,he=u&&!!p.clearcoatRoughnessMap,me=b&&!!p.iridescenceMap,J=b&&!!p.iridescenceThicknessMap,oe=G&&!!p.sheenColorMap,Ae=G&&!!p.sheenRoughnessMap,_e=!!p.specularMap,re=!!p.specularColorMap,Ue=!!p.specularIntensityMap,v=Y&&!!p.transmissionMap,j=Y&&!!p.thicknessMap,te=!!p.gradientMap,ce=!!p.alphaMap,Z=p.alphaTest>0,k=!!p.alphaHash,de=!!p.extensions;let Pe=At;p.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Pe=e.toneMapping);const ze={shaderID:ve,shaderType:p.type,shaderName:p.name,vertexShader:et,fragmentShader:Je,defines:p.defines,customVertexShaderID:ke,customFragmentShaderID:V,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:x,batching:Se,batchingColor:Se&&X._colorsTexture!==null,instancing:be,instancingColor:be&&X.instanceColor!==null,instancingMorph:be&&X.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:q===null?e.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:nn,alphaToCoverage:!!p.alphaToCoverage,map:Ne,matcap:ot,envMap:m,envMapMode:m&&ne.mapping,envMapCubeUVHeight:H,aoMap:qe,lightMap:Le,bumpMap:Re,normalMap:ue,displacementMap:S&&$e,emissiveMap:pe,normalMapObjectSpace:ue&&p.normalMapType===gr,normalMapTangentSpace:ue&&p.normalMapType===vr,metalnessMap:Ie,roughnessMap:at,anisotropy:tt,anisotropyMap:F,clearcoat:u,clearcoatMap:ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:he,dispersion:a,iridescence:b,iridescenceMap:me,iridescenceThicknessMap:J,sheen:G,sheenColorMap:oe,sheenRoughnessMap:Ae,specularMap:_e,specularColorMap:re,specularIntensityMap:Ue,transmission:Y,transmissionMap:v,thicknessMap:j,gradientMap:te,opaque:p.transparent===!1&&p.blending===rn&&p.alphaToCoverage===!1,alphaMap:ce,alphaTest:Z,alphaHash:k,combine:p.combine,mapUv:Ne&&D(p.map.channel),aoMapUv:qe&&D(p.aoMap.channel),lightMapUv:Le&&D(p.lightMap.channel),bumpMapUv:Re&&D(p.bumpMap.channel),normalMapUv:ue&&D(p.normalMap.channel),displacementMapUv:$e&&D(p.displacementMap.channel),emissiveMapUv:pe&&D(p.emissiveMap.channel),metalnessMapUv:Ie&&D(p.metalnessMap.channel),roughnessMapUv:at&&D(p.roughnessMap.channel),anisotropyMapUv:F&&D(p.anisotropyMap.channel),clearcoatMapUv:ge&&D(p.clearcoatMap.channel),clearcoatNormalMapUv:ee&&D(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&D(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&D(p.iridescenceMap.channel),iridescenceThicknessMapUv:J&&D(p.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&D(p.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&D(p.sheenRoughnessMap.channel),specularMapUv:_e&&D(p.specularMap.channel),specularColorMapUv:re&&D(p.specularColorMap.channel),specularIntensityMapUv:Ue&&D(p.specularIntensityMap.channel),transmissionMapUv:v&&D(p.transmissionMap.channel),thicknessMapUv:j&&D(p.thicknessMap.channel),alphaMapUv:ce&&D(p.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ue||tt),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!$.attributes.uv&&(Ne||ce),fog:!!K,useFog:p.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:p.flatShading===!0&&p.wireframe===!1,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:le,skinning:X.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Be,numDirLights:d.directional.length,numPointLights:d.point.length,numSpotLights:d.spot.length,numSpotLightMaps:d.spotLightMap.length,numRectAreaLights:d.rectArea.length,numHemiLights:d.hemi.length,numDirLightShadows:d.directionalShadowMap.length,numPointLightShadows:d.pointShadowMap.length,numSpotLightShadows:d.spotShadowMap.length,numSpotLightShadowsWithMaps:d.numSpotLightShadowsWithMaps,numLightProbes:d.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:p.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Ne&&p.map.isVideoTexture===!0&&nt.getTransfer(p.map.colorSpace)===Xe,decodeVideoTextureEmissive:pe&&p.emissiveMap.isVideoTexture===!0&&nt.getTransfer(p.emissiveMap.colorSpace)===Xe,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===Mt,flipSided:p.side===ht,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionClipCullDistance:de&&p.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&p.extensions.multiDraw===!0||Se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()};return ze.vertexUv1s=M.has(1),ze.vertexUv2s=M.has(2),ze.vertexUv3s=M.has(3),M.clear(),ze}function r(p){const d=[];if(p.shaderID?d.push(p.shaderID):(d.push(p.customVertexShaderID),d.push(p.customFragmentShaderID)),p.defines!==void 0)for(const R in p.defines)d.push(R),d.push(p.defines[R]);return p.isRawShaderMaterial===!1&&(L(d,p),A(d,p),d.push(e.outputColorSpace)),d.push(p.customProgramCacheKey),d.join()}function L(p,d){p.push(d.precision),p.push(d.outputColorSpace),p.push(d.envMapMode),p.push(d.envMapCubeUVHeight),p.push(d.mapUv),p.push(d.alphaMapUv),p.push(d.lightMapUv),p.push(d.aoMapUv),p.push(d.bumpMapUv),p.push(d.normalMapUv),p.push(d.displacementMapUv),p.push(d.emissiveMapUv),p.push(d.metalnessMapUv),p.push(d.roughnessMapUv),p.push(d.anisotropyMapUv),p.push(d.clearcoatMapUv),p.push(d.clearcoatNormalMapUv),p.push(d.clearcoatRoughnessMapUv),p.push(d.iridescenceMapUv),p.push(d.iridescenceThicknessMapUv),p.push(d.sheenColorMapUv),p.push(d.sheenRoughnessMapUv),p.push(d.specularMapUv),p.push(d.specularColorMapUv),p.push(d.specularIntensityMapUv),p.push(d.transmissionMapUv),p.push(d.thicknessMapUv),p.push(d.combine),p.push(d.fogExp2),p.push(d.sizeAttenuation),p.push(d.morphTargetsCount),p.push(d.morphAttributeCount),p.push(d.numDirLights),p.push(d.numPointLights),p.push(d.numSpotLights),p.push(d.numSpotLightMaps),p.push(d.numHemiLights),p.push(d.numRectAreaLights),p.push(d.numDirLightShadows),p.push(d.numPointLightShadows),p.push(d.numSpotLightShadows),p.push(d.numSpotLightShadowsWithMaps),p.push(d.numLightProbes),p.push(d.shadowMapType),p.push(d.toneMapping),p.push(d.numClippingPlanes),p.push(d.numClipIntersection),p.push(d.depthPacking)}function A(p,d){f.disableAll(),d.supportsVertexTextures&&f.enable(0),d.instancing&&f.enable(1),d.instancingColor&&f.enable(2),d.instancingMorph&&f.enable(3),d.matcap&&f.enable(4),d.envMap&&f.enable(5),d.normalMapObjectSpace&&f.enable(6),d.normalMapTangentSpace&&f.enable(7),d.clearcoat&&f.enable(8),d.iridescence&&f.enable(9),d.alphaTest&&f.enable(10),d.vertexColors&&f.enable(11),d.vertexAlphas&&f.enable(12),d.vertexUv1s&&f.enable(13),d.vertexUv2s&&f.enable(14),d.vertexUv3s&&f.enable(15),d.vertexTangents&&f.enable(16),d.anisotropy&&f.enable(17),d.alphaHash&&f.enable(18),d.batching&&f.enable(19),d.dispersion&&f.enable(20),d.batchingColor&&f.enable(21),d.gradientMap&&f.enable(22),p.push(f.mask),f.disableAll(),d.fog&&f.enable(0),d.useFog&&f.enable(1),d.flatShading&&f.enable(2),d.logarithmicDepthBuffer&&f.enable(3),d.reversedDepthBuffer&&f.enable(4),d.skinning&&f.enable(5),d.morphTargets&&f.enable(6),d.morphNormals&&f.enable(7),d.morphColors&&f.enable(8),d.premultipliedAlpha&&f.enable(9),d.shadowMapEnabled&&f.enable(10),d.doubleSided&&f.enable(11),d.flipSided&&f.enable(12),d.useDepthPacking&&f.enable(13),d.dithering&&f.enable(14),d.transmission&&f.enable(15),d.sheen&&f.enable(16),d.opaque&&f.enable(17),d.pointsUvs&&f.enable(18),d.decodeVideoTexture&&f.enable(19),d.decodeVideoTextureEmissive&&f.enable(20),d.alphaToCoverage&&f.enable(21),p.push(f.mask)}function _(p){const d=O[p.type];let R;if(d){const B=vt[d];R=_r.clone(B.uniforms)}else R=p.uniforms;return R}function N(p,d){let R;for(let B=0,X=U.length;B<X;B++){const K=U[B];if(K.cacheKey===d){R=K,++R.usedTimes;break}}return R===void 0&&(R=new ff(e,d,p,o),U.push(R)),R}function C(p){if(--p.usedTimes===0){const d=U.indexOf(p);U[d]=U[U.length-1],U.pop(),p.destroy()}}function y(p){P.remove(p)}function W(){P.dispose()}return{getParameters:l,getProgramCacheKey:r,getUniforms:_,acquireProgram:N,releaseProgram:C,releaseShaderCache:y,programs:U,dispose:W}}function mf(){let e=new WeakMap;function n(h){return e.has(h)}function t(h){let f=e.get(h);return f===void 0&&(f={},e.set(h,f)),f}function i(h){e.delete(h)}function c(h,f,P){e.get(h)[f]=P}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:c,dispose:o}}function _f(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Va(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function ka(){const e=[];let n=0;const t=[],i=[],c=[];function o(){n=0,t.length=0,i.length=0,c.length=0}function h(g,S,x,O,D,l){let r=e[n];return r===void 0?(r={id:g.id,object:g,geometry:S,material:x,groupOrder:O,renderOrder:g.renderOrder,z:D,group:l},e[n]=r):(r.id=g.id,r.object=g,r.geometry=S,r.material=x,r.groupOrder=O,r.renderOrder=g.renderOrder,r.z=D,r.group=l),n++,r}function f(g,S,x,O,D,l){const r=h(g,S,x,O,D,l);x.transmission>0?i.push(r):x.transparent===!0?c.push(r):t.push(r)}function P(g,S,x,O,D,l){const r=h(g,S,x,O,D,l);x.transmission>0?i.unshift(r):x.transparent===!0?c.unshift(r):t.unshift(r)}function M(g,S){t.length>1&&t.sort(g||_f),i.length>1&&i.sort(S||Va),c.length>1&&c.sort(S||Va)}function U(){for(let g=n,S=e.length;g<S;g++){const x=e[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:c,init:o,push:f,unshift:P,finish:U,sort:M}}function vf(){let e=new WeakMap;function n(i,c){const o=e.get(i);let h;return o===void 0?(h=new ka,e.set(i,[h])):c>=o.length?(h=new ka,o.push(h)):h=o[c],h}function t(){e=new WeakMap}return{get:n,dispose:t}}function gf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new Ve,color:new Ye};break;case"SpotLight":t={position:new Ve,direction:new Ve,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Ve,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Ve,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Ve,halfWidth:new Ve,halfHeight:new Ve};break}return e[n.id]=t,t}}}function Sf(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Ef=0;function Mf(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Tf(e){const n=new gf,t=Sf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let M=0;M<9;M++)i.probe.push(new Ve);const c=new Ve,o=new Ht,h=new Ht;function f(M){let U=0,g=0,S=0;for(let p=0;p<9;p++)i.probe[p].set(0,0,0);let x=0,O=0,D=0,l=0,r=0,L=0,A=0,_=0,N=0,C=0,y=0;M.sort(Mf);for(let p=0,d=M.length;p<d;p++){const R=M[p],B=R.color,X=R.intensity,K=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)U+=B.r*X,g+=B.g*X,S+=B.b*X;else if(R.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(R.sh.coefficients[z],X);y++}else if(R.isDirectionalLight){const z=n.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ne=R.shadow,H=t.get(R);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.directionalShadow[x]=H,i.directionalShadowMap[x]=$,i.directionalShadowMatrix[x]=R.shadow.matrix,L++}i.directional[x]=z,x++}else if(R.isSpotLight){const z=n.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(B).multiplyScalar(X),z.distance=K,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,i.spot[D]=z;const ne=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,ne.updateMatrices(R),R.castShadow&&C++),i.spotLightMatrix[D]=ne.matrix,R.castShadow){const H=t.get(R);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,i.spotShadow[D]=H,i.spotShadowMap[D]=$,_++}D++}else if(R.isRectAreaLight){const z=n.get(R);z.color.copy(B).multiplyScalar(X),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),i.rectArea[l]=z,l++}else if(R.isPointLight){const z=n.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const ne=R.shadow,H=t.get(R);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,i.pointShadow[O]=H,i.pointShadowMap[O]=$,i.pointShadowMatrix[O]=R.shadow.matrix,A++}i.point[O]=z,O++}else if(R.isHemisphereLight){const z=n.get(R);z.skyColor.copy(R.color).multiplyScalar(X),z.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[r]=z,r++}}l>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ie.LTC_FLOAT_1,i.rectAreaLTC2=ie.LTC_FLOAT_2):(i.rectAreaLTC1=ie.LTC_HALF_1,i.rectAreaLTC2=ie.LTC_HALF_2)),i.ambient[0]=U,i.ambient[1]=g,i.ambient[2]=S;const W=i.hash;(W.directionalLength!==x||W.pointLength!==O||W.spotLength!==D||W.rectAreaLength!==l||W.hemiLength!==r||W.numDirectionalShadows!==L||W.numPointShadows!==A||W.numSpotShadows!==_||W.numSpotMaps!==N||W.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=D,i.rectArea.length=l,i.point.length=O,i.hemi.length=r,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=_+N-C,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=y,W.directionalLength=x,W.pointLength=O,W.spotLength=D,W.rectAreaLength=l,W.hemiLength=r,W.numDirectionalShadows=L,W.numPointShadows=A,W.numSpotShadows=_,W.numSpotMaps=N,W.numLightProbes=y,i.version=Ef++)}function P(M,U){let g=0,S=0,x=0,O=0,D=0;const l=U.matrixWorldInverse;for(let r=0,L=M.length;r<L;r++){const A=M[r];if(A.isDirectionalLight){const _=i.directional[g];_.direction.setFromMatrixPosition(A.matrixWorld),c.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),g++}else if(A.isSpotLight){const _=i.spot[x];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),_.direction.setFromMatrixPosition(A.matrixWorld),c.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(c),_.direction.transformDirection(l),x++}else if(A.isRectAreaLight){const _=i.rectArea[O];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),h.identity(),o.copy(A.matrixWorld),o.premultiply(l),h.extractRotation(o),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(h),_.halfHeight.applyMatrix4(h),O++}else if(A.isPointLight){const _=i.point[S];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(l),S++}else if(A.isHemisphereLight){const _=i.hemi[D];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(l),D++}}}return{setup:f,setupView:P,state:i}}function Wa(e){const n=new Tf(e),t=[],i=[];function c(U){M.camera=U,t.length=0,i.length=0}function o(U){t.push(U)}function h(U){i.push(U)}function f(){n.setup(t)}function P(U){n.setupView(t,U)}const M={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:c,state:M,setupLights:f,setupLightsView:P,pushLight:o,pushShadow:h}}function xf(e){let n=new WeakMap;function t(c,o=0){const h=n.get(c);let f;return h===void 0?(f=new Wa(e),n.set(c,[f])):o>=h.length?(f=new Wa(e),h.push(f)):f=h[o],f}function i(){n=new WeakMap}return{get:t,dispose:i}}const Af=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cf(e,n,t){let i=new Yn;const c=new ct,o=new ct,h=new lt,f=new Er({depthPacking:Mr}),P=new Tr,M={},U=t.maxTextureSize,g={[Vt]:ht,[ht]:Vt,[Mt]:Mt},S=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Af,fragmentShader:Rf}),x=S.clone();x.defines.HORIZONTAL_PASS=1;const O=new Gn;O.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const D=new xt(O,S),l=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xn;let r=this.type;this.render=function(C,y,W){if(l.enabled===!1||l.autoUpdate===!1&&l.needsUpdate===!1||C.length===0)return;const p=e.getRenderTarget(),d=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Pt),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=r!==Et&&this.type===Et,K=r===Et&&this.type!==Et;for(let $=0,z=C.length;$<z;$++){const ne=C[$],H=ne.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;c.copy(H.mapSize);const ve=H.getFrameExtents();if(c.multiply(ve),o.copy(H.mapSize),(c.x>U||c.y>U)&&(c.x>U&&(o.x=Math.floor(U/ve.x),c.x=o.x*ve.x,H.mapSize.x=o.x),c.y>U&&(o.y=Math.floor(U/ve.y),c.y=o.y*ve.y,H.mapSize.y=o.y)),H.map===null||X===!0||K===!0){const we=this.type!==Et?{minFilter:Wt,magFilter:Wt}:{};H.map!==null&&H.map.dispose(),H.map=new wt(c.x,c.y,we),H.map.texture.name=ne.name+".shadowMap",H.camera.updateProjectionMatrix()}e.setRenderTarget(H.map),e.clear();const Te=H.getViewportCount();for(let we=0;we<Te;we++){const Be=H.getViewport(we);h.set(o.x*Be.x,o.y*Be.y,o.x*Be.z,o.y*Be.w),B.viewport(h),H.updateMatrices(ne,we),i=H.getFrustum(),_(y,W,H.camera,ne,this.type)}H.isPointLightShadow!==!0&&this.type===Et&&L(H,W),H.needsUpdate=!1}r=this.type,l.needsUpdate=!1,e.setRenderTarget(p,d,R)};function L(C,y){const W=n.update(D);S.defines.VSM_SAMPLES!==C.blurSamples&&(S.defines.VSM_SAMPLES=C.blurSamples,x.defines.VSM_SAMPLES=C.blurSamples,S.needsUpdate=!0,x.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new wt(c.x,c.y)),S.uniforms.shadow_pass.value=C.map.texture,S.uniforms.resolution.value=C.mapSize,S.uniforms.radius.value=C.radius,e.setRenderTarget(C.mapPass),e.clear(),e.renderBufferDirect(y,null,W,S,D,null),x.uniforms.shadow_pass.value=C.mapPass.texture,x.uniforms.resolution.value=C.mapSize,x.uniforms.radius.value=C.radius,e.setRenderTarget(C.map),e.clear(),e.renderBufferDirect(y,null,W,x,D,null)}function A(C,y,W,p){let d=null;const R=W.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)d=R;else if(d=W.isPointLight===!0?P:f,e.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const B=d.uuid,X=y.uuid;let K=M[B];K===void 0&&(K={},M[B]=K);let $=K[X];$===void 0&&($=d.clone(),K[X]=$,y.addEventListener("dispose",N)),d=$}if(d.visible=y.visible,d.wireframe=y.wireframe,p===Et?d.side=y.shadowSide!==null?y.shadowSide:y.side:d.side=y.shadowSide!==null?y.shadowSide:g[y.side],d.alphaMap=y.alphaMap,d.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,d.map=y.map,d.clipShadows=y.clipShadows,d.clippingPlanes=y.clippingPlanes,d.clipIntersection=y.clipIntersection,d.displacementMap=y.displacementMap,d.displacementScale=y.displacementScale,d.displacementBias=y.displacementBias,d.wireframeLinewidth=y.wireframeLinewidth,d.linewidth=y.linewidth,W.isPointLight===!0&&d.isMeshDistanceMaterial===!0){const B=e.properties.get(d);B.light=W}return d}function _(C,y,W,p,d){if(C.visible===!1)return;if(C.layers.test(y.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&d===Et)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld);const X=n.update(C),K=C.material;if(Array.isArray(K)){const $=X.groups;for(let z=0,ne=$.length;z<ne;z++){const H=$[z],ve=K[H.materialIndex];if(ve&&ve.visible){const Te=A(C,ve,p,d);C.onBeforeShadow(e,C,y,W,X,Te,H),e.renderBufferDirect(W,null,X,Te,C,H),C.onAfterShadow(e,C,y,W,X,Te,H)}}}else if(K.visible){const $=A(C,K,p,d);C.onBeforeShadow(e,C,y,W,X,$,null),e.renderBufferDirect(W,null,X,$,C,null),C.onAfterShadow(e,C,y,W,X,$,null)}}const B=C.children;for(let X=0,K=B.length;X<K;X++)_(B[X],y,W,p,d)}function N(C){C.target.removeEventListener("dispose",N);for(const W in M){const p=M[W],d=C.target.uuid;d in p&&(p[d].dispose(),delete p[d])}}}const bf={[En]:Sn,[gn]:mn,[vn]:hn,[an]:_n,[Sn]:En,[mn]:gn,[hn]:vn,[_n]:an};function Pf(e,n){function t(){let v=!1;const j=new lt;let te=null;const ce=new lt(0,0,0,0);return{setMask:function(Z){te!==Z&&!v&&(e.colorMask(Z,Z,Z,Z),te=Z)},setLocked:function(Z){v=Z},setClear:function(Z,k,de,Pe,ze){ze===!0&&(Z*=Pe,k*=Pe,de*=Pe),j.set(Z,k,de,Pe),ce.equals(j)===!1&&(e.clearColor(Z,k,de,Pe),ce.copy(j))},reset:function(){v=!1,te=null,ce.set(-1,0,0,0)}}}function i(){let v=!1,j=!1,te=null,ce=null,Z=null;return{setReversed:function(k){if(j!==k){const de=n.get("EXT_clip_control");k?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),j=k;const Pe=Z;Z=null,this.setClear(Pe)}},getReversed:function(){return j},setTest:function(k){k?q(e.DEPTH_TEST):le(e.DEPTH_TEST)},setMask:function(k){te!==k&&!v&&(e.depthMask(k),te=k)},setFunc:function(k){if(j&&(k=bf[k]),ce!==k){switch(k){case En:e.depthFunc(e.NEVER);break;case Sn:e.depthFunc(e.ALWAYS);break;case gn:e.depthFunc(e.LESS);break;case an:e.depthFunc(e.LEQUAL);break;case vn:e.depthFunc(e.EQUAL);break;case _n:e.depthFunc(e.GEQUAL);break;case mn:e.depthFunc(e.GREATER);break;case hn:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ce=k}},setLocked:function(k){v=k},setClear:function(k){Z!==k&&(j&&(k=1-k),e.clearDepth(k),Z=k)},reset:function(){v=!1,te=null,ce=null,Z=null,j=!1}}}function c(){let v=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,ze=null;return{setTest:function(Ge){v||(Ge?q(e.STENCIL_TEST):le(e.STENCIL_TEST))},setMask:function(Ge){j!==Ge&&!v&&(e.stencilMask(Ge),j=Ge)},setFunc:function(Ge,Tt,gt){(te!==Ge||ce!==Tt||Z!==gt)&&(e.stencilFunc(Ge,Tt,gt),te=Ge,ce=Tt,Z=gt)},setOp:function(Ge,Tt,gt){(k!==Ge||de!==Tt||Pe!==gt)&&(e.stencilOp(Ge,Tt,gt),k=Ge,de=Tt,Pe=gt)},setLocked:function(Ge){v=Ge},setClear:function(Ge){ze!==Ge&&(e.clearStencil(Ge),ze=Ge)},reset:function(){v=!1,j=null,te=null,ce=null,Z=null,k=null,de=null,Pe=null,ze=null}}}const o=new t,h=new i,f=new c,P=new WeakMap,M=new WeakMap;let U={},g={},S=new WeakMap,x=[],O=null,D=!1,l=null,r=null,L=null,A=null,_=null,N=null,C=null,y=new Ye(0,0,0),W=0,p=!1,d=null,R=null,B=null,X=null,K=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,ne=0;const H=e.getParameter(e.VERSION);H.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(H)[1]),z=ne>=1):H.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),z=ne>=2);let ve=null,Te={};const we=e.getParameter(e.SCISSOR_BOX),Be=e.getParameter(e.VIEWPORT),et=new lt().fromArray(we),Je=new lt().fromArray(Be);function ke(v,j,te,ce){const Z=new Uint8Array(4),k=e.createTexture();e.bindTexture(v,k),e.texParameteri(v,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(v,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let de=0;de<te;de++)v===e.TEXTURE_3D||v===e.TEXTURE_2D_ARRAY?e.texImage3D(j,0,e.RGBA,1,1,ce,0,e.RGBA,e.UNSIGNED_BYTE,Z):e.texImage2D(j+de,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Z);return k}const V={};V[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),V[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),V[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),h.setClear(1),f.setClear(0),q(e.DEPTH_TEST),h.setFunc(an),Re(!1),ue(qn),q(e.CULL_FACE),qe(Pt);function q(v){U[v]!==!0&&(e.enable(v),U[v]=!0)}function le(v){U[v]!==!1&&(e.disable(v),U[v]=!1)}function be(v,j){return g[v]!==j?(e.bindFramebuffer(v,j),g[v]=j,v===e.DRAW_FRAMEBUFFER&&(g[e.FRAMEBUFFER]=j),v===e.FRAMEBUFFER&&(g[e.DRAW_FRAMEBUFFER]=j),!0):!1}function Se(v,j){let te=x,ce=!1;if(v){te=S.get(j),te===void 0&&(te=[],S.set(j,te));const Z=v.textures;if(te.length!==Z.length||te[0]!==e.COLOR_ATTACHMENT0){for(let k=0,de=Z.length;k<de;k++)te[k]=e.COLOR_ATTACHMENT0+k;te.length=Z.length,ce=!0}}else te[0]!==e.BACK&&(te[0]=e.BACK,ce=!0);ce&&e.drawBuffers(te)}function Ne(v){return O!==v?(e.useProgram(v),O=v,!0):!1}const ot={[zt]:e.FUNC_ADD,[Ar]:e.FUNC_SUBTRACT,[xr]:e.FUNC_REVERSE_SUBTRACT};ot[Wr]=e.MIN,ot[zr]=e.MAX;const m={[Gr]:e.ZERO,[Br]:e.ONE,[Or]:e.SRC_COLOR,[Fr]:e.SRC_ALPHA,[Nr]:e.SRC_ALPHA_SATURATE,[yr]:e.DST_COLOR,[Ir]:e.DST_ALPHA,[wr]:e.ONE_MINUS_SRC_COLOR,[Dr]:e.ONE_MINUS_SRC_ALPHA,[Ur]:e.ONE_MINUS_DST_COLOR,[Lr]:e.ONE_MINUS_DST_ALPHA,[Pr]:e.CONSTANT_COLOR,[br]:e.ONE_MINUS_CONSTANT_COLOR,[Cr]:e.CONSTANT_ALPHA,[Rr]:e.ONE_MINUS_CONSTANT_ALPHA};function qe(v,j,te,ce,Z,k,de,Pe,ze,Ge){if(v===Pt){D===!0&&(le(e.BLEND),D=!1);return}if(D===!1&&(q(e.BLEND),D=!0),v!==kr){if(v!==l||Ge!==p){if((r!==zt||_!==zt)&&(e.blendEquation(e.FUNC_ADD),r=zt,_=zt),Ge)switch(v){case rn:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qn:e.blendFunc(e.ONE,e.ONE);break;case Zn:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $n:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case rn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Zn:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $n:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}L=null,A=null,N=null,C=null,y.set(0,0,0),W=0,l=v,p=Ge}return}Z=Z||j,k=k||te,de=de||ce,(j!==r||Z!==_)&&(e.blendEquationSeparate(ot[j],ot[Z]),r=j,_=Z),(te!==L||ce!==A||k!==N||de!==C)&&(e.blendFuncSeparate(m[te],m[ce],m[k],m[de]),L=te,A=ce,N=k,C=de),(Pe.equals(y)===!1||ze!==W)&&(e.blendColor(Pe.r,Pe.g,Pe.b,ze),y.copy(Pe),W=ze),l=v,p=!1}function Le(v,j){v.side===Mt?le(e.CULL_FACE):q(e.CULL_FACE);let te=v.side===ht;j&&(te=!te),Re(te),v.blending===rn&&v.transparent===!1?qe(Pt):qe(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),h.setFunc(v.depthFunc),h.setTest(v.depthTest),h.setMask(v.depthWrite),o.setMask(v.colorWrite);const ce=v.stencilWrite;f.setTest(ce),ce&&(f.setMask(v.stencilWriteMask),f.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),f.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),pe(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?q(e.SAMPLE_ALPHA_TO_COVERAGE):le(e.SAMPLE_ALPHA_TO_COVERAGE)}function Re(v){d!==v&&(v?e.frontFace(e.CW):e.frontFace(e.CCW),d=v)}function ue(v){v!==Hr?(q(e.CULL_FACE),v!==R&&(v===qn?e.cullFace(e.BACK):v===Vr?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):le(e.CULL_FACE),R=v}function $e(v){v!==B&&(z&&e.lineWidth(v),B=v)}function pe(v,j,te){v?(q(e.POLYGON_OFFSET_FILL),(X!==j||K!==te)&&(e.polygonOffset(j,te),X=j,K=te)):le(e.POLYGON_OFFSET_FILL)}function Ie(v){v?q(e.SCISSOR_TEST):le(e.SCISSOR_TEST)}function at(v){v===void 0&&(v=e.TEXTURE0+$-1),ve!==v&&(e.activeTexture(v),ve=v)}function tt(v,j,te){te===void 0&&(ve===null?te=e.TEXTURE0+$-1:te=ve);let ce=Te[te];ce===void 0&&(ce={type:void 0,texture:void 0},Te[te]=ce),(ce.type!==v||ce.texture!==j)&&(ve!==te&&(e.activeTexture(te),ve=te),e.bindTexture(v,j||V[v]),ce.type=v,ce.texture=j)}function u(){const v=Te[ve];v!==void 0&&v.type!==void 0&&(e.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function a(){try{e.compressedTexImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function b(){try{e.compressedTexImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function G(){try{e.texSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Y(){try{e.texSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function F(){try{e.compressedTexSubImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ge(){try{e.compressedTexSubImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ee(){try{e.texStorage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function he(){try{e.texStorage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{e.texImage2D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function J(){try{e.texImage3D(...arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function oe(v){et.equals(v)===!1&&(e.scissor(v.x,v.y,v.z,v.w),et.copy(v))}function Ae(v){Je.equals(v)===!1&&(e.viewport(v.x,v.y,v.z,v.w),Je.copy(v))}function _e(v,j){let te=M.get(j);te===void 0&&(te=new WeakMap,M.set(j,te));let ce=te.get(v);ce===void 0&&(ce=e.getUniformBlockIndex(j,v.name),te.set(v,ce))}function re(v,j){const ce=M.get(j).get(v);P.get(j)!==ce&&(e.uniformBlockBinding(j,ce,v.__bindingPointIndex),P.set(j,ce))}function Ue(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),h.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),U={},ve=null,Te={},g={},S=new WeakMap,x=[],O=null,D=!1,l=null,r=null,L=null,A=null,_=null,N=null,C=null,y=new Ye(0,0,0),W=0,p=!1,d=null,R=null,B=null,X=null,K=null,et.set(0,0,e.canvas.width,e.canvas.height),Je.set(0,0,e.canvas.width,e.canvas.height),o.reset(),h.reset(),f.reset()}return{buffers:{color:o,depth:h,stencil:f},enable:q,disable:le,bindFramebuffer:be,drawBuffers:Se,useProgram:Ne,setBlending:qe,setMaterial:Le,setFlipSided:Re,setCullFace:ue,setLineWidth:$e,setPolygonOffset:pe,setScissorTest:Ie,activeTexture:at,bindTexture:tt,unbindTexture:u,compressedTexImage2D:a,compressedTexImage3D:b,texImage2D:me,texImage3D:J,updateUBOMapping:_e,uniformBlockBinding:re,texStorage2D:ee,texStorage3D:he,texSubImage2D:G,texSubImage3D:Y,compressedTexSubImage2D:F,compressedTexSubImage3D:ge,scissor:oe,viewport:Ae,reset:Ue}}function Lf(e,n,t,i,c,o,h){const f=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,P=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),M=new ct,U=new WeakMap;let g;const S=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(u,a){return x?new OffscreenCanvas(u,a):Ja("canvas")}function D(u,a,b){let G=1;const Y=tt(u);if((Y.width>b||Y.height>b)&&(G=b/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&u instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&u instanceof ImageBitmap||typeof VideoFrame<"u"&&u instanceof VideoFrame){const F=Math.floor(G*Y.width),ge=Math.floor(G*Y.height);g===void 0&&(g=O(F,ge));const ee=a?O(F,ge):g;return ee.width=F,ee.height=ge,ee.getContext("2d").drawImage(u,0,0,F,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+F+"x"+ge+")."),ee}else return"data"in u&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),u;return u}function l(u){return u.generateMipmaps}function r(u){e.generateMipmap(u)}function L(u){return u.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:u.isWebGL3DRenderTarget?e.TEXTURE_3D:u.isWebGLArrayRenderTarget||u.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function A(u,a,b,G,Y=!1){if(u!==null){if(e[u]!==void 0)return e[u];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+u+"'")}let F=a;if(a===e.RED&&(b===e.FLOAT&&(F=e.R32F),b===e.HALF_FLOAT&&(F=e.R16F),b===e.UNSIGNED_BYTE&&(F=e.R8)),a===e.RED_INTEGER&&(b===e.UNSIGNED_BYTE&&(F=e.R8UI),b===e.UNSIGNED_SHORT&&(F=e.R16UI),b===e.UNSIGNED_INT&&(F=e.R32UI),b===e.BYTE&&(F=e.R8I),b===e.SHORT&&(F=e.R16I),b===e.INT&&(F=e.R32I)),a===e.RG&&(b===e.FLOAT&&(F=e.RG32F),b===e.HALF_FLOAT&&(F=e.RG16F),b===e.UNSIGNED_BYTE&&(F=e.RG8)),a===e.RG_INTEGER&&(b===e.UNSIGNED_BYTE&&(F=e.RG8UI),b===e.UNSIGNED_SHORT&&(F=e.RG16UI),b===e.UNSIGNED_INT&&(F=e.RG32UI),b===e.BYTE&&(F=e.RG8I),b===e.SHORT&&(F=e.RG16I),b===e.INT&&(F=e.RG32I)),a===e.RGB_INTEGER&&(b===e.UNSIGNED_BYTE&&(F=e.RGB8UI),b===e.UNSIGNED_SHORT&&(F=e.RGB16UI),b===e.UNSIGNED_INT&&(F=e.RGB32UI),b===e.BYTE&&(F=e.RGB8I),b===e.SHORT&&(F=e.RGB16I),b===e.INT&&(F=e.RGB32I)),a===e.RGBA_INTEGER&&(b===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),b===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),b===e.UNSIGNED_INT&&(F=e.RGBA32UI),b===e.BYTE&&(F=e.RGBA8I),b===e.SHORT&&(F=e.RGBA16I),b===e.INT&&(F=e.RGBA32I)),a===e.RGB&&(b===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),b===e.UNSIGNED_INT_10F_11F_11F_REV&&(F=e.R11F_G11F_B10F)),a===e.RGBA){const ge=Y?Kn:nt.getTransfer(G);b===e.FLOAT&&(F=e.RGBA32F),b===e.HALF_FLOAT&&(F=e.RGBA16F),b===e.UNSIGNED_BYTE&&(F=ge===Xe?e.SRGB8_ALPHA8:e.RGBA8),b===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),b===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&n.get("EXT_color_buffer_float"),F}function _(u,a){let b;return u?a===null||a===Kt||a===Yt?b=e.DEPTH24_STENCIL8:a===bt?b=e.DEPTH32F_STENCIL8:a===cn&&(b=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):a===null||a===Kt||a===Yt?b=e.DEPTH_COMPONENT24:a===bt?b=e.DEPTH_COMPONENT32F:a===cn&&(b=e.DEPTH_COMPONENT16),b}function N(u,a){return l(u)===!0||u.isFramebufferTexture&&u.minFilter!==Wt&&u.minFilter!==It?Math.log2(Math.max(a.width,a.height))+1:u.mipmaps!==void 0&&u.mipmaps.length>0?u.mipmaps.length:u.isCompressedTexture&&Array.isArray(u.image)?a.mipmaps.length:1}function C(u){const a=u.target;a.removeEventListener("dispose",C),W(a),a.isVideoTexture&&U.delete(a)}function y(u){const a=u.target;a.removeEventListener("dispose",y),d(a)}function W(u){const a=i.get(u);if(a.__webglInit===void 0)return;const b=u.source,G=S.get(b);if(G){const Y=G[a.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&p(u),Object.keys(G).length===0&&S.delete(b)}i.remove(u)}function p(u){const a=i.get(u);e.deleteTexture(a.__webglTexture);const b=u.source,G=S.get(b);delete G[a.__cacheKey],h.memory.textures--}function d(u){const a=i.get(u);if(u.depthTexture&&(u.depthTexture.dispose(),i.remove(u.depthTexture)),u.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(a.__webglFramebuffer[G]))for(let Y=0;Y<a.__webglFramebuffer[G].length;Y++)e.deleteFramebuffer(a.__webglFramebuffer[G][Y]);else e.deleteFramebuffer(a.__webglFramebuffer[G]);a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer[G])}else{if(Array.isArray(a.__webglFramebuffer))for(let G=0;G<a.__webglFramebuffer.length;G++)e.deleteFramebuffer(a.__webglFramebuffer[G]);else e.deleteFramebuffer(a.__webglFramebuffer);if(a.__webglDepthbuffer&&e.deleteRenderbuffer(a.__webglDepthbuffer),a.__webglMultisampledFramebuffer&&e.deleteFramebuffer(a.__webglMultisampledFramebuffer),a.__webglColorRenderbuffer)for(let G=0;G<a.__webglColorRenderbuffer.length;G++)a.__webglColorRenderbuffer[G]&&e.deleteRenderbuffer(a.__webglColorRenderbuffer[G]);a.__webglDepthRenderbuffer&&e.deleteRenderbuffer(a.__webglDepthRenderbuffer)}const b=u.textures;for(let G=0,Y=b.length;G<Y;G++){const F=i.get(b[G]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),h.memory.textures--),i.remove(b[G])}i.remove(u)}let R=0;function B(){R=0}function X(){const u=R;return u>=c.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+u+" texture units while this GPU supports only "+c.maxTextures),R+=1,u}function K(u){const a=[];return a.push(u.wrapS),a.push(u.wrapT),a.push(u.wrapR||0),a.push(u.magFilter),a.push(u.minFilter),a.push(u.anisotropy),a.push(u.internalFormat),a.push(u.format),a.push(u.type),a.push(u.generateMipmaps),a.push(u.premultiplyAlpha),a.push(u.flipY),a.push(u.unpackAlignment),a.push(u.colorSpace),a.join()}function $(u,a){const b=i.get(u);if(u.isVideoTexture&&Ie(u),u.isRenderTargetTexture===!1&&u.isExternalTexture!==!0&&u.version>0&&b.__version!==u.version){const G=u.image;if(G===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(b,u,a);return}}else u.isExternalTexture&&(b.__webglTexture=u.sourceTexture?u.sourceTexture:null);t.bindTexture(e.TEXTURE_2D,b.__webglTexture,e.TEXTURE0+a)}function z(u,a){const b=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&b.__version!==u.version){V(b,u,a);return}t.bindTexture(e.TEXTURE_2D_ARRAY,b.__webglTexture,e.TEXTURE0+a)}function ne(u,a){const b=i.get(u);if(u.isRenderTargetTexture===!1&&u.version>0&&b.__version!==u.version){V(b,u,a);return}t.bindTexture(e.TEXTURE_3D,b.__webglTexture,e.TEXTURE0+a)}function H(u,a){const b=i.get(u);if(u.version>0&&b.__version!==u.version){q(b,u,a);return}t.bindTexture(e.TEXTURE_CUBE_MAP,b.__webglTexture,e.TEXTURE0+a)}const ve={[Yr]:e.REPEAT,[Kr]:e.CLAMP_TO_EDGE,[Xr]:e.MIRRORED_REPEAT},Te={[Wt]:e.NEAREST,[qr]:e.NEAREST_MIPMAP_NEAREST,[on]:e.NEAREST_MIPMAP_LINEAR,[It]:e.LINEAR,[Mn]:e.LINEAR_MIPMAP_NEAREST,[Xt]:e.LINEAR_MIPMAP_LINEAR},we={[ta]:e.NEVER,[ea]:e.ALWAYS,[jr]:e.LESS,[kn]:e.LEQUAL,[Jr]:e.EQUAL,[Qr]:e.GEQUAL,[Zr]:e.GREATER,[$r]:e.NOTEQUAL};function Be(u,a){if(a.type===bt&&n.has("OES_texture_float_linear")===!1&&(a.magFilter===It||a.magFilter===Mn||a.magFilter===on||a.magFilter===Xt||a.minFilter===It||a.minFilter===Mn||a.minFilter===on||a.minFilter===Xt)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(u,e.TEXTURE_WRAP_S,ve[a.wrapS]),e.texParameteri(u,e.TEXTURE_WRAP_T,ve[a.wrapT]),(u===e.TEXTURE_3D||u===e.TEXTURE_2D_ARRAY)&&e.texParameteri(u,e.TEXTURE_WRAP_R,ve[a.wrapR]),e.texParameteri(u,e.TEXTURE_MAG_FILTER,Te[a.magFilter]),e.texParameteri(u,e.TEXTURE_MIN_FILTER,Te[a.minFilter]),a.compareFunction&&(e.texParameteri(u,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(u,e.TEXTURE_COMPARE_FUNC,we[a.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(a.magFilter===Wt||a.minFilter!==on&&a.minFilter!==Xt||a.type===bt&&n.has("OES_texture_float_linear")===!1)return;if(a.anisotropy>1||i.get(a).__currentAnisotropy){const b=n.get("EXT_texture_filter_anisotropic");e.texParameterf(u,b.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,c.getMaxAnisotropy())),i.get(a).__currentAnisotropy=a.anisotropy}}}function et(u,a){let b=!1;u.__webglInit===void 0&&(u.__webglInit=!0,a.addEventListener("dispose",C));const G=a.source;let Y=S.get(G);Y===void 0&&(Y={},S.set(G,Y));const F=K(a);if(F!==u.__cacheKey){Y[F]===void 0&&(Y[F]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,b=!0),Y[F].usedTimes++;const ge=Y[u.__cacheKey];ge!==void 0&&(Y[u.__cacheKey].usedTimes--,ge.usedTimes===0&&p(a)),u.__cacheKey=F,u.__webglTexture=Y[F].texture}return b}function Je(u,a,b){return Math.floor(Math.floor(u/b)/a)}function ke(u,a,b,G){const F=u.updateRanges;if(F.length===0)t.texSubImage2D(e.TEXTURE_2D,0,0,0,a.width,a.height,b,G,a.data);else{F.sort((J,oe)=>J.start-oe.start);let ge=0;for(let J=1;J<F.length;J++){const oe=F[ge],Ae=F[J],_e=oe.start+oe.count,re=Je(Ae.start,a.width,4),Ue=Je(oe.start,a.width,4);Ae.start<=_e+1&&re===Ue&&Je(Ae.start+Ae.count-1,a.width,4)===re?oe.count=Math.max(oe.count,Ae.start+Ae.count-oe.start):(++ge,F[ge]=Ae)}F.length=ge+1;const ee=e.getParameter(e.UNPACK_ROW_LENGTH),he=e.getParameter(e.UNPACK_SKIP_PIXELS),me=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,a.width);for(let J=0,oe=F.length;J<oe;J++){const Ae=F[J],_e=Math.floor(Ae.start/4),re=Math.ceil(Ae.count/4),Ue=_e%a.width,v=Math.floor(_e/a.width),j=re,te=1;e.pixelStorei(e.UNPACK_SKIP_PIXELS,Ue),e.pixelStorei(e.UNPACK_SKIP_ROWS,v),t.texSubImage2D(e.TEXTURE_2D,0,Ue,v,j,te,b,G,a.data)}u.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,ee),e.pixelStorei(e.UNPACK_SKIP_PIXELS,he),e.pixelStorei(e.UNPACK_SKIP_ROWS,me)}}function V(u,a,b){let G=e.TEXTURE_2D;(a.isDataArrayTexture||a.isCompressedArrayTexture)&&(G=e.TEXTURE_2D_ARRAY),a.isData3DTexture&&(G=e.TEXTURE_3D);const Y=et(u,a),F=a.source;t.bindTexture(G,u.__webglTexture,e.TEXTURE0+b);const ge=i.get(F);if(F.version!==ge.__version||Y===!0){t.activeTexture(e.TEXTURE0+b);const ee=nt.getPrimaries(nt.workingColorSpace),he=a.colorSpace===yt?null:nt.getPrimaries(a.colorSpace),me=a.colorSpace===yt||ee===he?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let J=D(a.image,!1,c.maxTextureSize);J=at(a,J);const oe=o.convert(a.format,a.colorSpace),Ae=o.convert(a.type);let _e=A(a.internalFormat,oe,Ae,a.colorSpace,a.isVideoTexture);Be(G,a);let re;const Ue=a.mipmaps,v=a.isVideoTexture!==!0,j=ge.__version===void 0||Y===!0,te=F.dataReady,ce=N(a,J);if(a.isDepthTexture)_e=_(a.format===sn,a.type),j&&(v?t.texStorage2D(e.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,null));else if(a.isDataTexture)if(Ue.length>0){v&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data);a.generateMipmaps=!1}else v?(j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height),te&&ke(a,J,oe,Ae)):t.texImage2D(e.TEXTURE_2D,0,_e,J.width,J.height,0,oe,Ae,J.data);else if(a.isCompressedTexture)if(a.isCompressedArrayTexture){v&&j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,Ue[0].width,Ue[0].height,J.depth);for(let Z=0,k=Ue.length;Z<k;Z++)if(re=Ue[Z],a.format!==St)if(oe!==null)if(v){if(te)if(a.layerUpdates.size>0){const de=na(re.width,re.height,a.format,a.type);for(const Pe of a.layerUpdates){const ze=re.data.subarray(Pe*de/re.data.BYTES_PER_ELEMENT,(Pe+1)*de/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,Pe,re.width,re.height,1,oe,ze)}a.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,re.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else v?te&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Z,0,0,0,re.width,re.height,J.depth,oe,Ae,re.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Z,_e,re.width,re.height,J.depth,0,oe,Ae,re.data)}else{v&&j&&t.texStorage2D(e.TEXTURE_2D,ce,_e,Ue[0].width,Ue[0].height);for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],a.format!==St?oe!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,re.width,re.height,oe,Ae,re.data):t.texImage2D(e.TEXTURE_2D,Z,_e,re.width,re.height,0,oe,Ae,re.data)}else if(a.isDataArrayTexture)if(v){if(j&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ce,_e,J.width,J.height,J.depth),te)if(a.layerUpdates.size>0){const Z=na(J.width,J.height,a.format,a.type);for(const k of a.layerUpdates){const de=J.data.subarray(k*Z/J.data.BYTES_PER_ELEMENT,(k+1)*Z/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,k,J.width,J.height,1,oe,Ae,de)}a.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isData3DTexture)v?(j&&t.texStorage3D(e.TEXTURE_3D,ce,_e,J.width,J.height,J.depth),te&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,oe,Ae,J.data)):t.texImage3D(e.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,oe,Ae,J.data);else if(a.isFramebufferTexture){if(j)if(v)t.texStorage2D(e.TEXTURE_2D,ce,_e,J.width,J.height);else{let Z=J.width,k=J.height;for(let de=0;de<ce;de++)t.texImage2D(e.TEXTURE_2D,de,_e,Z,k,0,oe,Ae,null),Z>>=1,k>>=1}}else if(Ue.length>0){if(v&&j){const Z=tt(Ue[0]);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}for(let Z=0,k=Ue.length;Z<k;Z++)re=Ue[Z],v?te&&t.texSubImage2D(e.TEXTURE_2D,Z,0,0,oe,Ae,re):t.texImage2D(e.TEXTURE_2D,Z,_e,oe,Ae,re);a.generateMipmaps=!1}else if(v){if(j){const Z=tt(J);t.texStorage2D(e.TEXTURE_2D,ce,_e,Z.width,Z.height)}te&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,oe,Ae,J)}else t.texImage2D(e.TEXTURE_2D,0,_e,oe,Ae,J);l(a)&&r(G),ge.__version=F.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function q(u,a,b){if(a.image.length!==6)return;const G=et(u,a),Y=a.source;t.bindTexture(e.TEXTURE_CUBE_MAP,u.__webglTexture,e.TEXTURE0+b);const F=i.get(Y);if(Y.version!==F.__version||G===!0){t.activeTexture(e.TEXTURE0+b);const ge=nt.getPrimaries(nt.workingColorSpace),ee=a.colorSpace===yt?null:nt.getPrimaries(a.colorSpace),he=a.colorSpace===yt||ge===ee?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,a.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,a.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const me=a.isCompressedTexture||a.image[0].isCompressedTexture,J=a.image[0]&&a.image[0].isDataTexture,oe=[];for(let k=0;k<6;k++)!me&&!J?oe[k]=D(a.image[k],!0,c.maxCubemapSize):oe[k]=J?a.image[k].image:a.image[k],oe[k]=at(a,oe[k]);const Ae=oe[0],_e=o.convert(a.format,a.colorSpace),re=o.convert(a.type),Ue=A(a.internalFormat,_e,re,a.colorSpace),v=a.isVideoTexture!==!0,j=F.__version===void 0||G===!0,te=Y.dataReady;let ce=N(a,Ae);Be(e.TEXTURE_CUBE_MAP,a);let Z;if(me){v&&j&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,Ae.width,Ae.height);for(let k=0;k<6;k++){Z=oe[k].mipmaps;for(let de=0;de<Z.length;de++){const Pe=Z[de];a.format!==St?_e!==null?v?te&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,Pe.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,0,0,Pe.width,Pe.height,_e,re,Pe.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de,Ue,Pe.width,Pe.height,0,_e,re,Pe.data)}}}else{if(Z=a.mipmaps,v&&j){Z.length>0&&ce++;const k=tt(oe[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ce,Ue,k.width,k.height)}for(let k=0;k<6;k++)if(J){v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,oe[k].width,oe[k].height,_e,re,oe[k].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,oe[k].width,oe[k].height,0,_e,re,oe[k].data);for(let de=0;de<Z.length;de++){const ze=Z[de].image[k].image;v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,ze.width,ze.height,_e,re,ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,ze.width,ze.height,0,_e,re,ze.data)}}else{v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,_e,re,oe[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,_e,re,oe[k]);for(let de=0;de<Z.length;de++){const Pe=Z[de];v?te&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,0,0,_e,re,Pe.image[k]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+k,de+1,Ue,_e,re,Pe.image[k])}}}l(a)&&r(e.TEXTURE_CUBE_MAP),F.__version=Y.version,a.onUpdate&&a.onUpdate(a)}u.__version=a.version}function le(u,a,b,G,Y,F){const ge=o.convert(b.format,b.colorSpace),ee=o.convert(b.type),he=A(b.internalFormat,ge,ee,b.colorSpace),me=i.get(a),J=i.get(b);if(J.__renderTarget=a,!me.__hasExternalTextures){const oe=Math.max(1,a.width>>F),Ae=Math.max(1,a.height>>F);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?t.texImage3D(Y,F,he,oe,Ae,a.depth,0,ge,ee,null):t.texImage2D(Y,F,he,oe,Ae,0,ge,ee,null)}t.bindFramebuffer(e.FRAMEBUFFER,u),pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,G,Y,J.__webglTexture,0,$e(a)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,G,Y,J.__webglTexture,F),t.bindFramebuffer(e.FRAMEBUFFER,null)}function be(u,a,b){if(e.bindRenderbuffer(e.RENDERBUFFER,u),a.depthBuffer){const G=a.depthTexture,Y=G&&G.isDepthTexture?G.type:null,F=_(a.stencilBuffer,Y),ge=a.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ee=$e(a);pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ee,F,a.width,a.height):b?e.renderbufferStorageMultisample(e.RENDERBUFFER,ee,F,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,F,a.width,a.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ge,e.RENDERBUFFER,u)}else{const G=a.textures;for(let Y=0;Y<G.length;Y++){const F=G[Y],ge=o.convert(F.format,F.colorSpace),ee=o.convert(F.type),he=A(F.internalFormat,ge,ee,F.colorSpace),me=$e(a);b&&pe(a)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,me,he,a.width,a.height):pe(a)?f.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,me,he,a.width,a.height):e.renderbufferStorage(e.RENDERBUFFER,he,a.width,a.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(u,a){if(a&&a.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,u),!(a.depthTexture&&a.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const G=i.get(a.depthTexture);G.__renderTarget=a,(!G.__webglTexture||a.depthTexture.image.width!==a.width||a.depthTexture.image.height!==a.height)&&(a.depthTexture.image.width=a.width,a.depthTexture.image.height=a.height,a.depthTexture.needsUpdate=!0),$(a.depthTexture,0);const Y=G.__webglTexture,F=$e(a);if(a.depthTexture.format===Tn)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Y,0);else if(a.depthTexture.format===sn)pe(a)?f.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0,F):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ne(u){const a=i.get(u),b=u.isWebGLCubeRenderTarget===!0;if(a.__boundDepthTexture!==u.depthTexture){const G=u.depthTexture;if(a.__depthDisposeCallback&&a.__depthDisposeCallback(),G){const Y=()=>{delete a.__boundDepthTexture,delete a.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),a.__depthDisposeCallback=Y}a.__boundDepthTexture=G}if(u.depthTexture&&!a.__autoAllocateDepthBuffer){if(b)throw new Error("target.depthTexture not supported in Cube render targets");const G=u.texture.mipmaps;G&&G.length>0?Se(a.__webglFramebuffer[0],u):Se(a.__webglFramebuffer,u)}else if(b){a.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[G]),a.__webglDepthbuffer[G]===void 0)a.__webglDepthbuffer[G]=e.createRenderbuffer(),be(a.__webglDepthbuffer[G],u,!1);else{const Y=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer[G];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}else{const G=u.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer[0]):t.bindFramebuffer(e.FRAMEBUFFER,a.__webglFramebuffer),a.__webglDepthbuffer===void 0)a.__webglDepthbuffer=e.createRenderbuffer(),be(a.__webglDepthbuffer,u,!1);else{const Y=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=a.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,F)}}t.bindFramebuffer(e.FRAMEBUFFER,null)}function ot(u,a,b){const G=i.get(u);a!==void 0&&le(G.__webglFramebuffer,u,u.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),b!==void 0&&Ne(u)}function m(u){const a=u.texture,b=i.get(u),G=i.get(a);u.addEventListener("dispose",y);const Y=u.textures,F=u.isWebGLCubeRenderTarget===!0,ge=Y.length>1;if(ge||(G.__webglTexture===void 0&&(G.__webglTexture=e.createTexture()),G.__version=a.version,h.memory.textures++),F){b.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0){b.__webglFramebuffer[ee]=[];for(let he=0;he<a.mipmaps.length;he++)b.__webglFramebuffer[ee][he]=e.createFramebuffer()}else b.__webglFramebuffer[ee]=e.createFramebuffer()}else{if(a.mipmaps&&a.mipmaps.length>0){b.__webglFramebuffer=[];for(let ee=0;ee<a.mipmaps.length;ee++)b.__webglFramebuffer[ee]=e.createFramebuffer()}else b.__webglFramebuffer=e.createFramebuffer();if(ge)for(let ee=0,he=Y.length;ee<he;ee++){const me=i.get(Y[ee]);me.__webglTexture===void 0&&(me.__webglTexture=e.createTexture(),h.memory.textures++)}if(u.samples>0&&pe(u)===!1){b.__webglMultisampledFramebuffer=e.createFramebuffer(),b.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,b.__webglMultisampledFramebuffer);for(let ee=0;ee<Y.length;ee++){const he=Y[ee];b.__webglColorRenderbuffer[ee]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,b.__webglColorRenderbuffer[ee]);const me=o.convert(he.format,he.colorSpace),J=o.convert(he.type),oe=A(he.internalFormat,me,J,he.colorSpace,u.isXRRenderTarget===!0),Ae=$e(u);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae,oe,u.width,u.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ee,e.RENDERBUFFER,b.__webglColorRenderbuffer[ee])}e.bindRenderbuffer(e.RENDERBUFFER,null),u.depthBuffer&&(b.__webglDepthRenderbuffer=e.createRenderbuffer(),be(b.__webglDepthRenderbuffer,u,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){t.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture),Be(e.TEXTURE_CUBE_MAP,a);for(let ee=0;ee<6;ee++)if(a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(b.__webglFramebuffer[ee][he],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,he);else le(b.__webglFramebuffer[ee],u,a,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);l(a)&&r(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ee=0,he=Y.length;ee<he;ee++){const me=Y[ee],J=i.get(me);let oe=e.TEXTURE_2D;(u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(oe=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Be(oe,me),le(b.__webglFramebuffer,u,me,e.COLOR_ATTACHMENT0+ee,oe,0),l(me)&&r(oe)}t.unbindTexture()}else{let ee=e.TEXTURE_2D;if((u.isWebGL3DRenderTarget||u.isWebGLArrayRenderTarget)&&(ee=u.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(ee,G.__webglTexture),Be(ee,a),a.mipmaps&&a.mipmaps.length>0)for(let he=0;he<a.mipmaps.length;he++)le(b.__webglFramebuffer[he],u,a,e.COLOR_ATTACHMENT0,ee,he);else le(b.__webglFramebuffer,u,a,e.COLOR_ATTACHMENT0,ee,0);l(a)&&r(ee),t.unbindTexture()}u.depthBuffer&&Ne(u)}function qe(u){const a=u.textures;for(let b=0,G=a.length;b<G;b++){const Y=a[b];if(l(Y)){const F=L(u),ge=i.get(Y).__webglTexture;t.bindTexture(F,ge),r(F),t.unbindTexture()}}}const Le=[],Re=[];function ue(u){if(u.samples>0){if(pe(u)===!1){const a=u.textures,b=u.width,G=u.height;let Y=e.COLOR_BUFFER_BIT;const F=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ge=i.get(u),ee=a.length>1;if(ee)for(let me=0;me<a.length;me++)t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const he=u.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let me=0;me<a.length;me++){if(u.resolveDepthBuffer&&(u.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),u.stencilBuffer&&u.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),ee){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,J,0)}e.blitFramebuffer(0,0,b,G,0,0,b,G,Y,e.NEAREST),P===!0&&(Le.length=0,Re.length=0,Le.push(e.COLOR_ATTACHMENT0+me),u.depthBuffer&&u.resolveDepthBuffer===!1&&(Le.push(F),Re.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),ee)for(let me=0;me<a.length;me++){t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.RENDERBUFFER,ge.__webglColorRenderbuffer[me]);const J=i.get(a[me]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,ge.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+me,e.TEXTURE_2D,J,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(u.depthBuffer&&u.resolveDepthBuffer===!1&&P){const a=u.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[a])}}}function $e(u){return Math.min(c.maxSamples,u.samples)}function pe(u){const a=i.get(u);return u.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&a.__useRenderToTexture!==!1}function Ie(u){const a=h.render.frame;U.get(u)!==a&&(U.set(u,a),u.update())}function at(u,a){const b=u.colorSpace,G=u.format,Y=u.type;return u.isCompressedTexture===!0||u.isVideoTexture===!0||b!==nn&&b!==yt&&(nt.getTransfer(b)===Xe?(G!==St||Y!==Ct)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",b)),a}function tt(u){return typeof HTMLImageElement<"u"&&u instanceof HTMLImageElement?(M.width=u.naturalWidth||u.width,M.height=u.naturalHeight||u.height):typeof VideoFrame<"u"&&u instanceof VideoFrame?(M.width=u.displayWidth,M.height=u.displayHeight):(M.width=u.width,M.height=u.height),M}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=ot,this.setupRenderTarget=m,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=le,this.useMultisampledRTT=pe}function za(e,n){function t(i,c=yt){let o;const h=nt.getTransfer(c);if(i===Ct)return e.UNSIGNED_BYTE;if(i===Jn)return e.UNSIGNED_SHORT_4_4_4_4;if(i===jn)return e.UNSIGNED_SHORT_5_5_5_1;if(i===ia)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===ra)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===aa)return e.BYTE;if(i===oa)return e.SHORT;if(i===cn)return e.UNSIGNED_SHORT;if(i===Bn)return e.INT;if(i===Kt)return e.UNSIGNED_INT;if(i===bt)return e.FLOAT;if(i===jt)return e.HALF_FLOAT;if(i===sa)return e.ALPHA;if(i===ca)return e.RGB;if(i===St)return e.RGBA;if(i===Tn)return e.DEPTH_COMPONENT;if(i===sn)return e.DEPTH_STENCIL;if(i===la)return e.RED;if(i===ei)return e.RED_INTEGER;if(i===fa)return e.RG;if(i===ti)return e.RG_INTEGER;if(i===ni)return e.RGBA_INTEGER;if(i===xn||i===An||i===Rn||i===Cn)if(h===Xe)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===xn)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===An)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cn)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===xn)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===An)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rn)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cn)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ii||i===ri||i===ai||i===oi)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ii)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ri)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ai)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oi)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===si||i===ci||i===li)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===si||i===ci)return h===Xe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===li)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===fi||i===di||i===ui||i===pi||i===hi||i===mi||i===_i||i===vi||i===gi||i===Si||i===Ei||i===Mi||i===Ti||i===xi)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===fi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===di)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ui)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_i)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Si)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ei)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ti)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xi)return h===Xe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ai||i===Ri||i===Ci)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===Ai)return h===Xe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ri)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ci)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bi||i===Pi||i===Li||i===Ui)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===bi)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Pi)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Li)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ui)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yt?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const Uf=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Df=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wf{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t){if(this.texture===null){const i=new Di(n.texture);(n.depthNear!==t.depthNear||n.depthFar!==t.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Rt({vertexShader:Uf,fragmentShader:Df,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new xt(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class If extends da{constructor(n,t){super();const i=this;let c=null,o=1,h=null,f="local-floor",P=1,M=null,U=null,g=null,S=null,x=null,O=null;const D=typeof XRWebGLBinding<"u",l=new wf,r={},L=t.getContextAttributes();let A=null,_=null;const N=[],C=[],y=new ct;let W=null;const p=new en;p.viewport=new lt;const d=new en;d.viewport=new lt;const R=[p,d],B=new ua;let X=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=N[V];return q===void 0&&(q=new bn,N[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=N[V];return q===void 0&&(q=new bn,N[V]=q),q.getGripSpace()},this.getHand=function(V){let q=N[V];return q===void 0&&(q=new bn,N[V]=q),q.getHandSpace()};function $(V){const q=C.indexOf(V.inputSource);if(q===-1)return;const le=N[q];le!==void 0&&(le.update(V.inputSource,V.frame,M||h),le.dispatchEvent({type:V.type,data:V.inputSource}))}function z(){c.removeEventListener("select",$),c.removeEventListener("selectstart",$),c.removeEventListener("selectend",$),c.removeEventListener("squeeze",$),c.removeEventListener("squeezestart",$),c.removeEventListener("squeezeend",$),c.removeEventListener("end",z),c.removeEventListener("inputsourceschange",ne);for(let V=0;V<N.length;V++){const q=C[V];q!==null&&(C[V]=null,N[V].disconnect(q))}X=null,K=null,l.reset();for(const V in r)delete r[V];n.setRenderTarget(A),x=null,S=null,g=null,c=null,_=null,ke.stop(),i.isPresenting=!1,n.setPixelRatio(W),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){f=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return M||h},this.setReferenceSpace=function(V){M=V},this.getBaseLayer=function(){return S!==null?S:x},this.getBinding=function(){return g===null&&D&&(g=new XRWebGLBinding(c,t)),g},this.getFrame=function(){return O},this.getSession=function(){return c},this.setSession=async function(V){if(c=V,c!==null){if(A=n.getRenderTarget(),c.addEventListener("select",$),c.addEventListener("selectstart",$),c.addEventListener("selectend",$),c.addEventListener("squeeze",$),c.addEventListener("squeezestart",$),c.addEventListener("squeezeend",$),c.addEventListener("end",z),c.addEventListener("inputsourceschange",ne),L.xrCompatible!==!0&&await t.makeXRCompatible(),W=n.getPixelRatio(),n.getSize(y),D&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,be=null,Se=null;L.depth&&(Se=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=L.stencil?sn:Tn,be=L.stencil?Yt:Kt);const Ne={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:o};g=this.getBinding(),S=g.createProjectionLayer(Ne),c.updateRenderState({layers:[S]}),n.setPixelRatio(1),n.setSize(S.textureWidth,S.textureHeight,!1),_=new wt(S.textureWidth,S.textureHeight,{format:St,type:Ct,depthTexture:new Wn(S.textureWidth,S.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:L.stencil,colorSpace:n.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const le={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(c,t,le),c.updateRenderState({baseLayer:x}),n.setPixelRatio(1),n.setSize(x.framebufferWidth,x.framebufferHeight,!1),_=new wt(x.framebufferWidth,x.framebufferHeight,{format:St,type:Ct,colorSpace:n.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(P),M=null,h=await c.requestReferenceSpace(f),ke.setContext(c),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(c!==null)return c.environmentBlendMode},this.getDepthTexture=function(){return l.getDepthTexture()};function ne(V){for(let q=0;q<V.removed.length;q++){const le=V.removed[q],be=C.indexOf(le);be>=0&&(C[be]=null,N[be].disconnect(le))}for(let q=0;q<V.added.length;q++){const le=V.added[q];let be=C.indexOf(le);if(be===-1){for(let Ne=0;Ne<N.length;Ne++)if(Ne>=C.length){C.push(le),be=Ne;break}else if(C[Ne]===null){C[Ne]=le,be=Ne;break}if(be===-1)break}const Se=N[be];Se&&Se.connect(le)}}const H=new Ve,ve=new Ve;function Te(V,q,le){H.setFromMatrixPosition(q.matrixWorld),ve.setFromMatrixPosition(le.matrixWorld);const be=H.distanceTo(ve),Se=q.projectionMatrix.elements,Ne=le.projectionMatrix.elements,ot=Se[14]/(Se[10]-1),m=Se[14]/(Se[10]+1),qe=(Se[9]+1)/Se[5],Le=(Se[9]-1)/Se[5],Re=(Se[8]-1)/Se[0],ue=(Ne[8]+1)/Ne[0],$e=ot*Re,pe=ot*ue,Ie=be/(-Re+ue),at=Ie*-Re;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(at),V.translateZ(Ie),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Se[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const tt=ot+Ie,u=m+Ie,a=$e-at,b=pe+(be-at),G=qe*m/u*tt,Y=Le*m/u*tt;V.projectionMatrix.makePerspective(a,b,G,Y,tt,u),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function we(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(c===null)return;let q=V.near,le=V.far;l.texture!==null&&(l.depthNear>0&&(q=l.depthNear),l.depthFar>0&&(le=l.depthFar)),B.near=d.near=p.near=q,B.far=d.far=p.far=le,(X!==B.near||K!==B.far)&&(c.updateRenderState({depthNear:B.near,depthFar:B.far}),X=B.near,K=B.far),B.layers.mask=V.layers.mask|6,p.layers.mask=B.layers.mask&3,d.layers.mask=B.layers.mask&5;const be=V.parent,Se=B.cameras;we(B,be);for(let Ne=0;Ne<Se.length;Ne++)we(Se[Ne],be);Se.length===2?Te(B,p,d):B.projectionMatrix.copy(p.projectionMatrix),Be(V,B,be)};function Be(V,q,le){le===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(le.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ja*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(S===null&&x===null))return P},this.setFoveation=function(V){P=V,S!==null&&(S.fixedFoveation=V),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=V)},this.hasDepthSensing=function(){return l.texture!==null},this.getDepthSensingMesh=function(){return l.getMesh(B)},this.getCameraTexture=function(V){return r[V]};let et=null;function Je(V,q){if(U=q.getViewerPose(M||h),O=q,U!==null){const le=U.views;x!==null&&(n.setRenderTargetFramebuffer(_,x.framebuffer),n.setRenderTarget(_));let be=!1;le.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let m=0;m<le.length;m++){const qe=le[m];let Le=null;if(x!==null)Le=x.getViewport(qe);else{const ue=g.getViewSubImage(S,qe);Le=ue.viewport,m===0&&(n.setRenderTargetTextures(_,ue.colorTexture,ue.depthStencilTexture),n.setRenderTarget(_))}let Re=R[m];Re===void 0&&(Re=new en,Re.layers.enable(m),Re.viewport=new lt,R[m]=Re),Re.matrix.fromArray(qe.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(qe.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Le.x,Le.y,Le.width,Le.height),m===0&&(B.matrix.copy(Re.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(Re)}const Se=c.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&c.depthUsage=="gpu-optimized"&&D){g=i.getBinding();const m=g.getDepthInformation(le[0]);m&&m.isValid&&m.texture&&l.init(m,c.renderState)}if(Se&&Se.includes("camera-access")&&D){n.state.unbindTexture(),g=i.getBinding();for(let m=0;m<le.length;m++){const qe=le[m].camera;if(qe){let Le=r[qe];Le||(Le=new Di,r[qe]=Le);const Re=g.getCameraImage(qe);Le.sourceTexture=Re}}}}for(let le=0;le<N.length;le++){const be=C[le],Se=N[le];be!==null&&Se!==void 0&&Se.update(be,q,M||h)}et&&et(V,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),O=null}const ke=new _a;ke.setAnimationLoop(Je),this.setAnimationLoop=function(V){et=V},this.dispose=function(){}}}const Bt=new Fn,yf=new Ht;function Nf(e,n){function t(l,r){l.matrixAutoUpdate===!0&&l.updateMatrix(),r.value.copy(l.matrix)}function i(l,r){r.color.getRGB(l.fogColor.value,$i(e)),r.isFog?(l.fogNear.value=r.near,l.fogFar.value=r.far):r.isFogExp2&&(l.fogDensity.value=r.density)}function c(l,r,L,A,_){r.isMeshBasicMaterial||r.isMeshLambertMaterial?o(l,r):r.isMeshToonMaterial?(o(l,r),g(l,r)):r.isMeshPhongMaterial?(o(l,r),U(l,r)):r.isMeshStandardMaterial?(o(l,r),S(l,r),r.isMeshPhysicalMaterial&&x(l,r,_)):r.isMeshMatcapMaterial?(o(l,r),O(l,r)):r.isMeshDepthMaterial?o(l,r):r.isMeshDistanceMaterial?(o(l,r),D(l,r)):r.isMeshNormalMaterial?o(l,r):r.isLineBasicMaterial?(h(l,r),r.isLineDashedMaterial&&f(l,r)):r.isPointsMaterial?P(l,r,L,A):r.isSpriteMaterial?M(l,r):r.isShadowMaterial?(l.color.value.copy(r.color),l.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}function o(l,r){l.opacity.value=r.opacity,r.color&&l.diffuse.value.copy(r.color),r.emissive&&l.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.bumpMap&&(l.bumpMap.value=r.bumpMap,t(r.bumpMap,l.bumpMapTransform),l.bumpScale.value=r.bumpScale,r.side===ht&&(l.bumpScale.value*=-1)),r.normalMap&&(l.normalMap.value=r.normalMap,t(r.normalMap,l.normalMapTransform),l.normalScale.value.copy(r.normalScale),r.side===ht&&l.normalScale.value.negate()),r.displacementMap&&(l.displacementMap.value=r.displacementMap,t(r.displacementMap,l.displacementMapTransform),l.displacementScale.value=r.displacementScale,l.displacementBias.value=r.displacementBias),r.emissiveMap&&(l.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,l.emissiveMapTransform)),r.specularMap&&(l.specularMap.value=r.specularMap,t(r.specularMap,l.specularMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest);const L=n.get(r),A=L.envMap,_=L.envMapRotation;A&&(l.envMap.value=A,Bt.copy(_),Bt.x*=-1,Bt.y*=-1,Bt.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Bt.y*=-1,Bt.z*=-1),l.envMapRotation.value.setFromMatrix4(yf.makeRotationFromEuler(Bt)),l.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,l.reflectivity.value=r.reflectivity,l.ior.value=r.ior,l.refractionRatio.value=r.refractionRatio),r.lightMap&&(l.lightMap.value=r.lightMap,l.lightMapIntensity.value=r.lightMapIntensity,t(r.lightMap,l.lightMapTransform)),r.aoMap&&(l.aoMap.value=r.aoMap,l.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,l.aoMapTransform))}function h(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform))}function f(l,r){l.dashSize.value=r.dashSize,l.totalSize.value=r.dashSize+r.gapSize,l.scale.value=r.scale}function P(l,r,L,A){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.size.value=r.size*L,l.scale.value=A*.5,r.map&&(l.map.value=r.map,t(r.map,l.uvTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function M(l,r){l.diffuse.value.copy(r.color),l.opacity.value=r.opacity,l.rotation.value=r.rotation,r.map&&(l.map.value=r.map,t(r.map,l.mapTransform)),r.alphaMap&&(l.alphaMap.value=r.alphaMap,t(r.alphaMap,l.alphaMapTransform)),r.alphaTest>0&&(l.alphaTest.value=r.alphaTest)}function U(l,r){l.specular.value.copy(r.specular),l.shininess.value=Math.max(r.shininess,1e-4)}function g(l,r){r.gradientMap&&(l.gradientMap.value=r.gradientMap)}function S(l,r){l.metalness.value=r.metalness,r.metalnessMap&&(l.metalnessMap.value=r.metalnessMap,t(r.metalnessMap,l.metalnessMapTransform)),l.roughness.value=r.roughness,r.roughnessMap&&(l.roughnessMap.value=r.roughnessMap,t(r.roughnessMap,l.roughnessMapTransform)),r.envMap&&(l.envMapIntensity.value=r.envMapIntensity)}function x(l,r,L){l.ior.value=r.ior,r.sheen>0&&(l.sheenColor.value.copy(r.sheenColor).multiplyScalar(r.sheen),l.sheenRoughness.value=r.sheenRoughness,r.sheenColorMap&&(l.sheenColorMap.value=r.sheenColorMap,t(r.sheenColorMap,l.sheenColorMapTransform)),r.sheenRoughnessMap&&(l.sheenRoughnessMap.value=r.sheenRoughnessMap,t(r.sheenRoughnessMap,l.sheenRoughnessMapTransform))),r.clearcoat>0&&(l.clearcoat.value=r.clearcoat,l.clearcoatRoughness.value=r.clearcoatRoughness,r.clearcoatMap&&(l.clearcoatMap.value=r.clearcoatMap,t(r.clearcoatMap,l.clearcoatMapTransform)),r.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=r.clearcoatRoughnessMap,t(r.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),r.clearcoatNormalMap&&(l.clearcoatNormalMap.value=r.clearcoatNormalMap,t(r.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(r.clearcoatNormalScale),r.side===ht&&l.clearcoatNormalScale.value.negate())),r.dispersion>0&&(l.dispersion.value=r.dispersion),r.iridescence>0&&(l.iridescence.value=r.iridescence,l.iridescenceIOR.value=r.iridescenceIOR,l.iridescenceThicknessMinimum.value=r.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=r.iridescenceThicknessRange[1],r.iridescenceMap&&(l.iridescenceMap.value=r.iridescenceMap,t(r.iridescenceMap,l.iridescenceMapTransform)),r.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=r.iridescenceThicknessMap,t(r.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),r.transmission>0&&(l.transmission.value=r.transmission,l.transmissionSamplerMap.value=L.texture,l.transmissionSamplerSize.value.set(L.width,L.height),r.transmissionMap&&(l.transmissionMap.value=r.transmissionMap,t(r.transmissionMap,l.transmissionMapTransform)),l.thickness.value=r.thickness,r.thicknessMap&&(l.thicknessMap.value=r.thicknessMap,t(r.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=r.attenuationDistance,l.attenuationColor.value.copy(r.attenuationColor)),r.anisotropy>0&&(l.anisotropyVector.value.set(r.anisotropy*Math.cos(r.anisotropyRotation),r.anisotropy*Math.sin(r.anisotropyRotation)),r.anisotropyMap&&(l.anisotropyMap.value=r.anisotropyMap,t(r.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=r.specularIntensity,l.specularColor.value.copy(r.specularColor),r.specularColorMap&&(l.specularColorMap.value=r.specularColorMap,t(r.specularColorMap,l.specularColorMapTransform)),r.specularIntensityMap&&(l.specularIntensityMap.value=r.specularIntensityMap,t(r.specularIntensityMap,l.specularIntensityMapTransform))}function O(l,r){r.matcap&&(l.matcap.value=r.matcap)}function D(l,r){const L=n.get(r).light;l.referencePosition.value.setFromMatrixPosition(L.matrixWorld),l.nearDistance.value=L.shadow.camera.near,l.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:c}}function Ff(e,n,t,i){let c={},o={},h=[];const f=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function P(L,A){const _=A.program;i.uniformBlockBinding(L,_)}function M(L,A){let _=c[L.id];_===void 0&&(O(L),_=U(L),c[L.id]=_,L.addEventListener("dispose",l));const N=A.program;i.updateUBOMapping(L,N);const C=n.render.frame;o[L.id]!==C&&(S(L),o[L.id]=C)}function U(L){const A=g();L.__bindingPointIndex=A;const _=e.createBuffer(),N=L.__size,C=L.usage;return e.bindBuffer(e.UNIFORM_BUFFER,_),e.bufferData(e.UNIFORM_BUFFER,N,C),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,A,_),_}function g(){for(let L=0;L<f;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(L){const A=c[L.id],_=L.uniforms,N=L.__cache;e.bindBuffer(e.UNIFORM_BUFFER,A);for(let C=0,y=_.length;C<y;C++){const W=Array.isArray(_[C])?_[C]:[_[C]];for(let p=0,d=W.length;p<d;p++){const R=W[p];if(x(R,C,p,N)===!0){const B=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let K=0;for(let $=0;$<X.length;$++){const z=X[$],ne=D(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,B+K,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,K),K+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,B,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function x(L,A,_,N){const C=L.value,y=A+"_"+_;if(N[y]===void 0)return typeof C=="number"||typeof C=="boolean"?N[y]=C:N[y]=C.clone(),!0;{const W=N[y];if(typeof C=="number"||typeof C=="boolean"){if(W!==C)return N[y]=C,!0}else if(W.equals(C)===!1)return W.copy(C),!0}return!1}function O(L){const A=L.uniforms;let _=0;const N=16;for(let y=0,W=A.length;y<W;y++){const p=Array.isArray(A[y])?A[y]:[A[y]];for(let d=0,R=p.length;d<R;d++){const B=p[d],X=Array.isArray(B.value)?B.value:[B.value];for(let K=0,$=X.length;K<$;K++){const z=X[K],ne=D(z),H=_%N,ve=H%ne.boundary,Te=H+ve;_+=ve,Te!==0&&N-Te<ne.storage&&(_+=N-Te),B.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=ne.storage}}}const C=_%N;return C>0&&(_+=N-C),L.__size=_,L.__cache={},this}function D(L){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=48,A.storage=48):L.isMatrix4?(A.boundary=64,A.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),A}function l(L){const A=L.target;A.removeEventListener("dispose",l);const _=h.indexOf(A.__bindingPointIndex);h.splice(_,1),e.deleteBuffer(c[A.id]),delete c[A.id],delete o[A.id]}function r(){for(const L in c)e.deleteBuffer(c[L]);h=[],c={},o={}}return{bind:P,update:M,dispose:r}}class Of{constructor(n={}){const{canvas:t=pa(),context:i=null,depth:c=!0,stencil:o=!1,alpha:h=!1,antialias:f=!1,premultipliedAlpha:P=!0,preserveDrawingBuffer:M=!1,powerPreference:U="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=n;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=h;const O=new Uint32Array(4),D=new Int32Array(4);let l=null,r=null;const L=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=At,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let N=!1;this._outputColorSpace=ha;let C=0,y=0,W=null,p=-1,d=null;const R=new lt,B=new lt;let X=null;const K=new Ye(0);let $=0,z=t.width,ne=t.height,H=1,ve=null,Te=null;const we=new lt(0,0,z,ne),Be=new lt(0,0,z,ne);let et=!1;const Je=new Yn;let ke=!1,V=!1;const q=new Ht,le=new Ve,be=new lt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function ot(){return W===null?H:1}let m=i;function qe(s,E){return t.getContext(s,E)}try{const s={alpha:!0,depth:c,stencil:o,antialias:f,premultipliedAlpha:P,preserveDrawingBuffer:M,powerPreference:U,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ma}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Z,!1),m===null){const E="webgl2";if(m=qe(E,s),m===null)throw qe(E)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(s){throw console.error("THREE.WebGLRenderer: "+s.message),s}let Le,Re,ue,$e,pe,Ie,at,tt,u,a,b,G,Y,F,ge,ee,he,me,J,oe,Ae,_e,re,Ue;function v(){Le=new Yc(m),Le.init(),_e=new za(m,Le),Re=new Hc(m,Le,n,_e),ue=new Pf(m,Le),Re.reversedDepthBuffer&&S&&ue.buffers.depth.setReversed(!0),$e=new Zc(m),pe=new mf,Ie=new Lf(m,Le,ue,pe,Re,_e,$e),at=new kc(_),tt=new Kc(_),u=new to(m),re=new Bc(m,u),a=new qc(m,u,$e,re),b=new Jc(m,a,u,$e),J=new Qc(m,Re,Ie),ee=new Vc(pe),G=new hf(_,at,tt,Le,Re,re,ee),Y=new Nf(_,pe),F=new vf,ge=new xf(Le),me=new Oc(_,at,tt,ue,b,x,P),he=new Cf(_,b,Re),Ue=new Ff(m,$e,Re,ue),oe=new Gc(m,Le,$e),Ae=new $c(m,Le,$e),$e.programs=G.programs,_.capabilities=Re,_.extensions=Le,_.properties=pe,_.renderLists=F,_.shadowMap=he,_.state=ue,_.info=$e}v();const j=new If(_,m);this.xr=j,this.getContext=function(){return m},this.getContextAttributes=function(){return m.getContextAttributes()},this.forceContextLoss=function(){const s=Le.get("WEBGL_lose_context");s&&s.loseContext()},this.forceContextRestore=function(){const s=Le.get("WEBGL_lose_context");s&&s.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(s){s!==void 0&&(H=s,this.setSize(z,ne,!1))},this.getSize=function(s){return s.set(z,ne)},this.setSize=function(s,E,w=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=s,ne=E,t.width=Math.floor(s*H),t.height=Math.floor(E*H),w===!0&&(t.style.width=s+"px",t.style.height=E+"px"),this.setViewport(0,0,s,E)},this.getDrawingBufferSize=function(s){return s.set(z*H,ne*H).floor()},this.setDrawingBufferSize=function(s,E,w){z=s,ne=E,H=w,t.width=Math.floor(s*w),t.height=Math.floor(E*w),this.setViewport(0,0,s,E)},this.getCurrentViewport=function(s){return s.copy(R)},this.getViewport=function(s){return s.copy(we)},this.setViewport=function(s,E,w,I){s.isVector4?we.set(s.x,s.y,s.z,s.w):we.set(s,E,w,I),ue.viewport(R.copy(we).multiplyScalar(H).round())},this.getScissor=function(s){return s.copy(Be)},this.setScissor=function(s,E,w,I){s.isVector4?Be.set(s.x,s.y,s.z,s.w):Be.set(s,E,w,I),ue.scissor(B.copy(Be).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(s){ue.setScissorTest(et=s)},this.setOpaqueSort=function(s){ve=s},this.setTransparentSort=function(s){Te=s},this.getClearColor=function(s){return s.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor(...arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha(...arguments)},this.clear=function(s=!0,E=!0,w=!0){let I=0;if(s){let T=!1;if(W!==null){const Q=W.texture.format;T=Q===ni||Q===ti||Q===ei}if(T){const Q=W.texture.type,ae=Q===Ct||Q===Kt||Q===cn||Q===Yt||Q===Jn||Q===jn,fe=me.getClearColor(),se=me.getClearAlpha(),xe=fe.r,Ce=fe.g,Ee=fe.b;ae?(O[0]=xe,O[1]=Ce,O[2]=Ee,O[3]=se,m.clearBufferuiv(m.COLOR,0,O)):(D[0]=xe,D[1]=Ce,D[2]=Ee,D[3]=se,m.clearBufferiv(m.COLOR,0,D))}else I|=m.COLOR_BUFFER_BIT}E&&(I|=m.DEPTH_BUFFER_BIT),w&&(I|=m.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),m.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Z,!1),me.dispose(),F.dispose(),ge.dispose(),pe.dispose(),at.dispose(),tt.dispose(),b.dispose(),re.dispose(),Ue.dispose(),G.dispose(),j.dispose(),j.removeEventListener("sessionstart",gt),j.removeEventListener("sessionend",ki),Lt.stop()};function te(s){s.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const s=$e.autoReset,E=he.enabled,w=he.autoUpdate,I=he.needsUpdate,T=he.type;v(),$e.autoReset=s,he.enabled=E,he.autoUpdate=w,he.needsUpdate=I,he.type=T}function Z(s){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",s.statusMessage)}function k(s){const E=s.target;E.removeEventListener("dispose",k),de(E)}function de(s){Pe(s),pe.remove(s)}function Pe(s){const E=pe.get(s).programs;E!==void 0&&(E.forEach(function(w){G.releaseProgram(w)}),s.isShaderMaterial&&G.releaseShaderCache(s))}this.renderBufferDirect=function(s,E,w,I,T,Q){E===null&&(E=Se);const ae=T.isMesh&&T.matrixWorld.determinant()<0,fe=Xa(s,E,w,I,T);ue.setMaterial(I,ae);let se=w.index,xe=1;if(I.wireframe===!0){if(se=a.getWireframeAttribute(w),se===void 0)return;xe=2}const Ce=w.drawRange,Ee=w.attributes.position;let ye=Ce.start*xe,He=(Ce.start+Ce.count)*xe;Q!==null&&(ye=Math.max(ye,Q.start*xe),He=Math.min(He,(Q.start+Q.count)*xe)),se!==null?(ye=Math.max(ye,0),He=Math.min(He,se.count)):Ee!=null&&(ye=Math.max(ye,0),He=Math.min(He,Ee.count));const je=He-ye;if(je<0||je===1/0)return;re.setup(T,I,fe,w,se);let Ke,We=oe;if(se!==null&&(Ke=u.get(se),We=Ae,We.setIndex(Ke)),T.isMesh)I.wireframe===!0?(ue.setLineWidth(I.wireframeLinewidth*ot()),We.setMode(m.LINES)):We.setMode(m.TRIANGLES);else if(T.isLine){let Me=I.linewidth;Me===void 0&&(Me=1),ue.setLineWidth(Me*ot()),T.isLineSegments?We.setMode(m.LINES):T.isLineLoop?We.setMode(m.LINE_LOOP):We.setMode(m.LINE_STRIP)}else T.isPoints?We.setMode(m.POINTS):T.isSprite&&We.setMode(m.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)Hn("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),We.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))We.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{const Me=T._multiDrawStarts,Ze=T._multiDrawCounts,Oe=T._multiDrawCount,ut=se?u.get(se).bytesPerElement:1,Gt=pe.get(I).currentProgram.getUniforms();for(let pt=0;pt<Oe;pt++)Gt.setValue(m,"_gl_DrawID",pt),We.render(Me[pt]/ut,Ze[pt])}else if(T.isInstancedMesh)We.renderInstances(ye,je,T.count);else if(w.isInstancedBufferGeometry){const Me=w._maxInstanceCount!==void 0?w._maxInstanceCount:1/0,Ze=Math.min(w.instanceCount,Me);We.renderInstances(ye,je,Ze)}else We.render(ye,je)};function ze(s,E,w){s.transparent===!0&&s.side===Mt&&s.forceSinglePass===!1?(s.side=ht,s.needsUpdate=!0,dn(s,E,w),s.side=Vt,s.needsUpdate=!0,dn(s,E,w),s.side=Mt):dn(s,E,w)}this.compile=function(s,E,w=null){w===null&&(w=s),r=ge.get(w),r.init(E),A.push(r),w.traverseVisible(function(T){T.isLight&&T.layers.test(E.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),s!==w&&s.traverseVisible(function(T){T.isLight&&T.layers.test(E.layers)&&(r.pushLight(T),T.castShadow&&r.pushShadow(T))}),r.setupLights();const I=new Set;return s.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;const Q=T.material;if(Q)if(Array.isArray(Q))for(let ae=0;ae<Q.length;ae++){const fe=Q[ae];ze(fe,w,T),I.add(fe)}else ze(Q,w,T),I.add(Q)}),r=A.pop(),I},this.compileAsync=function(s,E,w=null){const I=this.compile(s,E,w);return new Promise(T=>{function Q(){if(I.forEach(function(ae){pe.get(ae).currentProgram.isReady()&&I.delete(ae)}),I.size===0){T(s);return}setTimeout(Q,10)}Le.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Ge=null;function Tt(s){Ge&&Ge(s)}function gt(){Lt.stop()}function ki(){Lt.start()}const Lt=new _a;Lt.setAnimationLoop(Tt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(s){Ge=s,j.setAnimationLoop(s),s===null?Lt.stop():Lt.start()},j.addEventListener("sessionstart",gt),j.addEventListener("sessionend",ki),this.render=function(s,E){if(E!==void 0&&E.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(s.matrixWorldAutoUpdate===!0&&s.updateMatrixWorld(),E.parent===null&&E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(E),E=j.getCamera()),s.isScene===!0&&s.onBeforeRender(_,s,E,W),r=ge.get(s,A.length),r.init(E),A.push(r),q.multiplyMatrices(E.projectionMatrix,E.matrixWorldInverse),Je.setFromProjectionMatrix(q,wi,E.reversedDepth),V=this.localClippingEnabled,ke=ee.init(this.clippingPlanes,V),l=F.get(s,L.length),l.init(),L.push(l),j.enabled===!0&&j.isPresenting===!0){const Q=_.xr.getDepthSensingMesh();Q!==null&&In(Q,E,-1/0,_.sortObjects)}In(s,E,0,_.sortObjects),l.finish(),_.sortObjects===!0&&l.sort(ve,Te),Ne=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ne&&me.addToRenderList(l,s),this.info.render.frame++,ke===!0&&ee.beginShadows();const w=r.state.shadowsArray;he.render(w,s,E),ke===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const I=l.opaque,T=l.transmissive;if(r.setupLights(),E.isArrayCamera){const Q=E.cameras;if(T.length>0)for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];zi(I,T,s,se)}Ne&&me.render(s);for(let ae=0,fe=Q.length;ae<fe;ae++){const se=Q[ae];Wi(l,s,se,se.viewport)}}else T.length>0&&zi(I,T,s,E),Ne&&me.render(s),Wi(l,s,E);W!==null&&y===0&&(Ie.updateMultisampleRenderTarget(W),Ie.updateRenderTargetMipmap(W)),s.isScene===!0&&s.onAfterRender(_,s,E),re.resetDefaultState(),p=-1,d=null,A.pop(),A.length>0?(r=A[A.length-1],ke===!0&&ee.setGlobalState(_.clippingPlanes,r.state.camera)):r=null,L.pop(),L.length>0?l=L[L.length-1]:l=null};function In(s,E,w,I){if(s.visible===!1)return;if(s.layers.test(E.layers)){if(s.isGroup)w=s.renderOrder;else if(s.isLOD)s.autoUpdate===!0&&s.update(E);else if(s.isLight)r.pushLight(s),s.castShadow&&r.pushShadow(s);else if(s.isSprite){if(!s.frustumCulled||Je.intersectsSprite(s)){I&&be.setFromMatrixPosition(s.matrixWorld).applyMatrix4(q);const ae=b.update(s),fe=s.material;fe.visible&&l.push(s,ae,fe,w,be.z,null)}}else if((s.isMesh||s.isLine||s.isPoints)&&(!s.frustumCulled||Je.intersectsObject(s))){const ae=b.update(s),fe=s.material;if(I&&(s.boundingSphere!==void 0?(s.boundingSphere===null&&s.computeBoundingSphere(),be.copy(s.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),be.copy(ae.boundingSphere.center)),be.applyMatrix4(s.matrixWorld).applyMatrix4(q)),Array.isArray(fe)){const se=ae.groups;for(let xe=0,Ce=se.length;xe<Ce;xe++){const Ee=se[xe],ye=fe[Ee.materialIndex];ye&&ye.visible&&l.push(s,ae,ye,w,be.z,Ee)}}else fe.visible&&l.push(s,ae,fe,w,be.z,null)}}const Q=s.children;for(let ae=0,fe=Q.length;ae<fe;ae++)In(Q[ae],E,w,I)}function Wi(s,E,w,I){const T=s.opaque,Q=s.transmissive,ae=s.transparent;r.setupLightsView(w),ke===!0&&ee.setGlobalState(_.clippingPlanes,w),I&&ue.viewport(R.copy(I)),T.length>0&&fn(T,E,w),Q.length>0&&fn(Q,E,w),ae.length>0&&fn(ae,E,w),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function zi(s,E,w,I){if((w.isScene===!0?w.overrideMaterial:null)!==null)return;r.state.transmissionRenderTarget[I.id]===void 0&&(r.state.transmissionRenderTarget[I.id]=new wt(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?jt:Ct,minFilter:Xt,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const Q=r.state.transmissionRenderTarget[I.id],ae=I.viewport||R;Q.setSize(ae.z*_.transmissionResolutionScale,ae.w*_.transmissionResolutionScale);const fe=_.getRenderTarget(),se=_.getActiveCubeFace(),xe=_.getActiveMipmapLevel();_.setRenderTarget(Q),_.getClearColor(K),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Ne&&me.render(w);const Ce=_.toneMapping;_.toneMapping=At;const Ee=I.viewport;if(I.viewport!==void 0&&(I.viewport=void 0),r.setupLightsView(I),ke===!0&&ee.setGlobalState(_.clippingPlanes,I),fn(s,w,I),Ie.updateMultisampleRenderTarget(Q),Ie.updateRenderTargetMipmap(Q),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let He=0,je=E.length;He<je;He++){const Ke=E[He],We=Ke.object,Me=Ke.geometry,Ze=Ke.material,Oe=Ke.group;if(Ze.side===Mt&&We.layers.test(I.layers)){const ut=Ze.side;Ze.side=ht,Ze.needsUpdate=!0,Xi(We,w,I,Me,Ze,Oe),Ze.side=ut,Ze.needsUpdate=!0,ye=!0}}ye===!0&&(Ie.updateMultisampleRenderTarget(Q),Ie.updateRenderTargetMipmap(Q))}_.setRenderTarget(fe,se,xe),_.setClearColor(K,$),Ee!==void 0&&(I.viewport=Ee),_.toneMapping=Ce}function fn(s,E,w){const I=E.isScene===!0?E.overrideMaterial:null;for(let T=0,Q=s.length;T<Q;T++){const ae=s[T],fe=ae.object,se=ae.geometry,xe=ae.group;let Ce=ae.material;Ce.allowOverride===!0&&I!==null&&(Ce=I),fe.layers.test(w.layers)&&Xi(fe,E,w,se,Ce,xe)}}function Xi(s,E,w,I,T,Q){s.onBeforeRender(_,E,w,I,T,Q),s.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,s.matrixWorld),s.normalMatrix.getNormalMatrix(s.modelViewMatrix),T.onBeforeRender(_,E,w,I,s,Q),T.transparent===!0&&T.side===Mt&&T.forceSinglePass===!1?(T.side=ht,T.needsUpdate=!0,_.renderBufferDirect(w,E,I,T,s,Q),T.side=Vt,T.needsUpdate=!0,_.renderBufferDirect(w,E,I,T,s,Q),T.side=Mt):_.renderBufferDirect(w,E,I,T,s,Q),s.onAfterRender(_,E,w,I,T,Q)}function dn(s,E,w){E.isScene!==!0&&(E=Se);const I=pe.get(s),T=r.state.lights,Q=r.state.shadowsArray,ae=T.state.version,fe=G.getParameters(s,T.state,Q,E,w),se=G.getProgramCacheKey(fe);let xe=I.programs;I.environment=s.isMeshStandardMaterial?E.environment:null,I.fog=E.fog,I.envMap=(s.isMeshStandardMaterial?tt:at).get(s.envMap||I.environment),I.envMapRotation=I.environment!==null&&s.envMap===null?E.environmentRotation:s.envMapRotation,xe===void 0&&(s.addEventListener("dispose",k),xe=new Map,I.programs=xe);let Ce=xe.get(se);if(Ce!==void 0){if(I.currentProgram===Ce&&I.lightsStateVersion===ae)return Yi(s,fe),Ce}else fe.uniforms=G.getUniforms(s),s.onBeforeCompile(fe,_),Ce=G.acquireProgram(fe,se),xe.set(se,Ce),I.uniforms=fe.uniforms;const Ee=I.uniforms;return(!s.isShaderMaterial&&!s.isRawShaderMaterial||s.clipping===!0)&&(Ee.clippingPlanes=ee.uniform),Yi(s,fe),I.needsLights=Ya(s),I.lightsStateVersion=ae,I.needsLights&&(Ee.ambientLightColor.value=T.state.ambient,Ee.lightProbe.value=T.state.probe,Ee.directionalLights.value=T.state.directional,Ee.directionalLightShadows.value=T.state.directionalShadow,Ee.spotLights.value=T.state.spot,Ee.spotLightShadows.value=T.state.spotShadow,Ee.rectAreaLights.value=T.state.rectArea,Ee.ltc_1.value=T.state.rectAreaLTC1,Ee.ltc_2.value=T.state.rectAreaLTC2,Ee.pointLights.value=T.state.point,Ee.pointLightShadows.value=T.state.pointShadow,Ee.hemisphereLights.value=T.state.hemi,Ee.directionalShadowMap.value=T.state.directionalShadowMap,Ee.directionalShadowMatrix.value=T.state.directionalShadowMatrix,Ee.spotShadowMap.value=T.state.spotShadowMap,Ee.spotLightMatrix.value=T.state.spotLightMatrix,Ee.spotLightMap.value=T.state.spotLightMap,Ee.pointShadowMap.value=T.state.pointShadowMap,Ee.pointShadowMatrix.value=T.state.pointShadowMatrix),I.currentProgram=Ce,I.uniformsList=null,Ce}function Ki(s){if(s.uniformsList===null){const E=s.currentProgram.getUniforms();s.uniformsList=Dn.seqWithValue(E.seq,s.uniforms)}return s.uniformsList}function Yi(s,E){const w=pe.get(s);w.outputColorSpace=E.outputColorSpace,w.batching=E.batching,w.batchingColor=E.batchingColor,w.instancing=E.instancing,w.instancingColor=E.instancingColor,w.instancingMorph=E.instancingMorph,w.skinning=E.skinning,w.morphTargets=E.morphTargets,w.morphNormals=E.morphNormals,w.morphColors=E.morphColors,w.morphTargetsCount=E.morphTargetsCount,w.numClippingPlanes=E.numClippingPlanes,w.numIntersection=E.numClipIntersection,w.vertexAlphas=E.vertexAlphas,w.vertexTangents=E.vertexTangents,w.toneMapping=E.toneMapping}function Xa(s,E,w,I,T){E.isScene!==!0&&(E=Se),Ie.resetTextureUnits();const Q=E.fog,ae=I.isMeshStandardMaterial?E.environment:null,fe=W===null?_.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:nn,se=(I.isMeshStandardMaterial?tt:at).get(I.envMap||ae),xe=I.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,Ce=!!w.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),Ee=!!w.morphAttributes.position,ye=!!w.morphAttributes.normal,He=!!w.morphAttributes.color;let je=At;I.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(je=_.toneMapping);const Ke=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,We=Ke!==void 0?Ke.length:0,Me=pe.get(I),Ze=r.state.lights;if(ke===!0&&(V===!0||s!==d)){const st=s===d&&I.id===p;ee.setState(I,s,st)}let Oe=!1;I.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ze.state.version||Me.outputColorSpace!==fe||T.isBatchedMesh&&Me.batching===!1||!T.isBatchedMesh&&Me.batching===!0||T.isBatchedMesh&&Me.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&Me.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&Me.instancing===!1||!T.isInstancedMesh&&Me.instancing===!0||T.isSkinnedMesh&&Me.skinning===!1||!T.isSkinnedMesh&&Me.skinning===!0||T.isInstancedMesh&&Me.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&Me.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&Me.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&Me.instancingMorph===!1&&T.morphTexture!==null||Me.envMap!==se||I.fog===!0&&Me.fog!==Q||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==ee.numPlanes||Me.numIntersection!==ee.numIntersection)||Me.vertexAlphas!==xe||Me.vertexTangents!==Ce||Me.morphTargets!==Ee||Me.morphNormals!==ye||Me.morphColors!==He||Me.toneMapping!==je||Me.morphTargetsCount!==We)&&(Oe=!0):(Oe=!0,Me.__version=I.version);let ut=Me.currentProgram;Oe===!0&&(ut=dn(I,E,T));let Gt=!1,pt=!1,Qt=!1;const Qe=ut.getUniforms(),mt=Me.uniforms;if(ue.useProgram(ut.program)&&(Gt=!0,pt=!0,Qt=!0),I.id!==p&&(p=I.id,pt=!0),Gt||d!==s){ue.buffers.depth.getReversed()&&s.reversedDepth!==!0&&(s._reversedDepth=!0,s.updateProjectionMatrix()),Qe.setValue(m,"projectionMatrix",s.projectionMatrix),Qe.setValue(m,"viewMatrix",s.matrixWorldInverse);const ft=Qe.map.cameraPosition;ft!==void 0&&ft.setValue(m,le.setFromMatrixPosition(s.matrixWorld)),Re.logarithmicDepthBuffer&&Qe.setValue(m,"logDepthBufFC",2/(Math.log(s.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Qe.setValue(m,"isOrthographic",s.isOrthographicCamera===!0),d!==s&&(d=s,pt=!0,Qt=!0)}if(T.isSkinnedMesh){Qe.setOptional(m,T,"bindMatrix"),Qe.setOptional(m,T,"bindMatrixInverse");const st=T.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),Qe.setValue(m,"boneTexture",st.boneTexture,Ie))}T.isBatchedMesh&&(Qe.setOptional(m,T,"batchingTexture"),Qe.setValue(m,"batchingTexture",T._matricesTexture,Ie),Qe.setOptional(m,T,"batchingIdTexture"),Qe.setValue(m,"batchingIdTexture",T._indirectTexture,Ie),Qe.setOptional(m,T,"batchingColorTexture"),T._colorsTexture!==null&&Qe.setValue(m,"batchingColorTexture",T._colorsTexture,Ie));const _t=w.morphAttributes;if((_t.position!==void 0||_t.normal!==void 0||_t.color!==void 0)&&J.update(T,w,ut),(pt||Me.receiveShadow!==T.receiveShadow)&&(Me.receiveShadow=T.receiveShadow,Qe.setValue(m,"receiveShadow",T.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(mt.envMap.value=se,mt.flipEnvMap.value=se.isCubeTexture&&se.isRenderTargetTexture===!1?-1:1),I.isMeshStandardMaterial&&I.envMap===null&&E.environment!==null&&(mt.envMapIntensity.value=E.environmentIntensity),pt&&(Qe.setValue(m,"toneMappingExposure",_.toneMappingExposure),Me.needsLights&&Ka(mt,Qt),Q&&I.fog===!0&&Y.refreshFogUniforms(mt,Q),Y.refreshMaterialUniforms(mt,I,H,ne,r.state.transmissionRenderTarget[s.id]),Dn.upload(m,Ki(Me),mt,Ie)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Dn.upload(m,Ki(Me),mt,Ie),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Qe.setValue(m,"center",T.center),Qe.setValue(m,"modelViewMatrix",T.modelViewMatrix),Qe.setValue(m,"normalMatrix",T.normalMatrix),Qe.setValue(m,"modelMatrix",T.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const st=I.uniformsGroups;for(let ft=0,yn=st.length;ft<yn;ft++){const Ut=st[ft];Ue.update(Ut,ut),Ue.bind(Ut,ut)}}return ut}function Ka(s,E){s.ambientLightColor.needsUpdate=E,s.lightProbe.needsUpdate=E,s.directionalLights.needsUpdate=E,s.directionalLightShadows.needsUpdate=E,s.pointLights.needsUpdate=E,s.pointLightShadows.needsUpdate=E,s.spotLights.needsUpdate=E,s.spotLightShadows.needsUpdate=E,s.rectAreaLights.needsUpdate=E,s.hemisphereLights.needsUpdate=E}function Ya(s){return s.isMeshLambertMaterial||s.isMeshToonMaterial||s.isMeshPhongMaterial||s.isMeshStandardMaterial||s.isShadowMaterial||s.isShaderMaterial&&s.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(s,E,w){const I=pe.get(s);I.__autoAllocateDepthBuffer=s.resolveDepthBuffer===!1,I.__autoAllocateDepthBuffer===!1&&(I.__useRenderToTexture=!1),pe.get(s.texture).__webglTexture=E,pe.get(s.depthTexture).__webglTexture=I.__autoAllocateDepthBuffer?void 0:w,I.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(s,E){const w=pe.get(s);w.__webglFramebuffer=E,w.__useDefaultFramebuffer=E===void 0};const qa=m.createFramebuffer();this.setRenderTarget=function(s,E=0,w=0){W=s,C=E,y=w;let I=!0,T=null,Q=!1,ae=!1;if(s){const se=pe.get(s);if(se.__useDefaultFramebuffer!==void 0)ue.bindFramebuffer(m.FRAMEBUFFER,null),I=!1;else if(se.__webglFramebuffer===void 0)Ie.setupRenderTarget(s);else if(se.__hasExternalTextures)Ie.rebindTextures(s,pe.get(s.texture).__webglTexture,pe.get(s.depthTexture).__webglTexture);else if(s.depthBuffer){const Ee=s.depthTexture;if(se.__boundDepthTexture!==Ee){if(Ee!==null&&pe.has(Ee)&&(s.width!==Ee.image.width||s.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(s)}}const xe=s.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ae=!0);const Ce=pe.get(s).__webglFramebuffer;s.isWebGLCubeRenderTarget?(Array.isArray(Ce[E])?T=Ce[E][w]:T=Ce[E],Q=!0):s.samples>0&&Ie.useMultisampledRTT(s)===!1?T=pe.get(s).__webglMultisampledFramebuffer:Array.isArray(Ce)?T=Ce[w]:T=Ce,R.copy(s.viewport),B.copy(s.scissor),X=s.scissorTest}else R.copy(we).multiplyScalar(H).floor(),B.copy(Be).multiplyScalar(H).floor(),X=et;if(w!==0&&(T=qa),ue.bindFramebuffer(m.FRAMEBUFFER,T)&&I&&ue.drawBuffers(s,T),ue.viewport(R),ue.scissor(B),ue.setScissorTest(X),Q){const se=pe.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_CUBE_MAP_POSITIVE_X+E,se.__webglTexture,w)}else if(ae){const se=E;for(let xe=0;xe<s.textures.length;xe++){const Ce=pe.get(s.textures[xe]);m.framebufferTextureLayer(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0+xe,Ce.__webglTexture,w,se)}}else if(s!==null&&w!==0){const se=pe.get(s.texture);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,se.__webglTexture,w)}p=-1},this.readRenderTargetPixels=function(s,E,w,I,T,Q,ae,fe=0){if(!(s&&s.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let se=pe.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se){ue.bindFramebuffer(m.FRAMEBUFFER,se);try{const xe=s.textures[fe],Ce=xe.format,Ee=xe.type;if(!Re.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}E>=0&&E<=s.width-I&&w>=0&&w<=s.height-T&&(s.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(E,w,I,T,_e.convert(Ce),_e.convert(Ee),Q))}finally{const xe=W!==null?pe.get(W).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(s,E,w,I,T,Q,ae,fe=0){if(!(s&&s.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let se=pe.get(s).__webglFramebuffer;if(s.isWebGLCubeRenderTarget&&ae!==void 0&&(se=se[ae]),se)if(E>=0&&E<=s.width-I&&w>=0&&w<=s.height-T){ue.bindFramebuffer(m.FRAMEBUFFER,se);const xe=s.textures[fe],Ce=xe.format,Ee=xe.type;if(!Re.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=m.createBuffer();m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.bufferData(m.PIXEL_PACK_BUFFER,Q.byteLength,m.STREAM_READ),s.textures.length>1&&m.readBuffer(m.COLOR_ATTACHMENT0+fe),m.readPixels(E,w,I,T,_e.convert(Ce),_e.convert(Ee),0);const He=W!==null?pe.get(W).__webglFramebuffer:null;ue.bindFramebuffer(m.FRAMEBUFFER,He);const je=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0);return m.flush(),await eo(m,je,4),m.bindBuffer(m.PIXEL_PACK_BUFFER,ye),m.getBufferSubData(m.PIXEL_PACK_BUFFER,0,Q),m.deleteBuffer(ye),m.deleteSync(je),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(s,E=null,w=0){const I=Math.pow(2,-w),T=Math.floor(s.image.width*I),Q=Math.floor(s.image.height*I),ae=E!==null?E.x:0,fe=E!==null?E.y:0;Ie.setTexture2D(s,0),m.copyTexSubImage2D(m.TEXTURE_2D,w,0,0,ae,fe,T,Q),ue.unbindTexture()};const $a=m.createFramebuffer(),Za=m.createFramebuffer();this.copyTextureToTexture=function(s,E,w=null,I=null,T=0,Q=null){Q===null&&(T!==0?(Hn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=T,T=0):Q=0);let ae,fe,se,xe,Ce,Ee,ye,He,je;const Ke=s.isCompressedTexture?s.mipmaps[Q]:s.image;if(w!==null)ae=w.max.x-w.min.x,fe=w.max.y-w.min.y,se=w.isBox3?w.max.z-w.min.z:1,xe=w.min.x,Ce=w.min.y,Ee=w.isBox3?w.min.z:0;else{const _t=Math.pow(2,-T);ae=Math.floor(Ke.width*_t),fe=Math.floor(Ke.height*_t),s.isDataArrayTexture?se=Ke.depth:s.isData3DTexture?se=Math.floor(Ke.depth*_t):se=1,xe=0,Ce=0,Ee=0}I!==null?(ye=I.x,He=I.y,je=I.z):(ye=0,He=0,je=0);const We=_e.convert(E.format),Me=_e.convert(E.type);let Ze;E.isData3DTexture?(Ie.setTexture3D(E,0),Ze=m.TEXTURE_3D):E.isDataArrayTexture||E.isCompressedArrayTexture?(Ie.setTexture2DArray(E,0),Ze=m.TEXTURE_2D_ARRAY):(Ie.setTexture2D(E,0),Ze=m.TEXTURE_2D),m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,E.flipY),m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),m.pixelStorei(m.UNPACK_ALIGNMENT,E.unpackAlignment);const Oe=m.getParameter(m.UNPACK_ROW_LENGTH),ut=m.getParameter(m.UNPACK_IMAGE_HEIGHT),Gt=m.getParameter(m.UNPACK_SKIP_PIXELS),pt=m.getParameter(m.UNPACK_SKIP_ROWS),Qt=m.getParameter(m.UNPACK_SKIP_IMAGES);m.pixelStorei(m.UNPACK_ROW_LENGTH,Ke.width),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,Ke.height),m.pixelStorei(m.UNPACK_SKIP_PIXELS,xe),m.pixelStorei(m.UNPACK_SKIP_ROWS,Ce),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Ee);const Qe=s.isDataArrayTexture||s.isData3DTexture,mt=E.isDataArrayTexture||E.isData3DTexture;if(s.isDepthTexture){const _t=pe.get(s),st=pe.get(E),ft=pe.get(_t.__renderTarget),yn=pe.get(st.__renderTarget);ue.bindFramebuffer(m.READ_FRAMEBUFFER,ft.__webglFramebuffer),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,yn.__webglFramebuffer);for(let Ut=0;Ut<se;Ut++)Qe&&(m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(s).__webglTexture,T,Ee+Ut),m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,pe.get(E).__webglTexture,Q,je+Ut)),m.blitFramebuffer(xe,Ce,ae,fe,ye,He,ae,fe,m.DEPTH_BUFFER_BIT,m.NEAREST);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else if(T!==0||s.isRenderTargetTexture||pe.has(s)){const _t=pe.get(s),st=pe.get(E);ue.bindFramebuffer(m.READ_FRAMEBUFFER,$a),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,Za);for(let ft=0;ft<se;ft++)Qe?m.framebufferTextureLayer(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,_t.__webglTexture,T,Ee+ft):m.framebufferTexture2D(m.READ_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,_t.__webglTexture,T),mt?m.framebufferTextureLayer(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,st.__webglTexture,Q,je+ft):m.framebufferTexture2D(m.DRAW_FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,st.__webglTexture,Q),T!==0?m.blitFramebuffer(xe,Ce,ae,fe,ye,He,ae,fe,m.COLOR_BUFFER_BIT,m.NEAREST):mt?m.copyTexSubImage3D(Ze,Q,ye,He,je+ft,xe,Ce,ae,fe):m.copyTexSubImage2D(Ze,Q,ye,He,xe,Ce,ae,fe);ue.bindFramebuffer(m.READ_FRAMEBUFFER,null),ue.bindFramebuffer(m.DRAW_FRAMEBUFFER,null)}else mt?s.isDataTexture||s.isData3DTexture?m.texSubImage3D(Ze,Q,ye,He,je,ae,fe,se,We,Me,Ke.data):E.isCompressedArrayTexture?m.compressedTexSubImage3D(Ze,Q,ye,He,je,ae,fe,se,We,Ke.data):m.texSubImage3D(Ze,Q,ye,He,je,ae,fe,se,We,Me,Ke):s.isDataTexture?m.texSubImage2D(m.TEXTURE_2D,Q,ye,He,ae,fe,We,Me,Ke.data):s.isCompressedTexture?m.compressedTexSubImage2D(m.TEXTURE_2D,Q,ye,He,Ke.width,Ke.height,We,Ke.data):m.texSubImage2D(m.TEXTURE_2D,Q,ye,He,ae,fe,We,Me,Ke);m.pixelStorei(m.UNPACK_ROW_LENGTH,Oe),m.pixelStorei(m.UNPACK_IMAGE_HEIGHT,ut),m.pixelStorei(m.UNPACK_SKIP_PIXELS,Gt),m.pixelStorei(m.UNPACK_SKIP_ROWS,pt),m.pixelStorei(m.UNPACK_SKIP_IMAGES,Qt),Q===0&&E.generateMipmaps&&m.generateMipmap(Ze),ue.unbindTexture()},this.initRenderTarget=function(s){pe.get(s).__webglFramebuffer===void 0&&Ie.setupRenderTarget(s)},this.initTexture=function(s){s.isCubeTexture?Ie.setTextureCube(s,0):s.isData3DTexture?Ie.setTexture3D(s,0):s.isDataArrayTexture||s.isCompressedArrayTexture?Ie.setTexture2DArray(s,0):Ie.setTexture2D(s,0),ue.unbindTexture()},this.resetState=function(){C=0,y=0,W=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(n),t.unpackColorSpace=nt._getUnpackColorSpace()}}export{lr as ACESFilmicToneMapping,zt as AddEquation,pr as AddOperation,Vf as AdditiveAnimationBlendMode,Qn as AdditiveBlending,cr as AgXToneMapping,sa as AlphaFormat,ea as AlwaysCompare,Sn as AlwaysDepth,kf as AlwaysStencilFunc,Wf as AmbientLight,zf as AnimationAction,Xf as AnimationClip,Kf as AnimationLoader,Yf as AnimationMixer,qf as AnimationObjectGroup,$f as AnimationUtils,Zf as ArcCurve,ua as ArrayCamera,Qf as ArrowHelper,Jf as AttachedBindMode,jf as Audio,ed as AudioAnalyser,td as AudioContext,nd as AudioListener,id as AudioLoader,rd as AxesHelper,ht as BackSide,ad as BasicDepthPacking,od as BasicShadowMap,sd as BatchedMesh,cd as Bone,ld as BooleanKeyframeTrack,fd as Box2,dd as Box3,ud as Box3Helper,Nn as BoxGeometry,pd as BoxHelper,tn as BufferAttribute,Gn as BufferGeometry,hd as BufferGeometryLoader,aa as ByteType,md as Cache,_d as Camera,vd as CameraHelper,gd as CanvasTexture,Sd as CapsuleGeometry,Ed as CatmullRomCurve3,fr as CineonToneMapping,Md as CircleGeometry,Kr as ClampToEdgeWrapping,Td as Clock,Ye as Color,xd as ColorKeyframeTrack,nt as ColorManagement,Ad as CompressedArrayTexture,Rd as CompressedCubeTexture,Cd as CompressedTexture,bd as CompressedTextureLoader,Pd as ConeGeometry,Cr as ConstantAlphaFactor,Pr as ConstantColorFactor,Ld as Controls,Ud as CubeCamera,kt as CubeReflectionMapping,Dt as CubeRefractionMapping,nr as CubeTexture,Dd as CubeTextureLoader,Jt as CubeUVReflectionMapping,wd as CubicBezierCurve,Id as CubicBezierCurve3,yd as CubicInterpolant,qn as CullFaceBack,Vr as CullFaceFront,Nd as CullFaceFrontBack,Hr as CullFaceNone,Fd as Curve,Od as CurvePath,kr as CustomBlending,or as CustomToneMapping,Bd as CylinderGeometry,Gd as Cylindrical,ir as Data3DTexture,Vn as DataArrayTexture,Hd as DataTexture,Vd as DataTextureLoader,kd as DataUtils,Wd as DecrementStencilOp,zd as DecrementWrapStencilOp,Xd as DefaultLoadingManager,Tn as DepthFormat,sn as DepthStencilFormat,Wn as DepthTexture,Kd as DetachedBindMode,Yd as DirectionalLight,qd as DirectionalLightHelper,$d as DiscreteInterpolant,Zd as DodecahedronGeometry,Mt as DoubleSide,Ir as DstAlphaFactor,yr as DstColorFactor,Qd as DynamicCopyUsage,Jd as DynamicDrawUsage,jd as DynamicReadUsage,eu as EdgesGeometry,tu as EllipseCurve,Jr as EqualCompare,vn as EqualDepth,nu as EqualStencilFunc,un as EquirectangularReflectionMapping,pn as EquirectangularRefractionMapping,Fn as Euler,da as EventDispatcher,Di as ExternalTexture,iu as ExtrudeGeometry,ru as FileLoader,au as Float16BufferAttribute,ou as Float32BufferAttribute,bt as FloatType,su as Fog,cu as FogExp2,lu as FramebufferTexture,Vt as FrontSide,Yn as Frustum,fu as FrustumArray,du as GLBufferAttribute,uu as GLSL1,zn as GLSL3,Zr as GreaterCompare,mn as GreaterDepth,Qr as GreaterEqualCompare,_n as GreaterEqualDepth,pu as GreaterEqualStencilFunc,hu as GreaterStencilFunc,mu as GridHelper,_u as Group,jt as HalfFloatType,vu as HemisphereLight,gu as HemisphereLightHelper,Su as IcosahedronGeometry,Eu as ImageBitmapLoader,Mu as ImageLoader,Tu as ImageUtils,xu as IncrementStencilOp,Au as IncrementWrapStencilOp,Ru as InstancedBufferAttribute,Cu as InstancedBufferGeometry,bu as InstancedInterleavedBuffer,Pu as InstancedMesh,Lu as Int16BufferAttribute,Uu as Int32BufferAttribute,Du as Int8BufferAttribute,Bn as IntType,wu as InterleavedBuffer,Iu as InterleavedBufferAttribute,yu as Interpolant,Nu as InterpolateDiscrete,Fu as InterpolateLinear,Ou as InterpolateSmooth,Bu as InterpolationSamplingMode,Gu as InterpolationSamplingType,Hu as InvertStencilOp,Vu as KeepStencilOp,ku as KeyframeTrack,Wu as LOD,zu as LatheGeometry,Sr as Layers,jr as LessCompare,gn as LessDepth,kn as LessEqualCompare,an as LessEqualDepth,Xu as LessEqualStencilFunc,Ku as LessStencilFunc,Yu as Light,qu as LightProbe,$u as Line,Zu as Line3,Qu as LineBasicMaterial,Ju as LineCurve,ju as LineCurve3,ep as LineDashedMaterial,tp as LineLoop,np as LineSegments,It as LinearFilter,ip as LinearInterpolant,rp as LinearMipMapLinearFilter,ap as LinearMipMapNearestFilter,Xt as LinearMipmapLinearFilter,Mn as LinearMipmapNearestFilter,nn as LinearSRGBColorSpace,ur as LinearToneMapping,Kn as LinearTransfer,op as Loader,sp as LoaderUtils,cp as LoadingManager,lp as LoopOnce,fp as LoopPingPong,dp as LoopRepeat,up as MOUSE,pp as Material,hp as MaterialLoader,mp as MathUtils,_p as Matrix2,Fe as Matrix3,Ht as Matrix4,zr as MaxEquation,xt as Mesh,ji as MeshBasicMaterial,Er as MeshDepthMaterial,Tr as MeshDistanceMaterial,vp as MeshLambertMaterial,gp as MeshMatcapMaterial,Sp as MeshNormalMaterial,Ep as MeshPhongMaterial,Mp as MeshPhysicalMaterial,Tp as MeshStandardMaterial,xp as MeshToonMaterial,Wr as MinEquation,Xr as MirroredRepeatWrapping,hr as MixOperation,$n as MultiplyBlending,mr as MultiplyOperation,Wt as NearestFilter,Ap as NearestMipMapLinearFilter,Rp as NearestMipMapNearestFilter,on as NearestMipmapLinearFilter,qr as NearestMipmapNearestFilter,sr as NeutralToneMapping,ta as NeverCompare,En as NeverDepth,Cp as NeverStencilFunc,Pt as NoBlending,yt as NoColorSpace,At as NoToneMapping,bp as NormalAnimationBlendMode,rn as NormalBlending,$r as NotEqualCompare,hn as NotEqualDepth,Pp as NotEqualStencilFunc,Lp as NumberKeyframeTrack,Up as Object3D,Dp as ObjectLoader,gr as ObjectSpaceNormalMap,wp as OctahedronGeometry,Br as OneFactor,Rr as OneMinusConstantAlphaFactor,br as OneMinusConstantColorFactor,Lr as OneMinusDstAlphaFactor,Ur as OneMinusDstColorFactor,Dr as OneMinusSrcAlphaFactor,wr as OneMinusSrcColorFactor,Ji as OrthographicCamera,Xn as PCFShadowMap,ar as PCFSoftShadowMap,Bi as PMREMGenerator,Ip as Path,en as PerspectiveCamera,Zi as Plane,On as PlaneGeometry,yp as PlaneHelper,Np as PointLight,Fp as PointLightHelper,Op as Points,Bp as PointsMaterial,Gp as PolarGridHelper,Hp as PolyhedronGeometry,Vp as PositionalAudio,kp as PropertyBinding,Wp as PropertyMixer,zp as QuadraticBezierCurve,Xp as QuadraticBezierCurve3,Kp as Quaternion,Yp as QuaternionKeyframeTrack,qp as QuaternionLinearInterpolant,Li as RED_GREEN_RGTC2_Format,bi as RED_RGTC1_Format,ma as REVISION,Mr as RGBADepthPacking,St as RGBAFormat,ni as RGBAIntegerFormat,Mi as RGBA_ASTC_10x10_Format,gi as RGBA_ASTC_10x5_Format,Si as RGBA_ASTC_10x6_Format,Ei as RGBA_ASTC_10x8_Format,Ti as RGBA_ASTC_12x10_Format,xi as RGBA_ASTC_12x12_Format,fi as RGBA_ASTC_4x4_Format,di as RGBA_ASTC_5x4_Format,ui as RGBA_ASTC_5x5_Format,pi as RGBA_ASTC_6x5_Format,hi as RGBA_ASTC_6x6_Format,mi as RGBA_ASTC_8x5_Format,_i as RGBA_ASTC_8x6_Format,vi as RGBA_ASTC_8x8_Format,Ai as RGBA_BPTC_Format,li as RGBA_ETC2_EAC_Format,oi as RGBA_PVRTC_2BPPV1_Format,ai as RGBA_PVRTC_4BPPV1_Format,An as RGBA_S3TC_DXT1_Format,Rn as RGBA_S3TC_DXT3_Format,Cn as RGBA_S3TC_DXT5_Format,$p as RGBDepthPacking,ca as RGBFormat,Zp as RGBIntegerFormat,Ri as RGB_BPTC_SIGNED_Format,Ci as RGB_BPTC_UNSIGNED_Format,si as RGB_ETC1_Format,ci as RGB_ETC2_Format,ri as RGB_PVRTC_2BPPV1_Format,ii as RGB_PVRTC_4BPPV1_Format,xn as RGB_S3TC_DXT1_Format,Qp as RGDepthPacking,fa as RGFormat,ti as RGIntegerFormat,Jp as RawShaderMaterial,jp as Ray,eh as Raycaster,th as RectAreaLight,la as RedFormat,ei as RedIntegerFormat,dr as ReinhardToneMapping,nh as RenderTarget,ih as RenderTarget3D,Yr as RepeatWrapping,rh as ReplaceStencilOp,xr as ReverseSubtractEquation,ah as RingGeometry,Ui as SIGNED_RED_GREEN_RGTC2_Format,Pi as SIGNED_RED_RGTC1_Format,ha as SRGBColorSpace,Xe as SRGBTransfer,oh as Scene,De as ShaderChunk,vt as ShaderLib,Rt as ShaderMaterial,sh as ShadowMaterial,ch as Shape,lh as ShapeGeometry,fh as ShapePath,dh as ShapeUtils,oa as ShortType,uh as Skeleton,ph as SkeletonHelper,hh as SkinnedMesh,mh as Source,_h as Sphere,vh as SphereGeometry,gh as Spherical,Sh as SphericalHarmonics3,Eh as SplineCurve,Mh as SpotLight,Th as SpotLightHelper,xh as Sprite,Ah as SpriteMaterial,Fr as SrcAlphaFactor,Nr as SrcAlphaSaturateFactor,Or as SrcColorFactor,Rh as StaticCopyUsage,Ch as StaticDrawUsage,bh as StaticReadUsage,Ph as StereoCamera,Lh as StreamCopyUsage,Uh as StreamDrawUsage,Dh as StreamReadUsage,wh as StringKeyframeTrack,Ar as SubtractEquation,Zn as SubtractiveBlending,Ih as TOUCH,vr as TangentSpaceNormalMap,yh as TetrahedronGeometry,rr as Texture,Nh as TextureLoader,Fh as TextureUtils,Oh as Timer,Bh as TimestampQuery,Gh as TorusGeometry,Hh as TorusKnotGeometry,Vh as Triangle,kh as TriangleFanDrawMode,Wh as TriangleStripDrawMode,zh as TrianglesDrawMode,Xh as TubeGeometry,Kh as UVMapping,tr as Uint16BufferAttribute,er as Uint32BufferAttribute,Yh as Uint8BufferAttribute,qh as Uint8ClampedBufferAttribute,$h as Uniform,Zh as UniformsGroup,ie as UniformsLib,_r as UniformsUtils,Ct as UnsignedByteType,ra as UnsignedInt101111Type,Yt as UnsignedInt248Type,ia as UnsignedInt5999Type,Kt as UnsignedIntType,Jn as UnsignedShort4444Type,jn as UnsignedShort5551Type,cn as UnsignedShortType,Et as VSMShadowMap,ct as Vector2,Ve as Vector3,lt as Vector4,Qh as VectorKeyframeTrack,Jh as VideoFrameTexture,jh as VideoTexture,em as WebGL3DRenderTarget,tm as WebGLArrayRenderTarget,wi as WebGLCoordinateSystem,Qi as WebGLCubeRenderTarget,wt as WebGLRenderTarget,Of as WebGLRenderer,za as WebGLUtils,nm as WebGPUCoordinateSystem,bn as WebXRController,im as WireframeGeometry,rm as WrapAroundEnding,am as ZeroCurvatureEnding,Gr as ZeroFactor,om as ZeroSlopeEnding,sm as ZeroStencilOp,pa as createCanvasElement};
