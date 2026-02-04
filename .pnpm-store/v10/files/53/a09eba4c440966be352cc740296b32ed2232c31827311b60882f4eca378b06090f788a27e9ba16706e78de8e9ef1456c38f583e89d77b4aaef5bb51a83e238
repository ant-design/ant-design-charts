export type ControlledSpeechConfig = {
    recording?: boolean;
    onRecordingChange: (recording: boolean) => void;
};
export type AllowSpeech = boolean | ControlledSpeechConfig;
export default function useSpeech(onSpeech: (transcript: string) => void, allowSpeech?: AllowSpeech): readonly [any, (forceBreak: boolean) => void, boolean];
