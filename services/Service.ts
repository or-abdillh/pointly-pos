import type { UseFetchOptions } from "#app";
import type { ServiceResponse } from "~/ts/interfaces/service-response.interface";

export class Service {

    private BASE_URL = ""
    private USE_CREDENTIALS: RequestCredentials = "include"
    private X_CSRF_TOKEN = ""
    private PREFIX_JWT_AUTH = "Bearer"
    public JWT_TOKEN = ""

    constructor() {

        const runtimeConfig = useRuntimeConfig()

        this.BASE_URL = runtimeConfig.public.apiUrl

        // get csrf token
        this.getCsrfToken().then(response => {
            if (response.data.value) {
                this.X_CSRF_TOKEN = response.data.value.data.csrfToken
            }
        })
    }

    protected fetch<T>(url: string, options: UseFetchOptions<T> = {}) {

        // base URL
        options.baseURL = this.BASE_URL

        // overirde headers
        options.headers = {
            ...options.headers,
            "Content-Type": "application/json",
            "x-csrf-token": this.X_CSRF_TOKEN
        }

        // credentials
        options.credentials = this.USE_CREDENTIALS

        return useFetch(url, options)
    }

    private getCsrfToken() {

        // get csrf token
        return this.fetch<ServiceResponse<{ csrfToken: string }>>("/csrf")

    }
}