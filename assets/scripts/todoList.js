let listaTareas = [];

const objTarea ={
    id: '',
    nombre: '',
    descripcion: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#nombre');
const descripcionInput = document.querySelector('#descripcion');
const btnAgregar = document.querySelector('#btnAgregar');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    if(nombreInput === '' && descripcionInput === ''){
        alert("Todos los campos son obligatorios.");
        return;
    }

    if(editando){
        //editarTarea();
        editando = false;
    }else{
        objTarea.id = Date.now();
        objTarea.nombre = nombreInput.value;
        objTarea.descripcion = descripcionInput.value;

        agregarTarea();
    }
}

function agregarTarea(){
    listaTareas.push({...objTarea});

    mostrarEmpleados();
}

function mostrarEmpleados(){
    const divTareas = document.querySelector('.div-tareas');
    listaTareas.forEach( tarea =>{
        const {id, nombre, descripcion} = tarea;

        const parrafo = document.createElement('p');
        parrafo.textContent = `${id} - ${nombre} - ${descripcion} -`;
        parrafo.dataset.id= id;

        const editarBoton = document.createElement('button');
        //editarBoton.onclick = () => cargarTarea(tarea);
        editarBoton.textContent = 'Editar';
        editarBoton.classList.add('btn', 'btn-editar');
        parrafo.append(editarBoton);

        const eliminarBoton = document.createElement('button');
        //eliminarBoton.onclick = () => eliminarTarea(tarea);
        eliminarBoton.textContent = 'Eliminar';
        eliminarBoton.classList.add('btn', 'btn-eliminar');
        parrafo.append(eliminarBoton);

        const hr = document.createElement('hr');

        divTareas.appendChild(parrafo);
        divTareas.appendChild(hr);

    }

    );
}
