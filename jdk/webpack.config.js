var path=require('path');
module.exports={
    entry:'./src/app.js',   //入口文件
    output:{      //出口文件
               path:path.resolve(__dirname,"./"),
               filename:'index.js'
    },
    module:{
        rules:[
            {  
                test:/\.js$/,     //解析的文件是谁
                exclude:/no_modules/,      //不包含哪个文件解析
                use:{
                    loader:'babel-loader',    //用什么转换器
                    options:{
                        presets:['es2015','stage-0','react']    //安装了哪些转换器的包
                    }
                }
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.(png|jpg)$/,
                loader:'url-loader?limit=8192'
            }
        ]
    }
}