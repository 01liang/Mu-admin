interface loginState {
    username: string
    password: string
}

export function login(params: loginState) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (params.username !== 'admin' || params.password !== '123456') {
                reject(new Error('用户名或密码输入错误'))
                return
            }
            resolve({
                permissions: ['system:btn:add', 'system:btn:edit', 'system:btn:remove'],
                token: 'hfejahfjeafe6612gjuiouio37812gjhg3213'
            })
        }, 300)
    })
}
