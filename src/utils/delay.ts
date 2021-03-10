const delay = (ms: number) => {
    return new Promise((resolve: Function) => setTimeout(() => {
        resolve()
        }, ms
    ))
}

export default delay