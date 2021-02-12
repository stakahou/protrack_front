import { array, object, string, number } from "yup";

export const schema = object().shape({
  protracks: array().of(
    object().shape({
      id: number()
        .nullable()
        .transform((v, o) => (o === "" ? null : v)),
      issue: string().optional(),
      description: string().required("Esse campo é requerido!"),
    })
  ),
});
