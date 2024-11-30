import type { ServiceResponse } from "~/ts/interfaces/service-response.interface";
import { Service } from "../Service";
import { RegisterRequestSchema, type RegisterRequest } from "./register.schema";
import type { User } from "~/schemas/user.schema";

export class AuthRegisterService extends Service {

    public handlRegisterRequest(request: RegisterRequest) {

        // validate request
        RegisterRequestSchema.parse(request)

        return this.fetch<ServiceResponse<{ user: User, token: string }>>("/auth/register", {
            method: "POST",
            body: { ...request }
        })
    }
} 