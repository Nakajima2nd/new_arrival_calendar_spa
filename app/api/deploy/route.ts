export const Deploy = () => {
    const url = process.env.DEPLOY_HOOK_URL
    fetch(url)
}