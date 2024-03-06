import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Collapse } from "../collapse";
import type { APIEndpoint } from "./api-define";

export type APIFormProps = {
  define: APIEndpoint;
};

export function APIForm(props: APIFormProps) {
  const {
    define: { headers },
  } = props;

  const formMethods = useForm();

  const handleSubmit = useCallback((values: any) => {
    console.log("submit: ", values);
  }, []);

  return (
    <FormProvider {...formMethods}>
      <form noValidate={true} className="mb-4" onSubmit={formMethods.handleSubmit(handleSubmit)}>
        <Collapse
          panels={[
            {
              key: "headers",
              name: "Headers",
              content: <div>Headers</div>,
            },
            {
              key: "params",
              name: "Params",
              content: <div>Params</div>,
            },
            {
              key: "query-params",
              name: "Query Params",
              content: <div>Query Params</div>,
            },
          ]}
          defaultExpandedKeys={["headers", "params", "query-params"]}
        />
      </form>
    </FormProvider>
  );
}
