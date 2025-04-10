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
		client: {start:"_app/immutable/entry/start.B8E7r-_A.js",app:"_app/immutable/entry/app.DCrIEdYd.js",imports:["_app/immutable/entry/start.B8E7r-_A.js","_app/immutable/chunks/BQWhQth0.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/0XRK0UKb.js","_app/immutable/entry/app.DCrIEdYd.js","_app/immutable/chunks/BUBo3YVX.js","_app/immutable/chunks/uQ_J19qF.js","_app/immutable/chunks/ErH8zhpA.js","_app/immutable/chunks/DPT-C-Kk.js","_app/immutable/chunks/CGwxGfu1.js","_app/immutable/chunks/LpOIsQIA.js","_app/immutable/chunks/lnNpfVJQ.js","_app/immutable/chunks/0XRK0UKb.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-D0hH2CZA.js')),
			__memo(() => import('./chunks/1-CWVXFr2k.js')),
			__memo(() => import('./chunks/2-D61arOpK.js')),
			__memo(() => import('./chunks/3-BTZ1c2oZ.js')),
			__memo(() => import('./chunks/4-B7W28ESp.js')),
			__memo(() => import('./chunks/5-34DadxLx.js')),
			__memo(() => import('./chunks/6-CrfxeU5P.js')),
			__memo(() => import('./chunks/7-BFd_avQQ.js')),
			__memo(() => import('./chunks/8-D2HUr6ud.js')),
			__memo(() => import('./chunks/9-BFqjTAD7.js')),
			__memo(() => import('./chunks/10-Cjzd52-k.js')),
			__memo(() => import('./chunks/11-BNcbOWZ6.js')),
			__memo(() => import('./chunks/12-_TF323uR.js')),
			__memo(() => import('./chunks/13-B3C8zj96.js'))
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
