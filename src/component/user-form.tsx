import React from 'react';


/**Profile:
 * Open text
 *
 * intenstion:
 * open text
 *
 * pdf or topic
 **/

interface UserFormProps {
  onFormSubmit(formData: FormData): void;
}

export const UserForm: React.FunctionComponent<UserFormProps> = ({onFormSubmit}) => {

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log(formData);
    onFormSubmit(formData);
  }

  return <form onSubmit={handleSubmit}>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Who are you?</span>
        <span className="label-text-alt">Please explain, what is your study level</span>
      </label>
      <textarea name='Profile' className="textarea textarea-bordered h-24" placeholder="Who are you?"></textarea>
    </div>
    <div className="divider"></div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">What is your intention</span>
        <span className="label-text-alt">For what do you need the questions</span>
      </label>
      <textarea name='itention' className="textarea textarea-bordered h-24" placeholder="Itention"></textarea>
    </div>

    <div className="divider"></div>
    <select name='topics' className="select select-bordered w-full max-w-xs">
      <option disabled selected>Who shot first?</option>
      <option>React</option>
      <option>Java</option>
      <option>PHP</option>
      <option>C#</option>
    </select>
    <div className="divider">or</div>
    <input name='text-file' type="file" className="file-input w-full max-w-xs" />
    <div className='p-10'>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </div>
  </form>
};
