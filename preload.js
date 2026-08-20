const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('studio', {
  loadCatalog: () => ipcRenderer.invoke('catalog:load'),
  loadJeremyVideos: () => ipcRenderer.invoke('jeremy:load'),
  loadReferenceChapters: () => ipcRenderer.invoke('reference:chapters'),
  load: () => ipcRenderer.invoke('store:load'), save: (store) => ipcRenderer.invoke('store:save', store),
  exportSession: (store) => ipcRenderer.invoke('session:export', store), importSession: () => ipcRenderer.invoke('session:import'),
  chooseReference: () => ipcRenderer.invoke('reference:choose'), useProvidedVolumeOne: () => ipcRenderer.invoke('reference:provided-volume-one'), openLink: (url) => ipcRenderer.invoke('link:open', url),
  ttsStatus: () => ipcRenderer.invoke('tts:status'), synthesize: (payload) => ipcRenderer.invoke('tts:synthesize', payload)
});
