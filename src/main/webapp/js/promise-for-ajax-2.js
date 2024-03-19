function get(url, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url,
            data,
            success(result) {
                console.log(result)
                resolve(result)
            },
            error(err) {
                console.log(err)
                reject(err)
            }
        })
    })

}

get("/ajax/data/user.json")
    .then(res => {
        if (res.name === "黎锐") {
            return get("/ajax/data/lirui.json")
        }
    })
    .then(res => {
        let {girlfriend} = res
        return get(`/ajax/data/${girlfriend}.json`)
    })
    .then(res => {
        document.write(JSON.stringify(res))
    })
    .catch(e => {
        console.log(e)
    })
