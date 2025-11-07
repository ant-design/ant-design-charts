/* IMPORT */
import process from 'node:process';
/* MAIN */
const DEFAULT_ENCODING = 'utf8';
const DEFAULT_FILE_MODE = 0o666;
const DEFAULT_FOLDER_MODE = 0o777;
const DEFAULT_READ_OPTIONS = {};
const DEFAULT_WRITE_OPTIONS = {};
const DEFAULT_USER_UID = process.geteuid ? process.geteuid() : -1;
const DEFAULT_USER_GID = process.getegid ? process.getegid() : -1;
const DEFAULT_INTERVAL_ASYNC = 200;
const DEFAULT_TIMEOUT_ASYNC = 7500;
const DEFAULT_TIMEOUT_SYNC = 1000;
const IS_POSIX = !!process.getuid;
const IS_USER_ROOT = process.getuid ? !process.getuid() : false;
const LIMIT_BASENAME_LENGTH = 128; //TODO: Fetch the real limit from the filesystem //TODO: Fetch the whole-path length limit too
const NOOP = () => { };
/* EXPORT */
export { DEFAULT_ENCODING, DEFAULT_FILE_MODE, DEFAULT_FOLDER_MODE, DEFAULT_READ_OPTIONS, DEFAULT_WRITE_OPTIONS, DEFAULT_USER_UID, DEFAULT_USER_GID, DEFAULT_INTERVAL_ASYNC, DEFAULT_TIMEOUT_ASYNC, DEFAULT_TIMEOUT_SYNC, IS_POSIX, IS_USER_ROOT, LIMIT_BASENAME_LENGTH, NOOP };
