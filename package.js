Package.describe({
	name: "andreioprisan:ceaser-easing-sass",
	summary: "Ceaser Easing with Sass support",
	version: "1.0.0_2",
	git: "https://github.com/andreioprisan/meteor-ceaser-easing-sass.git"
});

Package.onUse(function (api) {
	api.versionsFrom("METEOR@1.0");

	api.use("jquery");
	api.use("fourseven:scss@1.0.0", ["server"]);
	api.imply("fourseven:scss", ["server"]);

	api.addFiles([
		"assets/stylesheets/_ceaser-easing.sass",
		"assets/stylesheets/ceaser-easing/_ceaser.sass",
		"assets/stylesheets/ceaser-easing/_ease-types.sass",
		"assets/stylesheets/ceaser-easing/_easing-functions.sass",
		"assets/stylesheets/ceaser-easing/_easing-vars.sass"
	], "server");
});
