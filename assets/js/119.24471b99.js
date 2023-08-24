(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{591:function(t,a,s){"use strict";s.r(a);var e=s(6),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"skeleton-骨架屏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#skeleton-骨架屏"}},[t._v("#")]),t._v(" Skeleton 骨架屏 "),a("to-api")],1),t._v(" "),a("demo-model",{attrs:{url:"/pages/componentsC/skeleton/skeleton"}}),t._v(" "),a("p",[t._v("骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("由于"),a("code",[t._v("VUE")]),t._v("和"),a("code",[t._v("NVUE")]),t._v("的特性不同，组件动画在"),a("code",[t._v("VUE")]),t._v("上为由左到右形式，在"),a("code",[t._v("NVUE")]),t._v("上为明暗显隐的形式。")])]),t._v(" "),a("h3",{attrs:{id:"平台差异说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#平台差异说明"}},[t._v("#")]),t._v(" 平台差异说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("App（vue）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("App（nvue）")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("H5")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("小程序")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),a("h3",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("组件由"),a("code",[t._v("标题")]),t._v("，"),a("code",[t._v("段落")]),t._v("和"),a("code",[t._v("头像")]),t._v("组件组件，其中"),a("code",[t._v("段落")]),t._v("需要通过"),a("code",[t._v("rows")]),t._v("参数配置才显示，可以通过"),a("code",[t._v("title")]),t._v("和"),a("code",[t._v("avatar")]),t._v("是否显示"),a("code",[t._v("标题")]),t._v("和"),a("code",[t._v("头像")]),t._v(" 。"),a("br"),t._v("\n该组件的使用，有几个需要注意的点，如下：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("title")]),t._v("(可选)，是否显示"),a("code",[t._v("标题")]),t._v("占位行，该占位行不布满全屏宽度，同时与"),a("code",[t._v("段落")]),t._v("的距离较大以做明显区分")]),t._v(" "),a("li",[a("code",[t._v("avatar")]),t._v("(可选)，是否在左上角位置显示圆形的"),a("code",[t._v("头像")]),t._v("占位区域")]),t._v(" "),a("li",[a("code",[t._v("rows")]),t._v("(可选)，"),a("code",[t._v("段落")]),t._v("的行数")]),t._v(" "),a("li",[a("code",[t._v("loading")]),t._v("(必选)，是否加载中状态，如果为`true```则显示骨架屏组件占位，否则显示插槽中的内容")])]),t._v(" "),a("p",[t._v("数据请求完成后，将"),a("code",[t._v("loading")]),t._v("设置为"),a("code",[t._v("false")]),t._v("，会隐藏骨架组件")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("loading")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"加载中动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加载中动画"}},[t._v("#")]),t._v(" 加载中动画")]),t._v(" "),a("p",[t._v("设置"),a("code",[t._v("animate")]),t._v("为"),a("code",[t._v("true")]),t._v("，加载中的骨架块将会有一个动画效果，用以加强视觉效果。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":animate")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"显示头像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示头像"}},[t._v("#")]),t._v(" 显示头像")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"插槽内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插槽内容"}},[t._v("#")]),t._v(" 插槽内容")]),t._v(" "),a("p",[t._v("可以通过插槽写入展示的内容，当请求结束，将"),a("code",[t._v("loading")]),t._v("设置为"),a("code",[t._v("false")]),t._v("，此时会隐藏骨架组件，同时展示插槽内容。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u-skeleton")]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rows")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":loading")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("avatar")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("false"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("u--text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("loading为false时，将会展示此处插槽内容"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u--text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("u-skeleton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("loading")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 延时2秒钟")]),t._v("\n\t\t\tuni"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loading "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("h3",{attrs:{id:"此页面源代码地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#此页面源代码地址"}},[t._v("#")]),t._v(" 此页面源代码地址")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("页面源码地址")]),t._v(" "),a("br"),t._v(" "),a("a",{staticStyle:{display:"flex","align-items":"center"},attrs:{href:"https://github.com/ijry/uview-plus/blob/master/src/pages/componentsC/skeleton/skeleton.nvue",target:"_blank"}},[a("img",{attrs:{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}}),t._v(" github\n")]),t._v(" "),a("a",{staticStyle:{display:"flex","align-items":"center","margin-top":"10px"},attrs:{href:"https://gitee.com/uiadmin/uview-plus/blob/master/src/pages/componentsC/skeleton/skeleton.nvue",target:"_blank"}},[a("img",{attrs:{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}}),t._v(" gitee\n")]),t._v(" "),a("br")]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("h3",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("loading")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示骨架占位图，设置为"),a("code",[t._v("false")]),t._v("将会展示子组件内容")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("animate")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启动画效果")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("段落占位图行数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Number | String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rowsWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("段落占位图的宽度，可以为百分比，数值，带单位字符串等，可通过数组传入指定每个段落行的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String | Array | Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("rowsHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("段落的高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String | Array | Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("title")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示标题占位图")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("titleWidth")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标题的宽度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("50%")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("titleHeight")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("标题的高度")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatar")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否展示头像占位图")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatarSize")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("头像占位图大小")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String | Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("32")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("avatarShape")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("头像占位图的形状，circle-圆形，square-方形")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("circle")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("square")])])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);