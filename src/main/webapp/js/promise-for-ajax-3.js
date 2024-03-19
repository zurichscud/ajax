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
            if (result.name === "黎锐") {
                $.ajax({
                    url: "/ajax/data/lirui.json",
                    success(result) {
                        console.log(result)
                        return result
                    },
                    error(err) {
                        console.log(err)
                        return err
                    }
                })
            }})
        })
        .then(result => {
            console.log(result)
                let {girlfriend} = result
                $.ajax({
                    url: `/ajax/data/${girlfriend}.json`,
                    success(result) {
                        console.log(result)
                        document.write(JSON.stringify(result))
                    },
                    error(err) {
                        console.log(err)
                        return err
                    }
                })
            })
        .catch((reason) => {
            console.log(reason)
        })