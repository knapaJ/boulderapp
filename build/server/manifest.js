const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/arealy3_640.jpg","images/climbing-svgrepo-com.svg","images/Hello_there.jpg","uploads/boulders/ar5bz.jpg","uploads/boulders/sr tag.jpg","uploads/boulders/ZIA.png","uploads/rules/photomode_05062024_004321.png","uploads/rules/Realistic_photo_of_a_sexy_star_trek_officer__muscu_VUNPX3X0.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BNYwl7WX.js",app:"_app/immutable/entry/app.BLayu6Fn.js",imports:["_app/immutable/entry/start.BNYwl7WX.js","_app/immutable/chunks/HGIwls_L.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/B7gkAUHl.js","_app/immutable/entry/app.BLayu6Fn.js","_app/immutable/chunks/C1TBADaR.js","_app/immutable/chunks/kh1J_x3S.js","_app/immutable/chunks/DmEIa9Un.js","_app/immutable/chunks/GBn_GVBH.js","_app/immutable/chunks/B3-UWNHq.js","_app/immutable/chunks/CEVFFVXY.js","_app/immutable/chunks/KhTX5c-G.js","_app/immutable/chunks/B7gkAUHl.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-8zVvimTu.js')),
			__memo(() => import('./chunks/1-CrPcLM5I.js')),
			__memo(() => import('./chunks/2-pi71FEmj.js')),
			__memo(() => import('./chunks/3-CZA7D1ej.js')),
			__memo(() => import('./chunks/4-DZwyVYiF.js')),
			__memo(() => import('./chunks/5-B3TXS88H.js')),
			__memo(() => import('./chunks/6-CgD0rJk5.js')),
			__memo(() => import('./chunks/7-BRcurGdp.js')),
			__memo(() => import('./chunks/8-BmifiEEX.js')),
			__memo(() => import('./chunks/9-B86RQMZO.js')),
			__memo(() => import('./chunks/10-Cf0LSvmq.js')),
			__memo(() => import('./chunks/11-7_y4M2r0.js')),
			__memo(() => import('./chunks/12-DshAoEiC.js')),
			__memo(() => import('./chunks/13-EPAOqUcE.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,,], errors: [1,2,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/boulders",
				pattern: /^\/boulders\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/boulders/[boulderId]",
				pattern: /^\/boulders\/([^/]+?)\/?$/,
				params: [{"name":"boulderId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,3,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/leaderboard",
				pattern: /^\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/uploads/[...path]",
				pattern: /^\/uploads(?:\/(.*))?\/?$/,
				params: [{"name":"path","optional":false,"rest":true,"chained":true}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-C6H9Ub81.js'))
			},
			{
				id: "/user",
				pattern: /^\/user\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
