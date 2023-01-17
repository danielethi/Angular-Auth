import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ToeknInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req:any, next:any){
    let tokenizedReq = req.clone({
      setHeader: {
        Authorization: 'Bearer xx.yy.zz',
      },
    });
    return next.handle(tokenizedReq);
  };
}
