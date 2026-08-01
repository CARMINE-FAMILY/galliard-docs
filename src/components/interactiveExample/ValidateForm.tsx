// src/components/demos/RegisterFormDemo.tsx
import { useState } from "react";
import {
  InputTextGal,
  CheckBoxGal,
  ButtonGal,
  useValidateForms,
} from "galliard-ui";
import type { ValidateProps } from "galliard-ui";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

// Componente chico para no repetir la lógica de "error vs correcto"
// en cada campo. Reglas:
// - Si hay un mensaje de error, se muestra en rojo.
// - Si no hay error, pero ya se intentó enviar (attempted) y el campo
//   tiene contenido (isFilled), se muestra "✓ Dato correcto" en verde.
// - Si no se ha intentado enviar todavía, no se muestra nada.
function FieldFeedback({
  error,
  attempted,
  isFilled,
}: {
  error: string;
  attempted: boolean;
  isFilled: boolean;
}) {
  if (error) {
    return <p className="registerFormDemo__error">⚠ {error}</p>;
  }
  if (attempted && isFilled) {
    return <p className="registerFormDemo__success">✔ Dato correcto</p>;
  }
  return null;
}

export function RegisterFormDemo() {
  /* -------------------------------- ESTADO -------------------------------- */
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [website, setWebsite] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const [acceptTerms, setAcceptTerms] = useState(false);
  const [termsError, setTermsError] = useState("");

  const validate = useValidateForms();

  // true en cuanto el usuario da clic en "Crear cuenta" al menos una
  // vez, sin importar si la validación pasó o no. Se usa para decidir
  // si ya toca mostrar "✓ Dato correcto" en los campos sin error.
  const [attempted, setAttempted] = useState(false);

  // true solo cuando TODOS los campos pasaron la validación. Controla
  // el mensaje general de éxito al final del formulario.
  const [formValid, setFormValid] = useState(false);

  /* ------------------------------- HANDLERS -------------------------------- */

  const handleSubmit = () => {
    setNameError("");
    setEmailError("");
    setPhoneError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setAgeError("");
    setWebsiteError("");
    setTermsError("");

    const validations: ValidateProps[] = [
      {
        value: name,
        typeInput: "text",
        nameInput: "Nombre completo",
        minLength: 3,
        maxLength: 50,
        setError: setNameError,
      },
      {
        value: email,
        typeInput: "email",
        nameInput: "Correo electrónico",
        setError: setEmailError,
      },
      {
        value: phone,
        typeInput: "phone",
        nameInput: "Teléfono",
        setError: setPhoneError,
      },
      {
        value: password,
        typeInput: "pass",
        nameInput: "Contraseña",
        setError: setPasswordError,
      },
      {
        value: confirmPassword,
        typeInput: "text",
        nameInput: "Confirmar contraseña",
        needBeEqualTo: password,
        setError: setConfirmPasswordError,
      },
      {
        value: Number(age),
        typeInput: "num",
        nameInput: "Edad",
        min: 18,
        max: 120,
        isInteger: true,
        setError: setAgeError,
      },
      {
        value: website,
        typeInput: "url",
        nameInput: "Sitio web",
        canBeNull: true,
        setError: setWebsiteError,
      },
      {
        value: acceptTerms,
        typeInput: "bool",
        nameInput: "Términos y condiciones",
        mustBeTrue: true,
        setError: setTermsError,
      },
    ];

    let isValid: boolean = false;

    try {
      isValid = validate.ApplyValidate(validations);
    } catch (error) {
      alert((error as Error).message);
      isValid = false;
    }

    setAttempted(true);
    setFormValid(isValid);
  };

  const theme = useSelector((state: RootState) => state.theme);
  const isDark = theme === "dark";

  return (
    <div className="registerFormDemo">
      <div className="registerFormDemo__row">
        <div className="registerFormDemo__field">
          <InputTextGal
            label="Nombre completo"
            typeInput="text"
            value={name}
            setValue={setName}
            border={false}
            placeholder="Arturo Montaño"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={nameError}
            attempted={attempted}
            isFilled={name.trim().length > 0}
          />
        </div>

        <div className="registerFormDemo__field">
          <InputTextGal
            label="Correo electrónico"
            typeInput="email"
            value={email}
            setValue={setEmail}
            border={false}
            placeholder="correo@gamil.com"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={emailError}
            attempted={attempted}
            isFilled={email.trim().length > 0}
          />
        </div>
      </div>

      <div className="registerFormDemo__row">
        <div className="registerFormDemo__field">
          <InputTextGal
            label="Teléfono"
            typeInput="text"
            value={phone}
            setValue={setPhone}
            border={false}
            placeholder="222 123 4567"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={phoneError}
            attempted={attempted}
            isFilled={phone.trim().length > 0}
          />
        </div>

        <div className="registerFormDemo__field">
          <InputTextGal
            label="Edad"
            typeInput="number"
            value={age}
            setValue={setAge}
            border={false}
            placeholder="19"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={ageError}
            attempted={attempted}
            isFilled={age.trim().length > 0}
          />
        </div>
      </div>

      <div className="registerFormDemo__row">
        <div className="registerFormDemo__field">
          <InputTextGal
            label="Contraseña"
            typeInput="password"
            value={password}
            setValue={setPassword}
            border={false}
            placeholder="arturo157*"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
            iconColorPass={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={passwordError}
            attempted={attempted}
            isFilled={password.length > 0}
          />
        </div>

        <div className="registerFormDemo__field">
          <InputTextGal
            label="Confirmar contraseña"
            typeInput="password"
            value={confirmPassword}
            setValue={setConfirmPassword}
            border={false}
            placeholder="arturo157*"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
            iconColorPass={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={confirmPasswordError}
            attempted={attempted}
            isFilled={confirmPassword.length > 0}
          />
        </div>
      </div>

      <div className="registerFormDemo__row">
        <div className="registerFormDemo__field">
          <InputTextGal
            label="Sitio web (opcional)"
            typeInput="text"
            value={website}
            setValue={setWebsite}
            border={false}
            placeholder="https://tu-url.com"
            bgColor={isDark ? "#121212" : undefined}
            textColor={isDark ? "#ffffff" : undefined}
            iconColorL={isDark ? "#ffffff" : undefined}
          />
          <FieldFeedback
            error={websiteError}
            attempted={attempted}
            isFilled={website.trim().length > 0}
          />
        </div>

        <div className="registerFormDemo__field registerFormDemo__terms">
          <CheckBoxGal
            label="Acepto los términos y condiciones"
            value={acceptTerms}
            setValue={setAcceptTerms}
            seeIcon={false}
            textColor={isDark ? "var(--text-color)" : undefined}
            iconColor={isDark ? "var(--text-color)" : undefined}
            customLabelClass="changue"
            customIconClass="paso"
          />
          <FieldFeedback
            error={termsError}
            attempted={attempted}
            isFilled={acceptTerms === true}
          />
        </div>
      </div>

      <ButtonGal
        label="Crear cuenta"
        action={handleSubmit}
        styleType="ThemeBlue"
        borderedStyle={false}
        seeIcon={false}
        customClassButton="registerFormDemo__submit"
      />

      {attempted && (
        <p
          className={
            formValid
              ? "registerFormDemo__banner registerFormDemo__banner--success"
              : "registerFormDemo__banner registerFormDemo__banner--error"
          }
        >
          {formValid
            ? "✔ Todos los datos son correctos. Registro válido."
            : "⚠ Hay campos con errores, revísalos arriba."}
        </p>
      )}
    </div>
  );
}
