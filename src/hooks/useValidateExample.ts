// src/hooks/useValidateFormsPatched.ts
//
// Ya NO es un hook (sin prefijo "use", sin useCallback): son funciones
// normales, así se puede invocar dentro de handleSubmit sin violar las
// reglas de hooks. Sigue corrigiendo los mismos 3 bugs de antes.

import type { ValidateProps } from "galliard-ui";
import { convertToUnix, unixToDateTime } from "galliard-ui/actions";

export function validateFormsPatched(validations: ValidateProps[]): boolean {
  let flag: boolean = true;

  const messageError = (
    nameInput: string | null | undefined,
    message: string,
  ): string => {
    if (!nameInput || nameInput === undefined || nameInput.length === 0) {
      return "Este campo " + message;
    } else {
      return nameInput + " " + message;
    }
  };

  const isNotNull = (
    val: any,
    canBeNull?: boolean,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (canBeNull !== true) {
      if (
        val === null ||
        val === undefined ||
        (typeof val === "string" && val.trim() === "")
      ) {
        flag = false;
        setError?.(messageError(nameInput, "es obligatorio"));
        return false;
      }
      return true;
    }
    return true;
  };

  const valMin = (
    val: string,
    leng: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (val.length < leng) {
      flag = false;
      setError?.(
        messageError(
          nameInput,
          "debe tener mínimo " + leng.toString() + " caracteres",
        ),
      );
      return false;
    }
    return true;
  };

  const valMax = (
    val: string,
    leng: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (val.length > leng) {
      flag = false;
      setError?.(
        messageError(
          nameInput,
          "debe tener máximo " + leng.toString() + " caracteres",
        ),
      );
      return false;
    }
    return true;
  };

  // FIX: se invierte `===` a `!==`
  const isEqual = (
    val: string,
    wordEqual: string,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (val !== wordEqual) {
      flag = false;
      setError?.(messageError(nameInput, "debe ser igual a: " + wordEqual));
      return false;
    }
    return true;
  };

  const validateRegex = (
    val: string,
    regex: RegExp,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (!regex.test(val)) {
      flag = false;
      setError?.(messageError(nameInput, "tiene un formato inválido"));
      return false;
    }
    return true;
  };

  const validateEmail = (
    val: string,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(val)) {
      flag = false;
      setError?.(messageError(nameInput, "no es un correo electrónico válido"));
      return false;
    }
    return true;
  };

  const validatePhone = (
    val: string,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(val)) {
      flag = false;
      setError?.(messageError(nameInput, "no es un número de teléfono válido"));
      return false;
    }
    return true;
  };

  const validateUrl = (
    val: string,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    const urlRegex =
      /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    if (!urlRegex.test(val)) {
      flag = false;
      setError?.(messageError(nameInput, "no es una URL válida"));
      return false;
    }
    return true;
  };

  const validatePass = (
    val: string,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passRegex.test(val)) {
      flag = false;
      setError?.(
        messageError(
          nameInput,
          "debe tener al menos 8 caracteres, un número y un símbolo",
        ),
      );
      return false;
    }
    return true;
  };

  // FIX: se invierte `===` a `!==`
  const validateIsNumber = (
    val: number | null | undefined,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (typeof val !== "number") {
      flag = false;
      setError?.(messageError(nameInput, "debe ser un número"));
      return false;
    }
    return true;
  };

  const validateMinNum = (
    val: number,
    min: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (val < min) {
      flag = false;
      setError?.(messageError(nameInput, "debe ser mayor a " + min.toString()));
      return false;
    }
    return true;
  };

  const validateMaxNum = (
    val: number,
    max: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (val > max) {
      flag = false;
      setError?.(messageError(nameInput, "debe ser menor a " + max.toString()));
      return false;
    }
    return true;
  };

  const validateIsInteger = (
    val: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (!Number.isInteger(val)) {
      flag = false;
      setError?.(
        messageError(nameInput, "debe ser un número entero (sin decimales)"),
      );
      return false;
    }
    return true;
  };

  // FIX: se invierte `===` a `!==`
  const validateBeEqualNumber = (
    val: number,
    toCompare: number,
    nameInput?: string,
    setError?: (error: string) => void,
  ): boolean => {
    if (toCompare !== val) {
      flag = false;
      setError?.(
        messageError(nameInput, "debe ser igual a " + toCompare.toString()),
      );
      return false;
    }
    return true;
  };

  try {
    validations.forEach((toValidate) => {
      if (
        !isNotNull(
          toValidate.value,
          toValidate.canBeNull,
          toValidate.nameInput,
          toValidate.setError,
        )
      )
        return;

      switch (toValidate.typeInput) {
        case "text":
          if (
            typeof toValidate.minLength === "number" &&
            toValidate.minLength > 0 &&
            typeof toValidate.value === "string"
          ) {
            if (
              !valMin(
                toValidate.value,
                toValidate.minLength,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            typeof toValidate.maxLength === "number" &&
            toValidate.maxLength > 0 &&
            typeof toValidate.value === "string"
          ) {
            if (
              !valMax(
                toValidate.value,
                toValidate.maxLength,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            typeof toValidate.needBeEqualTo === "string" &&
            typeof toValidate.value === "string"
          ) {
            if (
              !isEqual(
                toValidate.value,
                toValidate.needBeEqualTo,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            typeof toValidate.regex === "string" &&
            typeof toValidate.value === "string"
          ) {
            if (
              !validateRegex(
                toValidate.value,
                toValidate.regex as unknown as RegExp,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "email":
          if (typeof toValidate.value === "string") {
            if (
              !validateEmail(
                toValidate.value,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "phone":
          if (typeof toValidate.value === "string") {
            if (
              !validatePhone(
                toValidate.value,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "url":
          if (typeof toValidate.value === "string") {
            if (
              !validateUrl(
                toValidate.value,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "pass":
          if (typeof toValidate.value === "string") {
            if (
              !validatePass(
                toValidate.value,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "num":
          if (
            !validateIsNumber(
              toValidate.value,
              toValidate.nameInput,
              toValidate.setError,
            )
          )
            return;
          if (
            typeof toValidate.min === "number" &&
            toValidate.min > 0 &&
            typeof toValidate.value === "number"
          ) {
            if (
              !validateMinNum(
                toValidate.value,
                toValidate.min,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            typeof toValidate.max === "number" &&
            toValidate.max > 0 &&
            typeof toValidate.value === "number"
          ) {
            if (
              !validateMaxNum(
                toValidate.value,
                toValidate.max,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            toValidate.isInteger === true &&
            typeof toValidate.value === "number"
          ) {
            if (
              !validateIsInteger(
                toValidate.value,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          if (
            typeof toValidate.needBeEqualTo === "number" &&
            toValidate.needBeEqualTo > 0 &&
            typeof toValidate.value === "number"
          ) {
            if (
              !validateBeEqualNumber(
                toValidate.value,
                toValidate.needBeEqualTo,
                toValidate.nameInput,
                toValidate.setError,
              )
            )
              return;
          }
          break;

        case "bool":
          if (toValidate.mustBeTrue === true && toValidate.value !== true) {
            flag = false;
            toValidate.setError?.(
              messageError(toValidate.nameInput, "debe estar seleccionado"),
            );
            return;
          }
          break;

        case "date":
        case "date-time": {
          let dateN: Date | string | number;
          let min: number;
          let max: number;

          if (
            typeof toValidate.value === "number" &&
            toValidate.value.toString().length === 10
          ) {
            dateN = toValidate.value;
          } else if (
            toValidate.value instanceof Date ||
            typeof toValidate.value === "string"
          ) {
            dateN = convertToUnix(toValidate.value);
          } else {
            throw new Error("Formato de fecha inválido");
          }

          if (toValidate.min && toValidate.min instanceof Date) {
            min = convertToUnix(toValidate.min);
          } else {
            throw new Error(
              "La propiedad 'min' tiene un formato de fecha inválido o no existe",
            );
          }

          if (toValidate.max && toValidate.max instanceof Date) {
            max = convertToUnix(toValidate.max);
          } else {
            throw new Error(
              "La propiedad 'max' tiene un formato de fecha inválido o no existe",
            );
          }

          if (dateN < min) {
            flag = false;
            toValidate.setError?.(
              messageError(
                toValidate.nameInput,
                "la fecha no puede ser menor que " + unixToDateTime(min),
              ),
            );
            return;
          }
          if (dateN > max) {
            flag = false;
            toValidate.setError?.(
              messageError(
                toValidate.nameInput,
                "la fecha no puede ser mayor que " + unixToDateTime(max),
              ),
            );
            return;
          }
          break;
        }

        case "time":
        case "data":
          return;

        default:
          console.warn("Tipo de validacion no reconocida");
          break;
      }
    });

    return flag;
  } catch (error) {
    const message = (error as Error).message;
    console.error(`Error: ${message}`);
    throw error;
  }
}
