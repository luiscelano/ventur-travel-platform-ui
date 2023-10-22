import React, { useState } from 'react';
import * as styles from './styles'
import Typography from 'src/components/Typography'
import Button from 'src/components/Button'
import Tabla from 'src/components/tabla_metas'
//import withGoals from 'src/containers/goals/withGoals'
import Field from 'src/components/Field'
import Select from 'src/components/Select'
import { toast } from 'react-toastify'
import getHttpError from 'src/utils/getHttpError';
import httpClient from 'src/utils/httpClient';

const Metas = () => {
  /* const datos_metas = props.goals
  console.log('metas ', datos_metas) */
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [values, setValues] = useState({
    metaAlcanzar: '',
    anio: '',
    mes: ''
  })

  const [errors, setErrors] = useState({})

  const titulo = 'Agregar Metas'

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    })
  }

  const onSubmit = async () => {
    const inputErrors = validateInputs();
    setErrors(inputErrors);
    if (Object.keys(inputErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const response = await httpClient.post('/metas', values);
        if (response.status === 200) {
          toast.success('Meta agregada correctamente', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000 // Opcional: tiempo que se muestra el mensaje (en milisegundos)
          });
          // Limpia los campos
          setValues({
            metaAlcanzar: '',
            anio: '',
            mes: ''
          });
          // Recarga la tabla de metas
          //props.getGoals();
        }
      } catch (error) {
        const errorMessage = getHttpError(error).message;
        console.error('Error de autentificación:', error);
        setIsSubmitting(false);
        toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: true
        });
      }
    }
  };  

  const validateInputs = () => {
    let errors = {}
    Object.keys(values).forEach((key) => {
        if (!values[key].toString().length) errors[key] = `${key} es un campo requerido`
    })
    return errors
}

  return (
    <>
      <styles.Contenido>
        <Typography type='title'>{titulo}</Typography>
        <styles.infometas>
          <Typography type='paragraph2'>Agrega una Metas Mensual</Typography>
          <Field
            size="medium"
            color="background1"
            placeholder="Meta a alcanzar"
            id="metaAlcanzar"
            type="number"
            value={values.metaAlcanzar}
            onChange={onChange}
          />
          <article>
            <Field
              size="medium"
              color="background1"
              placeholder="Año"
              id="anio"
              type="number"
              value={values.anio}
              onChange={onChange}
            />
            <Select
              size="medium"
              color="background1"
              id="mes"
              value={values.mes}
              onChange={onChange}
            >
              <option value="1">Enero</option>
              <option value="2">Febrero</option>
              <option value="3">Marzo</option>
              <option value="4">Abril</option>
              <option value="5">Mayo</option>
              <option value="6">Junio</option>
              <option value="7">Julio</option>
              <option value="8">Agosto</option>
              <option value="9">Septiembre</option>
              <option value="10">Octubre</option>
              <option value="11">Noviembre</option>
              <option value="12">Diciembre</option>
            </Select>
          </article>

          <Button onClick={onSubmit} disabled={isSubmitting}>{!isSubmitting ? 'Ingresar' : 'Cargando...'}</Button>
        </styles.infometas>
          <Tabla></Tabla>
      </styles.Contenido>
    </>
  )
}

/* export default withGoals(Metas) */
export default Metas
