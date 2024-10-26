import { NextResponse } from "next/server"

export const GET = async () => {
    const url = `${process.env.DEPLOY_HOOK_URL}`
    fetch(url)
    return NextResponse.json({ ok: true })
}