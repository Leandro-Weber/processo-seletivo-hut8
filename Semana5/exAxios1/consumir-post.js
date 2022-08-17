import axios from "axios";

const requisitarDado = async (id) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/" + id
    );
    console.log("requisitarDado resposta:");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const enviarDado = async (data) => {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      data
    );
    console.log("enviarDado resposta:");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const editarDado = async (data) => {
  try {
    const response = await axios.patch(
      "https://jsonplaceholder.typicode.com/posts/1",
      data
    );
    console.log("editarDado resposta:");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const deletarDado = async () => {
  try {
    const response = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/3"
    );
    console.log("deletarDado resposta:");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const dado = {
  title: "titulo teste",
  body: "corpo de teste",
};

const dadoEditado = {
  title: "titulo editado",
  body: "corpo editado",
};

// requisitarDado(2);

// enviarDado(dado);

// editarDado(dadoEditado);

// deletarDado();
