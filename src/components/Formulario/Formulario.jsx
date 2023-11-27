import { Formik, Form } from 'formik'
import CustomInput from '../CustomInput/CustomImput'
import { basicSchema } from '../../schemas/validate'
import './Formulario.css'
import { VStack } from '@chakra-ui/react'
const Formulario = () => {
    const onSubmit = async (actions) => {
        await new Promise((r) => setTimeout(r, 2000))
        actions.resetForm();
    }

    return (
        <>
            <Formik
                initialValues={{ name: '', lastname: '', email: '', telefono: '', password: '', confirmPassword: '' }}
                validationSchema={basicSchema}
                onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form 
                    className='formulario'>
                        <VStack spacing={4} align='flex-start'>
                        <CustomInput
                            label="Nombre"
                            name="name"
                            type="text"
                            placeholder="Minimo 5 caracteres"
                        />
                        <CustomInput
                            label="Apellido"
                            name="lastname"
                            type="text"
                            placeholder="Minimo 5 caracteres"
                        />
                        <CustomInput
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="ejemplo@ejemplo.com"
                        />

                        <CustomInput
                            label="Telefono"
                            name="telefono"
                            type="text"
                            placeholder="ej. 03515555555"
                        />

                        <CustomInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="********"
                        />
                        <CustomInput
                            label="Repetir Password"
                            name="confirmPassword"
                            type="password"
                            placeholder="********"
                        />
                        <button className="css-button-3d--blue"disabled={isSubmitting} type='submit'>Enviar</button>
                        </VStack>
                    </Form>
                   
                )}
            </Formik>
        </>
    )
}

export default Formulario