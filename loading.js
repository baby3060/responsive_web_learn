var script_cache = [];

function script_loadings() {
  var idx = 0, limitLength = 0;
  var args = arguments;

  if( typeof args === 'object' ) {
    limitLength = args.length;

    if(args.length) {
      for( idx = 0; idx < limitLength; idx++ ) {
        script_cache.push({
          script_url : args[idx],
          script_loaded : false
        });
      }
      dom_script_load();
    } else {
      console.error("불러올 js 파일을 입력하지 않았습니다.");
    }
  } else {
    console.error("올바른 형식이 아닙니다.")
  }
}

function dom_script_load() {
  if(script_cache.length > 0) {
        for( var i = 0, len = script_cache.length; i < len; i++ ) {
            if(script_cache[i].script_loaded) {
                continue;
            }
            script_cache[i].script_loaded = true;
            var script = document.createElement("script");
            script.src = script_cache[i].script_url;
            script.onload = dom_script_load;
            script.onreadstatechange = function() {
                if( this.readyState === 'complete' || this.readyState === 'loaded') {
                    dom_script_load();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script);
            break;
        }
    } else {
        console.error("불러올 파일이 비어있습니다.");
    }
}
