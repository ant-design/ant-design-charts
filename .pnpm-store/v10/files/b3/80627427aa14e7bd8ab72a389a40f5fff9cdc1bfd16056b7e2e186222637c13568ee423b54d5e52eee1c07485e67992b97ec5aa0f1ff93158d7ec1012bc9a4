"use strict";

var _ = require('underscore');

module.exports = function (AV) {
  var PUBLIC_KEY = '*';
  /**
   * Creates a new ACL.
   * If no argument is given, the ACL has no permissions for anyone.
   * If the argument is a AV.User, the ACL will have read and write
   *   permission for only that user.
   * If the argument is any other JSON object, that object will be interpretted
   *   as a serialized ACL created with toJSON().
   * @see AV.Object#setACL
   * @class
   *
   * <p>An ACL, or Access Control List can be added to any
   * <code>AV.Object</code> to restrict access to only a subset of users
   * of your application.</p>
   */

  AV.ACL = function (arg1) {
    var self = this;
    self.permissionsById = {};

    if (_.isObject(arg1)) {
      if (arg1 instanceof AV.User) {
        self.setReadAccess(arg1, true);
        self.setWriteAccess(arg1, true);
      } else {
        if (_.isFunction(arg1)) {
          throw new Error('AV.ACL() called with a function.  Did you forget ()?');
        }

        AV._objectEach(arg1, function (accessList, userId) {
          if (!_.isString(userId)) {
            throw new Error('Tried to create an ACL with an invalid userId.');
          }

          self.permissionsById[userId] = {};

          AV._objectEach(accessList, function (allowed, permission) {
            if (permission !== 'read' && permission !== 'write') {
              throw new Error('Tried to create an ACL with an invalid permission type.');
            }

            if (!_.isBoolean(allowed)) {
              throw new Error('Tried to create an ACL with an invalid permission value.');
            }

            self.permissionsById[userId][permission] = allowed;
          });
        });
      }
    }
  };
  /**
   * Returns a JSON-encoded version of the ACL.
   * @return {Object}
   */


  AV.ACL.prototype.toJSON = function () {
    return _.clone(this.permissionsById);
  };

  AV.ACL.prototype._setAccess = function (accessType, userId, allowed) {
    if (userId instanceof AV.User) {
      userId = userId.id;
    } else if (userId instanceof AV.Role) {
      userId = 'role:' + userId.getName();
    }

    if (!_.isString(userId)) {
      throw new Error('userId must be a string.');
    }

    if (!_.isBoolean(allowed)) {
      throw new Error('allowed must be either true or false.');
    }

    var permissions = this.permissionsById[userId];

    if (!permissions) {
      if (!allowed) {
        // The user already doesn't have this permission, so no action needed.
        return;
      } else {
        permissions = {};
        this.permissionsById[userId] = permissions;
      }
    }

    if (allowed) {
      this.permissionsById[userId][accessType] = true;
    } else {
      delete permissions[accessType];

      if (_.isEmpty(permissions)) {
        delete this.permissionsById[userId];
      }
    }
  };

  AV.ACL.prototype._getAccess = function (accessType, userId) {
    if (userId instanceof AV.User) {
      userId = userId.id;
    } else if (userId instanceof AV.Role) {
      userId = 'role:' + userId.getName();
    }

    var permissions = this.permissionsById[userId];

    if (!permissions) {
      return false;
    }

    return permissions[accessType] ? true : false;
  };
  /**
   * Set whether the given user is allowed to read this object.
   * @param userId An instance of AV.User or its objectId.
   * @param {Boolean} allowed Whether that user should have read access.
   */


  AV.ACL.prototype.setReadAccess = function (userId, allowed) {
    this._setAccess('read', userId, allowed);
  };
  /**
   * Get whether the given user id is *explicitly* allowed to read this object.
   * Even if this returns false, the user may still be able to access it if
   * getPublicReadAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */


  AV.ACL.prototype.getReadAccess = function (userId) {
    return this._getAccess('read', userId);
  };
  /**
   * Set whether the given user id is allowed to write this object.
   * @param userId An instance of AV.User or its objectId, or a AV.Role..
   * @param {Boolean} allowed Whether that user should have write access.
   */


  AV.ACL.prototype.setWriteAccess = function (userId, allowed) {
    this._setAccess('write', userId, allowed);
  };
  /**
   * Get whether the given user id is *explicitly* allowed to write this object.
   * Even if this returns false, the user may still be able to write it if
   * getPublicWriteAccess returns true or a role that the user belongs to has
   * write access.
   * @param userId An instance of AV.User or its objectId, or a AV.Role.
   * @return {Boolean}
   */


  AV.ACL.prototype.getWriteAccess = function (userId) {
    return this._getAccess('write', userId);
  };
  /**
   * Set whether the public is allowed to read this object.
   * @param {Boolean} allowed
   */


  AV.ACL.prototype.setPublicReadAccess = function (allowed) {
    this.setReadAccess(PUBLIC_KEY, allowed);
  };
  /**
   * Get whether the public is allowed to read this object.
   * @return {Boolean}
   */


  AV.ACL.prototype.getPublicReadAccess = function () {
    return this.getReadAccess(PUBLIC_KEY);
  };
  /**
   * Set whether the public is allowed to write this object.
   * @param {Boolean} allowed
   */


  AV.ACL.prototype.setPublicWriteAccess = function (allowed) {
    this.setWriteAccess(PUBLIC_KEY, allowed);
  };
  /**
   * Get whether the public is allowed to write this object.
   * @return {Boolean}
   */


  AV.ACL.prototype.getPublicWriteAccess = function () {
    return this.getWriteAccess(PUBLIC_KEY);
  };
  /**
   * Get whether users belonging to the given role are allowed
   * to read this object. Even if this returns false, the role may
   * still be able to write it if a parent role has read access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has read access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.getRoleReadAccess = function (role) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      return this.getReadAccess('role:' + role);
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Get whether users belonging to the given role are allowed
   * to write this object. Even if this returns false, the role may
   * still be able to write it if a parent role has write access.
   *
   * @param role The name of the role, or a AV.Role object.
   * @return {Boolean} true if the role has write access. false otherwise.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.getRoleWriteAccess = function (role) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      return this.getWriteAccess('role:' + role);
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Set whether users belonging to the given role are allowed
   * to read this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can read this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.setRoleReadAccess = function (role, allowed) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      this.setReadAccess('role:' + role, allowed);
      return;
    }

    throw new Error('role must be a AV.Role or a String');
  };
  /**
   * Set whether users belonging to the given role are allowed
   * to write this object.
   *
   * @param role The name of the role, or a AV.Role object.
   * @param {Boolean} allowed Whether the given role can write this object.
   * @throws {String} If role is neither a AV.Role nor a String.
   */


  AV.ACL.prototype.setRoleWriteAccess = function (role, allowed) {
    if (role instanceof AV.Role) {
      // Normalize to the String name
      role = role.getName();
    }

    if (_.isString(role)) {
      this.setWriteAccess('role:' + role, allowed);
      return;
    }

    throw new Error('role must be a AV.Role or a String');
  };
};