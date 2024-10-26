export const GET = async () => {
    const url = process.env.DEPLOY_HOOK_URL
    fetch(url)
}