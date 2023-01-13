export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","geekhive.png","ionarydevllc.png","pinterest.png","platformpurple.png","rhizatech.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-769c474c.js","imports":["_app/immutable/start-769c474c.js","_app/immutable/chunks/index-1704f101.js","_app/immutable/chunks/singletons-3d409f81.js","_app/immutable/chunks/index-39084353.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[lang]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/[lang]/labs",
				pattern: /^\/([^/]+?)\/labs\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[lang]/work",
				pattern: /^\/([^/]+?)\/work\/?$/,
				params: [{"name":"lang","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
