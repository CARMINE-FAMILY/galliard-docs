import { DataTable } from "../../../components/table/DataTable";
import type { PropRow } from "../../../models/TableModel";
import { propsColumns } from "../../../hooks/usePropsTableColumns";
import { ComponentPreviewGal, InputTextGal, useDebounceCallback } from "galliard-ui";
import { useState } from "react";
import { DocsPagination } from "../../../components/generals/DocsPagination";

export default function DebouncerDoc() {
    const [text, setText] = useState<string>("");

    const sendAlert = (value: string) => {
        alert(`Se envió la alerta con el valor: ${value}`);
    } 

    const debouncer = useDebounceCallback(sendAlert, .5);

    const props: PropRow[] = [
        {
            name: "callback",
            type: "(...args: any[]) => void",
            description: "Función que se ejecuta cuando finaliza el tiempo de espera del debouncer sin detectar nuevas pulsaciones"
        },
        {
            name: "delaySeconds",
            type: "number | .5 | 1 | 1.5 | 2",
            description: "Indica el tiempo de espera en segundos antes de ejecutar el callback. Si se detecta una nueva pulsación, el conteo se reinicia"
        }
    ]

    return (
        <div className="debouncer-docs docs-content">
            <h1 className="titlePrimary">useDebouncer</h1>
            <p className="text">Debouncer es un hook que introduce un pequeño <span className="important">tiempo de espera tras cada pulsación del usuario</span>. Sirve para evitar llamadas innecesarias a funciones o endpoints, impidiendo que se procese la información con cada tecla presionada. Es especialmente útil en campos de texto y ya viene implementado por defecto en <span className="inline-code">SearchDownGal</span></p>

            <h2 className="titleSecundary">Props</h2>
            <DataTable 
                columns={propsColumns}
                data={props}
                rowKey={(r) => r.name}
            />

            <br />
            <br />
            <br />

            <h2 className="titleSecundary">Ejemplo de uso</h2>
            <p className="text">En este ejemplo podrás probar cómo se implementa de forma rápida utilizando un <span className="important">input de texto</span>, ejecutando la acción justo al dejar de teclear.</p>

            <ComponentPreviewGal 
                codeTabs={[
                    {
                        label: "TSX", 
                        language: "tsx",
                        code: `
import { InputTextGal, useDebounceCallback } from "galliard-ui";

export default function Example() {
    const [text, setText] = useState<string>("");

    const sendAlert = (value: string) => {
        alert('Se envió la alerta con el valor: ' + value);
    } 

    const debouncer = useDebounceCallback(sendAlert, .5);
    
    return (
        <div>
            <InputTextGal
                placeholder="Escribe para enviar alerta"
                width={300}
                value={text}
                setValue={(e: string) => {
                    setText(e);
                    debouncer(e);
                }}
            />
        </div>
    );
}
                        `
                    },
                    {
                        label: "JSX", 
                        language: "jsx",
                        code: `
import { InputTextGal, useDebounceCallback } from "galliard-ui";

export default function Example() {
    const [text, setText] = useState("");

    const sendAlert = (value) => {
        alert('Se envió la alerta con el valor: ' + value);
    } 

    const debouncer = useDebounceCallback(sendAlert, .5);
    
    return (
        <div>
            <InputTextGal
                placeholder="Escribe para enviar alerta"
                width={300}
                value={text}
                setValue={(e) => {
                    setText(e);
                    debouncer(e);
                }}
            />
        </div>
    );
}
                        `
                    }
                ]}
            >
                <InputTextGal
                    placeholder="Escribe para enviar alerta"
                    width={300}
                    value={text}
                    setValue={(e: string) => {
                        setText(e);
                        debouncer(e);
                    }}
                />
            </ComponentPreviewGal>

            <DocsPagination/>
        </div>
    );
}