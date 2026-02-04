import { useEvent, useMergedState } from 'rc-util';
import React from 'react';

// Ensure that the SpeechRecognition API is available in the browser
let SpeechRecognition;
if (!SpeechRecognition && typeof window !== 'undefined') {
  SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
}
export default function useSpeech(onSpeech, allowSpeech) {
  const onEventSpeech = useEvent(onSpeech);

  // ========================== Speech Config ==========================
  const [controlledRecording, onControlledRecordingChange, speechInControlled] = React.useMemo(() => {
    if (typeof allowSpeech === 'object') {
      return [allowSpeech.recording, allowSpeech.onRecordingChange, typeof allowSpeech.recording === 'boolean'];
    }
    return [undefined, undefined, false];
  }, [allowSpeech]);

  // ======================== Speech Permission ========================
  const [permissionState, setPermissionState] = React.useState(null);
  React.useEffect(() => {
    if (typeof navigator !== 'undefined' && 'permissions' in navigator) {
      let lastPermission = null;
      navigator.permissions.query({
        name: 'microphone'
      }).then(permissionStatus => {
        setPermissionState(permissionStatus.state);

        // Keep the last permission status.
        permissionStatus.onchange = function () {
          setPermissionState(this.state);
        };
        lastPermission = permissionStatus;
      });
      return () => {
        // Avoid memory leaks
        if (lastPermission) {
          lastPermission.onchange = null;
        }
      };
    }
  }, []);

  // Convert permission state to a simple type
  const mergedAllowSpeech = SpeechRecognition && permissionState !== 'denied';

  // ========================== Speech Events ==========================
  const recognitionRef = React.useRef(null);
  const [recording, setRecording] = useMergedState(false, {
    value: controlledRecording
  });
  const forceBreakRef = React.useRef(false);
  const ensureRecognition = () => {
    if (mergedAllowSpeech && !recognitionRef.current) {
      const recognition = new SpeechRecognition();
      recognition.onstart = () => {
        setRecording(true);
      };
      recognition.onend = () => {
        setRecording(false);
      };
      recognition.onresult = event => {
        if (!forceBreakRef.current) {
          const transcript = event.results?.[0]?.[0]?.transcript;
          onEventSpeech(transcript);
        }
        forceBreakRef.current = false;
      };
      recognitionRef.current = recognition;
    }
  };
  const triggerSpeech = useEvent(forceBreak => {
    // Ignore if `forceBreak` but is not recording
    if (forceBreak && !recording) {
      return;
    }
    forceBreakRef.current = forceBreak;
    if (speechInControlled) {
      // If in controlled mode, do nothing
      onControlledRecordingChange?.(!recording);
    } else {
      ensureRecognition();
      if (recognitionRef.current) {
        if (recording) {
          recognitionRef.current.stop();
          onControlledRecordingChange?.(false);
        } else {
          recognitionRef.current.start();
          onControlledRecordingChange?.(true);
        }
      }
    }
  });
  return [mergedAllowSpeech, triggerSpeech, recording];
}