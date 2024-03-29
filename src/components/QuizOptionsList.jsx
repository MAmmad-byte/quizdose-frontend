import AdminInputOption from './form/AdminInputOption'
import { useForm } from 'react-hook-form';

export default function QuizOptionsList({options, onSubmit}) {
    const {
        setValue,
      } = useForm();
    //   onSubmit(handleSubmit((data)=>console.log(data)))
        
      
  return (
    <>
    {
        options.map((option) => (
            <AdminInputOption
              onClick={() => handleDelete(option)}
              key={option}
              name={`option${option}`}
              placeholder={"type option"}
              setValue={setValue}
            />
          ))
    }
            </>
  )
}
