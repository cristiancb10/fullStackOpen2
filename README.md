# Phonebook Backend

Este es el backend del proyecto **Phonebook**, desarrollado como parte del curso [Full Stack Open](https://fullstackopen.com/).

## URL de la aplicación desplegada
[https://phonebook-ilw7.onrender.com/api/persons](https://phonebook-ilw7.onrender.com/api/persons)

## Endpoints principales

- **GET** `/api/persons` → Devuelve la lista completa de contactos.  
- **GET** `/info` → Devuelve información sobre la agenda y la fecha actual.  
- **GET** `/api/persons/:id` → Devuelve un contacto específico por su id.  
- **POST** `/api/persons` → Agrega un nuevo contacto.  
- **DELETE** `/api/persons/:id` → Elimina un contacto existente.  

## Correr el proyecto en local

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/cristiancb10/fullStackOpen2.git

2. Instalar dependencias:
   ```bash
   npm install

3. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
