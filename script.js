var app = angular.module("projectApp", []);

app.controller("MainCtrl", function($scope) {
	$scope.revealPanorama = function(order) {
		$("#" + order + "-panorama-lightbox").addClass("hide-lightbox");
		$("#" + order + "-panorama-container").addClass("extension");
		minimizePanorama(order);
	};

	window.onclick = function(event) {
		var className = $(event.target).attr("class");
		if (className === undefined) {
			minimizePanorama("all");
		} else if (!className.includes("panorama")) {
			minimizePanorama("all");
		}
	};

	var minimizePanorama = function(currentOrder) {
		var order = ["first", "second"];
		for (var i = 0; i < order.length; i++) {
			if (order[i] === currentOrder) {
				continue;
			} else {
				$("#" + order[i] + "-panorama-lightbox").removeClass("hide-lightbox");
				$("#" + order[i] + "-panorama-container").removeClass("extension");
			}
		}
	};
});