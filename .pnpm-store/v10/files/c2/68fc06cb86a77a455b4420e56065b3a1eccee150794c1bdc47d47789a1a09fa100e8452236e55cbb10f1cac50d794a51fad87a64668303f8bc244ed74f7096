# `@napi-rs/nice`

![https://github.com/Brooooooklyn/nice/actions](https://github.com/Brooooooklyn/nice/workflows/CI/badge.svg)
[![install size](https://packagephobia.com/badge?p=@napi-rs/nice)](https://packagephobia.com/result?p=@napi-rs/nice)
[![Downloads](https://img.shields.io/npm/dm/@napi-rs/nice.svg?sanitize=true)](https://npmcharts.com/compare/@napi-rs/nice?minimal=true)

> 🚀 Help me to become a full-time open-source developer by [sponsoring me on Github](https://github.com/sponsors/Brooooooklyn)

***https://linux.die.net/man/2/nice binding for Node.js***

# Usage

## Install this test package

```
pnpm add @napi-rs/nice
```

or

```
yarn add @napi-rs/nice
```

or

```
npm install @napi-rs/nice

```

## `nice`

On Unix, `nice()` adds inc to the nice value for the calling process. (A higher nice value means a low priority.) Only the superuser may specify a negative increment, or priority increase. The range for nice values is described in [getpriority(2)](https://linux.die.net/man/2/getpriority).

On Windows, it uses the [`SetThreadPriority`](https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-setthreadpriority) function.

```js
// on Unix
import { nice } from '@napi-rs/nice'

nice(2)
```

```js
// on Windows
import { nice, WindowsThreadPriority } from '@napi-rs/nice'

nice(WindowsThreadPriority.THREAD_PRIORITY_ABOVE_NORMAL)
```

## `getCurrentProcessPriority`

This function gets the priority of the current process.
On Unix, it uses the [`getpriority(2)`](https://linux.die.net/man/2/getpriority).

On Windows, it uses the [`GetThreadPriority`](https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-getthreadpriority) function.

| Priority Constant             | Value      | Description                                                                                                                                                                                                                      |
| ----------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| THREAD_MODE_BACKGROUND_BEGIN  | 0x00010000 | Begin background processing mode. The system lowers the resource scheduling priorities of the thread so that it can perform background work without significantly affecting activity in the foreground.                          |
|                               |            | This value can be specified only if hThread is a handle to the current thread. The function fails if the thread is already in background processing mode.                                                                        |
|                               |            | Windows Server 2003: This value is not supported.                                                                                                                                                                                |
| THREAD_MODE_BACKGROUND_END    | 0x00020000 | End background processing mode. The system restores the resource scheduling priorities of the thread as they were before the thread entered background processing mode.                                                          |
|                               |            | This value can be specified only if hThread is a handle to the current thread. The function fails if the thread is not in background processing mode.                                                                            |
|                               |            | Windows Server 2003: This value is not supported.                                                                                                                                                                                |
| THREAD_PRIORITY_ABOVE_NORMAL  | 1          | Priority 1 point above the priority class.                                                                                                                                                                                       |
| THREAD_PRIORITY_BELOW_NORMAL  | -1         | Priority 1 point below the priority class.                                                                                                                                                                                       |
| THREAD_PRIORITY_HIGHEST       | 2          | Priority 2 points above the priority class.                                                                                                                                                                                      |
| THREAD_PRIORITY_IDLE          | -15        | Base priority of 1 for IDLE_PRIORITY_CLASS, BELOW_NORMAL_PRIORITY_CLASS, NORMAL_PRIORITY_CLASS, ABOVE_NORMAL_PRIORITY_CLASS, or HIGH_PRIORITY_CLASS processes, and a base priority of 16 for REALTIME_PRIORITY_CLASS processes.  |
| THREAD_PRIORITY_LOWEST        | -2         | Priority 2 points below the priority class.                                                                                                                                                                                      |
| THREAD_PRIORITY_NORMAL        | 0          | Normal priority for the priority class.                                                                                                                                                                                          |
| THREAD_PRIORITY_TIME_CRITICAL | 15         | Base priority of 15 for IDLE_PRIORITY_CLASS, BELOW_NORMAL_PRIORITY_CLASS, NORMAL_PRIORITY_CLASS, ABOVE_NORMAL_PRIORITY_CLASS, or HIGH_PRIORITY_CLASS processes, and a base priority of 31 for REALTIME_PRIORITY_CLASS processes. |
