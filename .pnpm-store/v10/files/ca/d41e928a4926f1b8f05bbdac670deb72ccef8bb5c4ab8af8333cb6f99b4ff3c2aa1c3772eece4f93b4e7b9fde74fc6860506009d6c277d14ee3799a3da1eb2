let nice
let getCurrentProcessPriority

try {
  const { nice: niceNative, getCurrentProcessPriority: getCurrentProcessPriorityNative } = require('./index.js')
  nice = niceNative
  getCurrentProcessPriority = getCurrentProcessPriorityNative
} catch (e) {
  if (process.platform !== 'win32') {
    throw e
  }
  // fallback on Windows
  nice = function nice(incr) { return incr }
  getCurrentProcessPriority = function getCurrentProcessPriority() { return 1 }
}

module.exports.nice = nice
module.exports.getCurrentProcessPriority = getCurrentProcessPriority
module.exports.WindowsThreadPriority = {};
(function (WindowsThreadPriority) {
    WindowsThreadPriority[WindowsThreadPriority["ThreadModeBackgroundBegin"] = 65536] = "ThreadModeBackgroundBegin";
    WindowsThreadPriority[WindowsThreadPriority["ThreadModeBackgroundEnd"] = 131072] = "ThreadModeBackgroundEnd";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityAboveNormal"] = 1] = "ThreadPriorityAboveNormal";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityBelowNormal"] = -1] = "ThreadPriorityBelowNormal";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityHighest"] = 2] = "ThreadPriorityHighest";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityIdle"] = -15] = "ThreadPriorityIdle";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityLowest"] = -2] = "ThreadPriorityLowest";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityNormal"] = 0] = "ThreadPriorityNormal";
    WindowsThreadPriority[WindowsThreadPriority["ThreadPriorityTimeCritical"] = 15] = "ThreadPriorityTimeCritical";
})(module.exports.WindowsThreadPriority)
