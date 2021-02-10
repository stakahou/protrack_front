import { array, object, string } from "yup";

export const schema = object().shape({
  protracks: array().of(
    object().shape({
      issue: string().optional(),
      description: string().required("Esse campo é requerido!"),
    })
  ),
});
