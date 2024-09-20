import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";


@Injectable(
    {
        providedIn: "root"
    }
)
export class LoginService{
    private readonly baseUrl = environment["endPoint"];
}