import type { LocationQueryValue } from 'vue-router'

interface RequestOptions {
	credentials?: RequestCredentials
}

async function request <Response> (
	method: 'GET' | 'POST',
	url: string,
	body: Record<string, null | string | undefined>,
	options?: RequestOptions
): Promise<Response> {
	let requestInit: RequestInit = { method }
	if (method === 'GET') {
		for (let [key, value] of Object.entries(body)) {
			if (value === undefined || value === null) {
				delete body[key]
			}
		}
		let params = new URLSearchParams(body as Record<string, string>).toString()
		url += `?${params}`
	}
	if (method === 'POST') {
		requestInit = {
			...requestInit,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		}
		if (options?.credentials) {
			requestInit.credentials = options.credentials
		}
	}

	let response = await fetch(url, requestInit)

	if (response.ok) {
		let data = await response.json()
		return data
	} else {
		throw new Error('Response was not ok.')
	}
}

export async function authSendEmail (
	url: string,
	email: string,
	redirect_url: LocationQueryValue
): Promise<void> {
	return request<void>('POST', url, {
		email,
		redirect_url
	})
}

export async function authVerifyCode (
	url: string,
	code: string
): Promise<{ redirect_url: string }> {
	return request<{ redirect_url: string }>(
		'GET',
		url,
		{ code },
		{ credentials: 'include' }
	)
}
