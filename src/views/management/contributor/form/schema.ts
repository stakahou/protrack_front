import { object, string } from "yup";

export const schema = object().shape({
  code: string().required("Código do Colaborador é requerido!"),
  allocation: string().required("Alocação do Colaborador é requerido!"),
});
