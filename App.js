import React, {Component} from 'react';
import {
  View, Text, Image, ScrollView, TextInput, Button, StyleSheet, Alert
}from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre :'',
      apellido :'',
      edad :'',
      email :'',
      telefono :'',
      descripcion :'',
      mostrarPerfil :false,
      mensajeAprobacion:'Perfil creado con exito'
    };
  };
        //esta funcion se encarga de actualizar el estado del nombre
  manejarCambioNombre = (texto) => {
    this.setState({
      nombre : texto,
      mostrarPerfil :false,
      mensajeAprobacion: 'Perfil creado con exito'
    });
};
manejarCambioApellido = (texto) => {
  this.setState({
    apellido : texto,
    mostrarPerfil :false,
    mensajeAprobacion: 'Perfil creado con exito'
  });
};
manejarCambioEdad = (texto) => {
  this.setState({
    edad : texto,
    mostrarPerfil :false,
    mensajeAprobacion: 'Perfil creado con exito'
  });
};
manejarCambioEmail = (texto) => {
  this.setState({
    email : texto,
    mostrarPerfil :false,
    mensajeAprobacion: 'Perfil creado con exito'
  });
}

manejarCambioTelefono = (texto) => {
  this.setState({
    telefono : texto,
    mostrarPerfil :false,
    mensajeAprobacion: 'Perfil creado con exito'
  });
}
manejarCambioDescripcion = (texto) => {
  this.setState({
    descripcion : texto,
    mostrarPerfil :false,
    mensajeAprobacion: 'Perfil creado con exito'
  });
}

limpiarFormulario = () => {
  this.setState({
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    telefono: '',
    descripcion: '',
    mostrarPerfil: false,
    mensajeAprobacion: 'Limpiar campos'
  });
  Alert.alert('Campos limpiados', 'Todos los campos han sido limpiados', [{text: 'OK'}, {text: 'Cancelar'}]);
}

mostrarPerfil = () => {
  this.setState({
    mostrarPerfil: true,
    mensajeAprobacion: 'Perfil creado con exito'
  });
}

render(){
  const {nombre,
    apellido,
    edad,
    email,
    telefono,
    descripcion,
    mostrarPerfil,
    mensajeAprobacion} 
    = this.state;

  return (
    <>
      <ScrollView style={styles.container}>
        <View>
          <Image
            source={{uri: 'https://images.unsplash.com/photo-1689308271305-58e75832289b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
            
            style={styles.imagen}
            resizeMode="cover"
          />
          <Text>Mi perfil de usuario</Text>
          <Text>Mi aplicacion demo de react</Text>
        </View>

        <View>  
          <Text style={styles.header}>Nombre</Text>
          <TextInput
          value={nombre}
          onChangeText={this.manejarCambioNombre}
          placeholder="Ingrese su nombre"
          placeholderTextColor="#888"
          />

          <Text style={styles.header}>Apellido</Text>
          <TextInput
          value={apellido}
          onChangeText={this.manejarCambioApellido}
          placeholder="Ingrese su apellido"
          placeholderTextColor="#888"
          />

          <Text style={styles.header}>Edad</Text>
          <TextInput
          value={edad}
          onChangeText={this.manejarCambioEdad}
          placeholder="Ingrese su edad"
          placeholderTextColor="#888"
          keyboardType="numeric"
          />  

          <Text style={styles.header}>Email</Text>  
          <TextInput
          value={email} 
          onChangeText={this.manejarCambioEmail}
          placeholder="Ingrese su email"          
          placeholderTextColor="#888"
          keyboardType="email-address"
          />

          <Text style={styles.header}>Telefono</Text>
          <TextInput
          value={telefono}
          onChangeText={this.manejarCambioTelefono}
          placeholder="Ingrese su telefono"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          />




          <Text style={styles.header}>Descripcion</Text>
          <TextInput
          value={descripcion}
          onChangeText={this.manejarCambioDescripcion}
          placeholder="Ingrese una descripcion"
          placeholderTextColor="#888"
          multiline={true}
          />
        </View>

        <View>
          <Button title="Mostrar Perfil" 
          onPress={this.mostrarPerfil} />

          <Button title="Limpiar Formulario" 
          onPress={this.limpiarFormulario} />
        </View>

      </ScrollView>
    </>
  );
} 


};  //esta llave cierra la clase 

const styles= StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:'#562db6ff'
  },
  header:{
    backgroundColor:'#562db6ff',
    alignItems:'center',
    marginBottom:20,
    padding:30

  },
  
  imagen:{
    width:80,
    height:80,
    borderRadius:50,
    marginBottom: 15,
    borderWidth:4,
    borderColor:'#fff'

  }
  })


export default App;

