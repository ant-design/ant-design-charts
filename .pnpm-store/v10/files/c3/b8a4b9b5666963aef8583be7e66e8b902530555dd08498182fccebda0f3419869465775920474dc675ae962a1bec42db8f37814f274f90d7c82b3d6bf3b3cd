import { Realtime } from 'leancloud-realtime';
import { Adapters } from '@leancloud/adapter-types';

export as namespace AV;

interface IteratorResult<T> {
  done: boolean;
  value: T;
}
interface AsyncIterator<T> {
  next(): Promise<IteratorResult<T>>;
}

declare class EventEmitter<T> {
  on<K extends keyof T>(event: K, listener: T[K]): this;
  on(evt: string, listener: Function): this;
  once<K extends keyof T>(event: K, listener: T[K]): this;
  once(evt: string, listener: Function): this;
  off<K extends keyof T>(event: T | string, listener?: Function): this;
  emit<K extends keyof T>(event: T | string, ...args: any[]): boolean;
}

export var applicationId: string;
export var applicationKey: string;
export var masterKey: string;

interface FetchOptions {
  keys?: string | string[];
  include?: string | string[];
  includeACL?: boolean;
}

export interface AuthOptions {
  /**
   * In Cloud Code and Node only, causes the Master Key to be used for this request.
   */
  useMasterKey?: boolean;
  sessionToken?: string;
  user?: User;
}

interface SMSAuthOptions extends AuthOptions {
  validateToken?: string;
}

interface CaptchaOptions {
  size?: number;
  width?: number;
  height?: number;
  ttl?: number;
}

interface FileSaveOptions extends AuthOptions {
  keepFileName?: boolean;
  key?: string;
  onprogress?: (event: {
    loaded: number;
    total: number;
    percent: number;
  }) => any;
}

export interface WaitOption {
  /**
   * Set to true to wait for the server to confirm success
   * before triggering an event.
   */
  wait?: boolean;
}

export interface SilentOption {
  /**
   * Set to true to avoid firing the event.
   */
  silent?: boolean;
}

export interface AnonymousAuthData {
  /**
   * random UUID with lowercase hexadecimal digits
   */
  id: string;
  [extraAttribute: string]: any;
}

export interface AuthDataWithUID {
  uid: string;
  access_token: string;
  [extraAttribute: string]: any;
}

export interface AuthDataWithOpenID {
  openid: string;
  access_token: string;
  [extraAttribute: string]: any;
}

export type AuthData = AnonymousAuthData | AuthDataWithUID | AuthDataWithOpenID;

export interface IBaseObject {
  toJSON(): any;
}

export class BaseObject implements IBaseObject {
  toJSON(): any;
}

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
export class ACL extends BaseObject {
  constructor(arg1?: any);

  setPublicReadAccess(allowed: boolean): void;
  getPublicReadAccess(): boolean;

  setPublicWriteAccess(allowed: boolean): void;
  getPublicWriteAccess(): boolean;

  setReadAccess(userId: User, allowed: boolean): void;
  getReadAccess(userId: User): boolean;

  setReadAccess(userId: string, allowed: boolean): void;
  getReadAccess(userId: string): boolean;

  setRoleReadAccess(role: Role, allowed: boolean): void;
  setRoleReadAccess(role: string, allowed: boolean): void;
  getRoleReadAccess(role: Role): boolean;
  getRoleReadAccess(role: string): boolean;

  setRoleWriteAccess(role: Role, allowed: boolean): void;
  setRoleWriteAccess(role: string, allowed: boolean): void;
  getRoleWriteAccess(role: Role): boolean;
  getRoleWriteAccess(role: string): boolean;

  setWriteAccess(userId: User, allowed: boolean): void;
  setWriteAccess(userId: string, allowed: boolean): void;
  getWriteAccess(userId: User): boolean;
  getWriteAccess(userId: string): boolean;
}

export namespace File {
  export type CensorResult = 'rejected' | 'passed' | 'review';
}

/**
 * A AV.File is a local representation of a file that is saved to the AV
 * cloud.
 * @class
 * @param name {String} The file's name. This will be prefixed by a unique
 *     value once the file has finished saving. The file name must begin with
 *     an alphanumeric character, and consist of alphanumeric characters,
 *     periods, spaces, underscores, or dashes.
 * @param data {Array} The data for the file, as either:
 *     1. an Array of byte value Numbers, or
 *     2. an Object like { base64: "..." } with a base64-encoded String.
 *     3. a File object selected with a file upload control. (3) only works
 *        in Firefox 3.6+, Safari 6.0.2+, Chrome 7+, and IE 10+.
 *        For example:<pre>
 * var fileUploadControl = $("#profilePhotoFileUpload")[0];
 * if (fileUploadControl.files.length > 0) {
 *   var file = fileUploadControl.files[0];
 *   var name = "photo.jpg";
 *   var AVFile = new AV.File(name, file);
 *   AVFile.save().then(function() {
 *     // The file has been saved to AV.
 *   }, function(error) {
 *     // The file either could not be read, or could not be saved to AV.
 *   });
 * }</pre>
 * @param type {String} Optional Content-Type header to use for the file. If
 *     this is omitted, the content type will be inferred from the name's
 *     extension.
 */
export class File extends BaseObject {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(name: string, data: any, type?: string);
  static withURL(name: string, url: string): File;
  static createWithoutData(objectId: string): File;
  static censor(objectId: string): Promise<File.CensorResult>;

  destroy(options?: AuthOptions): Promise<void>;
  fetch(fetchOptions?: FetchOptions, options?: AuthOptions): Promise<this>;
  get(key: string): any;
  getACL(): ACL;
  metaData(): any;
  metaData(metaKey: string): any;
  metaData(metaKey: string, metaValue: any): any;
  name(): string;
  ownerId(): string;
  url(): string;
  save(options?: FileSaveOptions): Promise<this>;
  set(key: string, value: any): this;
  set(data: { [key: string]: any }): this;
  setACL(acl: ACL): this;
  setUploadHeader(key: string, value: string): this;
  size(): any;
  thumbnailURL(width: number, height: number): string;
  censor(): Promise<File.CensorResult>;
  toFullJSON(): any;
}

/**
 * Creates a new GeoPoint with any of the following forms:<br>
 *   <pre>
 *   new GeoPoint(otherGeoPoint)
 *   new GeoPoint(30, 30)
 *   new GeoPoint([30, 30])
 *   new GeoPoint({latitude: 30, longitude: 30})
 *   new GeoPoint()  // defaults to (0, 0)
 *   </pre>
 * @class
 *
 * <p>Represents a latitude / longitude point that may be associated
 * with a key in a AVObject or used as a reference point for geo queries.
 * This allows proximity-based queries on the key.</p>
 *
 * <p>Only one key in a class may contain a GeoPoint.</p>
 *
 * <p>Example:<pre>
 *   var point = new AV.GeoPoint(30.0, -20.0);
 *   var object = new AV.Object("PlaceObject");
 *   object.set("location", point);
 *   object.save();</pre></p>
 */
export class GeoPoint extends BaseObject {
  latitude: number;
  longitude: number;

  constructor(other: GeoPoint);
  // -90.0 <= latitude <= 90.0, and -180.0 <= longitude <= 180.0,
  // but TypeScript does not support refinement types yet (Microsoft/TypeScript#7599),
  // so we just specify number here.
  constructor(lat: number, lon: number);
  constructor(latLon: [number, number]);
  constructor(latLonObj: { latitude: number; longitude: number });
  constructor();

  static current(options?: AuthOptions): Promise<GeoPoint>;
  radiansTo(point: GeoPoint): number;
  kilometersTo(point: GeoPoint): number;
  milesTo(point: GeoPoint): number;
}

/**
 * A class that is used to access all of the children of a many-to-many relationship.
 * Each instance of AV.Relation is associated with a particular parent object and key.
 */
export class Relation<T extends Queriable> extends BaseObject {
  parent: Object;
  key: string;
  targetClassName: string;

  constructor(parent?: Object, key?: string);
  static reverseQuery<U extends Queriable>(
    parentClass: string | U,
    relationKey: string,
    child: Object
  ): Query<U>;

  //Adds a AV.Object or an array of AV.Objects to the relation.
  add(object: T): void;

  // Returns a AV.Query that is limited to objects in this relation.
  query(): Query<T>;

  // Removes a AV.Object or an array of AV.Objects from this relation.
  remove(object: T): void;
}

/**
 * Creates a new model with defined attributes. A client id (cid) is
 * automatically generated and assigned for you.
 *
 * <p>You won't normally call this method directly.  It is recommended that
 * you use a subclass of <code>AV.Object</code> instead, created by calling
 * <code>extend</code>.</p>
 *
 * <p>However, if you don't want to use a subclass, or aren't sure which
 * subclass is appropriate, you can use this form:<pre>
 *     var object = new AV.Object("ClassName");
 * </pre>
 * That is basically equivalent to:<pre>
 *     var MyClass = AV.Object.extend("ClassName");
 *     var object = new MyClass();
 * </pre></p>
 *
 * @param {Object} attributes The initial set of data to store in the object.
 * @param {Object} options A set of Backbone-like options for creating the
 *     object.  The only option currently supported is "collection".
 * @see AV.Object.extend
 *
 * @class
 *
 * <p>The fundamental unit of AV data, which implements the Backbone Model
 * interface.</p>
 */
export class Object extends BaseObject {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  attributes: any;
  changed: boolean;
  className: string;
  query: Query<this>;

  constructor(className?: string, options?: any);
  constructor(attributes?: string[], options?: any);
  static createWithoutData<T extends Object>(
    className: string,
    objectId: string
  ): T;
  static createWithoutData<T extends Object>(
    className: new (...args: any[]) => T,
    objectId: string
  ): T;
  static extend(
    className: string,
    protoProps?: any,
    classProps?: any
  ): typeof Object;
  static fetchAll<T extends Object>(
    list: T[],
    options?: AuthOptions
  ): Promise<Array<T | Error>>;
  static destroyAll(
    list: Object[],
    options?: Object.DestroyAllOptions
  ): Promise<Array<void | Error>>;
  static saveAll<T extends Object>(
    list: T[],
    options?: Object.SaveAllOptions
  ): Promise<Array<T | Error>>;
  static register(klass: new (...args: any[]) => Object, name?: string): void;

  initialize(): void;
  add(attributeName: string, item: any): this;
  addUnique(attributeName: string, item: any): any;
  bitAnd(attributeName: string, item: number): this;
  bitOr(attributeName: string, item: number): this;
  bitXor(attributeName: string, item: number): this;
  change(options: any): this;
  clear(options: any): any;
  revert(keys?: string | string[]): this;
  clone(): this;
  destroy(options?: Object.DestroyOptions): Promise<this>;
  dirty(key?: string): boolean;
  dirtyKeys(): string[];
  escape(attr: string): string;
  fetch(fetchOptions?: FetchOptions, options?: AuthOptions): Promise<this>;
  fetchWhenSave(enable: boolean): void;
  get(attr: string): any;
  getACL(): ACL;
  getCreatedAt(): Date;
  getObjectId(): string;
  getUpdatedAt(): Date;
  has(attr: string): boolean;
  increment(attr: string, amount?: number): this;
  isValid(): boolean;
  op(attr: string): any;
  previous(attr: string): any;
  previousAttributes(): any;
  relation<T extends Queriable>(attr: string): Relation<T>;
  remove(attr: string, item: any): this;
  save(
    attrs?: object | null,
    options?: Object.SaveOptions<this>
  ): Promise<this>;
  save(
    key: string,
    value: any,
    options?: Object.SaveOptions<this>
  ): Promise<this>;
  set(key: string, value: any, options?: Object.SetOptions): this;
  set(data: { [key: string]: any }, options?: Object.SetOptions): this;
  setACL(acl: ACL, options?: Object.SetOptions): this;
  unset(attr: string, options?: Object.SetOptions): this;
  validate(attrs: any): any;
  toFullJSON(): any;
  ignoreHook(
    hookName:
      | 'beforeSave'
      | 'afterSave'
      | 'beforeUpdate'
      | 'afterUpdate'
      | 'beforeDelete'
      | 'afterDelete'
  ): void;
  disableBeforeHook(): void;
  disableAfterHook(): void;
}

export namespace Object {
  interface DestroyOptions extends AuthOptions, WaitOption {}

  interface DestroyAllOptions extends AuthOptions {}

  interface SaveOptions<T extends Queriable>
    extends AuthOptions,
      SilentOption,
      WaitOption {
    fetchWhenSave?: boolean;
    query?: Query<T>;
  }

  interface SaveAllOptions extends AuthOptions {
    fetchWhenSave?: boolean;
  }

  interface SetOptions extends SilentOption {}
}

/**
 * Every AV application installed on a device registered for
 * push notifications has an associated Installation object.
 */
export class Installation extends Object {
  badge: any;
  channels: string[];
  timeZone: any;
  deviceType: string;
  pushType: string;
  installationId: string;
  deviceToken: string;
  channelUris: string;
  appName: string;
  appVersion: string;
  AVVersion: string;
  appIdentifier: string;
}

/**
 * @class
 *
 * <p>AV.Events is a fork of Backbone's Events module, provided for your
 * convenience.</p>
 *
 * <p>A module that can be mixed in to any object in order to provide
 * it with custom events. You may bind callback functions to an event
 * with `on`, or remove these functions with `off`.
 * Triggering an event fires all callbacks in the order that `on` was
 * called.
 *
 * <pre>
 *     var object = {};
 *     _.extend(object, AV.Events);
 *     object.on('expand', function(){ alert('expanded'); });
 *     object.trigger('expand');</pre></p>
 *
 * <p>For more information, see the
 * <a href="http://documentcloud.github.com/backbone/#Events">Backbone
 * documentation</a>.</p>
 */
export class Events {
  static off(events: string[], callback?: Function, context?: any): Events;
  static on(events: string[], callback?: Function, context?: any): Events;
  static trigger(events: string[]): Events;
  static bind(): Events;
  static unbind(): Events;

  on(eventName: string, callback?: Function, context?: any): Events;
  off(eventName?: string, callback?: Function, context?: any): Events;
  trigger(eventName: string, ...args: any[]): Events;
  bind(eventName: string, callback: Function, context?: any): Events;
  unbind(eventName?: string, callback?: Function, context?: any): Events;
}

declare type Queriable = Object | File;

declare class BaseQuery<T extends Queriable> extends BaseObject {
  className: string;

  constructor(objectClass: new (...args: any[]) => T);
  constructor(objectClass: string);

  addAscending(key: string): this;
  addAscending(key: string[]): this;
  addDescending(key: string): this;
  addDescending(key: string[]): this;
  ascending(key: string): this;
  ascending(key: string[]): this;
  descending(key: string): this;
  descending(key: string[]): this;
  include(...keys: string[]): this;
  include(keys: string[]): this;
  select(...keys: string[]): this;
  select(keys: string[]): this;
  limit(n: number): this;
  skip(n: number): this;

  find(options?: AuthOptions): Promise<T[]>;
}

/**
 * Creates a new AV AV.Query for the given AV.Object subclass.
 * @param objectClass -
 *   An instance of a subclass of AV.Object, or a AV className string.
 * @class
 *
 * <p>AV.Query defines a query that is used to fetch AV.Objects. The
 * most common use case is finding all objects that match a query through the
 * <code>find</code> method. For example, this sample code fetches all objects
 * of class <code>MyClass</code>. It calls a different function depending on
 * whether the fetch succeeded or not.
 *
 * <pre>
 * var query = new AV.Query(MyClass);
 * query.find({
 *   success: function(results) {
 *     // results is an array of AV.Object.
 *   },
 *
 *   error: function(error) {
 *     // error is an instance of AV.Error.
 *   }
 * });</pre></p>
 *
 * <p>A AV.Query can also be used to retrieve a single object whose id is
 * known, through the get method. For example, this sample code fetches an
 * object of class <code>MyClass</code> and id <code>myId</code>. It calls a
 * different function depending on whether the fetch succeeded or not.
 *
 * <pre>
 * var query = new AV.Query(MyClass);
 * query.get(myId, {
 *   success: function(object) {
 *     // object is an instance of AV.Object.
 *   },
 *
 *   error: function(object, error) {
 *     // error is an instance of AV.Error.
 *   }
 * });</pre></p>
 *
 * <p>A AV.Query can also be used to count the number of objects that match
 * the query without retrieving all of those objects. For example, this
 * sample code counts the number of objects of the class <code>MyClass</code>
 * <pre>
 * var query = new AV.Query(MyClass);
 * query.count({
 *   success: function(number) {
 *     // There are number instances of MyClass.
 *   },
 *
 *   error: function(error) {
 *     // error is an instance of AV.Error.
 *   }
 * });</pre></p>
 */
export class Query<T extends Queriable> extends BaseQuery<T> {
  static or<U extends Queriable>(...querys: Query<U>[]): Query<U>;
  static and<U extends Queriable>(...querys: Query<U>[]): Query<U>;
  static doCloudQuery<U extends Queriable>(
    cql: string,
    pvalues?: any,
    options?: AuthOptions
  ): Promise<U>;
  static fromJSON<U extends Queriable>(json: object): Query<U>;

  containedIn(key: string, values: any[]): this;
  contains(key: string, substring: string): this;
  containsAll(key: string, values: any[]): this;
  count(options?: AuthOptions): Promise<number>;
  descending(key: string): this;
  descending(key: string[]): this;
  destroyAll(options?: AuthOptions): Promise<void>;
  doesNotExist(key: string): this;
  doesNotMatchKeyInQuery<U extends Queriable>(
    key: string,
    queryKey: string,
    query: Query<U>
  ): this;
  doesNotMatchQuery<U extends Queriable>(key: string, query: Query<U>): this;
  each(callback: Function, options?: AuthOptions): Promise<T>;
  endsWith(key: string, suffix: string): this;
  equalTo(key: string, value: any): this;
  exists(key: string): this;
  findAndCount(options?: AuthOptions): Promise<[T[], number]>;
  first(options?: AuthOptions): Promise<T | undefined>;
  get(objectId: string, options?: AuthOptions): Promise<T>;
  greaterThan(key: string, value: any): this;
  greaterThanOrEqualTo(key: string, value: any): this;
  includeACL(value?: boolean): this;
  lessThan(key: string, value: any): this;
  lessThanOrEqualTo(key: string, value: any): this;
  matches(key: string, regex: RegExp, modifiers?: any): this;
  matchesKeyInQuery<U extends Queriable>(
    key: string,
    queryKey: string,
    query: Query<U>
  ): this;
  matchesQuery<U extends Queriable>(key: string, query: Query<U>): this;
  near(key: string, point: GeoPoint): this;
  notContainedIn(key: string, values: any[]): this;
  notEqualTo(key: string, value: any): this;
  sizeEqualTo(key: string, value: number): this;
  startsWith(key: string, prefix: string): this;
  withinGeoBox(key: string, southwest: GeoPoint, northeast: GeoPoint): this;
  withinKilometers(key: string, point: GeoPoint, maxDistance: number): this;
  withinMiles(key: string, point: GeoPoint, maxDistance: number): this;
  withinRadians(key: string, point: GeoPoint, maxDistance: number): this;
  scan(
    options?: { orderedBy?: string; batchSize?: number },
    authOptions?: AuthOptions
  ): AsyncIterator<T>;
  subscribe(options?: { subscriptionId?: string }): Promise<LiveQuery<T>>;
}

export class LiveQuery<T> extends EventEmitter<LiveQueryEvent<T>> {
  static pause(): void;
  static resume(): void;

  unsubscribe(): Promise<void>;
}

declare interface LiveQueryEvent<T> {
  create: (target?: T) => any;
  update: (target?: T, updatedKeys?: string[]) => any;
  enter: (target?: T, updatedKeys?: string[]) => any;
  leave: (target?: T, updatedKeys?: string[]) => any;
  delete: (target?: T) => any;
}

export class SearchQuery<T extends Queriable> extends BaseQuery<T> {
  sid(sid: string): this;
  queryString(q: string): this;
  highlights(highlights: string[]): this;
  highlights(highlight: string): this;
  sortBy(builder: SearchSortBuilder): this;
  hits(): number;
  hasMore(): boolean;
  reset(): void;
}

export class SearchSortBuilder {
  constructor();
  ascending(key: string, mode?: string, missingKeyBehaviour?: string): this;
  descending(key: string, mode?: string, missingKeyBehaviour?: string): this;
  whereNear(
    key: string,
    point?: GeoPoint,
    options?: { order?: string; mode?: string; unit?: string }
  ): this;
  build(): string;
}

/**
 * Represents a Role on the AV server. Roles represent groupings of
 * Users for the purposes of granting permissions (e.g. specifying an ACL
 * for an Object). Roles are specified by their sets of child users and
 * child roles, all of which are granted any permissions that the parent
 * role has.
 *
 * <p>Roles must have a name (which cannot be changed after creation of the
 * role), and must specify an ACL.</p>
 * @class
 * A AV.Role is a local representation of a role persisted to the AV
 * cloud.
 */
export class Role extends Object {
  constructor(name: string, acl: ACL);

  getRoles(): Relation<Role>;
  getUsers(): Relation<User>;
  getName(): string;
  setName(name: string): Role;
}

interface OAuthLoginOptions extends AuthOptions {
  failOnNotExist?: boolean;
}

interface UnionOptions {
  unionIdPlatform?: string;
  asMainAccount?: boolean;
}

interface UnionLoginOptions extends OAuthLoginOptions, UnionOptions {}

interface MiniappOptions extends UnionOptions {
  preferUnionId: boolean;
}

interface MiniappLoginOptions extends OAuthLoginOptions, MiniappOptions {}

interface AuthInfo {
  authData: { [key: string]: any };
  provider: string;
  platform?: string;
}

/**
 * @class
 *
 * <p>A AV.User object is a local representation of a user persisted to the
 * AV cloud. This class is a subclass of a AV.Object, and retains the
 * same functionality of a AV.Object, but also extends it with various
 * user specific methods, like authentication, signing up, and validation of
 * uniqueness.</p>
 */
export class User extends Object {
  static current(): User;
  static currentAsync(): Promise<User>;
  static signUp(
    username: string,
    password: string,
    attrs?: any,
    options?: AuthOptions
  ): Promise<User>;
  static logIn(username: string, password: string): Promise<User>;
  static logOut(): Promise<User>;
  static become(sessionToken: string): Promise<User>;

  static loginAnonymously(): Promise<User>;
  static loginWithMiniApp(
    authInfo?: AuthInfo,
    options?: OAuthLoginOptions
  ): Promise<User>;
  static loginWithWeapp(options?: MiniappLoginOptions): Promise<User>;
  static loginWithWeappWithUnionId(
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  static loginWithQQApp(options?: MiniappLoginOptions): Promise<User>;
  static loginWithQQAppWithUnionId(
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  static logInWithMobilePhone(
    mobilePhone: string,
    password: string
  ): Promise<User>;
  static logInWithMobilePhoneSmsCode(
    mobilePhone: string,
    smsCode: string
  ): Promise<User>;
  static loginWithEmail(email: string, password: string): Promise<User>;
  static loginWithAuthData(
    authData: AuthData,
    platform: string,
    options?: OAuthLoginOptions
  ): Promise<User>;
  static signUpOrlogInWithAuthData(
    authData: AuthData,
    platform: string,
    options?: OAuthLoginOptions
  ): Promise<User>;
  static loginWithAuthDataAndUnionId(
    authData: AuthData,
    platform: string,
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  static signUpOrlogInWithAuthDataAndUnionId(
    authData: AuthData,
    platform: string,
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  static signUpOrlogInWithMobilePhone(
    mobilePhoneNumber: string,
    smsCode: string,
    attributes?: any,
    options?: AuthOptions
  ): Promise<User>;
  static requestEmailVerify(
    email: string,
    options?: AuthOptions
  ): Promise<User>;
  static requestLoginSmsCode(
    mobilePhoneNumber: string,
    options?: SMSAuthOptions
  ): Promise<void>;
  static requestMobilePhoneVerify(
    mobilePhoneNumber: string,
    options?: SMSAuthOptions
  ): Promise<void>;
  static requestPasswordReset(
    email: string,
    options?: AuthOptions
  ): Promise<User>;
  static requestPasswordResetBySmsCode(
    mobilePhoneNumber: string,
    options?: SMSAuthOptions
  ): Promise<void>;
  static resetPasswordBySmsCode(
    code: string,
    password: string,
    options?: AuthOptions
  ): Promise<User>;
  static verifyMobilePhone(code: string, options?: AuthOptions): Promise<User>;
  static requestChangePhoneNumber(
    mobilePhoneNumber: string,
    ttl?: number,
    options?: SMSAuthOptions
  ): Promise<void>;
  static changePhoneNumber(
    mobilePhoneNumber: string,
    code: string
  ): Promise<void>;

  static followerQuery<T extends User>(userObjectId: string): Query<T>;
  static followeeQuery<T extends User>(userObjectId: string): Query<T>;

  loginWithWeapp(options?: MiniappLoginOptions): Promise<User>;
  loginWithWeappWithUnionId(
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  loginWithQQApp(options?: MiniappLoginOptions): Promise<User>;
  loginWithQQAppWithUnionId(
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;
  loginWithAuthData(
    authData: AuthData,
    platform: string,
    options?: OAuthLoginOptions
  ): Promise<User>;
  loginWithAuthDataAndUnionId(
    authData: AuthData,
    platform: string,
    unionId: string,
    unionLoginOptions?: UnionLoginOptions
  ): Promise<User>;

  signUp(attrs?: any, options?: AuthOptions): Promise<User>;
  logIn(): Promise<User>;
  linkWithWeapp(): Promise<User>;
  isAuthenticated(): Promise<boolean>;
  isAnonymous(): boolean;
  isCurrent(): boolean;

  associateWithWeapp(options?: MiniappOptions): Promise<User>;
  associateWithWeappWithUnionId(
    unionId: string,
    unionOptions?: UnionOptions
  ): Promise<User>;
  associateWithQQApp(options?: MiniappOptions): Promise<User>;
  associateWithQQAppWithUnionId(
    unionId: string,
    unionOptions?: UnionOptions
  ): Promise<User>;

  associateWithAuthData(authData: AuthData, platform: string): Promise<User>;
  associateWithAuthDataAndUnionId(
    authData: AuthData,
    platform: string,
    unionId: string,
    unionOptions?: UnionOptions
  ): Promise<User>;
  dissociateAuthData(platform: string): Promise<User>;

  getEmail(): string;
  setEmail(email: string): boolean;

  setMobilePhoneNumber(mobilePhoneNumber: string): boolean;
  getMobilePhoneNumber(): string;

  getUsername(): string;
  setUsername(username: string): boolean;

  setPassword(password: string): boolean;
  getSessionToken(): string;
  refreshSessionToken(options?: AuthOptions): Promise<User>;

  getRoles(options?: AuthOptions): Promise<Role[]>;

  follow(user: User | string, authOptions?: AuthOptions): Promise<void>;
  follow(
    options: { user: User | string; attributes?: object },
    authOptions?: AuthOptions
  ): Promise<void>;
  unfollow(user: User | string, authOptions?: AuthOptions): Promise<void>;
  unfollow(
    options: { user: User | string },
    authOptions?: AuthOptions
  ): Promise<void>;
  followerQuery(): Query<this>;
  followeeQuery(): Query<this>;
  getFollowersAndFollowees(
    options?: { skip?: number; limit?: number },
    authOptions?: AuthOptions
  ): Promise<{ followers: User[]; followees: User[] }>;
}

export class Friendship {
  static request(
    friend: User | string,
    authOptions?: AuthOptions
  ): Promise<void>;
  static request(
    options: { friend: User | string; attributes?: object },
    authOptions?: AuthOptions
  ): Promise<void>;
  static acceptRequest(
    request: Object | string,
    authOptions?: AuthOptions
  ): Promise<void>;
  static acceptRequest(
    options: { request: Object | string; attributes?: object },
    authOptions?: AuthOptions
  ): Promise<void>;
  static declineRequest(
    request: Object | string,
    authOptions?: AuthOptions
  ): Promise<void>;
}

export class Captcha {
  url: string;
  captchaToken: string;
  validateToken: string;

  static request(
    options?: CaptchaOptions,
    authOptions?: AuthOptions
  ): Promise<Captcha>;

  refresh(): Promise<string>;
  verify(code: string): Promise<string>;
  bind(
    elements?: {
      textInput?: string | HTMLInputElement;
      image?: string | HTMLImageElement;
      verifyButton?: string | HTMLElement;
    },
    callbacks?: {
      success?: (validateToken: string) => any;
      error?: (error: Error) => any;
    }
  ): void;
  unbind(): void;
}

/**
 * @class AV.Conversation
 * <p>An AV.Conversation is a local representation of a LeanCloud realtime's
 * conversation. This class is a subclass of AV.Object, and retains the
 * same functionality of an AV.Object, but also extends it with various
 * conversation specific methods, like get members, creators of this conversation.
 * </p>
 *
 * @param {String} name The name of the Role to create.
 * @param {Boolean} [options.isSystem] Set this conversation as system conversation.
 * @param {Boolean} [options.isTransient] Set this conversation as transient conversation.
 */
export class Conversation extends Object {
  constructor(
    name: string,
    options?: { isSytem?: boolean; isTransient?: boolean }
  );
  getCreator(): string;
  getLastMessageAt(): Date;
  getMembers(): string[];
  addMember(member: string): Conversation;
  getMutedMembers(): string[];
  getName(): string;
  isTransient(): boolean;
  isSystem(): boolean;
  send(
    fromClient: string,
    message: string | object,
    options?: { transient?: boolean; pushData?: object; toClients?: string[] },
    authOptions?: AuthOptions
  ): Promise<void>;
  broadcast(
    fromClient: string,
    message: string | object,
    options?: { pushData?: object; validTill?: number | Date },
    authOptions?: AuthOptions
  ): Promise<void>;
}

declare class Statistic {
  name: string;
  value: number;
  version?: number;
}

declare interface Ranking {
  value: number;
  user: User;
  rank: number;
  includedStatistics?: Statistic[];
}

declare interface UpdateStatisticsOptions extends AuthOptions {
  overwrite?: boolean;
}

declare interface LeaderboardArchive {
  statisticName: string;
  version: number;
  status: string;
  url: string;
  activatedAt: Date;
  deactivatedAt: Date;
}

export class Leaderboard {
  statisticName: string;
  order?: LeaderboardOrder;
  updateStrategy?: LeaderboardUpdateStrategy;
  versionChangeInterval?: LeaderboardVersionChangeInterval;
  version?: number;
  nextResetAt?: Date;
  createdAt?: Date;

  static createWithoutData(statisticName: string): Leaderboard;
  static createLeaderboard(
    options: {
      statisticName: string;
      order: LeaderboardOrder;
      versionChangeInterval?: LeaderboardVersionChangeInterval;
      updateStrategy?: LeaderboardUpdateStrategy;
    },
    authOptions?: AuthOptions
  ): Promise<Leaderboard>;
  static getLeaderboard(
    statisticName: string,
    authOptions?: AuthOptions
  ): Promise<Leaderboard>;
  static getStatistics(
    user: User,
    options?: { statisticNames?: string[] }
  ): Promise<Statistic[]>;
  static updateStatistics(
    user: User,
    statistics: { [name: string]: number },
    options?: UpdateStatisticsOptions
  ): Promise<Statistic[]>;
  static deleteStatistics(
    user: User,
    statisticNames: string[],
    authOptions?: AuthOptions
  ): Promise<void>;

  fetch(authOptions?: AuthOptions): Promise<Leaderboard>;
  count(
    options?: {
      version?: number;
    },
    authOptions?: AuthOptions
  ): Promise<Number>;
  getResults(
    options?: {
      skip?: number;
      limit?: number;
      selectUserKeys?: string | string[];
      includeUserKeys?: string | string[];
      includeStatistics?: string | string[];
      version?: number;
    },
    authOptions?: AuthOptions
  ): Promise<Ranking[]>;
  getResultsAroundUser(
    user: User,
    options?: {
      limit?: number;
      selectUserKeys?: string | string[];
      includeUserKeys?: string | string[];
      includeStatistics?: string | string[];
      version?: number;
    },
    authOptions?: AuthOptions
  ): Promise<Ranking[]>;
  getResultsAroundUser(
    options?: {
      limit?: number;
      selectUserKeys?: string | string[];
      includeUserKeys?: string | string[];
      includeStatistics?: string | string[];
      version?: number;
    },
    authOptions?: AuthOptions
  ): Promise<Ranking[]>;
  updateVersionChangeInterval(
    versionChangeInterval: LeaderboardVersionChangeInterval,
    authOptions?: AuthOptions
  ): Promise<Leaderboard>;
  updateUpdateStrategy(
    updateStrategy: LeaderboardUpdateStrategy,
    authOptions?: AuthOptions
  ): Promise<Leaderboard>;
  reset(authOptions?: AuthOptions): Promise<Leaderboard>;
  destroy(authOptions?: AuthOptions): Promise<void>;
  getArchives(
    options?: {
      skip?: number;
      limit?: number;
    },
    authOptions?: AuthOptions
  ): Promise<LeaderboardArchive>;
}

export enum LeaderboardOrder {
  ASCENDING,
  DESCENDING,
}

export enum LeaderboardUpdateStrategy {
  BETTER,
  LAST,
  SUM,
}

export enum LeaderboardVersionChangeInterval {
  NEVER,
  DAY,
  WEEK,
  MONTH,
}

export class Error {
  code: number;
  message: string;
  rawMessage?: string;

  constructor(code: number, message: string);

  /**
   * Error code indicating some error other than those enumerated here.
   */
  static OTHER_CAUSE: -1;

  /**
   * Error code indicating that something has gone wrong with the server.
   * If you get this error code, it is AV's fault.
   */
  static INTERNAL_SERVER_ERROR: 1;

  /**
   * Error code indicating the connection to the AV servers failed.
   */
  static CONNECTION_FAILED: 100;

  /**
   * Error code indicating the specified object doesn't exist.
   */
  static OBJECT_NOT_FOUND: 101;

  /**
   * Error code indicating you tried to query with a datatype that doesn't
   * support it, like exact matching an array or object.
   */
  static INVALID_QUERY: 102;

  /**
   * Error code indicating a missing or invalid classname. Classnames are
   * case-sensitive. They must start with a letter, and a-zA-Z0-9_ are the
   * only valid characters.
   */
  static INVALID_CLASS_NAME: 103;

  /**
   * Error code indicating an unspecified object id.
   */
  static MISSING_OBJECT_ID: 104;

  /**
   * Error code indicating an invalid key name. Keys are case-sensitive. They
   * must start with a letter, and a-zA-Z0-9_ are the only valid characters.
   */
  static INVALID_KEY_NAME: 105;

  /**
   * Error code indicating a malformed pointer. You should not see this unless
   * you have been mucking about changing internal AV code.
   */
  static INVALID_POINTER: 106;

  /**
   * Error code indicating that badly formed JSON was received upstream. This
   * either indicates you have done something unusual with modifying how
   * things encode to JSON, or the network is failing badly.
   */
  static INVALID_JSON: 107;

  /**
   * Error code indicating that the feature you tried to access is only
   * available internally for testing purposes.
   */
  static COMMAND_UNAVAILABLE: 108;

  /**
   * You must call AV.initialize before using the AV library.
   */
  static NOT_INITIALIZED: 109;

  /**
   * Error code indicating that a field was set to an inconsistent type.
   */
  static INCORRECT_TYPE: 111;

  /**
   * Error code indicating an invalid channel name. A channel name is either
   * an empty string (the broadcast channel) or contains only a-zA-Z0-9_
   * characters.
   */
  static INVALID_CHANNEL_NAME: 112;

  /**
   * Error code indicating that push is misconfigured.
   */
  static PUSH_MISCONFIGURED: 115;

  /**
   * Error code indicating that the object is too large.
   */
  static OBJECT_TOO_LARGE: 116;

  /**
   * Error code indicating that the operation isn't allowed for clients.
   */
  static OPERATION_FORBIDDEN: 119;

  /**
   * Error code indicating the result was not found in the cache.
   */
  static CACHE_MISS: 120;

  /**
   * Error code indicating that an invalid key was used in a nested
   * JSONObject.
   */
  static INVALID_NESTED_KEY: 121;

  /**
   * Error code indicating that an invalid filename was used for AVFile.
   * A valid file name contains only a-zA-Z0-9_. characters and is between 1
   * and 128 characters.
   */
  static INVALID_FILE_NAME: 122;

  /**
   * Error code indicating an invalid ACL was provided.
   */
  static INVALID_ACL: 123;

  /**
   * Error code indicating that the request timed out on the server. Typically
   * this indicates that the request is too expensive to run.
   */
  static TIMEOUT: 124;

  /**
   * Error code indicating that the email address was invalid.
   */
  static INVALID_EMAIL_ADDRESS: 125;

  /**
   * Error code indicating a missing content type.
   */
  static MISSING_CONTENT_TYPE: 126;

  /**
   * Error code indicating a missing content length.
   */
  static MISSING_CONTENT_LENGTH: 127;

  /**
   * Error code indicating an invalid content length.
   */
  static INVALID_CONTENT_LENGTH: 128;

  /**
   * Error code indicating a file that was too large.
   */
  static FILE_TOO_LARGE: 129;

  /**
   * Error code indicating an error saving a file.
   */
  static FILE_SAVE_ERROR: 130;

  /**
   * Error code indicating an error deleting a file.
   */
  static FILE_DELETE_ERROR: 153;

  /**
   * Error code indicating that a unique field was given a value that is
   * already taken.
   */
  static DUPLICATE_VALUE: 137;

  /**
   * Error code indicating that a role's name is invalid.
   */
  static INVALID_ROLE_NAME: 139;

  /**
   * Error code indicating that an application quota was exceeded.  Upgrade to
   * resolve.
   */
  static EXCEEDED_QUOTA: 140;

  /**
   * Error code indicating that a Cloud Code script failed.
   */
  static SCRIPT_FAILED: 141;

  /**
   * Error code indicating that a Cloud Code validation failed.
   */
  static VALIDATION_ERROR: 142;

  /**
   * Error code indicating that invalid image data was provided.
   */
  static INVALID_IMAGE_DATA: 150;

  /**
   * Error code indicating an unsaved file.
   */
  static UNSAVED_FILE_ERROR: 151;

  /**
   * Error code indicating an invalid push time.
   */
  static INVALID_PUSH_TIME_ERROR: 152;

  /**
   * Error code indicating that the username is missing or empty.
   */
  static USERNAME_MISSING: 200;

  /**
   * Error code indicating that the password is missing or empty.
   */
  static PASSWORD_MISSING: 201;

  /**
   * Error code indicating that the username has already been taken.
   */
  static USERNAME_TAKEN: 202;

  /**
   * Error code indicating that the email has already been taken.
   */
  static EMAIL_TAKEN: 203;

  /**
   * Error code indicating that the email is missing, but must be specified.
   */
  static EMAIL_MISSING: 204;

  /**
   * Error code indicating that a user with the specified email was not found.
   */
  static EMAIL_NOT_FOUND: 205;

  /**
   * Error code indicating that a user object without a valid session could
   * not be altered.
   */
  static SESSION_MISSING: 206;

  /**
   * Error code indicating that a user can only be created through signup.
   */
  static MUST_CREATE_USER_THROUGH_SIGNUP: 207;

  /**
   * Error code indicating that an an account being linked is already linked
   * to another user.
   */
  static ACCOUNT_ALREADY_LINKED: 208;

  /**
   * Error code indicating that a user cannot be linked to an account because
   * that account's id could not be found.
   */
  static LINKED_ID_MISSING: 250;

  /**
   * Error code indicating that a user with a linked (e.g. Facebook) account
   * has an invalid session.
   */
  static INVALID_LINKED_SESSION: 251;

  /**
   * Error code indicating that a service being linked (e.g. Facebook or
   * Twitter) is unsupported.
   */
  static UNSUPPORTED_SERVICE: 252;

  /**
   * Error code indicating a real error code is unavailable because
   * we had to use an XDomainRequest object to allow CORS requests in
   * Internet Explorer, which strips the body from HTTP responses that have
   * a non-2XX status code.
   */
  static X_DOMAIN_REQUEST: 602;
}

/**
 * @class
 * A AV.Op is an atomic operation that can be applied to a field in a
 * AV.Object. For example, calling <code>object.set("foo", "bar")</code>
 * is an example of a AV.Op.Set. Calling <code>object.unset("foo")</code>
 * is a AV.Op.Unset. These operations are stored in a AV.Object and
 * sent to the server as part of <code>object.save()</code> operations.
 * Instances of AV.Op should be immutable.
 *
 * You should not create subclasses of AV.Op or instantiate AV.Op
 * directly.
 */
export namespace Op {
  interface BaseOperation extends IBaseObject {
    objects(): any[];
  }

  interface Add extends BaseOperation {}

  interface AddUnique extends BaseOperation {}

  interface Increment extends IBaseObject {
    amount: number;
  }

  interface Relation extends IBaseObject {
    added(): Object[];
    removed: Object[];
  }

  interface Set extends IBaseObject {
    value(): any;
  }

  interface Unset extends IBaseObject {}
}

/**
 * Contains functions to deal with Push in AV
 * @name AV.Push
 * @namespace
 */
export namespace Push {
  function send<T>(data: PushData, options?: AuthOptions): Promise<T>;

  interface PushData {
    prod?: 'dev' | 'prod';
    channels?: string[];
    push_time?: Date;
    expiration_time?: Date;
    expiration_interval?: number;
    flow_control?: number;
    where?: Query<Installation>;
    cql?: string;
    data?: any;
    alert?: string;
    badge?: string;
    sound?: string;
    title?: string;
  }
}

export namespace Cloud {
  function run(name: string, data?: any, options?: AuthOptions): Promise<any>;
  function rpc(name: string, data?: any, options?: AuthOptions): Promise<any>;
  function useMasterKey(): void;
  function requestSmsCode(
    data:
      | string
      | {
          mobilePhoneNumber: string;
          template?: string;
          sign?: string;
          smsType?: 'sms' | 'voice';
        },
    options?: SMSAuthOptions
  ): Promise<void>;
  function verifySmsCode(code: string, phone: string): Promise<void>;
  function requestCaptcha(
    options?: CaptchaOptions,
    authOptions?: AuthOptions
  ): Promise<Captcha>;
  function verifyCaptcha(code: string, captchaToken: string): Promise<void>;
  function getServerDate(): Promise<Date>;
}

export class Status {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  messageId?: number;
  inboxType: string;
  constructor(imageUrl?: string | null, message?: string | null);
  constructor(data: Record<string, any>);
  static sendStatusToFollowers(
    status: Status,
    options?: AuthOptions
  ): Promise<Status>;
  static sendPrivateStatus(
    status: Status,
    target: string,
    options?: AuthOptions
  ): Promise<Status>;
  static countUnreadStatuses(
    owner: User,
    inboxType?: string,
    options?: AuthOptions
  ): Promise<{ total: number; unread: number }>;
  static resetUnreadCount(
    owner: User,
    inboxType?: string,
    options?: AuthOptions
  ): Promise<any>;
  static statusQuery(source?: User): Query<Object>;
  static inboxQuery(owner?: User, inboxType?: string): InboxQuery;
  get(key: string): any;
  set(key: string, value: any): this;
  destroy(options?: AuthOptions): Promise<any>;
  toObject(): Object;
  send(options?: AuthOptions): Promise<this>;
}

// @ts-ignore
export class InboxQuery extends Query<Status> {
  sinceId(id: number): this;
  maxId(id: number): this;
  owner(owner: User): this;
  inboxType(type: string): this;
}

interface ServerURLs {
  api?: string;
  engine?: string;
  stats?: string;
  push?: string;
  rtm?: string;
}

export function init(options: {
  appId: string;
  appKey: string;
  masterKey?: string;
  hookKey?: string;
  region?: string;
  production?: boolean;
  serverURL?: string | ServerURLs;
  serverURLs?: string | ServerURLs;
  disableCurrentUser?: boolean;
  realtime?: Realtime;
}): void;
export function setServerURL(urls: string | ServerURLs): void;
export function setServerURLs(urls: string | ServerURLs): void;
export function setProduction(production: boolean): void;
export function setRequestTimeout(ms: number): void;
export function parseJSON(json: any): Object | File | any;
export function parse(text: string): Object | File | any;
export function stringify(target: Object | File | any): string | undefined;
export function request(options: {
  method: string;
  path: string;
  query?: object;
  data?: object;
  authOptions?: AuthOptions;
  service?: string;
  version?: string;
}): Promise<any>;

export namespace debug {
  function enable(): void;
  function enable(namespaces: string): void;
  function disable(): string;
}

export function setAdapters(adapters: Partial<Adapters>): void;
