import * as Dialog from "@radix-ui/react-dialog"
import { X } from 'lucide-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'sonner'

interface NewNoteCardProps{
  onNoteCreated: (content: string) => void
}

// estudar
let speechRecognition: SpeechRecognition | null = null

export function NewNoteCard({ onNoteCreated }: NewNoteCardProps){
  const [sholdShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')
  const [isRecording, setIsRecording] = useState(false)

  function handleStartEditor() {
    setShouldShowOnboarding(false)
  }
  
  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if(event.target.value===''){
      setShouldShowOnboarding(true)
    }
  }

  function handleSaveNote(event: FormEvent){
    event.preventDefault();

    if(content === ''){
      return 
    }

    onNoteCreated(content)
    setContent('')
    setShouldShowOnboarding(true)

    toast.success('Nota criada com sucesso!')
  }

  function handleStartRecording() {
    setIsRecording(true)

    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window
      || 'webkitSpeechRecognition' in window

    if(!isSpeechRecognitionAPIAvailable) {
      alert('Infelizmente seu navegador não suporta a API de gravação!')
      return
    }

    const SpeechrecognitionAPi = window.SpeechRecognition ||  window.webkitSpeechRecognition

    speechRecognition = new SpeechrecognitionAPi()

    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true

    speechRecognition.onresult = (event) => {
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    }

    speechRecognition.onerror = (event) => {
      console.error(event)
    }

    speechRecognition.start()

    setShouldShowOnboarding(false)
  }

  function handleStopRecording() {
    setIsRecording(false)

    speechRecognition?.stop()
  }
  
    return(
      <Dialog.Root>
        <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 p-5 gap-3 text-left hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400">
          <span className="text-sm font-medium text-slate-300">Adicionar nota</span> 

          <p className="text-sm font-medium leading-6 text-slate-400">
            Grave uma nota em áudio que será connvertida para texto automaticamente.
          </p>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Overlay className="inset-0 fixed bg-black/50"/>
          <Dialog.Content 
          className="fixed inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none overflow-hidden">

            <Dialog.Close className="absolute right-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5"/>
            </Dialog.Close>

            <form className="flex flex-col flex-1">
              <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-200">
                  Adicionar nota
                </span> 

                {sholdShowOnboarding ? (
                  <p className="text-sm font-medium leading-6 text-slate-400">
                    Comece <button type="button" className="font-medium text-lime-400 hover:underline" onClick={handleStartRecording}>gravando uma nota</button> em áudio ou se preferir <button type="button" className="font-medium text-lime-400 hover:underline" onClick={handleStartEditor}>utilize apesnas texto.</button>
                  </p>
                ) : (
                  <textarea autoFocus value={content}
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1  outline-none" onChange={handleContentChanged}/>
                )}
              </div>

              {isRecording ? (
                <button type="button"
                className="flex items-center justify-center gap-3 w-full bg-slate-900 py-4 text-center text-sm text-slate-300 outline-none font-semibold hover:text-slate-100"
                onClick={handleStopRecording}>

                  <div className="size-3 rounded-full bg-red-500 animate-pulse" />
                  Gravando! (clique p/ interromper) 

                </button>
              ) : (
                <button type="button" onClick={handleSaveNote}
                  className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-semibold hover:bg-lime-500">
                  Salvar nota
                </button>
              )}

            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
}