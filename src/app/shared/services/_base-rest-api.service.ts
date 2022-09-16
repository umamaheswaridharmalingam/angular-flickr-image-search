import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';
import { HttpContentType } from '../model';

export abstract class BaseRestApiService {
  constructor(protected http: HttpClient) {}

  protected getAuthHeader(httpContentType?: HttpContentType): HttpHeaders {
    // Can Write Authentication related Logic
    return new HttpHeaders().append(
      'Content-Type',
      httpContentType ? httpContentType : 'application/json'
    );
  }

  protected baseGetOptions(httpContentType?: HttpContentType): any {
    return {
      headers: this.getAuthHeader(httpContentType),
      observe: 'response',
    };
  }

  protected processError(error: any): Observable<any> {
    if (error.status && error.status === 401) {
      return of({});
    }
    // if (
    //     error.status &&
    //     (error.status === 412 || error.status === 400 || error.status === 401)
    // ) {
    //     return throwError(() => error);
    // }

    return throwError(() => error);
  }

  protected get<T>(
    endpointUrl: string,
    extraParams?: any,
    urlParams?: any,
    httpContentType: HttpContentType = HttpContentType.json,
    retryCount: number = 0
  ): Observable<T> {
    let params: any = {};
    if (urlParams && urlParams.length !== 0) {
      // This code will generate Url with parameter
      // Example :-
      // endpointUrl = '/article/{0}/header/message/{1}/address';
      // queryParam = ["19AC-000-6500", "CC001"]
      // Output at endpointUrl = '/article/19AC-000-6500/header/message/CC001/address'
      urlParams.forEach((param: string, index: any) => {
        endpointUrl = endpointUrl.replace(
          `{${index}}`,
          encodeURIComponent(param)
        );
      });
    }
    if (extraParams) {
      params = { ...extraParams, ...params };
    }
    return this.http
      .get<T>(endpointUrl, {
        ...this.baseGetOptions(httpContentType),
        params,
      })
      .pipe(
        switchMap((res: any) => {
          return of(res.body);
        }),
        retry(retryCount),
        catchError((error: any, caught: Observable<any>) => {
          return this.processError(error);
        })
      );
  }

  protected put<T>(
    endpointUrl: string,
    extraParams?: any,
    body: any = null,
    httpContentType: HttpContentType = HttpContentType.json,
    retryCount: number = 0
  ): Observable<T> {
    let params: any = {};

    // if (jsonParse) {
    //   params.format = 'JSON';
    // }

    if (extraParams) {
      params = { ...extraParams, ...params };
    }

    return this.http
      .put<any>(endpointUrl, body, {
        ...this.baseGetOptions(httpContentType),
        params,
      })
      .pipe(
        switchMap((res: any) => {
          return of(res.body);
        }),
        retry(retryCount),
        catchError((error: any, caught: Observable<any>) => {
          return this.processError(error);
        })
      );
  }

  protected post<T>(
    endpointUrl: string,
    extraParams?: any,
    body: any = null,
    httpContentType: HttpContentType = HttpContentType.json,
    retryCount: number = 0
  ): Observable<T> {
    let params: any = {};

    // if (jsonParse) {
    //   params.format = 'JSON';
    // }

    if (extraParams) {
      params = { ...extraParams, ...params };
    }
    return this.http
      .post<any>(endpointUrl, body, {
        ...this.baseGetOptions(httpContentType),
        params,
      })
      .pipe(
        switchMap((res: any) => {
          return of(res.body);
        }),
        retry(retryCount),
        catchError((error: any, caught: Observable<any>) => {
          return this.processError(error);
        })
      );
  }

  protected delete<T>(
    endpointUrl: string,
    extraParams?: any,
    urlParams?: any,
    body?: any,
    httpContentType: HttpContentType = HttpContentType.json
  ): Observable<T> {
    let params: any = {};
    let options = this.baseGetOptions(httpContentType);

    if (urlParams && urlParams.length !== 0) {
      // This code will generate Url with parameter
      // Example :-
      // endpointUrl = '/article/{0}/header/message/{1}/address';
      // queryParam = ["19AC-000-6500", "CC001"]
      // Output at endpointUrl = '/article/19AC-000-6500/header/message/CC001/address'
      urlParams.forEach((param: string, index: any) => {
        endpointUrl = endpointUrl.replace(`{${index}}`, param);
      });
    }

    if (extraParams) {
      params = { ...extraParams, ...params };
    }

    if (body) {
      options = {
        ...options,
        body,
      };
    }
    return this.http
      .delete<T>(endpointUrl, {
        ...options,
        params,
      })
      .pipe(
        switchMap((res: any) => {
          return of(res.body);
        }),
        catchError((error: any, caught: Observable<any>) => {
          return this.processError(error);
        })
      );
  }
}
