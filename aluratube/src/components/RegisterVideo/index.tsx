import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import { StyledRegisterVideo } from './styles'

// Hook Customizado
function useForm(propsDoForm: { initialValues: { titulo: string, url: string }}) {
    // useState com varios valores
    const [values, setValues] = useState(propsDoForm.initialValues)

    return {
        values,
        handleChange: (e: any) => {
            const value = e.target.value
            const name = e.target.name
            setValues({
                ...values,
                [name]: value
            })
        },
        clearForm() {
            setValues({ titulo: '', url: '' })
        }
    }
}

// -- Supabase - (Desativado no MOMENTO !!)
const PROJECT_URL = 'https://loepraihanzspexrtinn.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvZXByYWloYW56c3BleHJ0aW5uIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDk2MTMsImV4cCI6MTk4Mzc4NTYxM30.J7a1X0ilYMY5r2U_ek_M3apSSaAFSncLGK0XlX0m6mc'
const supabase = createClient(PROJECT_URL, SUPABASE_KEY)

// -- Utilizando GitHub Copilot
// get youtube thumbnail from video url
function getThumbnail(url: string) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

const RegisterVideo = () => {
    const formCadastro = useForm({
        initialValues: { titulo: '', url: '' }
    })
    const [formVisivel, setFormVisivel] = useState(false)


  return (
    <StyledRegisterVideo>
        <button className='add-video' onClick={() => setFormVisivel(true)}>+</button>

        {/* Operadores de Curto-circuito */}
        {formVisivel && (
            <form onSubmit={e => {
                // Pro conceito SPA
                e.preventDefault()

                setFormVisivel(false)
                formCadastro.clearForm()
                // Contrato entre nosso Front e o Backend
                supabase.from('videos').insert({
                    title: formCadastro.values.titulo,
                    url: formCadastro.values.url,
                    thumb: getThumbnail(formCadastro.values.url),
                    playlist: 'jogos'
                }).then((oqueveio) => {
                    console.log(oqueveio);
                 })
            }}>
                <div>
                    <button type='button' className='close-modal' onClick={() => setFormVisivel(false)}>X</button>
                    <input type="text" name='titulo' placeholder='Título do video' value={formCadastro.values.titulo} onChange={formCadastro.handleChange} />
                    <input type="text" name='url' placeholder='URL' value={formCadastro.values.url} onChange={formCadastro.handleChange} />
                    <button type='submit'>Cadastrar</button>
                </div>
            </form>
        )}
    </StyledRegisterVideo>
  )
}

export default RegisterVideo