import type { ServiceResponse } from "~/ts/interfaces/service-response.interface";
import { Service } from "../Service";
import { LoginRequestSchema, type LoginRequest } from "./login.schema";
import type { User } from "~/schemas/user.schema";

export class AuthLoginService extends Service {

    public handleLoginRequest(request: LoginRequest) {

        // validate request
        LoginRequestSchema.parse(request)

        return this.fetch<ServiceResponse<{ user: User, token: string }>>("/auth/login", {
            method: "POST",
            body: { ...request }
        })
    }
}