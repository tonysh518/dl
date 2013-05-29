seajs.config({
  // 加载 shim 插件
  plugins: ['shim'],
  // 配置 shim 信息，这样我们就可以通过 require('jquery') 来获取 jQuery
  shim: {
    // for jquery
    'jquery': {
        src: '../jquery/jquery-1.10',
        exports: 'jQuery'
    }
    ,'jquery.easing' : {
        src: '../../src/jquery-plugin/easing/jquery.easing.1.3',
        deps: ['jquery']
    }
    ,'jquery.ani' : {
        src: '../../src/jquery-plugin/ani/ani',
        deps: ['jquery.easing']
    }
    ,'jquery.slider' : {
        src: '../../src/jquery-plugin/slider/jquery.bxslider',
        deps: ['jquery','../../jquery-plugin/slider/jquery.bxslider.css']
    }
      ,'jquery.fancybox' : {
          src: '../../src/jquery-plugin/slider/jquery.fancybox.pack'
      }

  }
  ,
  alias : {
    'util' : '../src/util/util'
    ,'stackblur' : '../js/StackBlur'
    ,'animate' : '../src/Animate'
  }
});