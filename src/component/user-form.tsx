import React from 'react';


/**Profile:
 * Open text
 *
 * intenstion:
 * open text
 *
 * pdf or topic
 **/

export interface UserFormProps {
  onFormSubmit(formData: File | null, userQuery: UserQuery): void;
}

export interface UserQuery {
  profile: string;
  intent: string;
  topic: string;
}

export const UserForm: React.FunctionComponent<UserFormProps> = ({onFormSubmit}) => {

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      Profile: {value: string};
      intent: {value: string};
      topics: {value: string};
      pdf_file: {files: File[]};
    };

    const userQuery: UserQuery = {
      profile: target.Profile.value,
      intent: target.intent.value,
      topic: target.topics.value
    };

    if (target.pdf_file.files.length > 0) {
      const file = target.pdf_file.files[0]
       onFormSubmit(file, userQuery);
    }
    onFormSubmit(null, userQuery);
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
      <textarea name='intent' className="textarea textarea-bordered h-24" placeholder="Itention"></textarea>
    </div>

    <div className="divider"></div>
    <select name='topics' className="select select-bordered w-full max-w-xs">
      <option disabled selected>Select the programming language!</option>
      <option>React</option>
      <option>Java</option>
      <option>PHP</option>
      <option>C#</option>
    </select>
    <br />
    <div className="divider text-xl">OR</div>
    <label className="label">
        <span className="label-text">You can also upload a pdf file and you will get some questions about the context</span>
      </label>
    <input name='pdf_file' type="file" className="file-input w-full max-w-xs" />
    <div className='p-10'>
      <button className="btn btn-primary" type='submit'>Submit</button>
    </div>
  </form>
};
