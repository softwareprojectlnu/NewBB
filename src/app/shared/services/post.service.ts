import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as _ from 'lodash';
import {AuthService} from './auth.service';

@Injectable()
export class PostService {

  userRoles: Array<string>; // roles of currently logged in uer

  constructor(private auth: AuthService,
              private db: AngularFireDatabase) {

    auth.user.map(user => {
      /// Set an array of user roles, ie ['admin', 'author', ...]
      return this.userRoles = _.keys(_.get(user, 'roles'))
    })
      .subscribe()
  }

  /// Get Data

  getPosts() {
    return this.db.list('posts')
  }

  getPost(key) {
    return this.db.object('posts/' + key)
  }


  ///// Authorization Logic /////

  get canRead(): boolean {
    const allowed = ['admin', 'author', 'reader']
    return this.matchingRole(allowed)
  }

  get canEdit(): boolean {
    const allowed = ['admin', 'author']
    return this.matchingRole(allowed)
  }

  get canDelete(): boolean {
    const allowed = ['admin']
    return this.matchingRole(allowed)
  }


  /// Helper to determine if any matching roles exist
  private matchingRole(allowedRoles): boolean {
    return !_.isEmpty(_.intersection(allowedRoles, this.userRoles))
  }
}
