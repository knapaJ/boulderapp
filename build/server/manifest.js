const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/arealy3_640.jpg","images/climbing-svgrepo-com.svg","images/Hello_there.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BOGpjl1L.js",app:"_app/immutable/entry/app.CvtPWVPv.js",imports:["_app/immutable/entry/start.BOGpjl1L.js","_app/immutable/chunks/B5jDhvST.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/DNO1KcCv.js","_app/immutable/entry/app.CvtPWVPv.js","_app/immutable/chunks/B0ZBf4S3.js","_app/immutable/chunks/CUasGtWz.js","_app/immutable/chunks/CxnyJWYc.js","_app/immutable/chunks/CiwiV07l.js","_app/immutable/chunks/DxzEXMIN.js","_app/immutable/chunks/0yXuc5Cw.js","_app/immutable/chunks/CCzH4x1v.js","_app/immutable/chunks/DNO1KcCv.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DSMjplCo.js')),
			__memo(() => import('./chunks/1-cbNsQ0h-.js')),
			__memo(() => import('./chunks/2-D3Gang2r.js')),
			__memo(() => import('./chunks/3-90TAPkNT.js')),
			__memo(() => import('./chunks/4-MTEpsjod.js')),
			__memo(() => import('./chunks/5-XvsV8wd3.js')),
			__memo(() => import('./chunks/6-D8VzKKp2.js')),
			__memo(() => import('./chunks/7-DpguPrN-.js')),
			__memo(() => import('./chunks/8-D94J8DMf.js')),
			__memo(() => import('./chunks/9-DPhuVqHP.js')),
			__memo(() => import('./chunks/10-B9ImephF.js')),
			__memo(() => import('./chunks/11-B4DwBUi8.js')),
			__memo(() => import('./chunks/12-ByEFcw3x.js')),
			__memo(() => import('./chunks/13-Moju_84j.js'))
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
