import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inactive-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css',
})
export class InactiveUsersComponent {
  users: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userService.setToActive(id);
  }
}
