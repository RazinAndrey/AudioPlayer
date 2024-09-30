import MediaManager from "./media-manager.js";

export const mediaClient = () => {
    // закрыть плеер
    window.onclick = (event) => MediaManager.closeAudioPlayer(event);
    // переключение песни
    MediaManager.prevBtnModal.onclick = () => MediaManager.prevModal();
    MediaManager.nextBtnModal.onclick = () => MediaManager.nextModal();
    // поставить на паузу
    MediaManager.btnPlayOrStop.onclick = () => MediaManager.playOrStop();
    // прогресс инпута у аудио
    MediaManager.audioModel.addEventListener('timeupdate', () => MediaManager.moveProgres());
    // прогресс самого аудио
    MediaManager.progress.addEventListener('input', () => MediaManager.moveAudo());
    // начать сначала
    MediaManager.restart.onclick = () => MediaManager.restartAudio();
    // громкость
    MediaManager.volumeControl.addEventListener('input', () => MediaManager.volume());
    // переключатель громкости
    MediaManager.btnVolume.onclick = () => MediaManager.toggleVolume();

}