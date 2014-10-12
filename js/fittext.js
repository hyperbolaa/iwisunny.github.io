/* Vanilla FitText.js 1.0
 *
 * Copyright 2012, Robin Gruyters http://kissthesky.nl
 * Based on Dave Rupert http://daverupert.com FitText.js
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Thu Aug 01 21:23:00 2012 CET
 */

var fitText = function() {
	var compressor, settings, sel = [];
	
	return {
		init: function( selector, kompressor, options ) {
			this.sel = document.querySelectorAll(selector),
			this.compressor = kompressor || 1,
			options = typeof options !== "object" ? {} : options;
			
			this.settings = {
				'minFontSize' : options.minFontSize || Number.NEGATIVE_INFINITY,
				'maxFontSize' : options.maxFontSize || Number.POSITIVE_INFINITY
			};
			
			// Resize text
			this.resizer(this.sel);
			
			// When window resizes redo resize text
			var fitted = this;
			window.onresize = function() {
				fitted.resizer(fitted.sel);
			};
		},
		
		resizer: function( el ) {
			var l = el.length;
			while(l--) {
				var e = el[l];
				
				var newSize = Math.max(Math.min(e.offsetWidth / (this.compressor*10),
					parseFloat(this.settings.maxFontSize)),
					parseFloat(this.settings.minFontSize));
				
				e.style.fontSize = newSize+'px';
			}
		}
	};
}();


fitText.init("header h1", 0.6, { minFontSize: '36px', maxFontSize: '180px' });
fitText.init("article h1", 1.8, { minFontSize: '24px', maxFontSize: '52px' });
fitText.init("article h2",2, { minFontSize: '18px', maxFontSize: '47px' });
