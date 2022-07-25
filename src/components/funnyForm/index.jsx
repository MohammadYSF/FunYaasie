import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import classes from './styles.module.css';
export function FunnyForm({ onAdd }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, touchedFields, isSubmitSuccessful, }, reset, } = useForm({
    defaultValues: {
      id: -1,
      reporter: "",
      subject: "",
      description: ""
    }
  });
  const onSubmit = (data) => {
    console.log("onsubmit", data);
    onAdd(data);
    reset();
    alert("سوژه مد نظر شما با موفقیت ثبت گردید");
    navigate("/");
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-5 mx-auto">
      <div className="mb-3">
        <input type="number" value={-1} id="id" name="id" className="d-none" {...register("id")} />
        <input type="text" placeholder="گزارش دهنده"
          className={` border-top-0  border-start-0 border-end-0 form-control rounded-0 ${classes.customInput}`} id="reporter" name="reporter"
          {...register("reporter",
            {
              required:
              {
                value: true,
                message: 'باید پر کنی',
              },
              minLength:
              {
                value: 3,
                message: 'هر اسمی حداقل سه حرف باید باشه منطقا'
              },
              maxLength:
              {
                value: 100,
                message: 'چنین اسم طولانی منطقی نمی تونه باشه'
              },
              pattern:
              {
                value: /^[\u0600-\u06FF\s]+$/i,
                message: 'زبان پارسی را پاس بداریم'
              }
            })} />
        { }
        < div id="emailHelp"
          className={`form-text text-sm rounded-0 ${classes.customErrorText}`}

          style={{ textAlign: 'right' }}>

          {(errors != null && errors.reporter != null) && errors.reporter.message}

        </div>

      </div>
      <div className="mb-3">

        <input type="text" placeholder="گوینده"
          className={` border-top-0 border-start-0 border-end-0 form-control rounded-0 ${classes.customInput}`} id="subject" name="subject"
          {...register("subject",
            {
              required:
              {
                value: true,
                message: 'باید پر کنی',
              },
              minLength:
              {
                value: 3,
                message: 'هر اسمی حداقل سه حرف باید باشه منطقا'
              },
              maxLength:
              {
                value: 100,
                message: 'چنین اسم طولانی منطقی نمی تونه باشه'
              },

              pattern:
              {
                value: /^[\u0600-\u06FF\s]+$/i,
                message: 'زبان پارسی را پاس بداریم'
              }
            })} />
        <div id="emailHelp"
          className={`form-text text-sm rounded-0 ${classes.customErrorText}`}

          style={{ textAlign: 'right' }}>

          {(errors != null && errors.subject != null) && errors.subject.message}

        </div>
      </div>

      <div className="mb-3">

        <input type="text" placeholder="توضیحات تکمیلی"
          className={` border-top-0 border-start-0 border-end-0 form-control rounded-0 ${classes.customInput}`} id="description"
          name="description"
          {...register("description",
            {
              required:
              {
                value: true,
                message: 'باید پر کنی',
              },
              maxLength:
              {
                value: 1000,
                message: 'زیادی داری می نویسی دیگه'
              },
              pattern:
              {
                value: /^[\u0600-\u06FF\s]+$/i,
                message: 'زبان پارسی را پاس بداریم'
              }
            })} />
        <div id="emailHelp"
          className={`form-text text-sm rounded-0 ${classes.customErrorText}`}
          style={{ textAlign: 'right' }}>

          {(errors != null && errors.description != null) && errors.description.message}

        </div>
      </div>
      <div className="row justify-content-center">
        <input type="submit" className={`btn ${classes.customBtn} rounded-0 col-6`} value="ثبت" />
      </div>
    </form>
  );
}