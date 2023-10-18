import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function UserScreen({ navigation, route }) {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        username: "",
        name: "",
        password: ""
      },
    });
  
    const onSubmit = (data) => console.log(data);
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Bienvenid@ {route.params.email}</Text>
  
        {/* Control de la identificación */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 12,
            minLength: 4,
            pattern: /^[0-9]+$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Identificacion"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}
        {errors.username?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud máxima debe ser de 12 caracteres.</Text>}
        {errors.username?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser de 4 caracteres.</Text>}
        {errors.username?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar solo letras y números.</Text>}
  
        {/* Control del nombre completo */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 30,
            minLength: 3,
            pattern: /^[A-Za-z\s]+$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Nombre"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}
        {errors.name?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud máxima debe ser de 30 caracteres.</Text>}
        {errors.name?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser de 3 caracteres.</Text>}
        {errors.name?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar solo letras y espacios.</Text>}
  
        {/* Control de la contraseña */}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 15,
            minLength: 8,
            pattern: /^[A-Za-z0-9@#$%^&+=\s]+$/
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Contraseña"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password?.type === "required" && <Text style={{ color: 'red' }}>La contraseña es obligatoria.</Text>}
        {errors.password?.type === "maxLength" && <Text style={{ color: 'red' }}>La longitud no debe ser mayor a 15.</Text>}
        {errors.password?.type === "minLength" && <Text style={{ color: 'red' }}>La longitud mínima debe ser 8 caracteres.</Text>}
        {errors.password?.type === "pattern" && <Text style={{ color: 'red' }}>Debe ingresar letras, números y caracteres especiales.</Text>}
  
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
  
