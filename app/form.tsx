import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {useForm, useController, RegisterOptions, Control, FieldValues} from 'react-hook-form';

interface InputFieldProps {
  name: string;
  control: Control<FieldValues>; // Control pentru formular
  rules?: RegisterOptions; // Reguli de validare (opțional)
}

const InputField: React.FC<InputFieldProps> = ({ name, control, rules }) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <View className="mb-4">
      <TextInput
        className="h-10 border border-gray-400 pl-2"
        value={value}
        onChangeText={onChange}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error.message}</Text>}
    </View>
  );
};

export default function Form() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
  };

  return (
    <View className="flex-1 justify-center items-center p-5">
      <Text className="text-lg mb-2">Nume</Text>
      <InputField
        name="name"
        control={control}
        rules={{ required: 'Name is required' }}
      />

      <Text className="text-lg mb-2">Email</Text>
      <InputField
        name="email"
        control={control}
        rules={{ required: 'Email is required' }}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
