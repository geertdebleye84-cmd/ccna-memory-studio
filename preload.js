const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('studio', {
  loadCatalog: () => ipcRenderer.invoke('catalog:load'),
  loadJeremyVideos: () => ipcRenderer.invoke('jeremy:load'),
  loadReferenceChapters: () => ipcRenderer.invoke('reference:chapters'),
  loadDiagramPdfs: () => ipcRenderer.invoke('diagrams:load'),
  importDiagramPdfs: () => ipcRenderer.invoke('diagrams:import'),
  load: () => ipcRenderer.invoke('store:load'), save: (store) => ipcRenderer.invoke('store:save', store),
  exportSession: (store) => ipcRenderer.invoke('session:export', store), importSession: () => ipcRenderer.invoke('session:import'),
  chooseReference: () => ipcRenderer.invoke('reference:choose'), useProvidedVolumeOne: () => ipcRenderer.invoke('reference:provided-volume-one'), openLink: (url) => ipcRenderer.invoke('link:open', url),
  ttsStatus: () => ipcRenderer.invoke('tts:status'), synthesize: (payload) => ipcRenderer.invoke('tts:synthesize', payload),
  ai: {
    status: () => ipcRenderer.invoke('ai:status'),
    generateWithOllama: (payload) => ipcRenderer.invoke('ai:ollama-generate', payload),
    buildCoursePrompt: (payload) => ipcRenderer.invoke('ai:course-prompt', payload),
    extractJson: (text) => ipcRenderer.invoke('ai:extract-json', text),
    openWebProvider: (payload) => ipcRenderer.invoke('ai:web-open', payload),
    sendWebPrompt: (payload) => ipcRenderer.invoke('ai:web-send', payload),
    captureWebResponse: () => ipcRenderer.invoke('ai:web-capture'),
    closeWebProvider: () => ipcRenderer.invoke('ai:web-close')
  }
});
