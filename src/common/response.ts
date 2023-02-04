// 用于请求拦截器

import { NestInterceptor, ExecutionContext, CallHandler, Injectable } from "@nestjs/common";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Injectable()
export class Response<T> implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<T>) {
        return next.handle().pipe(map((data) => {
            return {
                data,
                code: 200,
                status: 200,
                message: '成功',
                success: true
            }
        }))
    }
}   