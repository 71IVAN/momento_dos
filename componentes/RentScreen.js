import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { TextInput, Button } from 'react-native-paper';

export default function RentScreen({ users, cars }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      platenumber: ""
    },
  });

  const [isCarAvailable, setIsCarAvailable] = useState(true);

  const onSubmit = (data) => {
    const { username, platenumber } = data;

    // Validar que el usuario y la placa existan en los arreglos respectivos
    const userExists = users.some(user => user.username === username);
    const carExists = cars.some(car => car.platenumber === platenumber);

    if (!userExists) {
      console.log('El usuario no existe.');
      return;
    }

    if (!carExists) {
      console.log('El carro no existe.');
      return;
    }

    // Validar si el automóvil está disponible
    const car = cars.find(car => car.platenumber === platenumber);
    if (!car.available) {
      console.log('El carro no está disponible para alquiler.');
      return;
    }

    // Marcar el automóvil como no disponible
    const updatedCars = cars.map(car => {
      if (car.platenumber === platenumber) {
        return { ...car, available: false };
      }
      return car;
    });

    console.log('Alquiler exitoso. Carro marcado como no disponible.');
    setIsCarAvailable(false);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rent a Car</Text>

      {/* Control del nombre de usuario */}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre de Usuario"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {errors.username?.type === "required" && <Text style={{ color: 'red' }}>Este campo es obligatorio.</Text>}

      {/* Control del número de placa del automóvil */}
      <Controller
        control={control}
        rules={{
          required: true,
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

      <Button
        style={{ marginTop: 20, backgroundColor: 'powder' }}
        icon="content-save-check"
        mode="outlined"
        onPress={handleSubmit(onSubmit)}
        disabled={!isCarAvailable} // Deshabilita el botón si el automóvil no está disponible
      >
        Alquilar Carro
      </Button>
    </View>
  );
}
