// Loader
setTimeout(function() {
    document.querySelector("div.loading").classList.add("hidden")
}, 800)

// Smooth Easing
jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
});



// GEO CTA
$.ajax({
    type: "GET",
    url: "https://pro.ip-api.com/json/?fields=city&key=wV9olJX13Hb7FrY",
    dataType: "json",
    success: function(data) {
        document.getElementById('your-city-name').innerHTML = data.city || 'your city';
    }
});