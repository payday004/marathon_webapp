import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Run } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RunUpdateFormInputValues = {
    runDate?: string;
    plannedDistance?: number;
    actualDistance?: number;
    pace?: number;
};
export declare type RunUpdateFormValidationValues = {
    runDate?: ValidationFunction<string>;
    plannedDistance?: ValidationFunction<number>;
    actualDistance?: ValidationFunction<number>;
    pace?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RunUpdateFormOverridesProps = {
    RunUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    runDate?: PrimitiveOverrideProps<TextFieldProps>;
    plannedDistance?: PrimitiveOverrideProps<TextFieldProps>;
    actualDistance?: PrimitiveOverrideProps<TextFieldProps>;
    pace?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RunUpdateFormProps = React.PropsWithChildren<{
    overrides?: RunUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    run?: Run;
    onSubmit?: (fields: RunUpdateFormInputValues) => RunUpdateFormInputValues;
    onSuccess?: (fields: RunUpdateFormInputValues) => void;
    onError?: (fields: RunUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RunUpdateFormInputValues) => RunUpdateFormInputValues;
    onValidate?: RunUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RunUpdateForm(props: RunUpdateFormProps): React.ReactElement;
