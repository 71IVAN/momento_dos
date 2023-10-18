import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function CarScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      platenumber: "",
      brand: "",
      state: ""
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Car Information</Text>

      {/* Control del número de placa */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 10,
          minLength: 4,
          pattern: /^[A-Za-z0-9]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Número de Placa"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="platenumber"
      />
      {errors.platenumber?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}
      {errors.platenumber?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud máxima debe ser de 10 caracteres.</Text>}
      {errors.platenumber?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser de 4 caracteres.</Text>}
      {errors.platenumber?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar letras y números.</Text>}

      {/* Control de la marca */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 20,
          minLength: 2,
          pattern: /^[A-Za-z\s]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Marca"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="brand"
      />
      {errors.brand?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}
      {errors.brand?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud máxima debe ser de 20 caracteres.</Text>}
      {errors.brand?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser de 2 caracteres.</Text>}
      {errors.brand?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar solo letras y espacios.</Text>}

      {/* Control del estado */}
      <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 15,
          minLength: 2,
          pattern: /^[A-Za-z\s]+$/
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Estado"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="state"
      />
      {errors.state?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}
      {errors.state?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud máxima debe ser de 15 caracteres.</Text>}
      {errors.state?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser de 2 caracteres.</Text>}
      {errors.state?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar solo letras y espacios.</Text>}

      <Button
        style={{ marginTop: 20, backgroundColor: 'powder' }}
        icon="content-save-check"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
      >
        Guardar
      </Button>
    </View>
  );
}
