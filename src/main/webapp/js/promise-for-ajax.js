new Promise((resolve, reject) => {
    $.ajax({
        url: "/ajax/data/user.json",
        success(result) {
            console.log(result)
            resolve(result)
        },
        error(err) {
            console.log(err)
            reject(err)
        }
    })
        .then(result => {
            return new Promise((resolve, reject) => {
                if (result.name === "黎锐") {
                    $.ajax({
                        url: "/ajax/data/lirui.json",
                        success(result) {
                            console.log(result)
                            resolve(result)
                        },
                        error(err) {
                            console.log(err)
                            reject(err)
                        }
                    })
                }
            })
        })
        .then(result => {
            return new Promise((resolve, reject) => {
                let {girlfriend} = result
                $.ajax({
                    url: `/ajax/data/${girlfriend}.json`,
                    success(result) {
                        console.log(result)
                        resolve(result)
                        document.write(JSON.stringify(result))
                    },
                    error(err) {
                        console.log(err)
                        reject(err)
                    }
                })
            })
        })
        .catch((reason) => {
            console.log(reason)
        })
});