import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css'],
  providers: [UserService],
})
export class UserInformationComponent implements OnInit {
  user: User[];

  constructor(private userService: UserService) {}
  ngOnInit() {
    this.userService.getUserDetail().subscribe((user: Array<User>) => {
      this.user = user;
    });
  }
}
