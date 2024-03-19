// noinspection JSUnresolvedReference

$.ajax({
    //第一次请求
    url:"/ajax/data/user.json",
    success(result){
        console.log(result)
        if (result.name==="黎锐")
        $.ajax({
            //第二次请求
            url: "/ajax/data/lirui.json",
            success(result) {
                console.log(result)
                let {girlfriend}=result
                $.ajax({
                    //第三次请求
                    url:`/ajax/data/${girlfriend}.json`,
                    success(result){
                        console.log(result)
                        document.write(JSON.stringify(result))
                    },
                    error(err){
                        console.log(err)
                    }
                })
            },
            error(err) {
                console.log(err)
            }
        })
    },
    error(err){
        console.log(err)
    }
})