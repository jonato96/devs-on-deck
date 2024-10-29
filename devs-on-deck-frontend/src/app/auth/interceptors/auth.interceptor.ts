import { HttpInterceptorFn } from "@angular/common/http";
import { LocalKeys, LocalManagerService } from "@/auth/services/local-manager.service";
import { inject } from "@angular/core";


export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const localManagerService = inject(LocalManagerService);
  const token = localManagerService.getElement(LocalKeys.token);

  let headers = req.headers.set("Content-Type", "application/json");

  if (token) {
    headers = headers.set("Authorization", `Bearer ${token}`);
  }

  const authReq = req.clone({ headers });

  return next(authReq);
}
