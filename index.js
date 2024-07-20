import {
    Product
} from "./components/Products.js";
import {
    reload,
    toaster
} from "./js/utils.js";
import {
    students
} from "./js/db.js";
import { getData, postData } from "./js/request.http.js";


const students_tbody = document.querySelector('.students_tbody')
const form = document.forms.namedItem('act_task')




form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const student = {
        number: students.length,
        name: formData.get('name'),
        id: crypto.randomUUID(),
        complet: false,
    }


    if (student.name && student.name.trim().length == 0) {
        alert('Заполните форму');
        return;
    }

    

    await postData('/todos', student)

    const todos = await getData('/todos')

    reload(todos,students_tbody, Product)
    
}



getData('/todos')
    .then(res => reload(res,students_tbody,Product))