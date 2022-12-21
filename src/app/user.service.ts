import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable()
export class UserService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUserDetail(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.url).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: Response) => {
        return throwError(error);
      })
    );
  }
}
