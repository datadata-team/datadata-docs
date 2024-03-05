import { DATADATA_BASE_URL_CN, DATADATA_BASE_URL_DEV } from "@site/src/constants";
import { production } from "@site/src/utils";
import { Card } from "flowbite-react";
import { useCallback, useMemo } from "react";
import { useFieldArray, useForm, type SubmitHandler } from "react-hook-form";
import { URLBar } from "./url";

type FormValue = {
  url: string;
  headers?: Record<string, string>;
  queryParams?: Record<string, string | number | boolean | Array<string | number | boolean>>;
};

type FieldName = "url" | "headers" | "queryParams" | `headers.${string}` | `queryParams.${string}`;

type FormControlOptions = {
  name: string;
  min?: number;
  max?: number;
  step?: number;
  type?: "string" | "number" | "boolean";
  default?: string | number | boolean;
  required?: boolean;
  isArray?: boolean;
  placeholder?: string;
  description?: string;
};

export type APIFormProps = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?: Array<Pick<FormControlOptions, "name" | "placeholder" | "description">>;
  headers?: Array<Pick<FormControlOptions, "name" | "required" | "placeholder" | "description">>;
  queryParams?: Array<FormControlOptions>;
};

export function APIForm(props: APIFormProps) {
  const { method, params, headers, queryParams } = props;

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();

  const queryParamsField = useFieldArray({
    name: `queryParams`,
    control: control,
  });

  console.log({ queryParamsField });

  const url = useMemo(() => {
    if (/^https?:\/\//.test(props.url)) {
      return props.url;
    }
    const baseUrl = production ? DATADATA_BASE_URL_CN : DATADATA_BASE_URL_DEV;
    return baseUrl + props.url;
  }, []);

  const onSubmit = useCallback<SubmitHandler<FormValue>>(async (formValue) => {
    try {
      const response = await fetch(formValue.url, { mode: "cors", method: method, headers: formValue.headers });
      console.log(response);

      const headers = Array.from(response.headers.entries());
      console.log(headers);

      const contentType = response.headers.get("content-type");
      if (contentType.split(/;\s*/)[0] === "application/json") {
        const data = await response.json();
        console.log(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      //
    }
  }, []);

  const renderInput = useCallback((fieldName: FieldName, { name, ...options }: FormControlOptions) => {
    switch (options.type) {
      case "number": {
        return (
          <input
            min={options.min}
            max={options.max}
            step={options.step}
            type="number"
            placeholder={options.placeholder ?? name}
            {...register(fieldName, {
              required: { value: options.required, message: `请输入${name}` },
              min: { value: options.min, message: `${name}不能小于${options.min}` },
              max: { value: options.max, message: `${name}不能大于${options.min}` },
            })}
          />
        );
      }
      case "boolean": {
        return (
          <input
            type="checkbox"
            {...register(fieldName, { required: { value: options.required, message: `请选择${name}` } })}
          />
        );
      }
      default: {
        return (
          <input
            type="text"
            placeholder={options.placeholder ?? name}
            {...register(fieldName, {
              required: { value: options.required, message: `请输入${name}` },
            })}
          />
        );
      }
    }
  }, []);

  const renderControl = useCallback((fieldName: FieldName, options: FormControlOptions) => {
    if (options.isArray) {
      return (
        <div>
          <label>{options.name}</label>
          <ul>
            {queryParamsField.fields.map((field, index) => {
              return <li key={field.id}>{renderInput(`${fieldName}.${index}`, { ...options, name: index })}</li>;
            })}
          </ul>
          <button type="button" onClick={() => queryParamsField.append("")}>
            +
          </button>
        </div>
      );
    }
    return (
      <div>
        <label>
          {options.required && <span>*</span>}
          <span>{options.name}</span>
          {renderInput(fieldName, options)}
        </label>
      </div>
    );
  }, []);

  return (
    <Card>
      <form noValidate={true} onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" defaultValue={url.toString()} {...register("url", { required: true })} />
        <div>
          <URLBar method={method} url={url} />
        </div>
        {headers && headers.length > 0 && (
          <div>
            <h4>Headers</h4>
            <div>
              {headers.map((options) => {
                const fieldName: `headers.${string}` = `headers.${options.name}`;
                return (
                  <div key={fieldName} style={{ marginBottom: "8px", border: "1px solid gray", padding: "8px" }}>
                    {renderControl(fieldName, options)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {queryParams && queryParams.length > 0 && (
          <div>
            <h4>Query</h4>
            <div>
              {queryParams.map((options) => {
                const fieldName: `queryParams.${string}` = `queryParams.${options.name}`;
                return (
                  <div key={fieldName} style={{ marginBottom: "8px", border: "1px solid gray", padding: "8px" }}>
                    {renderControl(fieldName, options)}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </form>
    </Card>
  );
}
