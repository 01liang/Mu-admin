const firstNames = ['张', '李', '王', '刘', '陈', '杨', '赵', '黄', '周', '吴', '徐', '孙', '马']
const lastNames = ['伟', '芳', '娜', '敏', '静', '丽', '强', '磊', '军', '洋', '勇', '艳', '杰']

function randomName() {
    const first = firstNames[Math.floor(Math.random() * firstNames.length)]
    const last = lastNames[Math.floor(Math.random() * lastNames.length)]
    return first + last
}

function randomString(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += chars[Math.floor(Math.random() * chars.length)]
    }
    return result
}

function randomEmail() {
    return `${randomString(6)}@example.com`
}

function randomDate() {
    const date = new Date(2024, 0, 1 + Math.floor(Math.random() * 365))
    return date.toISOString().slice(0, 19).replace('T', ' ')
}

const userList = (() => {
    const result: any[] = []
    for (let i = 0; i < 13; i++) {
        result.push({
            key: i,
            name: randomName(),
            user: randomString(6),
            status: Math.random() > 0.5 ? 'running' : 'stop',
            email: randomEmail(),
            time: randomDate()
        })
    }
    return result
})()

const notifyList = (() => {
    const result: any[] = []
    const statuses = ['read', 'unread']
    for (let i = 0; i < 203; i++) {
        result.push({
            key: i,
            name: `消息标题${i + 1}`,
            desc: `这是一条消息描述内容，编号为${i + 1}`,
            status: statuses[Math.floor(Math.random() * statuses.length)],
            user: randomString(4),
            time: randomDate()
        })
    }
    return result
})()

export function getSystemUsers() {
    return Promise.resolve(userList)
}

export function getSystemNotifys() {
    return Promise.resolve(notifyList)
}
