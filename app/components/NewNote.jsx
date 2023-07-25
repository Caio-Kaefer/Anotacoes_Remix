import styles from './NewNote.css';
import { Form, useNavigation } from '@remix-run/react';
function NewNote() {
 const navigation = useNavigation();
 const isSubmiting = navigation.state
 console.log(isSubmiting);
    return (
    <Form method="post" id="note-form">
      <p>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Conteúdo</label>
        <textarea id="content" name="content" rows="5" required />
      </p>
      <div className="form-actions">
      <button>Adicionar Anotação</button>
      </div>
    </Form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}