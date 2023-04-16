import { Formik, Form } from 'formik'
import * as yup from 'yup'
import useModal from '../../hooks/useModal/useModal'
import { MyTextInput } from './FormComponents/MyTextInput'
import { MySelect } from './FormComponents/MySelect'
import { MyCheckbox } from './FormComponents/MyCheckBox'

import styles from './styles.module.css' // Importar el archivo CSS para los estilos del componente

export const Register = () => {
  const [ModalComponent, openModal, closeModal] = useModal()

  return (
    <div className={styles.container2}>
      {' '}
      {/* Agregar la clase para los estilos del contenedor */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          emailAddress: '',
          terms: false,
          role: '',
          password:'',
          password2:''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={yup.object({
          firstName: yup
            .string()
            .max(15, 'deber tener maximo 15 caracteres')
            .required('requerido'),
          lastName: yup
            .string()
            .max(10, 'deber tener maximo 10 caracteres')
            .required('requerido'),
          emailAddress: yup
            .string()
            .email('El correo electrónico no es válido')
            .min(8, 'debe tener al menos 8 caracteres')
            .required('El correo electrónico es obligatorio'),
          password: yup
            .string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña no puede tener más de 20 caracteres')
            .required('Debes ingresar un password')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
            ),
          password2: yup
            .string()
            .min(8, 'La contraseña debe tener al menos 8 caracteres')
            .max(20, 'La contraseña no puede tener más de 20 caracteres')
            .required('Debes repetir la contraseña')
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
              'La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número',
            ),
          terms: yup.boolean().oneOf([true], 'Debe de aceptar las condiciones'),
          role: yup.string().required('Debes seleccionar un rol'),
        })}
      >
        {(formik) => (
          <Form className={styles.form}>
            <h3>Formulario de registro</h3>

            <MyTextInput
              className={styles.input}
              label="Nombre"
              name="firstName"
              placeholder="your first name"
            />
            <MyTextInput
              className={styles.input}
              label="Apellido"
              name="lastName"
              placeholder="your last name"
            />
            <MyTextInput
              className={styles.input}
              label="Email"
              name="emailAddress"
              placeholder="your email"
              type="email"
            />
            <MyTextInput
              className={styles.input}
              label="Password"
              name="password"
              placeholder="Ingresa un password de 8 caracteres"
              type="password"
            />
            <MyTextInput
              className={styles.input}
              label="Repite tu password"
              name="password2"
              placeholder="Repite tu password"
              type="password"
            />
            <MySelect className={styles.input} label="role" name="role">
              <option value="">Selecciona un rol</option>
              <option value="user">User</option>
              <option value="company">Company</option>
            </MySelect>
            <MyCheckbox
              label="Términos y condiciones"
              name="terms"
              onClick={openModal} // Agregar el manejador de eventos onClick
            />

            <button className={styles.submit} type="submit">
              Submit
            </button>
            <br />
          </Form>
        )}
      </Formik>
      <ModalComponent>
        <div>
          Como empresa nos dedicamos única y exclusivamente a la proyección de
          los edificios u obras que aparecen en el sitio web, por lo que no
          somos responsables de la utilidad final que se le dé. Nosotros hacemos
          un proyecto y se realiza en un estricto tipo de lote, con sus
          respectivas normas y características, lo cual especificamos en cada
          proyecto. Por lo que no nos hacemos cargo si se realiza fuera de las
          especificaciones que les sugerimos. Nosotros hacemos un proyecto y se
          realiza en un estricto tipo de lote, con sus respectivas normas y
          características, lo cual especificamos en cada proyecto. Por lo que no
          nos hacemos cargo si se realiza fuera de las especificaciones que les
          sugerimos.
        </div>
      </ModalComponent>
    </div>
  )
}
