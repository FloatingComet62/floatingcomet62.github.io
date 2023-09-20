export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["app.css","comet.png","favicon.png","icons/code.svg","icons/license.svg","icons/readme.svg","icons/release.svg","Projects/ChessUI.png","Projects/Comrade.svg","Projects/FluidDB.svg","Projects/OS.svg","Projects/Painscript.svg","Projects/Todo.svg","Socials/Discord.svg","Socials/Github.svg","Socials/LinkedIn.svg","Socials/Twitter.svg","Socials/Youtube.svg","SpaceMono-Bold.ttf","SpaceMono-BoldItalic.ttf","SpaceMono-Italic.ttf","SpaceMono-Regular.ttf"]),
	mimeTypes: {".css":"text/css",".png":"image/png",".svg":"image/svg+xml",".ttf":"font/ttf"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.00e97a0d.js","imports":["_app/immutable/entry/start.00e97a0d.js","_app/immutable/chunks/index.90075b98.js","_app/immutable/chunks/singletons.a98dfda5.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.215674c2.js","imports":["_app/immutable/entry/app.215674c2.js","_app/immutable/chunks/index.90075b98.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
